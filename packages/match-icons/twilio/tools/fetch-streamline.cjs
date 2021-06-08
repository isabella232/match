const { writeFileSync, appendFileSync, mkdirSync } = require("fs");
const path = require("path");
const svgr = require("@svgr/core").default;
const svgrConfig = require("@twilio-labs/match-icons-core/svgr/config.cjs");
const niceName = require("@twilio-labs/match-icons-core/svgr/nice-name.cjs");
const getSVGs = require("./get-svgs.cjs");
const iconList = require("./icon-list.cjs");

const streamlineConfiguration = {
  secret: process.env.STREAMLINE_SECRET,
  families: ["streamline-regular"],
};

async function fetchStreamlineAssets() {
  const folderPath = path.join(process.cwd(), "streamline");
  const indexPath = path.join(folderPath, "index.js");
  await mkdirSync(folderPath, { recursive: true });
  await writeFileSync(indexPath, "");

  const getSVGsResponse = await getSVGs(
    streamlineConfiguration.secret,
    streamlineConfiguration.families
  );

  if (getSVGsResponse.success && getSVGsResponse.data) {
    await Promise.all(
      Object.entries(getSVGsResponse.data).map(async ([familySlug, family]) => {
        return Object.entries(family)
          .filter(([iconSlug]) => iconSlug in iconList)
          .map(async ([iconSlug, svg]) => {
            if (svg) {
              await svgr(svg, svgrConfig, {
                componentName: iconList[iconSlug],
              })
                .then((jsCode) =>
                  writeFileSync(
                    `${folderPath}/${iconList[iconSlug]}.js`,
                    jsCode
                  )
                )
                .then(() =>
                  appendFileSync(
                    indexPath,
                    `export { default as ${niceName(
                      iconList[iconSlug]
                    )} } from './${iconList[iconSlug]}.js';\n`
                  )
                )
                .catch((e) => console.error(e));
            } else {
              console.error(
                `No SVG data is present for icon ${iconSlug} of family ${familySlug}, please report this issue to the Streamline team.`
              );
            }
          });
      })
    );
  } else {
    let errorMessage = `Got error "${getSVGsResponse.error}"`;
    if (getSVGsResponse.statusCode === 401) {
      errorMessage += ` Error code is 401 which means it's most likely related to the auth token which was provided. Please double check its value by following the instructions in the project's README file.`;
    }
    errorMessage +=
      " Streamline icons could not be fetched for @twilio-labs/match-icons-twilio.";
    throw new Error(errorMessage);
  }
}

fetchStreamlineAssets();

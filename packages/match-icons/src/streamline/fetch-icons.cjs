const { writeFileSync, appendFileSync, mkdirSync } = require("fs");
const path = require("path");
const fs = require("fs");

const svgr = require("@svgr/core").default;

const svgrConfig = require("../svgr/config.cjs");
const niceName = require("../svgr/nice-name.cjs");

const getSVGs = require("./get-svgs.cjs");
const iconList = require("./icon-list.cjs");

// Try to get ENV vars from .env.local for Next.js projects
if (
  process.env.PROJECT_CWD &&
  fs.existsSync(path.join(process.env.PROJECT_CWD, ".env.local"))
) {
  require("dotenv").config({
    path: path.join(process.env.PROJECT_CWD, ".env.local"),
  });
}

const streamlineConfiguration = {
  secret:
    process.env.STREAMLINE_SECRET ||
    process.env.SECRET_STREAMLINE ||
    process.env.SECRET_STREAMLINE_SECRET,
  families: ["streamline-regular"],
};

async function fetchStreamlineAssets() {
  const folderPath = path.join(process.cwd(), "twilio/vendor");
  const indexPath = path.join(folderPath, "index.js");
  const typesPath = path.join(folderPath, "index.d.ts");
  await mkdirSync(folderPath, { recursive: true });
  await writeFileSync(indexPath, "");
  await writeFileSync(typesPath, `import { IconType } from "../../src";\n`);

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
                .then(() =>
                  appendFileSync(
                    typesPath,
                    `export const ${niceName(iconList[iconSlug])}: IconType;\n`
                  )
                )
                .catch((error) => console.error(error));
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

const fs = require("fs");
const path = require("path");

const ejs = require("ejs");
const _ = require("lodash");
const codeList = require("flagpack-core/countryCodeList.json");

const src = "./";
const dist = `../generated`;

function encodeSVG(data) {
  // Use single quotes instead of double to avoid encoding.
  data = data.replace(/"/g, `'`);
  data = data.replace(/>\s+</g, `><`);
  data = data.replace(/\s{2,}/g, ` `);

  // Using encodeURIComponent() as replacement function
  // allows to keep result code readable
  return data.replace(/[\n\r#%()<>?[\\\]^`{|}]/g, encodeURIComponent);
}

function componentName(name) {
  return _.upperFirst(_.deburr(_.camelCase(name))) + "Flag";
}

if (!fs.existsSync(path.join(__dirname, dist))) {
  fs.mkdirSync(path.join(__dirname, dist));
}

ejs.renderFile(
  path.join(__dirname, src, "index.js.ejs"),
  {
    components: codeList.map(({ countryName }) => componentName(countryName)),
  },
  {},
  (err, str) => {
    if (err) throw err;
    fs.writeFileSync(path.join(__dirname, dist, `index.js`), str);
  }
);

ejs.renderFile(
  path.join(__dirname, src, "index.d.ts.ejs"),
  {
    components: codeList.map(({ countryName }) => componentName(countryName)),
  },
  {},
  (err, str) => {
    if (err) throw err;
    fs.writeFileSync(path.join(__dirname, dist, `index.d.ts`), str);
  }
);

codeList.map(({ countryName, alpha2 }) => {
  const name = componentName(countryName);
  ejs.renderFile(
    path.join(__dirname, src, "component.ejs"),
    {
      name,
      countryName,
      small: encodeSVG(
        fs
          .readFileSync(
            require.resolve(`flagpack-core/svg/s/${alpha2}.svg`).replace()
          )
          .toString()
      ),
      large: encodeSVG(
        fs
          .readFileSync(
            require.resolve(`flagpack-core/svg/l/${alpha2}.svg`).replace()
          )
          .toString()
      ),
    },
    {},
    (err, str) => {
      if (err) throw err;
      fs.writeFileSync(path.join(__dirname, dist, `${name}.js`), str);
    }
  );
});

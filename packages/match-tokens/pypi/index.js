const { TwilioDesignTokens } = require("@twilio-labs/match-tokens-twilio");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

const ds = new TwilioDesignTokens();

const src = "templates";
const dist = "match-tokens";

if (!fs.existsSync(path.join(__dirname, dist))) {
  fs.mkdirSync(path.join(__dirname, dist));
}

ejs.renderFile(
  path.join(__dirname, src, "swatch.py.ejs"),
  ds,
  {},
  (err, str) => {
    if (err) throw err;
    fs.writeFileSync(path.join(__dirname, dist, "swatch.py"), str);
  }
);

ejs.renderFile(
  path.join(__dirname, src, "__init__.py.ejs"),
  { packages: ["swatch"] },
  {},
  (err, str) => {
    if (err) throw err;
    fs.writeFileSync(path.join(__dirname, dist, "__init__.py"), str);
  }
);

const fs = require("fs");
const path = require("path");

const ejs = require("ejs");

const SendGridDesignTokens = require("@twilio-labs/match-tokens/sendgrid");
const TwilioDesignTokens = require("@twilio-labs/match-tokens/twilio");

const pkg = require("../package.json");

const src = "./templates";
const dist = `../${pkg.name}`;

const themes = {
  twilio: TwilioDesignTokens,
  sendgrid: SendGridDesignTokens,
};

if (!fs.existsSync(path.join(__dirname, dist))) {
  fs.mkdirSync(path.join(__dirname, dist));
}

Object.entries(themes).map(([name, tokens]) => {
  ejs.renderFile(
    path.join(__dirname, src, "tokens.py.ejs"),
    tokens,
    {},
    (err, str) => {
      if (err) throw err;
      fs.writeFileSync(path.join(__dirname, dist, `${name}.py`), str);
    }
  );
});

ejs.renderFile(
  path.join(__dirname, src, "__init__.py.ejs"),
  { packages: Object.keys(themes) },
  {},
  (err, str) => {
    if (err) throw err;
    fs.writeFileSync(path.join(__dirname, dist, "__init__.py"), str);
  }
);

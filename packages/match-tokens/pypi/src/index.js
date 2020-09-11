const {
  TwilioDesignTokens,
  SignalDesignTokens,
  AhoyDesignTokens,
  SendGridDesignTokens,
} = require("@twilio-labs/match-tokens");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

const src = "./templates";
const dist = "../match_tokens";

const themes = {
  twilio: new TwilioDesignTokens(),
  signal: new SignalDesignTokens(),
  ahoy: new AhoyDesignTokens(),
  sendgrid: new SendGridDesignTokens(),
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

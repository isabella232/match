import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";
import * as SendGridDesignTokens from "@twilio-labs/match-tokens/sendgrid";
import * as AhoyDesignTokens from "@twilio-labs/match-tokens/ahoy";
import ejs from "ejs";
import path from "path";
import fs from "fs";
import pkg from "../package.json";

const src = "./templates";
const dist = `../${pkg.name}`;

const themes = {
  twilio: TwilioDesignTokens,
  ahoy: AhoyDesignTokens,
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

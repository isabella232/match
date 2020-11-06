import { Plugin } from "@docusaurus/types";

export default function plugin(): Plugin<undefined> {
  return {
    name: "plugin-docusaurus-tokens",
    getClientModules() {
      return [
        require.resolve("@twilio-labs/match-fonts"),
        require.resolve("@twilio-labs/match-tokens/twilio/variables.css"),
      ];
    },
  };
}

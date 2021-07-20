import * as React from "react";
import { uid } from "react-uid";

import * as flags from "@twilio-labs/match-flags";
import type { FlagType } from "@twilio-labs/match-flags";

import { flagWrapper, flag } from "./flags.module.css";

export const Flags: React.FC = () => {
  return (
    <div className={flagWrapper}>
      {Object.values(flags).map((Flag: FlagType) => (
        <div key={uid(Flag)} className={flag}>
          <Flag size="small" />
          <Flag />
          <Flag size="large" />
        </div>
      ))}
    </div>
  );
};

import * as React from "react";

import { Flag, FlagSize, flagCodes } from "@twilio-labs/match-components";
import { flagWrapper, flag } from "./flags.module.css";

interface FlagCodesType {
  alpha2: string;
}
export const Flags: React.FC = () => {
  return (
    <div className={flagWrapper}>
      {flagCodes.map(({ alpha2 }: FlagCodesType) => (
        <div key={alpha2} className={flag}>
          <Flag code={alpha2} size={FlagSize.SMALL} decorative={true} />
          <Flag code={alpha2} size={FlagSize.NORMAL} decorative={false} />
          <Flag code={alpha2} size={FlagSize.LARGE} decorative={false} />
        </div>
      ))}
    </div>
  );
};

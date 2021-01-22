import * as React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { StyledBase } from "@twilio-labs/match-themes";
import { PlaygroundPreview } from "./preview";
import styles from "./styles.module.css";

const Playground: React.FC<any> = ({
  children,
  theme,
  transformCode,
  ...props
}) => {
  return (
    <LiveProvider
      code={children.replace(/\n$/, "")}
      transformCode={transformCode || ((code) => `${code};`)}
      theme={theme}
      {...props}
    >
      <div className={styles.playground}>
        <PlaygroundPreview bg={props.bg} className={styles.playgroundPreview}>
          <StyledBase>
            <LivePreview />
          </StyledBase>
          <LiveError />
        </PlaygroundPreview>
        <div className={styles.playgroundEditor}>
          <LiveEditor className={styles.liveEditor} />
        </div>
      </div>
    </LiveProvider>
  );
};

export default Playground;

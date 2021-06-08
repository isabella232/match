import { useAddonState, useChannel } from "@storybook/api";
import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";
import { styled } from "@storybook/theming";
import * as React from "react";
import { ThemeVariants } from "@twilio-labs/match-themes";
import { ADDON_ID, STORAGE_ID, CHANGED, SET } from "./constants";

const IconButtonWithLabel = styled(IconButton)(() => ({
  display: "inline-flex",
  alignItems: "center",
}));

const IconButtonLabel = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  marginLeft: 10,
}));

const themeList = Object.entries(ThemeVariants);

const ThemeSwitcherTool: React.FC = () => {
  const [matchTheme, setMatchTheme] = useAddonState<ThemeVariants>(
    ADDON_ID,
    (sessionStorage.getItem(STORAGE_ID) as ThemeVariants) ||
      ThemeVariants.TWILIO
  );

  const emit = useChannel({
    [CHANGED]: (theme: ThemeVariants) => setMatchTheme(theme),
  });

  const toLinks = React.useCallback(
    (close) =>
      themeList.map(([id, title]) => ({
        id,
        title,
        onClick: () => {
          emit(SET, title);
          close();
        },
      })),
    [emit]
  );

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={({ onHide }: { onHide: () => void }) => (
        <TooltipLinkList links={toLinks(onHide)} />
      )}
      closeOnClick
    >
      <IconButtonWithLabel key="match-theme" title="Switch active theme">
        <Icons icon="switchalt" />
        <IconButtonLabel>{matchTheme}</IconButtonLabel>
      </IconButtonWithLabel>
    </WithTooltip>
  );
};

export { ThemeSwitcherTool };

import * as React from "react";
import { Token } from "../../types";
import { useTheme } from "@twilio-labs/match-themes";

interface LineHeightTokensProps {
  tokens: Token[];
  prefix: string;
}

const LineHeightTokens: React.FC<LineHeightTokensProps> = ({
  prefix,
  tokens,
}) => {
  const { fontSizes } = useTheme();
  const examples = {
    scale100: {
      size: fontSizes.scale60,
      text:
        "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.",
    },
    scale125: {
      size: fontSizes.scale420,
      text: "Zombie ipsum reversus ab viral inferno, nam rick",
    },
    scale140: {
      size: fontSizes.scale280,
      text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
    },
    scale160: {
      size: fontSizes.scale180,
      text:
        "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata",
    },
    scale180: {
      size: fontSizes.scale160,
      text:
        "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora",
    },
    scale200: {
      size: fontSizes.scale70,
      text:
        "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Nigh basal ganglia tofth eliv ingdead. Is bello brains mundi z?",
    },
    scale220: {
      size: fontSizes.scale60,
      text:
        "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Nigh basal ganglia tofth eliv ingdead. Is bello brains mundi z?",
    },
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Value (em)</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(([name, value]) => (
            <tr key={prefix + name}>
              <td>{`${prefix}.${name}`}</td>
              <td>{value}</td>
              <td>
                {examples[name] && (
                  <div
                    style={{
                      lineHeight: value as string,
                      fontSize: examples[name].size,
                    }}
                  >
                    {examples[name].text}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { LineHeightTokens };

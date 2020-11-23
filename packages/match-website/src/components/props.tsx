import * as React from "react";
import { useState } from "react";
import { ComponentDoc } from "react-docgen-typescript";
import { usePluginData } from "@docusaurus/useGlobalData";
import { Button } from "reakit/Button";
import styles from "./styles.module.css";
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@twilio-labs/match-icons-twilio";

interface PropsProps {
  of: string;
}

type ComponentProp = {
  name: string;
  type: string;
  default: string;
  description: string;
};

const Props: React.FC<PropsProps> = ({ of }) => {
  const docgens = usePluginData("docusaurus-plugin-react-docgen-typescript");

  const props: ComponentProp[] = React.useMemo(() => {
    const doc: ComponentDoc = docgens.find(
      (docgen) => docgen.displayName === of
    );

    if (!doc) return [];

    return Object.values(doc.props).map(
      ({ name, required, type, defaultValue, description }) => {
        const prop: ComponentProp = {
          name: name + (!required ? "?" : ""),
          type: type.raw && type.name === "enum" ? type.raw : type.name,
          default: defaultValue ? defaultValue.value : "null",
          description,
        };

        /**
         * Put quotes around string values
         */
        if (
          defaultValue &&
          type.name !== "enum" &&
          !["true", "false", "null", "undefined"].includes(defaultValue.value)
        ) {
          prop.default = `'${defaultValue.value}'`;
        }

        /**
         * Get and format the ENUM key as default value
         * e.g. 'primary' instead of Variant.PRIMARY
         */
        if (defaultValue && type.name === "enum") {
          prop.default = `'${defaultValue.value
            .split(".")
            .pop()
            .toLowerCase()}'`;
        }

        /**
         * Format all possible enum values as comma separated list
         * when no description is provided.
         */
        if (!description && type.name === "enum") {
          prop.description = type.value
            .map(({ value }) => value.replace(/"/g, "'"))
            .join(", ");
        }

        return prop;
      }
    );
  }, [docgens, of]);

  /**
   * Toggle the expansion of the props table when the button is clicked
   * The table will have an expansion option if there are more than 8 props
   * If it has the expansion button, it will initially show 5 props
   */
  const [isExpanded, setExpanded] = useState(false);

  const handlePreview = () => {
    setExpanded(!isExpanded); //change state
  };

  if (props.length === 0) return <p>No component props found for {of} 😔</p>;
  const expand = props.length > 8 ? true : false;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props
          .slice(0, expand && !isExpanded ? 5 : props.length)
          .map((prop) => {
            return (
              <tr key={prop.name}>
                <td>{prop.name}</td>
                <td>{prop.type}</td>
                <td>{prop.default}</td>
                <td>{prop.description}</td>
              </tr>
            );
          })}
        {expand && (
          <tr>
            <td colSpan={4}>
              {isExpanded ? (
                <Button className={styles.propsExpand} onClick={handlePreview}>
                  See less props
                  <ChevronUpIcon
                    color="blue60"
                    size="small"
                    className={styles.iconExpand}
                    decorative
                  />
                </Button>
              ) : (
                <Button className={styles.propsExpand} onClick={handlePreview}>
                  See all {props.length} props
                  <ChevronDownIcon
                    color="blue60"
                    size="small"
                    className={styles.iconExpand}
                    decorative
                  />
                </Button>
              )}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export { Props };

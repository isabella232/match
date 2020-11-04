import * as React from "react";
import { ComponentDoc } from "react-docgen-typescript";
import { usePluginData } from "@docusaurus/useGlobalData";

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
        type.name = type.name.match(/^ResponsiveValue<.*?, Required<...>>$/)
          ? type.name.slice(16, -16)
          : type.name;
        const prop: ComponentProp = {
          name: name + (!required ? "?" : ""),
          type: type.raw && type.name === "enum" ? type.raw : type.name,
          default: defaultValue ? defaultValue.value : "null",
          description,
        };

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

  if (props.length === 0) return <p>No component props found for {of} 😔</p>;

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
        {props.map((prop) => (
          <tr key={prop.name}>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td>{prop.default}</td>
            <td>{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { Props };

import * as React from "react";
import { ComponentDoc } from "react-docgen-typescript";
import { usePluginData } from "@docusaurus/useGlobalData";

interface PropsProps {
  of: React.ComponentType;
}

const Props: React.FC<PropsProps> = ({ of }) => {
  const docgens = usePluginData("docusaurus-plugin-react-docgen-typescript");
  const doc: ComponentDoc = React.useMemo(
    () => docgens.find((docgen) => docgen.displayName === of.name),
    [docgens, of]
  );
  const hasDescription = React.useMemo(
    () =>
      Boolean(
        Object.values(doc.props).filter((prop) => prop.description.length > 1)
          .length
      ),
    [doc]
  );

  if (!doc) return <p>No component props found for {of.name} 😔</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          {hasDescription && <th>Description</th>}
        </tr>
      </thead>
      <tbody>
        {Object.values(doc.props).map((prop) => (
          <tr key={prop.name}>
            <td>{prop.name}</td>
            <td>{prop.type.name}</td>
            <td>{prop.required ? "true" : "false"}</td>
            <td>{prop.defaultValue.value}</td>
            {hasDescription && <td>{prop.description}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { Props };

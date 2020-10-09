const matchTemplate = (
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports }
) => template.smart({ plugins: ["jsx", "typescript"] }).ast`
${imports}
import * as PropTypes from 'prop-types';

${interfaces}

function ${componentName}(${props}) {
  return ${jsx};
}

${componentName}.propTypes = {
  title: PropTypes.string,
};

${exports}
`;

module.exports = matchTemplate;

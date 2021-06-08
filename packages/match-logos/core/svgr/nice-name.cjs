const niceName = (name) => {
  const basename = name.toLowerCase().startsWith("svg") ? name.slice(3) : name;
  return /^\d/.test(basename) ? `Svg${basename}Logo` : `${basename}Logo`;
};

module.exports = niceName;

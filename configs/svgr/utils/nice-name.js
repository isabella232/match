const niceName = (name, suffix) => {
  const basename = name.toLowerCase().startsWith("svg") ? name.slice(3) : name;
  return /^\d/.test(basename)
    ? `Svg${basename}${suffix}`
    : `${basename}${suffix}`;
};

module.exports = niceName;

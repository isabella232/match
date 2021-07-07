const niceName = (name, appendLogo = true) => {
  const basename = name.toLowerCase().startsWith("svg") ? name.slice(3) : name;
  return /^\d/.test(basename)
    ? `Svg${basename}${appendLogo ? "Logo" : ""}`
    : `${basename}${appendLogo ? "Logo" : ""}`;
};

module.exports = niceName;

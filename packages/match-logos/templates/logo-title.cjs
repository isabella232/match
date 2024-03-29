const logoTitle = (componentName) => {
  // trim "Svg"
  let title = componentName.slice(3).toLowerCase();

  if (title.startsWith("twilio")) return "Twilio";

  switch (title) {
    case "ing":
    case "qvc":
      return title.toUpperCase();
    case "dxw":
      return title.toLowerCase();
    case "1800flowers":
      return "1-800-Flowers";
    case "donorschooseorg":
      return "DonorsChoose.org";
    default:
      return title.replace(/([A-Z])/g, " $1").trim();
  }
};

module.exports = logoTitle;

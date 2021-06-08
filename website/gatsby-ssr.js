import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="whitney+surveyor"
      rel="stylesheet"
      type="text/css"
      href="https://cloud.typography.com/6230892/752864/css/fonts.css"
    />,
    <link
      key="colfax"
      rel="stylesheet"
      type="text/css"
      href="https://cdn.dev.twilio-assets.com/sendgrid.css"
    />,
    <link key="gfonts" rel="preconnect" href="https://fonts.gstatic.com" />,
    <link
      key="gfonts:fira"
      href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap"
      rel="stylesheet"
    />,
  ]);
};

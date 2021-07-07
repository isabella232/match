const querystring = require("querystring");
const https = require("https");

async function getSVGs(secret, families) {
  return new Promise((resolve, reject) => {
    https
      .get(
        `https://api.streamlineicons.com/v3/npm/assets/${secret}?${querystring.encode(
          {
            families,
            hashes: true,
          }
        )}`,
        {
          headers: { "Content-Type": "application/json" },
        },
        (resp) => {
          let data = "";

          resp.on("data", (chunk) => {
            data += chunk;
          });

          resp.on("end", () => {
            try {
              resolve({
                ...JSON.parse(data),
                statusCode: resp.statusCode,
              });
            } catch (error) {
              console.error("Error parsing JSON from request." + error.message);
            }
          });
        }
      )
      .on("error", (err) => {
        console.error("API error: " + err.message);
        reject(err);
      });
  });
}

module.exports = getSVGs;

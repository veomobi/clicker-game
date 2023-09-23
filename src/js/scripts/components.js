const clicker = new Component(
    "#clicker",
    clickerOnClick,
    {"points":0, "power":1, "pps":12},
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

const overlay = new Component(
    "#info-overlay",
    null,
    null,
    {"hidden":["display","none"],"visible":["display","flex"]},
    "overlay"
);
// app/index.mjs
import { React as React2, createRoot, useEffect } from "/libs/react-v0.0.1.mjs";
import { BrowserRouter as Router, Route, Routes, useLocation } from "/libs/react-v0.0.1.mjs";

// users/SignIn.mjs
import { React, Link } from "/libs/react-v0.0.1.mjs";

// assets/images/auth-image.jpg
var auth_image_default = "./assets/images/auth-image.jpg";

// assets/images/auth-decoration.png
var auth_decoration_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbQAAAHACAMAAAD9WW2jAAADAFBMVEVHcEyFi/f///+EjPr////////V1/3////6+v/Lz/////////////////////////////+FkPmDjfn///////////////////////////+CjPj///+IkvqBjPj///+Aivf///////////////////////+ZpfyGkfqCjPh/iPb///////+Un/z///////99hfSBjPmCjfiBiveCjfn///////+FkPmBi/eIlPmbqf2EjvqcqfxmZuScqvyBjPn///9SS9Wcqvuerf+Aivb///+PnPqLmPqMmPqfrf5QStVNRdGFkPpQSNSRnfpucOifrP2Bivb///9hYOCerfxKQM+CjPh0ee6Ej/lxdeuVovtTTtZqbeefrv1tb+RFOsuLl/tEOctjYuGisP1jYuFEOcubqfxTTtZ5gPGYpvyPm/uUoPtORtFzeOxXUdh9iPWbqPyQnPuKlvmJlfmLl/mAivaSn/qIlPmBi/d9hvV/ifaMmPmToPqGkvmNmfp6gfKVovuUofuaqPt7g/OHk/mQnfqZp/uEj/mOm/mGkvh/iPZ4f/CPnPqRnvqFkfl+h/WFkPiQnPqdrPx5gPF+h/R0ee1yduuCjfmGkfl+iPWPm/p/iPVvcumPnPmbqfuMmPqWo/prbed8hPOXpftzeO19hvR1e+5wdOp/ifeDjvlyd+x6gvKdq/t2fO9uceiXpPqHk/h8hfNoaORiYeBsb+d3fu9tcOifrfxDOMpqbOZfXd6BjPiAi/aAivV2fO6Ik/mYpfpmZ+NcWdyJlPloauV4fvCNmvmAivd8hPKWo/t6gvF7g/JaV9t9hvNRS9RxdetUTtZkZOFmZuNdW913fe91eu2Ai/h/ivaBi/ZlZeJgX96isfxZVdqgr/xVUNdPSNOIlPhhYN+RnvlYVNlNRtGHkvhWUtijsvyLmPmOmvp3ffBjY+FKQs9IP85HPc2aqPpqa+ZFO8tMQ9Bpa+WLl/qKlfmerPyUofqKl/l8hfKOmPSAhu2FjfCEj/aTnvaJlPWJkvHP4bICAAAAcXRSTlMADr4b0d0H4AEEIhQPG9mnOC8jtsuVxTAKi2M/QsHWtK8qg09felh1kW5VoRdaRlv5pk3LZm3k2btue7Q8nPWcTswq73GK0aI+K4L0aON+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";

// users/SignIn.mjs
var Signin = () => {
  return /* @__PURE__ */ React.createElement("main", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative md:flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-1/2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen h-full flex flex-col after:flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "block",
    to: "/"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    x1: "28.538%",
    y1: "20.229%",
    x2: "100%",
    y2: "108.156%",
    id: "logo-a"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#A5B4FC",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#A5B4FC",
    offset: "100%"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    x1: "88.638%",
    y1: "29.267%",
    x2: "22.42%",
    y2: "100%",
    id: "logo-b"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#38BDF8",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#38BDF8",
    offset: "100%"
  }))), /* @__PURE__ */ React.createElement("rect", {
    fill: "#6366F1",
    width: "32",
    height: "32",
    rx: "16"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",
    fill: "#4F46E5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",
    fill: "url(#logo-a)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",
    fill: "url(#logo-b)"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "max-w-sm mx-auto px-4 py-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl text-slate-800 font-bold mb-6"
  }, "Welcome back! \u2728"), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "block text-sm font-medium mb-1",
    htmlFor: "email"
  }, "Email Address"), /* @__PURE__ */ React.createElement("input", {
    id: "email",
    className: "form-input w-full",
    type: "email"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "block text-sm font-medium mb-1",
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password",
    className: "form-input w-full",
    type: "password",
    autoComplete: "on"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between mt-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mr-1"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "text-sm underline hover:no-underline",
    to: "/reset-password"
  }, "Forgot Password?")), /* @__PURE__ */ React.createElement(Link, {
    className: "btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3",
    to: "/"
  }, "Sign In"))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-5 mt-6 border-t border-slate-200"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, "Don\u2019t you have an account? ", /* @__PURE__ */ React.createElement(Link, {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    to: "/signup"
  }, "Sign Up")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-amber-100 text-amber-600 px-3 py-2 rounded"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "inline w-3 h-3 shrink-0 fill-current mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm"
  }, "To support you during the pandemic super pro features are free until March 31st."))))))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "object-cover object-center w-full h-full",
    src: auth_image_default,
    width: "760",
    height: "1024",
    alt: "Authentication"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block",
    src: auth_decoration_default,
    width: "218",
    height: "224",
    alt: "Authentication decoration"
  }))));
};

// app/index.mjs
var App = () => {
  const location = useLocation();
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Routes, null, /* @__PURE__ */ React2.createElement(Route, {
    exact: true,
    path: "/",
    element: /* @__PURE__ */ React2.createElement(Signin, null)
  }), /* @__PURE__ */ React2.createElement(Route, {
    path: "*",
    element: /* @__PURE__ */ React2.createElement(Signin, null)
  })));
};
var rootElement = document.getElementById("root");
createRoot(rootElement).render(/* @__PURE__ */ React2.createElement(React2.StrictMode, null, /* @__PURE__ */ React2.createElement(Router, null, /* @__PURE__ */ React2.createElement(App, null))));

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/index.mjs
import { React as React35, createRoot, useEffect as useEffect16 } from "/libs/vendors-v0.0.1.mjs";
import { BrowserRouter as Router, Route, Routes, useLocation as useLocation2 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/users/SignIn.mjs
import { React, Link } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/auth-image.jpg
var auth_image_default = "./assets/auth-image.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/auth-decoration.png
var auth_decoration_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbQAAAHACAMAAAD9WW2jAAADAFBMVEVHcEyFi/f///+EjPr////////V1/3////6+v/Lz/////////////////////////////+FkPmDjfn///////////////////////////+CjPj///+IkvqBjPj///+Aivf///////////////////////+ZpfyGkfqCjPh/iPb///////+Un/z///////99hfSBjPmCjfiBiveCjfn///////+FkPmBi/eIlPmbqf2EjvqcqfxmZuScqvyBjPn///9SS9Wcqvuerf+Aivb///+PnPqLmPqMmPqfrf5QStVNRdGFkPpQSNSRnfpucOifrP2Bivb///9hYOCerfxKQM+CjPh0ee6Ej/lxdeuVovtTTtZqbeefrv1tb+RFOsuLl/tEOctjYuGisP1jYuFEOcubqfxTTtZ5gPGYpvyPm/uUoPtORtFzeOxXUdh9iPWbqPyQnPuKlvmJlfmLl/mAivaSn/qIlPmBi/d9hvV/ifaMmPmToPqGkvmNmfp6gfKVovuUofuaqPt7g/OHk/mQnfqZp/uEj/mOm/mGkvh/iPZ4f/CPnPqRnvqFkfl+h/WFkPiQnPqdrPx5gPF+h/R0ee1yduuCjfmGkfl+iPWPm/p/iPVvcumPnPmbqfuMmPqWo/prbed8hPOXpftzeO19hvR1e+5wdOp/ifeDjvlyd+x6gvKdq/t2fO9uceiXpPqHk/h8hfNoaORiYeBsb+d3fu9tcOifrfxDOMpqbOZfXd6BjPiAi/aAivV2fO6Ik/mYpfpmZ+NcWdyJlPloauV4fvCNmvmAivd8hPKWo/t6gvF7g/JaV9t9hvNRS9RxdetUTtZkZOFmZuNdW913fe91eu2Ai/h/ivaBi/ZlZeJgX96isfxZVdqgr/xVUNdPSNOIlPhhYN+RnvlYVNlNRtGHkvhWUtijsvyLmPmOmvp3ffBjY+FKQs9IP85HPc2aqPpqa+ZFO8tMQ9Bpa+WLl/qKlfmerPyUofqKl/l8hfKOmPSAhu2FjfCEj/aTnvaJlPWJkvHP4bICAAAAcXRSTlMADr4b0d0H4AEEIhQPG9mnOC8jtsuVxTAKi2M/QsHWtK8qg09felh1kW5VoRdaRlv5pk3LZm3k2btue7Q8nPWcTswq73GK0aI+K4L0aON+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";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/users/SignIn.mjs
var SignIn = () => {
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

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/Dashboard.mjs
import { React as React34, useState as useState11 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/partials/src/Sidebar.mjs
import { React as React3, useState as useState2, useEffect, useRef } from "/libs/vendors-v0.0.1.mjs";
import { NavLink, useLocation } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/partials/src/SidebarLinkGroup.mjs
import { React as React2, useState } from "/libs/vendors-v0.0.1.mjs";
var SidebarLinkGroup = ({
  children,
  activecondition
}) => {
  const [open, setOpen] = useState(activecondition);
  const handleClick = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ React2.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && "bg-slate-900"}`
  }, children(handleClick, open));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/partials/src/Sidebar.mjs
var Sidebar = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState2(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true");
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current)
        return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target))
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27)
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  return /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("div", {
    className: `fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
    "aria-hidden": "true"
  }), /* @__PURE__ */ React3.createElement("div", {
    id: "sidebar",
    ref: sidebar,
    className: `flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "flex justify-between mb-10 pr-3 sm:px-2"
  }, /* @__PURE__ */ React3.createElement("button", {
    ref: trigger,
    className: "lg:hidden text-slate-500 hover:text-slate-400",
    onClick: () => setSidebarOpen(!sidebarOpen),
    "aria-controls": "sidebar",
    "aria-expanded": sidebarOpen
  }, /* @__PURE__ */ React3.createElement("span", {
    className: "sr-only"
  }, "Close sidebar"), /* @__PURE__ */ React3.createElement("svg", {
    className: "w-6 h-6 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React3.createElement("path", {
    d: "M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
  }))), /* @__PURE__ */ React3.createElement(NavLink, {
    end: true,
    to: "/",
    className: "block"
  }, /* @__PURE__ */ React3.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, /* @__PURE__ */ React3.createElement("defs", null, /* @__PURE__ */ React3.createElement("linearGradient", {
    x1: "28.538%",
    y1: "20.229%",
    x2: "100%",
    y2: "108.156%",
    id: "logo-a"
  }, /* @__PURE__ */ React3.createElement("stop", {
    stopColor: "#A5B4FC",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React3.createElement("stop", {
    stopColor: "#A5B4FC",
    offset: "100%"
  })), /* @__PURE__ */ React3.createElement("linearGradient", {
    x1: "88.638%",
    y1: "29.267%",
    x2: "22.42%",
    y2: "100%",
    id: "logo-b"
  }, /* @__PURE__ */ React3.createElement("stop", {
    stopColor: "#38BDF8",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React3.createElement("stop", {
    stopColor: "#38BDF8",
    offset: "100%"
  }))), /* @__PURE__ */ React3.createElement("rect", {
    fill: "#6366F1",
    width: "32",
    height: "32",
    rx: "16"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: "M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",
    fill: "#4F46E5"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: "M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",
    fill: "url(#logo-a)"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: "M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",
    fill: "url(#logo-b)"
  })))), /* @__PURE__ */ React3.createElement("div", {
    className: "space-y-8"
  }, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("h3", {
    className: "text-xs uppercase text-slate-500 font-semibold pl-3"
  }, /* @__PURE__ */ React3.createElement("span", {
    className: "hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6",
    "aria-hidden": "true"
  }, "\u2022\u2022\u2022"), /* @__PURE__ */ React3.createElement("span", {
    className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
  }, "Pages")), /* @__PURE__ */ React3.createElement("ul", {
    className: "mt-3"
  }, /* @__PURE__ */ React3.createElement(SidebarLinkGroup, {
    activecondition: pathname === "/" || pathname.includes("dashboard")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${(pathname === "/" || pathname.includes("dashboard")) && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-400 ${(pathname === "/" || pathname.includes("dashboard")) && "!text-indigo-500"}`,
      d: "M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-600 ${(pathname === "/" || pathname.includes("dashboard")) && "text-indigo-600"}`,
      d: "M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-400 ${(pathname === "/" || pathname.includes("dashboard")) && "text-indigo-200"}`,
      d: "M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
    })), /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Dashboard")), /* @__PURE__ */ React3.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React3.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React3.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React3.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Main"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/dashboard/analytics",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Analytics"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/dashboard/fintech",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Fintech"))))));
  }), /* @__PURE__ */ React3.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("ecommerce")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("ecommerce") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("ecommerce") && "text-indigo-300"}`,
      d: "M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-700 ${pathname.includes("ecommerce") && "!text-indigo-600"}`,
      d: "M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("ecommerce") && "text-indigo-500"}`,
      d: "M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
    })), /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "E-Commerce")), /* @__PURE__ */ React3.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React3.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React3.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React3.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/ecommerce/customers",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Customers"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/ecommerce/orders",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Orders"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/ecommerce/invoices",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Invoices"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/ecommerce/shop",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Shop"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/ecommerce/shop-2",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Shop 2"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/ecommerce/product",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Single Product"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/ecommerce/cart",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cart"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/ecommerce/cart-2",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cart 2"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/ecommerce/cart-3",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cart 3"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/ecommerce/pay",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Pay"))))));
  }), /* @__PURE__ */ React3.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("community")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("community") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("community") && "text-indigo-500"}`,
      d: "M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("community") && "text-indigo-300"}`,
      d: "M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
    })), /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Community")), /* @__PURE__ */ React3.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React3.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React3.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React3.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/community/users-tabs",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Users - Tabs"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/community/users-tiles",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Users - Tiles"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/community/profile",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Profile"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/community/feed",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Feed"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/community/forum",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Forum"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/community/forum-post",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Forum - Post"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/community/meetups",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Meetups"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/community/meetups-post",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Meetups - Post"))))));
  }), /* @__PURE__ */ React3.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("finance")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("finance") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("finance") && "text-indigo-300"}`,
      d: "M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-700 ${pathname.includes("finance") && "!text-indigo-500"}`,
      d: "M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("finance") && "text-indigo-600"}`,
      d: "M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z"
    })), /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Finance")), /* @__PURE__ */ React3.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React3.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React3.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React3.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/finance/cards",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cards"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/finance/transactions",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Transactions"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/finance/transaction-details",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Transaction Details"))))));
  }), /* @__PURE__ */ React3.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("job")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("job") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-700 ${pathname.includes("job") && "!text-indigo-600"}`,
      d: "M4.418 19.612A9.092 9.092 0 0 1 2.59 17.03L.475 19.14c-.848.85-.536 2.395.743 3.673a4.413 4.413 0 0 0 1.677 1.082c.253.086.519.131.787.135.45.011.886-.16 1.208-.474L7 21.44a8.962 8.962 0 0 1-2.582-1.828Z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("job") && "!text-indigo-500"}`,
      d: "M10.034 13.997a11.011 11.011 0 0 1-2.551-3.862L4.595 13.02a2.513 2.513 0 0 0-.4 2.645 6.668 6.668 0 0 0 1.64 2.532 5.525 5.525 0 0 0 3.643 1.824 2.1 2.1 0 0 0 1.534-.587l2.883-2.882a11.156 11.156 0 0 1-3.861-2.556Z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("job") && "!text-indigo-300"}`,
      d: "M21.554 2.471A8.958 8.958 0 0 0 18.167.276a3.105 3.105 0 0 0-3.295.467L9.715 5.888c-1.41 1.408-.665 4.275 1.733 6.668a8.958 8.958 0 0 0 3.387 2.196c.459.157.94.24 1.425.246a2.559 2.559 0 0 0 1.87-.715l5.156-5.146c1.415-1.406.666-4.273-1.732-6.666Zm.318 5.257c-.148.147-.594.2-1.256-.018A7.037 7.037 0 0 1 18.016 6c-1.73-1.728-2.104-3.475-1.73-3.845a.671.671 0 0 1 .465-.129c.27.008.536.057.79.146a7.07 7.07 0 0 1 2.6 1.711c1.73 1.73 2.105 3.472 1.73 3.846Z"
    })), /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Job Board")), /* @__PURE__ */ React3.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React3.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React3.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React3.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/job/job-listing",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Listing"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/job/job-post",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Job Post"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/job/company-profile",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Company Profile"))))));
  }), /* @__PURE__ */ React3.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("tasks")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("tasks") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("tasks") && "text-indigo-500"}`,
      d: "M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("tasks") && "text-indigo-500"}`,
      d: "M1 1h22v23H1z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("tasks") && "text-indigo-300"}`,
      d: "M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
    })), /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Tasks")), /* @__PURE__ */ React3.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React3.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React3.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React3.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/tasks/kanban",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Kanban"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/tasks/list",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "List"))))));
  }), /* @__PURE__ */ React3.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("messages") && "bg-slate-900"}`
  }, /* @__PURE__ */ React3.createElement(NavLink, {
    end: true,
    to: "/messages",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("messages") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "grow flex items-center"
  }, /* @__PURE__ */ React3.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React3.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("messages") && "text-indigo-500"}`,
    d: "M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
  }), /* @__PURE__ */ React3.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("messages") && "text-indigo-300"}`,
    d: "M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
  })), /* @__PURE__ */ React3.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Messages")), /* @__PURE__ */ React3.createElement("div", {
    className: "flex flex-shrink-0 ml-2"
  }, /* @__PURE__ */ React3.createElement("span", {
    className: "inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded"
  }, "4"))))), /* @__PURE__ */ React3.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("inbox") && "bg-slate-900"}`
  }, /* @__PURE__ */ React3.createElement(NavLink, {
    end: true,
    to: "/inbox",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("inbox") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React3.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React3.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("inbox") && "text-indigo-500"}`,
    d: "M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
  }), /* @__PURE__ */ React3.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("inbox") && "text-indigo-300"}`,
    d: "m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
  })), /* @__PURE__ */ React3.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Inbox")))), /* @__PURE__ */ React3.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("calendar") && "bg-slate-900"}`
  }, /* @__PURE__ */ React3.createElement(NavLink, {
    end: true,
    to: "/calendar",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("calendar") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React3.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React3.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("calendar") && "text-indigo-500"}`,
    d: "M1 3h22v20H1z"
  }), /* @__PURE__ */ React3.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("calendar") && "text-indigo-300"}`,
    d: "M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
  })), /* @__PURE__ */ React3.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Calendar")))), /* @__PURE__ */ React3.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("campaigns") && "bg-slate-900"}`
  }, /* @__PURE__ */ React3.createElement(NavLink, {
    end: true,
    to: "/campaigns",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("campaigns") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React3.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React3.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("campaigns") && "text-indigo-500"}`,
    d: "M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
  }), /* @__PURE__ */ React3.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("campaigns") && "text-indigo-300"}`,
    d: "M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
  })), /* @__PURE__ */ React3.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Campaigns")))), /* @__PURE__ */ React3.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("settings")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("settings") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("settings") && "text-indigo-500"}`,
      d: "M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("settings") && "text-indigo-300"}`,
      d: "M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("settings") && "text-indigo-500"}`,
      d: "M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("settings") && "text-indigo-300"}`,
      d: "M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
    })), /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Settings")), /* @__PURE__ */ React3.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React3.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React3.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React3.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/settings/account",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "My Account"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/settings/notifications",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "My Notifications"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/settings/apps",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Connected Apps"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/settings/plans",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Plans"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/settings/billing",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Billing & Invoices"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/settings/feedback",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Give Feedback"))))));
  }), /* @__PURE__ */ React3.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("utility")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("utility") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React3.createElement("circle", {
      className: `fill-current text-slate-400 ${pathname.includes("utility") && "text-indigo-300"}`,
      cx: "18.5",
      cy: "5.5",
      r: "4.5"
    }), /* @__PURE__ */ React3.createElement("circle", {
      className: `fill-current text-slate-600 ${pathname.includes("utility") && "text-indigo-500"}`,
      cx: "5.5",
      cy: "5.5",
      r: "4.5"
    }), /* @__PURE__ */ React3.createElement("circle", {
      className: `fill-current text-slate-600 ${pathname.includes("utility") && "text-indigo-500"}`,
      cx: "18.5",
      cy: "18.5",
      r: "4.5"
    }), /* @__PURE__ */ React3.createElement("circle", {
      className: `fill-current text-slate-400 ${pathname.includes("utility") && "text-indigo-300"}`,
      cx: "5.5",
      cy: "18.5",
      r: "4.5"
    })), /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Utility")), /* @__PURE__ */ React3.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React3.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React3.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React3.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/utility/changelog",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Changelog"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/utility/roadmap",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Roadmap"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/utility/faqs",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "FAQs"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/utility/empty-state",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Empty State"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/utility/404",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "404"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/utility/knowledge-base",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Knowledge Base"))))));
  }))), /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("h3", {
    className: "text-xs uppercase text-slate-500 font-semibold pl-3"
  }, /* @__PURE__ */ React3.createElement("span", {
    className: "hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6",
    "aria-hidden": "true"
  }, "\u2022\u2022\u2022"), /* @__PURE__ */ React3.createElement("span", {
    className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
  }, "More")), /* @__PURE__ */ React3.createElement("ul", {
    className: "mt-3"
  }, /* @__PURE__ */ React3.createElement(SidebarLinkGroup, null, (handleClick, open) => {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${open && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React3.createElement("path", {
      className: "fill-current text-slate-600",
      d: "M8.07 16H10V8H8.07a8 8 0 110 8z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: "fill-current text-slate-400",
      d: "M15 12L8 6v5H0v2h8v5z"
    })), /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Authentication")), /* @__PURE__ */ React3.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React3.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React3.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React3.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/signin",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Sign in"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/signup",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Sign up"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/reset-password",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Reset Password"))))));
  }), /* @__PURE__ */ React3.createElement(SidebarLinkGroup, null, (handleClick, open) => {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${open && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React3.createElement("path", {
      className: "fill-current text-slate-600",
      d: "M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z"
    }), /* @__PURE__ */ React3.createElement("path", {
      className: "fill-current text-slate-400",
      d: "M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
    })), /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Onboarding")), /* @__PURE__ */ React3.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React3.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React3.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React3.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/onboarding-01",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Step 1"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/onboarding-02",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Step 2"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/onboarding-03",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Step 3"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/onboarding-04",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Step 4"))))));
  }), /* @__PURE__ */ React3.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("component")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("component") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React3.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React3.createElement("circle", {
      className: `fill-current text-slate-600 ${pathname.includes("component") && "text-indigo-500"}`,
      cx: "16",
      cy: "8",
      r: "8"
    }), /* @__PURE__ */ React3.createElement("circle", {
      className: `fill-current text-slate-400 ${pathname.includes("component") && "text-indigo-300"}`,
      cx: "8",
      cy: "16",
      r: "8"
    })), /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Components")), /* @__PURE__ */ React3.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React3.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React3.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React3.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React3.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/button",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Button"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/form",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Input Form"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/dropdown",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Dropdown"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/alert",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Alert & Banner"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/modal",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Modal"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/pagination",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Pagination"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/tabs",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Tabs"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/breadcrumb",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Breadcrumb"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/badge",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Badge"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/avatar",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Avatar"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/tooltip",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Tooltip"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/accordion",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Accordion"))), /* @__PURE__ */ React3.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React3.createElement(NavLink, {
      end: true,
      to: "/component/icons",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React3.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Icons"))))));
  })))), /* @__PURE__ */ React3.createElement("div", {
    className: "pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "px-3 py-2"
  }, /* @__PURE__ */ React3.createElement("button", {
    onClick: () => setSidebarExpanded(!sidebarExpanded)
  }, /* @__PURE__ */ React3.createElement("span", {
    className: "sr-only"
  }, "Expand / collapse sidebar"), /* @__PURE__ */ React3.createElement("svg", {
    className: "w-6 h-6 fill-current sidebar-expanded:rotate-180",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React3.createElement("path", {
    className: "text-slate-400",
    d: "M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
  }), /* @__PURE__ */ React3.createElement("path", {
    className: "text-slate-600",
    d: "M3 23H1V1h2z"
  })))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/partials/src/Header.mjs
import { React as React14, useState as useState9 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/ModalSearch.mjs
import { React as React5, useRef as useRef3, useEffect as useEffect3, Link as Link2 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/utils/Transition.mjs
import { React as React4, useRef as useRef2, useEffect as useEffect2, useContext } from "/libs/vendors-v0.0.1.mjs";
import { CSSTransition as ReactCSSTransition } from "/libs/vendors-v0.0.1.mjs";
var TransitionContext = React4.createContext({
  parent: {}
});
function useIsInitialRender() {
  const isInitialRender = useRef2(true);
  useEffect2(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}
var CSSTransition = ({
  show,
  enter = "",
  enterStart = "",
  enterEnd = "",
  leave = "",
  leaveStart = "",
  leaveEnd = "",
  appear,
  unmountOnExit,
  tag = "div",
  children,
  ...rest
}) => {
  const enterClasses = enter.split(" ").filter((s) => s.length);
  const enterStartClasses = enterStart.split(" ").filter((s) => s.length);
  const enterEndClasses = enterEnd.split(" ").filter((s) => s.length);
  const leaveClasses = leave.split(" ").filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(" ").filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(" ").filter((s) => s.length);
  const removeFromDom = unmountOnExit;
  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }
  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }
  const nodeRef = React4.useRef(null);
  const Component2 = tag;
  return /* @__PURE__ */ React4.createElement(ReactCSSTransition, {
    appear,
    nodeRef,
    unmountOnExit: removeFromDom,
    in: show,
    addEndListener: (done) => {
      nodeRef.current.addEventListener("transitionend", done, false);
    },
    onEnter: () => {
      if (!removeFromDom)
        nodeRef.current.style.display = null;
      addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
    },
    onEntering: () => {
      removeClasses(nodeRef.current, enterStartClasses);
      addClasses(nodeRef.current, enterEndClasses);
    },
    onEntered: () => {
      removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
    },
    onExit: () => {
      addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
    },
    onExiting: () => {
      removeClasses(nodeRef.current, leaveStartClasses);
      addClasses(nodeRef.current, leaveEndClasses);
    },
    onExited: () => {
      removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
      if (!removeFromDom)
        nodeRef.current.style.display = "none";
    }
  }, /* @__PURE__ */ React4.createElement(Component2, {
    ref: nodeRef,
    ...rest,
    style: { display: !removeFromDom ? "none" : null }
  }, children));
};
var Transition = ({ show, appear, ...rest }) => {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === void 0;
  if (isChild) {
    return /* @__PURE__ */ React4.createElement(CSSTransition, {
      appear: parent.appear || !parent.isInitialRender,
      show: parent.show,
      ...rest
    });
  }
  return /* @__PURE__ */ React4.createElement(TransitionContext.Provider, {
    value: {
      parent: {
        show,
        isInitialRender,
        appear
      }
    }
  }, /* @__PURE__ */ React4.createElement(CSSTransition, {
    appear,
    show,
    ...rest
  }));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/ModalSearch.mjs
var ModalSearch = ({
  id,
  searchId,
  modalOpen,
  setModalOpen
}) => {
  const modalContent = useRef3(null);
  const searchInput = useRef3(null);
  useEffect3(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target))
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect3(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27)
        return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  useEffect3(() => {
    modalOpen && searchInput.current.focus();
  }, [modalOpen]);
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement(Transition, {
    className: "fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",
    show: modalOpen,
    enter: "transition ease-out duration-200",
    enterStart: "opacity-0",
    enterEnd: "opacity-100",
    leave: "transition ease-out duration-100",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React5.createElement(Transition, {
    id,
    className: "fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6",
    role: "dialog",
    "aria-modal": "true",
    show: modalOpen,
    enter: "transition ease-in-out duration-200",
    enterStart: "opacity-0 translate-y-4",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-in-out duration-200",
    leaveStart: "opacity-100 translate-y-0",
    leaveEnd: "opacity-0 translate-y-4"
  }, /* @__PURE__ */ React5.createElement("div", {
    ref: modalContent,
    className: "bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
  }, /* @__PURE__ */ React5.createElement("form", {
    className: "border-b border-slate-200"
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React5.createElement("label", {
    htmlFor: searchId,
    className: "sr-only"
  }, "Search"), /* @__PURE__ */ React5.createElement("input", {
    id: searchId,
    className: "w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4",
    type: "search",
    placeholder: "Search Anything\u2026",
    ref: searchInput
  }), /* @__PURE__ */ React5.createElement("button", {
    className: "absolute inset-0 right-auto group",
    type: "submit",
    "aria-label": "Search"
  }, /* @__PURE__ */ React5.createElement("svg", {
    className: "w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
  }), /* @__PURE__ */ React5.createElement("path", {
    d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
  }))))), /* @__PURE__ */ React5.createElement("div", {
    className: "py-4 px-2"
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "mb-3 last:mb-0"
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase px-2 mb-2"
  }, "Recent searches"), /* @__PURE__ */ React5.createElement("ul", {
    className: "text-sm"
  }, /* @__PURE__ */ React5.createElement("li", null, /* @__PURE__ */ React5.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React5.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React5.createElement("span", null, "Form Builder - 23 hours on-demand video"))), /* @__PURE__ */ React5.createElement("li", null, /* @__PURE__ */ React5.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React5.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React5.createElement("span", null, "Access Mosaic on mobile and TV"))), /* @__PURE__ */ React5.createElement("li", null, /* @__PURE__ */ React5.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React5.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React5.createElement("span", null, "Product Update - Q4 2021"))), /* @__PURE__ */ React5.createElement("li", null, /* @__PURE__ */ React5.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React5.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React5.createElement("span", null, "Master Digital Marketing Strategy course"))), /* @__PURE__ */ React5.createElement("li", null, /* @__PURE__ */ React5.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React5.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React5.createElement("span", null, "Dedicated forms for products"))), /* @__PURE__ */ React5.createElement("li", null, /* @__PURE__ */ React5.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React5.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React5.createElement("span", null, "Product Update - Q4 2021"))))), /* @__PURE__ */ React5.createElement("div", {
    className: "mb-3 last:mb-0"
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase px-2 mb-2"
  }, "Recent pages"), /* @__PURE__ */ React5.createElement("ul", {
    className: "text-sm"
  }, /* @__PURE__ */ React5.createElement("li", null, /* @__PURE__ */ React5.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React5.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
  })), /* @__PURE__ */ React5.createElement("span", null, /* @__PURE__ */ React5.createElement("span", {
    className: "font-medium text-slate-800 group-hover:text-white"
  }, "Messages"), " - Conversation / \u2026 / Mike Mills"))), /* @__PURE__ */ React5.createElement("li", null, /* @__PURE__ */ React5.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React5.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
  })), /* @__PURE__ */ React5.createElement("span", null, /* @__PURE__ */ React5.createElement("span", {
    className: "font-medium text-slate-800 group-hover:text-white"
  }, "Messages"), " - Conversation / \u2026 / Eva Patrick")))))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/DropdownNotifications.mjs
import { React as React6, useState as useState3, useRef as useRef4, useEffect as useEffect4, Link as Link3 } from "/libs/vendors-v0.0.1.mjs";
var DropdownNotifications = ({
  align
}) => {
  const [dropdownOpen, setDropdownOpen] = useState3(false);
  const trigger = useRef4(null);
  const dropdown = useRef4(null);
  useEffect4(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect4(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ React6.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React6.createElement("button", {
    ref: trigger,
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && "bg-slate-200"}`,
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "sr-only"
  }, "Notifications"), /* @__PURE__ */ React6.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React6.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
  }), /* @__PURE__ */ React6.createElement("path", {
    className: "fill-current text-slate-400",
    d: "M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"
  })), /* @__PURE__ */ React6.createElement(Transition, {
    className: `origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
    show: dropdownOpen,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React6.createElement("div", {
    ref: dropdown,
    onFocus: () => setDropdownOpen(true),
    onBlur: () => setDropdownOpen(false)
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4"
  }, "Notifications"), /* @__PURE__ */ React6.createElement("ul", null, /* @__PURE__ */ React6.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React6.createElement(Link3, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F4E3} ", /* @__PURE__ */ React6.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Edit your information in a swipe"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React6.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Feb 12, 2021"))), /* @__PURE__ */ React6.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React6.createElement(Link3, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F4E3} ", /* @__PURE__ */ React6.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Edit your information in a swipe"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React6.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Feb 9, 2021"))), /* @__PURE__ */ React6.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React6.createElement(Link3, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F680}", /* @__PURE__ */ React6.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Say goodbye to paper receipts!"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React6.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Jan 24, 2020")))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/DropdownHelp.mjs
import { React as React7, useState as useState4, useRef as useRef5, useEffect as useEffect5, Link as Link4 } from "/libs/vendors-v0.0.1.mjs";
var DropdownHelp = ({
  align
}) => {
  const [dropdownOpen, setDropdownOpen] = useState4(false);
  const trigger = useRef5(null);
  const dropdown = useRef5(null);
  useEffect5(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect5(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ React7.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React7.createElement("button", {
    ref: trigger,
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && "bg-slate-200"}`,
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React7.createElement("span", {
    className: "sr-only"
  }, "Need help?"), /* @__PURE__ */ React7.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React7.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
  }))), /* @__PURE__ */ React7.createElement(Transition, {
    className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
    show: dropdownOpen,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React7.createElement("div", {
    ref: dropdown,
    onFocus: () => setDropdownOpen(true),
    onBlur: () => setDropdownOpen(false)
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4"
  }, "Need help?"), /* @__PURE__ */ React7.createElement("ul", null, /* @__PURE__ */ React7.createElement("li", null, /* @__PURE__ */ React7.createElement(Link4, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React7.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React7.createElement("rect", {
    y: "3",
    width: "12",
    height: "9",
    rx: "1"
  }), /* @__PURE__ */ React7.createElement("path", {
    d: "M2 0h8v2H2z"
  })), /* @__PURE__ */ React7.createElement("span", null, "Documentation"))), /* @__PURE__ */ React7.createElement("li", null, /* @__PURE__ */ React7.createElement(Link4, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React7.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React7.createElement("path", {
    d: "M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z"
  })), /* @__PURE__ */ React7.createElement("span", null, "Support Site"))), /* @__PURE__ */ React7.createElement("li", null, /* @__PURE__ */ React7.createElement(Link4, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React7.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React7.createElement("path", {
    d: "M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
  })), /* @__PURE__ */ React7.createElement("span", null, "Contact us")))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/DropdownProfile.mjs
import { React as React8, useState as useState5, useRef as useRef6, useEffect as useEffect6, Link as Link5 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/user-avatar-32.png
var user_avatar_32_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAD/ElEQVR4Ae2axXorRxCFq+by3VyT2NkENTecrC4zMz5A3sIw3mUXfoLQNsywCTOzMSiIhWZ7ZrpSU25NmGFGX/p8UneV8Pzq023E63edg3aWBVHIABgAA2AADIABMAAGwAAYAANw9VU39HTbbQzgurNbNvdv2zKQ6LHbEqBYfAsBerrz27b0b98mGO0FUG+MLi42AJFrdr9je//OHYPJhN1Om7hQehuImCEYAZOJ/M4dA7t2DqaSdnsAFEtvE0+BeQwmaVLJ/O5dA3v2CEbMASqVjzxvQawHEAKCXLJSCXvvnoF9+5x0yo4vgFJe+dv3CMQ4sAQkkCwIYipx2b59gwcOCEYMAeQselPME0tAQNTaGNJzqA4eHDx4yMmk7dgBlMvvKd+TJcBl51oUVrpIJ/OHDg0ePuxkMnaMAFxvfrL6MZBsgnA/i3QlM2kezKTzR444R486WcGIGkBUKLzV8qgllUzCxQPKLuFeWuJFOHp08NhxJ5u1owcold5CvY918kH6oAmF4UCo78dcxj5xwuFLLmdHCTC/0KjVRmUF9L5FSZNuxDFJp4VIROHj2f3Jk0OnTju9ghEBAKtQfDtcAVG4CsGgG11ryp88PpfdyAxnzg719m6MAqDwpvgKP2nkWawShkAo+QlZfunxuWz+7Fnn7PmhC/4Yxkr4h6SIFmZ5EPlKEciVS1KuxyVXvk++y6PyPd/3lL64ynU9Hj3X95Y8d8lnGG/F1wsrp8H6DwHSqesBqJVsZCJEUhRwoGUBIykgkHv0GMzyYFkTIrmbrX+zsPJFz/oKRP8dQCp5HeiDkidFSodFWEhnXbWSREIgt+IyE+IifDFjPb+04ssINvHaNR2dnRcF7nTukaVDjhZpKtAi7Tx8+IL/RWXprpq6dwm/d/+frkA6dR0p0oenUmISpBNJQlQAoS+Ss4Bj1p2oTD87701AqIgArkcLKYi5nJhIIsGAAAmxFSENB7OL46Xa07NL4yCKEmDVynXdnbYEwyImQFRilIH0kW9ZchgBWgA+TM+PFSaf4BFE0QMkE1ezRUAdaH2qy74Ux0ra4NqcHv2q9PjU7Gi8vp1OZ663GACAlAq//xEICb5lcd+YHvlo5PaPxu7Q7uMDYFkrE91XinVAxiC9AgIRDI2p4Xc+vvm9T29tzIzAzxV5hHq6L1+1ar18/CTBRzn1iYHqzeHRiYfqzc8gVOwA5ADFIOcKEclXgMCqNYdHxh6sNbT1WANkUtcSkYW4nKdK7dOR0Qeq9U9BFHeAjo6LV6/pANFk9dOR4ftD620BIN/AIVYqnwyP3F+taevtBLB69fpXXrmxItajkvl/IQNgAAyAATAABsAAGAADYAD+vwDfAQSHHlNp5b1mAAAAAElFTkSuQmCC";

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/DropdownProfile.mjs
var DropdownProfile = ({
  align
}) => {
  const [dropdownOpen, setDropdownOpen] = useState5(false);
  const trigger = useRef6(null);
  const dropdown = useRef6(null);
  useEffect6(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect6(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ React8.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React8.createElement("button", {
    ref: trigger,
    className: "inline-flex justify-center items-center group",
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React8.createElement("img", {
    className: "w-8 h-8 rounded-full",
    src: user_avatar_32_default,
    width: "32",
    height: "32",
    alt: "User"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "flex items-center truncate"
  }, /* @__PURE__ */ React8.createElement("span", {
    className: "truncate ml-2 text-sm font-medium group-hover:text-slate-800"
  }, "Acme Inc."), /* @__PURE__ */ React8.createElement("svg", {
    className: "w-3 h-3 shrink-0 ml-1 fill-current text-slate-400",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
  })))), /* @__PURE__ */ React8.createElement(Transition, {
    className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
    show: dropdownOpen,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React8.createElement("div", {
    ref: dropdown,
    onFocus: () => setDropdownOpen(true),
    onBlur: () => setDropdownOpen(false)
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "font-medium text-slate-800"
  }, "Acme Inc."), /* @__PURE__ */ React8.createElement("div", {
    className: "text-xs text-slate-500 italic"
  }, "Administrator")), /* @__PURE__ */ React8.createElement("ul", null, /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link5, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "/settings",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, "Settings")), /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link5, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "/signin",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, "Sign Out"))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/DropdownFilter.mjs
import { React as React9, useState as useState6, useRef as useRef7, useEffect as useEffect7 } from "/libs/vendors-v0.0.1.mjs";
var DropdownFilter = ({
  align
}) => {
  const [dropdownOpen, setDropdownOpen] = useState6(false);
  const trigger = useRef7(null);
  const dropdown = useRef7(null);
  useEffect7(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect7(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ React9.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React9.createElement("button", {
    ref: trigger,
    className: "btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600",
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React9.createElement("span", {
    className: "sr-only"
  }, "Filter"), /* @__PURE__ */ React9.createElement("wbr", null), /* @__PURE__ */ React9.createElement("svg", {
    className: "w-4 h-4 fill-current",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React9.createElement("path", {
    d: "M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z"
  }))), /* @__PURE__ */ React9.createElement(Transition, {
    show: dropdownOpen,
    tag: "div",
    className: `origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React9.createElement("div", {
    ref: dropdown
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4"
  }, "Filters"), /* @__PURE__ */ React9.createElement("ul", {
    className: "mb-4"
  }, /* @__PURE__ */ React9.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React9.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React9.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React9.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Direct VS Indirect"))), /* @__PURE__ */ React9.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React9.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React9.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React9.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Real Time Value"))), /* @__PURE__ */ React9.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React9.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React9.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React9.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Top Channels"))), /* @__PURE__ */ React9.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React9.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React9.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React9.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Sales VS Refunds"))), /* @__PURE__ */ React9.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React9.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React9.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React9.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Last Order"))), /* @__PURE__ */ React9.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React9.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React9.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React9.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Total Spent")))), /* @__PURE__ */ React9.createElement("div", {
    className: "py-2 px-3 border-t border-slate-200 bg-slate-50"
  }, /* @__PURE__ */ React9.createElement("ul", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React9.createElement("li", null, /* @__PURE__ */ React9.createElement("button", {
    className: "btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
  }, "Clear")), /* @__PURE__ */ React9.createElement("li", null, /* @__PURE__ */ React9.createElement("button", {
    className: "btn-xs bg-indigo-500 hover:bg-indigo-600 text-white",
    onClick: () => setDropdownOpen(false),
    onBlur: () => setDropdownOpen(false)
  }, "Apply")))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/DropdownEditMenu.mjs
import { React as React10, useState as useState7, useRef as useRef8, useEffect as useEffect8 } from "/libs/vendors-v0.0.1.mjs";
var DropdownEditMenu = ({
  children,
  align,
  ...rest
}) => {
  const [dropdownOpen, setDropdownOpen] = useState7(false);
  const trigger = useRef8(null);
  const dropdown = useRef8(null);
  useEffect8(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect8(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ React10.createElement("div", {
    ...rest
  }, /* @__PURE__ */ React10.createElement("button", {
    ref: trigger,
    className: `bg-white text-slate-400 hover:text-slate-500 rounded-full ${dropdownOpen && "bg-slate-100 text-slate-500"}`,
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React10.createElement("span", {
    className: "sr-only"
  }, "Menu"), /* @__PURE__ */ React10.createElement("svg", {
    className: "w-8 h-8 fill-current",
    viewBox: "0 0 32 32"
  }, /* @__PURE__ */ React10.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "2"
  }), /* @__PURE__ */ React10.createElement("circle", {
    cx: "10",
    cy: "16",
    r: "2"
  }), /* @__PURE__ */ React10.createElement("circle", {
    cx: "22",
    cy: "16",
    r: "2"
  }))), /* @__PURE__ */ React10.createElement(Transition, {
    show: dropdownOpen,
    tag: "div",
    className: `origin-top-right z-10 absolute top-full min-w-36 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React10.createElement("ul", {
    ref: dropdown,
    onFocus: () => setDropdownOpen(true),
    onBlur: () => setDropdownOpen(false)
  }, children)));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/Tooltip.mjs
import { React as React11, useState as useState8 } from "/libs/vendors-v0.0.1.mjs";
var Tooltip = ({
  children,
  className,
  bg,
  size,
  position
}) => {
  const [tooltipOpen, setTooltipOpen] = useState8(false);
  const positionOuterClasses = (position2) => {
    switch (position2) {
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2";
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2";
    }
  };
  const sizeClasses = (size2) => {
    switch (size2) {
      case "lg":
        return "min-w-72  p-3";
      case "md":
        return "min-w-56 p-3";
      case "sm":
        return "min-w-44 p-2";
      default:
        return "p-2";
    }
  };
  const positionInnerClasses = (position2) => {
    switch (position2) {
      case "right":
        return "ml-2";
      case "left":
        return "mr-2";
      case "bottom":
        return "mt-2";
      default:
        return "mb-2";
    }
  };
  return /* @__PURE__ */ React11.createElement("div", {
    className: `relative ${className}`,
    onMouseEnter: () => setTooltipOpen(true),
    onMouseLeave: () => setTooltipOpen(false),
    onFocus: () => setTooltipOpen(true),
    onBlur: () => setTooltipOpen(false)
  }, /* @__PURE__ */ React11.createElement("button", {
    className: "block",
    "aria-haspopup": "true",
    "aria-expanded": tooltipOpen,
    onClick: (e) => e.preventDefault()
  }, /* @__PURE__ */ React11.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React11.createElement("path", {
    d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
  }))), /* @__PURE__ */ React11.createElement("div", {
    className: `z-10 absolute ${positionOuterClasses(position)}`
  }, /* @__PURE__ */ React11.createElement(Transition, {
    show: tooltipOpen,
    tag: "div",
    className: `rounded overflow-hidden ${bg === "dark" ? "bg-slate-800" : "bg-white border border-slate-200 shadow-lg"} ${sizeClasses(size)} ${positionInnerClasses(position)}`,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, children)));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/Datepicker.mjs
import { React as React13 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/Flatpickr.mjs
import { React as React12, Component } from "/libs/vendors-v0.0.1.mjs";
import { PropTypes, flatpickr as flat } from "/libs/vendors-v0.0.1.mjs";
var flatpickr = flat.default;
var hooks = [
  "onChange",
  "onOpen",
  "onClose",
  "onMonthChange",
  "onYearChange",
  "onReady",
  "onValueUpdate",
  "onDayCreate"
];
var hookPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.arrayOf(PropTypes.func)
]);
var callbacks = [
  "onCreate",
  "onDestroy"
];
var callbackPropTypes = PropTypes.func;
var Flatpickr = class extends Component {
  componentDidUpdate(prevProps) {
    const { options } = this.props;
    const prevOptions = prevProps.options;
    hooks.forEach((hook) => {
      mergeHooks(options, this.props, hook);
      mergeHooks(prevOptions, prevProps, hook);
    });
    const optionsKeys = Object.getOwnPropertyNames(options);
    for (let index = optionsKeys.length - 1; index >= 0; index--) {
      const key = optionsKeys[index];
      let value = options[key];
      if (value !== prevOptions[key]) {
        if (hooks.indexOf(key) !== -1 && !Array.isArray(value)) {
          value = [value];
        }
        this.flatpickr.set(key, value);
      }
    }
    if (this.props.hasOwnProperty("value") && this.props.value !== prevProps.value) {
      this.flatpickr.setDate(this.props.value, false);
    }
  }
  componentDidMount() {
    this.createFlatpickrInstance();
  }
  componentWillUnmount() {
    this.destroyFlatpickrInstance();
  }
  createFlatpickrInstance = () => {
    const options = {
      onClose: () => {
        this.node.blur && this.node.blur();
      },
      ...this.props.options
    };
    hooks.forEach((hook) => {
      if (this.props[hook]) {
        options[hook] = this.props[hook];
      }
    });
    this.flatpickr = flatpickr(this.node, options);
    if (this.props.hasOwnProperty("value")) {
      this.flatpickr.setDate(this.props.value, false);
    }
    const { onCreate } = this.props;
    if (onCreate)
      onCreate(this.flatpickr);
  };
  destroyFlatpickrInstance = () => {
    const { onDestroy } = this.props;
    if (onDestroy)
      onDestroy(this.flatpickr);
    this.flatpickr.destroy();
    this.flatpickr = null;
  };
  handleNodeChange = (node) => {
    this.node = node;
    if (this.flatpickr) {
      this.destroyFlatpickrInstance();
      this.createFlatpickrInstance();
    }
  };
  render() {
    const { options, defaultValue, value, children, render, ...props } = this.props;
    hooks.forEach((hook) => {
      delete props[hook];
    });
    callbacks.forEach((callback) => {
      delete props[callback];
    });
    if (render)
      return render({ ...props, defaultValue, value }, this.handleNodeChange);
    return options.wrap ? /* @__PURE__ */ React12.createElement("div", {
      ...props,
      ref: this.handleNodeChange
    }, children) : /* @__PURE__ */ React12.createElement("input", {
      ...props,
      defaultValue,
      ref: this.handleNodeChange
    });
  }
};
__publicField(Flatpickr, "propTypes", {
  defaultValue: PropTypes.string,
  options: PropTypes.object,
  onChange: hookPropType,
  onOpen: hookPropType,
  onClose: hookPropType,
  onMonthChange: hookPropType,
  onYearChange: hookPropType,
  onReady: hookPropType,
  onValueUpdate: hookPropType,
  onDayCreate: hookPropType,
  onCreate: callbackPropTypes,
  onDestroy: callbackPropTypes,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.number
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  render: PropTypes.func
});
__publicField(Flatpickr, "defaultProps", {
  options: {}
});
function mergeHooks(inputOptions, props, hook) {
  const options = { ...inputOptions };
  if (props.hasOwnProperty(hook)) {
    if (options[hook] && !Array.isArray(options[hook])) {
      options[hook] = [options[hook]];
    } else if (!options[hook]) {
      options[hook] = [];
    }
    const propHook = Array.isArray(props[hook]) ? props[hook] : [props[hook]];
    options[hook].push(...propHook);
  }
  return options;
}

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/Datepicker.mjs
var Datepicker = ({
  align
}) => {
  const options = {
    mode: "range",
    static: true,
    monthSelectorType: "static",
    dateFormat: "M j, Y",
    defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
    prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    onReady: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace("to", "-");
      const customClass = align ? align : "";
      instance.calendarContainer.classList.add(`flatpickr-${customClass}`);
    },
    onChange: (selectedDates, dateStr, instance) => {
      console.log("change! ");
      instance.element.value = dateStr.replace("to", "-");
    }
  };
  return /* @__PURE__ */ React13.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React13.createElement(Flatpickr, {
    className: "form-input pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 w-60",
    options
  }), /* @__PURE__ */ React13.createElement("div", {
    className: "absolute inset-0 right-auto flex items-center pointer-events-none"
  }, /* @__PURE__ */ React13.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-500 ml-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React13.createElement("path", {
    d: "M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z"
  }))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/partials/src/Header.mjs
var Header = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  const [searchModalOpen, setSearchModalOpen] = useState9(false);
  return /* @__PURE__ */ React14.createElement("header", {
    className: "sticky top-0 bg-white border-b border-slate-200 z-30"
  }, /* @__PURE__ */ React14.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React14.createElement("div", {
    className: "flex items-center justify-between h-16 -mb-px"
  }, /* @__PURE__ */ React14.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React14.createElement("button", {
    className: "text-slate-500 hover:text-slate-600 lg:hidden",
    "aria-controls": "sidebar",
    "aria-expanded": sidebarOpen,
    onClick: () => setSidebarOpen(!sidebarOpen)
  }, /* @__PURE__ */ React14.createElement("span", {
    className: "sr-only"
  }, "Open sidebar"), /* @__PURE__ */ React14.createElement("svg", {
    className: "w-6 h-6 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React14.createElement("rect", {
    x: "4",
    y: "5",
    width: "16",
    height: "2"
  }), /* @__PURE__ */ React14.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "2"
  }), /* @__PURE__ */ React14.createElement("rect", {
    x: "4",
    y: "17",
    width: "16",
    height: "2"
  })))), /* @__PURE__ */ React14.createElement("div", {
    className: "flex items-center space-x-3"
  }, /* @__PURE__ */ React14.createElement("button", {
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${searchModalOpen && "bg-slate-200"}`,
    onClick: (e) => {
      e.stopPropagation();
      setSearchModalOpen(true);
    },
    "aria-controls": "search-modal"
  }, /* @__PURE__ */ React14.createElement("span", {
    className: "sr-only"
  }, "Search"), /* @__PURE__ */ React14.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React14.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
  }), /* @__PURE__ */ React14.createElement("path", {
    className: "fill-current text-slate-400",
    d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
  }))), /* @__PURE__ */ React14.createElement(ModalSearch, {
    id: "search-modal",
    searchId: "search",
    modalOpen: searchModalOpen,
    setModalOpen: setSearchModalOpen
  }), /* @__PURE__ */ React14.createElement(DropdownNotifications, {
    align: "right"
  }), /* @__PURE__ */ React14.createElement(DropdownHelp, {
    align: "right"
  }), /* @__PURE__ */ React14.createElement("hr", {
    className: "w-px h-6 bg-slate-200 mx-3"
  }), /* @__PURE__ */ React14.createElement(DropdownProfile, {
    align: "right"
  })))));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/WelcomeBanner.mjs
import { React as React15 } from "/libs/vendors-v0.0.1.mjs";
var WelcomeBanner = () => {
  return /* @__PURE__ */ React15.createElement("div", {
    className: "relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8"
  }, /* @__PURE__ */ React15.createElement("div", {
    className: "absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React15.createElement("svg", {
    width: "319",
    height: "198",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /* @__PURE__ */ React15.createElement("defs", null, /* @__PURE__ */ React15.createElement("path", {
    id: "welcome-a",
    d: "M64 0l64 128-64-20-64 20z"
  }), /* @__PURE__ */ React15.createElement("path", {
    id: "welcome-e",
    d: "M40 0l40 80-40-12.5L0 80z"
  }), /* @__PURE__ */ React15.createElement("path", {
    id: "welcome-g",
    d: "M40 0l40 80-40-12.5L0 80z"
  }), /* @__PURE__ */ React15.createElement("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "welcome-b"
  }, /* @__PURE__ */ React15.createElement("stop", {
    stopColor: "#A5B4FC",
    offset: "0%"
  }), /* @__PURE__ */ React15.createElement("stop", {
    stopColor: "#818CF8",
    offset: "100%"
  })), /* @__PURE__ */ React15.createElement("linearGradient", {
    x1: "50%",
    y1: "24.537%",
    x2: "50%",
    y2: "100%",
    id: "welcome-c"
  }, /* @__PURE__ */ React15.createElement("stop", {
    stopColor: "#4338CA",
    offset: "0%"
  }), /* @__PURE__ */ React15.createElement("stop", {
    stopColor: "#6366F1",
    stopOpacity: "0",
    offset: "100%"
  }))), /* @__PURE__ */ React15.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ React15.createElement("g", {
    transform: "rotate(64 36.592 105.604)"
  }, /* @__PURE__ */ React15.createElement("mask", {
    id: "welcome-d",
    fill: "#fff"
  }, /* @__PURE__ */ React15.createElement("use", {
    xlinkHref: "#welcome-a"
  })), /* @__PURE__ */ React15.createElement("use", {
    fill: "url(#welcome-b)",
    xlinkHref: "#welcome-a"
  }), /* @__PURE__ */ React15.createElement("path", {
    fill: "url(#welcome-c)",
    mask: "url(#welcome-d)",
    d: "M64-24h80v152H64z"
  })), /* @__PURE__ */ React15.createElement("g", {
    transform: "rotate(-51 91.324 -105.372)"
  }, /* @__PURE__ */ React15.createElement("mask", {
    id: "welcome-f",
    fill: "#fff"
  }, /* @__PURE__ */ React15.createElement("use", {
    xlinkHref: "#welcome-e"
  })), /* @__PURE__ */ React15.createElement("use", {
    fill: "url(#welcome-b)",
    xlinkHref: "#welcome-e"
  }), /* @__PURE__ */ React15.createElement("path", {
    fill: "url(#welcome-c)",
    mask: "url(#welcome-f)",
    d: "M40.333-15.147h50v95h-50z"
  })), /* @__PURE__ */ React15.createElement("g", {
    transform: "rotate(44 61.546 392.623)"
  }, /* @__PURE__ */ React15.createElement("mask", {
    id: "welcome-h",
    fill: "#fff"
  }, /* @__PURE__ */ React15.createElement("use", {
    xlinkHref: "#welcome-g"
  })), /* @__PURE__ */ React15.createElement("use", {
    fill: "url(#welcome-b)",
    xlinkHref: "#welcome-g"
  }), /* @__PURE__ */ React15.createElement("path", {
    fill: "url(#welcome-c)",
    mask: "url(#welcome-h)",
    d: "M40.333-15.147h50v95h-50z"
  }))))), /* @__PURE__ */ React15.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React15.createElement("h1", {
    className: "text-2xl md:text-3xl text-slate-800 font-bold mb-1"
  }, "Good afternoon, Acme Inc. \u{1F44B}"), /* @__PURE__ */ React15.createElement("p", null, "Here is what\u2019s happening with your projects today:")));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardAvatars.mjs
import { React as React16, Link as Link6 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/user-36-01.jpg
var user_36_01_default = "./assets/user-36-01.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/user-36-02.jpg
var user_36_02_default = "./assets/user-36-02.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/user-36-03.jpg
var user_36_03_default = "./assets/user-36-03.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/user-36-04.jpg
var user_36_04_default = "./assets/user-36-04.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardAvatars.mjs
var DashboardAvatars = () => {
  return /* @__PURE__ */ React16.createElement("ul", {
    className: "flex flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px"
  }, /* @__PURE__ */ React16.createElement("li", null, /* @__PURE__ */ React16.createElement(Link6, {
    className: "block",
    to: "#0"
  }, /* @__PURE__ */ React16.createElement("img", {
    className: "w-9 h-9 rounded-full",
    src: user_36_01_default,
    width: "36",
    height: "36",
    alt: "User 01"
  }))), /* @__PURE__ */ React16.createElement("li", null, /* @__PURE__ */ React16.createElement(Link6, {
    className: "block",
    to: "#0"
  }, /* @__PURE__ */ React16.createElement("img", {
    className: "w-9 h-9 rounded-full",
    src: user_36_02_default,
    width: "36",
    height: "36",
    alt: "User 02"
  }))), /* @__PURE__ */ React16.createElement("li", null, /* @__PURE__ */ React16.createElement(Link6, {
    className: "block",
    to: "#0"
  }, /* @__PURE__ */ React16.createElement("img", {
    className: "w-9 h-9 rounded-full",
    src: user_36_03_default,
    width: "36",
    height: "36",
    alt: "User 03"
  }))), /* @__PURE__ */ React16.createElement("li", null, /* @__PURE__ */ React16.createElement(Link6, {
    className: "block",
    to: "#0"
  }, /* @__PURE__ */ React16.createElement("img", {
    className: "w-9 h-9 rounded-full",
    src: user_36_04_default,
    width: "36",
    height: "36",
    alt: "User 04"
  }))), /* @__PURE__ */ React16.createElement("li", null, /* @__PURE__ */ React16.createElement("button", {
    className: "flex justify-center items-center w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-indigo-500 shadow-sm transition duration-150 ml-2"
  }, /* @__PURE__ */ React16.createElement("span", {
    className: "sr-only"
  }, "Add new user"), /* @__PURE__ */ React16.createElement("svg", {
    className: "w-4 h-4 fill-current",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React16.createElement("path", {
    d: "M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
  })))));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard01.mjs
import { React as React23, Link as Link7 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/LineChart01.mjs
import { React as React17, useRef as useRef9, useEffect as useEffect9 } from "/libs/vendors-v0.0.1.mjs";
import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip as Tooltip2
} from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/tailwind/resolvedConfig.mjs
var resolvedConfig = {
  "theme": {
    "screens": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "xs": "480px"
    },
    "colors": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "columns": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "auto": "auto",
      "3xs": "16rem",
      "2xs": "18rem",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem"
    },
    "spacing": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "animation": {
      "none": "none",
      "spin": "spin 1s linear infinite",
      "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "bounce": "bounce 1s infinite"
    },
    "aspectRatio": {
      "auto": "auto",
      "square": "1 / 1",
      "video": "16 / 9"
    },
    "backdropBlur": {
      "0": "0",
      "none": "0",
      "sm": "4px",
      "DEFAULT": "8px",
      "md": "12px",
      "lg": "16px",
      "xl": "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    "backdropBrightness": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "backdropContrast": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "100": "1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "backdropGrayscale": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "backdropHueRotate": {
      "0": "0deg",
      "15": "15deg",
      "30": "30deg",
      "60": "60deg",
      "90": "90deg",
      "180": "180deg"
    },
    "backdropInvert": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "backdropOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "backdropSaturate": {
      "0": "0",
      "50": ".5",
      "100": "1",
      "150": "1.5",
      "200": "2"
    },
    "backdropSepia": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "backgroundColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "backgroundImage": {
      "none": "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    "backgroundOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "backgroundPosition": {
      "bottom": "bottom",
      "center": "center",
      "left": "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      "right": "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      "top": "top"
    },
    "backgroundSize": {
      "auto": "auto",
      "cover": "cover",
      "contain": "contain"
    },
    "blur": {
      "0": "0",
      "none": "0",
      "sm": "4px",
      "DEFAULT": "8px",
      "md": "12px",
      "lg": "16px",
      "xl": "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    "brightness": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "borderColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "DEFAULT": "#e5e7eb"
    },
    "borderOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "borderRadius": {
      "none": "0px",
      "sm": "0.125rem",
      "DEFAULT": "0.25rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "full": "9999px"
    },
    "borderWidth": {
      "0": "0px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "8": "8px",
      "DEFAULT": "1px"
    },
    "boxShadow": {
      "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      "DEFAULT": "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
      "md": "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
      "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",
      "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      "none": "none"
    },
    "boxShadowColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "caretColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "accentColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "auto": "auto"
    },
    "contrast": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "100": "1",
      "125": "1.25",
      "150": "1.5",
      "200": "2"
    },
    "container": {},
    "content": {
      "none": "none"
    },
    "cursor": {
      "auto": "auto",
      "default": "default",
      "pointer": "pointer",
      "wait": "wait",
      "text": "text",
      "move": "move",
      "help": "help",
      "not-allowed": "not-allowed",
      "none": "none",
      "context-menu": "context-menu",
      "progress": "progress",
      "cell": "cell",
      "crosshair": "crosshair",
      "vertical-text": "vertical-text",
      "alias": "alias",
      "copy": "copy",
      "no-drop": "no-drop",
      "grab": "grab",
      "grabbing": "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out"
    },
    "divideColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      },
      "DEFAULT": "#e5e7eb"
    },
    "divideOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "divideWidth": {
      "0": "0px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "8": "8px",
      "DEFAULT": "1px"
    },
    "dropShadow": {
      "sm": "0 1px 1px rgb(0 0 0 / 0.05)",
      "DEFAULT": [
        "0 1px 2px rgb(0 0 0 / 0.1)",
        "0 1px 1px rgb(0 0 0 / 0.06)"
      ],
      "md": [
        "0 4px 3px rgb(0 0 0 / 0.07)",
        "0 2px 2px rgb(0 0 0 / 0.06)"
      ],
      "lg": [
        "0 10px 8px rgb(0 0 0 / 0.04)",
        "0 4px 3px rgb(0 0 0 / 0.1)"
      ],
      "xl": [
        "0 20px 13px rgb(0 0 0 / 0.03)",
        "0 8px 5px rgb(0 0 0 / 0.08)"
      ],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      "none": "0 0 #0000"
    },
    "fill": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "grayscale": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "hueRotate": {
      "0": "0deg",
      "15": "15deg",
      "30": "30deg",
      "60": "60deg",
      "90": "90deg",
      "180": "180deg"
    },
    "invert": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "flex": {
      "1": "1 1 0%",
      "auto": "1 1 auto",
      "initial": "0 1 auto",
      "none": "none"
    },
    "flexBasis": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      "full": "100%"
    },
    "flexGrow": {
      "0": "0",
      "DEFAULT": "1"
    },
    "flexShrink": {
      "0": "0",
      "DEFAULT": "1"
    },
    "fontFamily": {
      "sans": [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      "serif": [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif"
      ],
      "mono": [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ],
      "inter": [
        "Inter",
        "sans-serif"
      ]
    },
    "fontSize": {
      "xs": [
        "0.75rem",
        {
          "lineHeight": "1.5"
        }
      ],
      "sm": [
        "0.875rem",
        {
          "lineHeight": "1.5715"
        }
      ],
      "base": [
        "1rem",
        {
          "lineHeight": "1.5",
          "letterSpacing": "-0.01em"
        }
      ],
      "lg": [
        "1.125rem",
        {
          "lineHeight": "1.5",
          "letterSpacing": "-0.01em"
        }
      ],
      "xl": [
        "1.25rem",
        {
          "lineHeight": "1.5",
          "letterSpacing": "-0.01em"
        }
      ],
      "2xl": [
        "1.5rem",
        {
          "lineHeight": "1.33",
          "letterSpacing": "-0.01em"
        }
      ],
      "3xl": [
        "1.88rem",
        {
          "lineHeight": "1.33",
          "letterSpacing": "-0.01em"
        }
      ],
      "4xl": [
        "2.25rem",
        {
          "lineHeight": "1.25",
          "letterSpacing": "-0.02em"
        }
      ],
      "5xl": [
        "3rem",
        {
          "lineHeight": "1.25",
          "letterSpacing": "-0.02em"
        }
      ],
      "6xl": [
        "3.75rem",
        {
          "lineHeight": "1.2",
          "letterSpacing": "-0.02em"
        }
      ],
      "7xl": [
        "4.5rem",
        {
          "lineHeight": "1"
        }
      ],
      "8xl": [
        "6rem",
        {
          "lineHeight": "1"
        }
      ],
      "9xl": [
        "8rem",
        {
          "lineHeight": "1"
        }
      ]
    },
    "fontWeight": {
      "thin": "100",
      "extralight": "200",
      "light": "300",
      "normal": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700",
      "extrabold": "800",
      "black": "900"
    },
    "gap": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "gradientColorStops": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "gridAutoColumns": {
      "auto": "auto",
      "min": "min-content",
      "max": "max-content",
      "fr": "minmax(0, 1fr)"
    },
    "gridAutoRows": {
      "auto": "auto",
      "min": "min-content",
      "max": "max-content",
      "fr": "minmax(0, 1fr)"
    },
    "gridColumn": {
      "auto": "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    "gridColumnEnd": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "13": "13",
      "auto": "auto"
    },
    "gridColumnStart": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "13": "13",
      "auto": "auto"
    },
    "gridRow": {
      "auto": "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-full": "1 / -1"
    },
    "gridRowStart": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "auto": "auto"
    },
    "gridRowEnd": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "auto": "auto"
    },
    "gridTemplateColumns": {
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))",
      "7": "repeat(7, minmax(0, 1fr))",
      "8": "repeat(8, minmax(0, 1fr))",
      "9": "repeat(9, minmax(0, 1fr))",
      "10": "repeat(10, minmax(0, 1fr))",
      "11": "repeat(11, minmax(0, 1fr))",
      "12": "repeat(12, minmax(0, 1fr))",
      "none": "none"
    },
    "gridTemplateRows": {
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))",
      "none": "none"
    },
    "height": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "full": "100%",
      "screen": "100vh",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "inset": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "full": "100%"
    },
    "keyframes": {
      "spin": {
        "to": {
          "transform": "rotate(360deg)"
        }
      },
      "ping": {
        "75%, 100%": {
          "transform": "scale(2)",
          "opacity": "0"
        }
      },
      "pulse": {
        "50%": {
          "opacity": ".5"
        }
      },
      "bounce": {
        "0%, 100%": {
          "transform": "translateY(-25%)",
          "animationTimingFunction": "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          "transform": "none",
          "animationTimingFunction": "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    "letterSpacing": {
      "tighter": "-0.05em",
      "tight": "-0.025em",
      "normal": "0em",
      "wide": "0.025em",
      "wider": "0.05em",
      "widest": "0.1em"
    },
    "lineHeight": {
      "3": ".75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "none": "1",
      "tight": "1.25",
      "snug": "1.375",
      "normal": "1.5",
      "relaxed": "1.625",
      "loose": "2"
    },
    "listStyleType": {
      "none": "none",
      "disc": "disc",
      "decimal": "decimal"
    },
    "margin": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "maxHeight": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "full": "100%",
      "screen": "100vh",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "maxWidth": {
      "0": "0rem",
      "none": "none",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content",
      "prose": "65ch",
      "screen-sm": "640px",
      "screen-md": "768px",
      "screen-lg": "1024px",
      "screen-xl": "1280px",
      "screen-2xl": "1536px",
      "screen-xs": "480px",
      "8xl": "88rem",
      "9xl": "96rem"
    },
    "minHeight": {
      "0": "0px",
      "full": "100%",
      "screen": "100vh",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "minWidth": {
      "0": "0px",
      "36": "9rem",
      "44": "11rem",
      "56": "14rem",
      "60": "15rem",
      "72": "18rem",
      "80": "20rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "objectPosition": {
      "bottom": "bottom",
      "center": "center",
      "left": "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      "right": "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      "top": "top"
    },
    "opacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "order": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "first": "-9999",
      "last": "9999",
      "none": "0"
    },
    "padding": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "placeholderColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "placeholderOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "outlineColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "outlineOffset": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px"
    },
    "outlineWidth": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px"
    },
    "ringColor": {
      "DEFAULT": "#3b82f6",
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "ringOffsetColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "ringOffsetWidth": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px"
    },
    "ringOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1",
      "DEFAULT": "0.5"
    },
    "ringWidth": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "DEFAULT": "3px"
    },
    "rotate": {
      "0": "0deg",
      "1": "1deg",
      "2": "2deg",
      "3": "3deg",
      "6": "6deg",
      "12": "12deg",
      "45": "45deg",
      "90": "90deg",
      "180": "180deg"
    },
    "saturate": {
      "0": "0",
      "50": ".5",
      "100": "1",
      "150": "1.5",
      "200": "2"
    },
    "scale": {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5"
    },
    "scrollMargin": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "scrollPadding": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "sepia": {
      "0": "0",
      "DEFAULT": "100%"
    },
    "skew": {
      "0": "0deg",
      "1": "1deg",
      "2": "2deg",
      "3": "3deg",
      "6": "6deg",
      "12": "12deg"
    },
    "space": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "stroke": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "strokeWidth": {
      "0": "0",
      "1": "1",
      "2": "2"
    },
    "textColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "textDecorationColor": {
      "inherit": "inherit",
      "current": "currentColor",
      "transparent": "transparent",
      "black": "#000",
      "white": "#fff",
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a"
      },
      "gray": {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      "zinc": {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "stone": {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917"
      },
      "red": {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      "orange": {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      "amber": {
        "50": "#fffbeb",
        "100": "#fef3c7",
        "200": "#fde68a",
        "300": "#fcd34d",
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706",
        "700": "#b45309",
        "800": "#92400e",
        "900": "#78350f"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      "lime": {
        "50": "#f7fee7",
        "100": "#ecfccb",
        "200": "#d9f99d",
        "300": "#bef264",
        "400": "#a3e635",
        "500": "#84cc16",
        "600": "#65a30d",
        "700": "#4d7c0f",
        "800": "#3f6212",
        "900": "#365314"
      },
      "green": {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      "emerald": {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      },
      "teal": {
        "50": "#f0fdfa",
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "cyan": {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      "sky": {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "indigo": {
        "50": "#eef2ff",
        "100": "#e0e7ff",
        "200": "#c7d2fe",
        "300": "#a5b4fc",
        "400": "#818cf8",
        "500": "#6366f1",
        "600": "#4f46e5",
        "700": "#4338ca",
        "800": "#3730a3",
        "900": "#312e81"
      },
      "violet": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      },
      "purple": {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7e22ce",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      "fuchsia": {
        "50": "#fdf4ff",
        "100": "#fae8ff",
        "200": "#f5d0fe",
        "300": "#f0abfc",
        "400": "#e879f9",
        "500": "#d946ef",
        "600": "#c026d3",
        "700": "#a21caf",
        "800": "#86198f",
        "900": "#701a75"
      },
      "pink": {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      "rose": {
        "50": "#fff1f2",
        "100": "#ffe4e6",
        "200": "#fecdd3",
        "300": "#fda4af",
        "400": "#fb7185",
        "500": "#f43f5e",
        "600": "#e11d48",
        "700": "#be123c",
        "800": "#9f1239",
        "900": "#881337"
      }
    },
    "textDecorationThickness": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "auto": "auto",
      "from-font": "from-font"
    },
    "textUnderlineOffset": {
      "0": "0px",
      "1": "1px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "auto": "auto"
    },
    "textIndent": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    "textOpacity": {
      "0": "0",
      "5": "0.05",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    "transformOrigin": {
      "center": "center",
      "top": "top",
      "top-right": "top right",
      "right": "right",
      "bottom-right": "bottom right",
      "bottom": "bottom",
      "bottom-left": "bottom left",
      "left": "left",
      "top-left": "top left"
    },
    "transitionDelay": {
      "75": "75ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200ms",
      "300": "300ms",
      "500": "500ms",
      "700": "700ms",
      "1000": "1000ms"
    },
    "transitionDuration": {
      "75": "75ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200ms",
      "300": "300ms",
      "500": "500ms",
      "700": "700ms",
      "1000": "1000ms",
      "DEFAULT": "150ms"
    },
    "transitionProperty": {
      "none": "none",
      "all": "all",
      "DEFAULT": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      "colors": "color, background-color, border-color, text-decoration-color, fill, stroke",
      "opacity": "opacity",
      "shadow": "box-shadow",
      "transform": "transform"
    },
    "transitionTimingFunction": {
      "DEFAULT": "cubic-bezier(0.4, 0, 0.2, 1)",
      "linear": "linear",
      "in": "cubic-bezier(0.4, 0, 1, 1)",
      "out": "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    "translate": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "full": "100%"
    },
    "width": {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      "auto": "auto",
      "px": "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      "full": "100%",
      "screen": "100vw",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    },
    "willChange": {
      "auto": "auto",
      "scroll": "scroll-position",
      "contents": "contents",
      "transform": "transform"
    },
    "zIndex": {
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
      "60": "60",
      "auto": "auto"
    },
    "outline": {
      "blue": "2px solid rgba(0, 112, 244, 0.5)"
    }
  },
  "corePlugins": [
    "preflight",
    "container",
    "accessibility",
    "pointerEvents",
    "visibility",
    "position",
    "inset",
    "isolation",
    "zIndex",
    "order",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "float",
    "clear",
    "margin",
    "boxSizing",
    "display",
    "aspectRatio",
    "height",
    "maxHeight",
    "minHeight",
    "width",
    "minWidth",
    "maxWidth",
    "flex",
    "flexShrink",
    "flexGrow",
    "flexBasis",
    "tableLayout",
    "borderCollapse",
    "transformOrigin",
    "translate",
    "rotate",
    "skew",
    "scale",
    "transform",
    "animation",
    "cursor",
    "touchAction",
    "userSelect",
    "resize",
    "scrollSnapType",
    "scrollSnapAlign",
    "scrollSnapStop",
    "scrollMargin",
    "scrollPadding",
    "listStylePosition",
    "listStyleType",
    "appearance",
    "columns",
    "breakBefore",
    "breakInside",
    "breakAfter",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridTemplateColumns",
    "gridTemplateRows",
    "flexDirection",
    "flexWrap",
    "placeContent",
    "placeItems",
    "alignContent",
    "alignItems",
    "justifyContent",
    "justifyItems",
    "gap",
    "space",
    "divideWidth",
    "divideStyle",
    "divideColor",
    "divideOpacity",
    "placeSelf",
    "alignSelf",
    "justifySelf",
    "overflow",
    "overscrollBehavior",
    "scrollBehavior",
    "textOverflow",
    "whitespace",
    "wordBreak",
    "borderRadius",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderOpacity",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundImage",
    "gradientColorStops",
    "boxDecorationBreak",
    "backgroundSize",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundOrigin",
    "fill",
    "stroke",
    "strokeWidth",
    "objectFit",
    "objectPosition",
    "padding",
    "textAlign",
    "textIndent",
    "verticalAlign",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "textTransform",
    "fontStyle",
    "fontVariantNumeric",
    "lineHeight",
    "letterSpacing",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textDecorationColor",
    "textDecorationStyle",
    "textDecorationThickness",
    "textUnderlineOffset",
    "fontSmoothing",
    "placeholderColor",
    "placeholderOpacity",
    "caretColor",
    "accentColor",
    "opacity",
    "backgroundBlendMode",
    "mixBlendMode",
    "boxShadow",
    "boxShadowColor",
    "outlineStyle",
    "outlineWidth",
    "outlineOffset",
    "outlineColor",
    "ringWidth",
    "ringColor",
    "ringOpacity",
    "ringOffsetWidth",
    "ringOffsetColor",
    "blur",
    "brightness",
    "contrast",
    "dropShadow",
    "grayscale",
    "hueRotate",
    "invert",
    "saturate",
    "sepia",
    "filter",
    "backdropBlur",
    "backdropBrightness",
    "backdropContrast",
    "backdropGrayscale",
    "backdropHueRotate",
    "backdropInvert",
    "backdropOpacity",
    "backdropSaturate",
    "backdropSepia",
    "backdropFilter",
    "transitionProperty",
    "transitionDelay",
    "transitionDuration",
    "transitionTimingFunction",
    "willChange",
    "content"
  ],
  "plugins": [
    null,
    {}
  ],
  "content": {
    "files": [
      "/home/mamluk/3pass/esm-pwa/dist/public/index.html",
      "/home/mamluk/3pass/esm-pwa/pkgs/**/*.mjs",
      "/home/mamluk/3pass/esm-pwa/libs/**/*.mjs"
    ],
    "extract": {},
    "transform": {}
  },
  "presets": [],
  "darkMode": "media",
  "variantOrder": [
    "first",
    "last",
    "odd",
    "even",
    "visited",
    "checked",
    "empty",
    "read-only",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled"
  ],
  "prefix": "",
  "important": false,
  "separator": ":",
  "safelist": []
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/utils/Utils.mjs
var tailwindConfig = () => {
  return resolvedConfig;
};
var hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};
var formatValue = (value) => Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumSignificantDigits: 3,
  notation: "compact"
}).format(value);

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/LineChart01.mjs
Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip2);
var LineChart01 = ({
  data,
  width,
  height
}) => {
  const canvas = useRef9(null);
  useEffect9(() => {
    const ctx = canvas.current;
    const chart = new Chart(ctx, {
      type: "line",
      data,
      options: {
        chartArea: {
          backgroundColor: tailwindConfig().theme.colors.slate[50]
        },
        layout: {
          padding: 20
        },
        scales: {
          y: {
            display: false,
            beginAtZero: true
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month"
            },
            display: false
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: () => false,
              label: (context) => formatValue(context.parsed.y)
            }
          },
          legend: {
            display: false
          }
        },
        interaction: {
          intersect: false,
          mode: "nearest"
        },
        maintainAspectRatio: false,
        resizeDelay: 200
      }
    });
    return () => chart.destroy();
  }, []);
  return /* @__PURE__ */ React17.createElement("canvas", {
    ref: canvas,
    width,
    height
  });
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/LineChart02.mjs
import { React as React18, useRef as useRef10, useEffect as useEffect10 } from "/libs/vendors-v0.0.1.mjs";
import {
  Chart as Chart2,
  LineController as LineController2,
  LineElement as LineElement2,
  Filler as Filler2,
  PointElement as PointElement2,
  LinearScale as LinearScale2,
  TimeScale as TimeScale2,
  Tooltip as Tooltip3
} from "/libs/vendors-v0.0.1.mjs";
Chart2.register(LineController2, LineElement2, Filler2, PointElement2, LinearScale2, TimeScale2, Tooltip3);
var LineChart02 = ({
  data,
  width,
  height
}) => {
  const canvas = useRef10(null);
  const legend = useRef10(null);
  useEffect10(() => {
    const ctx = canvas.current;
    const chart = new Chart2(ctx, {
      type: "line",
      data,
      options: {
        layout: {
          padding: 20
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              beginAtZero: true
            },
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(value)
            }
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM YY"
              }
            },
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              title: () => false,
              label: (context) => formatValue(context.parsed.y)
            }
          }
        },
        interaction: {
          intersect: false,
          mode: "nearest"
        },
        maintainAspectRatio: false,
        resizeDelay: 200
      },
      plugins: [{
        id: "htmlLegend",
        afterUpdate(c, args, options) {
          const ul = legend.current;
          if (!ul)
            return;
          while (ul.firstChild) {
            ul.firstChild.remove();
          }
          const items = c.options.plugins.legend.labels.generateLabels(c);
          items.slice(0, 2).forEach((item) => {
            const li = document.createElement("li");
            li.style.marginLeft = tailwindConfig().theme.margin[3];
            const button = document.createElement("button");
            button.style.display = "inline-flex";
            button.style.alignItems = "center";
            button.style.opacity = item.hidden ? ".3" : "";
            button.onclick = () => {
              c.setDatasetVisibility(item.datasetIndex, !c.isDatasetVisible(item.datasetIndex));
              c.update();
            };
            const box = document.createElement("span");
            box.style.display = "block";
            box.style.width = tailwindConfig().theme.width[3];
            box.style.height = tailwindConfig().theme.height[3];
            box.style.borderRadius = tailwindConfig().theme.borderRadius.full;
            box.style.marginRight = tailwindConfig().theme.margin[2];
            box.style.borderWidth = "3px";
            box.style.borderColor = c.data.datasets[item.datasetIndex].borderColor;
            box.style.pointerEvents = "none";
            const label = document.createElement("span");
            label.style.color = tailwindConfig().theme.colors.slate[500];
            label.style.fontSize = tailwindConfig().theme.fontSize.sm[0];
            label.style.lineHeight = tailwindConfig().theme.fontSize.sm[1].lineHeight;
            const labelText = document.createTextNode(item.text);
            label.appendChild(labelText);
            li.appendChild(button);
            button.appendChild(box);
            button.appendChild(label);
            ul.appendChild(li);
          });
        }
      }]
    });
    return () => chart.destroy();
  }, []);
  return /* @__PURE__ */ React18.createElement(React18.Fragment, null, /* @__PURE__ */ React18.createElement("div", {
    className: "px-5 py-3"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "flex flex-wrap justify-between items-end"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "$1,482"), /* @__PURE__ */ React18.createElement("div", {
    className: "text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full"
  }, "-22%")), /* @__PURE__ */ React18.createElement("div", {
    className: "grow ml-2 mb-1"
  }, /* @__PURE__ */ React18.createElement("ul", {
    ref: legend,
    className: "flex flex-wrap justify-end"
  })))), /* @__PURE__ */ React18.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React18.createElement("canvas", {
    ref: canvas,
    width,
    height
  })));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/BarChart01.mjs
import { React as React19, useRef as useRef11, useEffect as useEffect11 } from "/libs/vendors-v0.0.1.mjs";
import {
  Chart as Chart3,
  BarController,
  BarElement,
  LinearScale as LinearScale3,
  TimeScale as TimeScale3,
  Tooltip as Tooltip4,
  Legend
} from "/libs/vendors-v0.0.1.mjs";
Chart3.register(BarController, BarElement, LinearScale3, TimeScale3, Tooltip4, Legend);
var BarChart01 = ({
  data,
  width,
  height
}) => {
  const canvas = useRef11(null);
  const legend = useRef11(null);
  useEffect11(() => {
    const ctx = canvas.current;
    const chart = new Chart3(ctx, {
      type: "bar",
      data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20
          }
        },
        scales: {
          y: {
            grid: {
              drawBorder: false
            },
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(value)
            }
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM YY"
              }
            },
            grid: {
              display: false,
              drawBorder: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              title: () => false,
              label: (context) => formatValue(context.parsed.y)
            }
          }
        },
        interaction: {
          intersect: false,
          mode: "nearest"
        },
        animation: {
          duration: 500
        },
        maintainAspectRatio: false,
        resizeDelay: 200
      },
      plugins: [{
        id: "htmlLegend",
        afterUpdate(c, args, options) {
          const ul = legend.current;
          if (!ul)
            return;
          while (ul.firstChild) {
            ul.firstChild.remove();
          }
          const items = c.options.plugins.legend.labels.generateLabels(c);
          items.forEach((item) => {
            const li = document.createElement("li");
            li.style.marginRight = tailwindConfig().theme.margin[4];
            const button = document.createElement("button");
            button.style.display = "inline-flex";
            button.style.alignItems = "center";
            button.style.opacity = item.hidden ? ".3" : "";
            button.onclick = () => {
              c.setDatasetVisibility(item.datasetIndex, !c.isDatasetVisible(item.datasetIndex));
              c.update();
            };
            const box = document.createElement("span");
            box.style.display = "block";
            box.style.width = tailwindConfig().theme.width[3];
            box.style.height = tailwindConfig().theme.height[3];
            box.style.borderRadius = tailwindConfig().theme.borderRadius.full;
            box.style.marginRight = tailwindConfig().theme.margin[2];
            box.style.borderWidth = "3px";
            box.style.borderColor = item.fillStyle;
            box.style.pointerEvents = "none";
            const labelContainer = document.createElement("span");
            labelContainer.style.display = "flex";
            labelContainer.style.alignItems = "center";
            const value = document.createElement("span");
            value.style.color = tailwindConfig().theme.colors.slate[800];
            value.style.fontSize = tailwindConfig().theme.fontSize["3xl"][0];
            value.style.lineHeight = tailwindConfig().theme.fontSize["3xl"][1].lineHeight;
            value.style.fontWeight = tailwindConfig().theme.fontWeight.bold;
            value.style.marginRight = tailwindConfig().theme.margin[2];
            value.style.pointerEvents = "none";
            const label = document.createElement("span");
            label.style.color = tailwindConfig().theme.colors.slate[500];
            label.style.fontSize = tailwindConfig().theme.fontSize.sm[0];
            label.style.lineHeight = tailwindConfig().theme.fontSize.sm[1].lineHeight;
            const theValue = c.data.datasets[item.datasetIndex].data.reduce((a, b) => a + b, 0);
            const valueText = document.createTextNode(formatValue(theValue));
            const labelText = document.createTextNode(item.text);
            value.appendChild(valueText);
            label.appendChild(labelText);
            li.appendChild(button);
            button.appendChild(box);
            button.appendChild(labelContainer);
            labelContainer.appendChild(value);
            labelContainer.appendChild(label);
            ul.appendChild(li);
          });
        }
      }]
    });
    return () => chart.destroy();
  }, []);
  return /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement("div", {
    className: "px-5 py-3"
  }, /* @__PURE__ */ React19.createElement("ul", {
    ref: legend,
    className: "flex flex-wrap"
  })), /* @__PURE__ */ React19.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React19.createElement("canvas", {
    ref: canvas,
    width,
    height
  })));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/BarChart02.mjs
import { React as React20, useRef as useRef12, useEffect as useEffect12 } from "/libs/vendors-v0.0.1.mjs";
import {
  Chart as Chart4,
  BarController as BarController2,
  BarElement as BarElement2,
  LinearScale as LinearScale4,
  TimeScale as TimeScale4,
  Tooltip as Tooltip5,
  Legend as Legend2
} from "/libs/vendors-v0.0.1.mjs";
Chart4.register(BarController2, BarElement2, LinearScale4, TimeScale4, Tooltip5, Legend2);
var BarChart02 = ({
  data,
  width,
  height
}) => {
  const canvas = useRef12(null);
  useEffect12(() => {
    const ctx = canvas.current;
    const chart = new Chart4(ctx, {
      type: "bar",
      data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20
          }
        },
        scales: {
          y: {
            stacked: true,
            grid: {
              drawBorder: false
            },
            beginAtZero: true,
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(value)
            }
          },
          x: {
            stacked: true,
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM YY"
              }
            },
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              title: () => false,
              label: (context) => formatValue(context.parsed.y)
            }
          }
        },
        interaction: {
          intersect: false,
          mode: "nearest"
        },
        animation: {
          duration: 200
        },
        maintainAspectRatio: false,
        resizeDelay: 200
      }
    });
    return () => chart.destroy();
  }, []);
  return /* @__PURE__ */ React20.createElement("canvas", {
    ref: canvas,
    width,
    height
  });
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/RealtimeChart.mjs
import { React as React21, useRef as useRef13, useEffect as useEffect13 } from "/libs/vendors-v0.0.1.mjs";
import {
  Chart as Chart5,
  LineController as LineController3,
  LineElement as LineElement3,
  Filler as Filler3,
  PointElement as PointElement3,
  LinearScale as LinearScale5,
  TimeScale as TimeScale5,
  Tooltip as Tooltip6
} from "/libs/vendors-v0.0.1.mjs";
Chart5.register(LineController3, LineElement3, Filler3, PointElement3, LinearScale5, TimeScale5, Tooltip6);
var RealtimeChart = ({
  data,
  width,
  height
}) => {
  const canvas = useRef13(null);
  const chartValue = useRef13(null);
  const chartDeviation = useRef13(null);
  useEffect13(() => {
    const ctx = canvas.current;
    const chart = new Chart5(ctx, {
      type: "line",
      data,
      options: {
        layout: {
          padding: 20
        },
        scales: {
          y: {
            grid: {
              drawBorder: false
            },
            suggestedMin: 30,
            suggestedMax: 80,
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(value)
            }
          },
          x: {
            type: "time",
            time: {
              parser: "hh:mm:ss",
              unit: "second",
              tooltipFormat: "MMM DD, H:mm:ss a",
              displayFormats: {
                second: "H:mm:ss"
              }
            },
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            titleFont: {
              weight: "600"
            },
            callbacks: {
              label: (context) => formatValue(context.parsed.y)
            }
          }
        },
        interaction: {
          intersect: false,
          mode: "nearest"
        },
        animation: false,
        maintainAspectRatio: false,
        resizeDelay: 200
      }
    });
    return () => chart.destroy();
  }, [data]);
  useEffect13(() => {
    const currentValue = data.datasets[0].data[data.datasets[0].data.length - 1];
    const previousValue = data.datasets[0].data[data.datasets[0].data.length - 2];
    const diff = (currentValue - previousValue) / previousValue * 100;
    chartValue.current.innerHTML = data.datasets[0].data[data.datasets[0].data.length - 1];
    if (diff < 0) {
      chartDeviation.current.style.backgroundColor = tailwindConfig().theme.colors.yellow[500];
    } else {
      chartDeviation.current.style.backgroundColor = tailwindConfig().theme.colors.emerald[500];
    }
    chartDeviation.current.innerHTML = `${diff > 0 ? "+" : ""}${diff.toFixed(2)}%`;
  }, [data]);
  return /* @__PURE__ */ React21.createElement(React21.Fragment, null, /* @__PURE__ */ React21.createElement("div", {
    className: "px-5 py-3"
  }, /* @__PURE__ */ React21.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React21.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2 tabular-nums"
  }, "$", /* @__PURE__ */ React21.createElement("span", {
    ref: chartValue
  }, "57.81")), /* @__PURE__ */ React21.createElement("div", {
    ref: chartDeviation,
    className: "text-sm font-semibold text-white px-1.5 rounded-full"
  }))), /* @__PURE__ */ React21.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React21.createElement("canvas", {
    ref: canvas,
    data,
    width,
    height
  })));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/DoughnutChart.mjs
import { React as React22, useRef as useRef14, useEffect as useEffect14 } from "/libs/vendors-v0.0.1.mjs";
import {
  Chart as Chart6,
  DoughnutController,
  ArcElement,
  TimeScale as TimeScale6,
  Tooltip as Tooltip7
} from "/libs/vendors-v0.0.1.mjs";
Chart6.register(DoughnutController, ArcElement, TimeScale6, Tooltip7);
var DoughnutChart = ({
  data,
  width,
  height
}) => {
  const canvas = useRef14(null);
  const legend = useRef14(null);
  useEffect14(() => {
    const ctx = canvas.current;
    const chart = new Chart6(ctx, {
      type: "doughnut",
      data,
      options: {
        cutout: "80%",
        layout: {
          padding: 24
        },
        plugins: {
          legend: {
            display: false
          }
        },
        interaction: {
          intersect: false,
          mode: "nearest"
        },
        animation: {
          duration: 500
        },
        maintainAspectRatio: false,
        resizeDelay: 200
      },
      plugins: [{
        id: "htmlLegend",
        afterUpdate(c, args, options) {
          const ul = legend.current;
          if (!ul)
            return;
          while (ul.firstChild) {
            ul.firstChild.remove();
          }
          const items = c.options.plugins.legend.labels.generateLabels(c);
          items.forEach((item) => {
            const li = document.createElement("li");
            li.style.margin = tailwindConfig().theme.margin[1];
            const button = document.createElement("button");
            button.classList.add("btn-xs");
            button.style.backgroundColor = tailwindConfig().theme.colors.white;
            button.style.borderWidth = tailwindConfig().theme.borderWidth[1];
            button.style.borderColor = tailwindConfig().theme.colors.slate[200];
            button.style.color = tailwindConfig().theme.colors.slate[500];
            button.style.boxShadow = tailwindConfig().theme.boxShadow.md;
            button.style.opacity = item.hidden ? ".3" : "";
            button.onclick = () => {
              c.toggleDataVisibility(item.index, !item.index);
              c.update();
            };
            const box = document.createElement("span");
            box.style.display = "block";
            box.style.width = tailwindConfig().theme.width[2];
            box.style.height = tailwindConfig().theme.height[2];
            box.style.backgroundColor = item.fillStyle;
            box.style.borderRadius = tailwindConfig().theme.borderRadius.sm;
            box.style.marginRight = tailwindConfig().theme.margin[1];
            box.style.pointerEvents = "none";
            const label = document.createElement("span");
            label.style.display = "flex";
            label.style.alignItems = "center";
            const labelText = document.createTextNode(item.text);
            label.appendChild(labelText);
            li.appendChild(button);
            button.appendChild(box);
            button.appendChild(label);
            ul.appendChild(li);
          });
        }
      }]
    });
    return () => chart.destroy();
  }, []);
  return /* @__PURE__ */ React22.createElement("div", {
    className: "grow flex flex-col justify-center"
  }, /* @__PURE__ */ React22.createElement("div", null, /* @__PURE__ */ React22.createElement("canvas", {
    ref: canvas,
    width,
    height
  })), /* @__PURE__ */ React22.createElement("div", {
    className: "px-5 pt-2 pb-6"
  }, /* @__PURE__ */ React22.createElement("ul", {
    ref: legend,
    className: "flex flex-wrap justify-center -m-1"
  })));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/icon-01.svg
var icon_01_default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9Imljb24xLWIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTVCNEZDIiBvZmZzZXQ9IjAlIiAvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjODE4Q0Y4IiBvZmZzZXQ9IjEwMCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjI0LjUzNyUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iaWNvbjEtYyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0MzM4Q0EiIG9mZnNldD0iMCUiIC8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2MzY2RjEiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPHBhdGggaWQ9Imljb24xLWEiIGQ9Ik0xNiAwbDE2IDMyLTE2LTUtMTYgNXoiIC8+CiAgICA8L2RlZnM+CiAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPG1hc2sgaWQ9Imljb24xLWQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpY29uMS1hIiAvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGZpbGw9InVybCgjaWNvbjEtYikiIHhsaW5rOmhyZWY9IiNpY29uMS1hIiAvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjaWNvbjEtYykiIG1hc2s9InVybCgjaWNvbjEtZCkiIGQ9Ik0xNi02aDIwdjM4SDE2eiIgLz4KICAgIDwvZz4KPC9zdmc+";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard01.mjs
var DashboardCard01 = () => {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
      "06-01-2021",
      "07-01-2021",
      "08-01-2021",
      "09-01-2021",
      "10-01-2021",
      "11-01-2021",
      "12-01-2021",
      "01-01-2022",
      "02-01-2022",
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023"
    ],
    datasets: [
      {
        data: [
          732,
          610,
          610,
          504,
          504,
          504,
          349,
          349,
          504,
          342,
          504,
          610,
          391,
          192,
          154,
          273,
          191,
          191,
          126,
          263,
          349,
          252,
          423,
          622,
          470,
          532
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20
      },
      {
        data: [
          532,
          532,
          532,
          404,
          404,
          314,
          314,
          314,
          314,
          314,
          234,
          314,
          234,
          234,
          314,
          314,
          314,
          388,
          314,
          202,
          202,
          202,
          202,
          314,
          720,
          642
        ],
        borderColor: tailwindConfig().theme.colors.slate[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20
      }
    ]
  };
  return /* @__PURE__ */ React23.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "px-5 pt-5"
  }, /* @__PURE__ */ React23.createElement("header", {
    className: "flex justify-between items-start mb-2"
  }, /* @__PURE__ */ React23.createElement("img", {
    src: icon_01_default,
    width: "32",
    height: "32",
    alt: "Icon 01"
  }), /* @__PURE__ */ React23.createElement(DropdownEditMenu, {
    align: "right",
    className: "relative inline-flex"
  }, /* @__PURE__ */ React23.createElement("li", null, /* @__PURE__ */ React23.createElement(Link7, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 1")), /* @__PURE__ */ React23.createElement("li", null, /* @__PURE__ */ React23.createElement(Link7, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 2")), /* @__PURE__ */ React23.createElement("li", null, /* @__PURE__ */ React23.createElement(Link7, {
    className: "font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3",
    to: "#0"
  }, "Remove")))), /* @__PURE__ */ React23.createElement("h2", {
    className: "text-lg font-semibold text-slate-800 mb-2"
  }, "Acme Plus"), /* @__PURE__ */ React23.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase mb-1"
  }, "Sales"), /* @__PURE__ */ React23.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "$24,780"), /* @__PURE__ */ React23.createElement("div", {
    className: "text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full"
  }, "+49%"))), /* @__PURE__ */ React23.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React23.createElement(LineChart01, {
    data: chartData,
    width: 389,
    height: 128
  })));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard02.mjs
import { React as React24, Link as Link8 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/icon-02.svg
var icon_02_default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9Imljb24yLWIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQkFFNkZEIiBvZmZzZXQ9IjAlIiAvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzhCREY4IiBvZmZzZXQ9IjEwMCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjI1LjcxOCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iaWNvbjItYyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMjg0QzciIG9mZnNldD0iMCUiIC8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMjg0QzciIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPHBhdGggaWQ9Imljb24yLWEiIGQ9Ik0xNiAwbDE2IDMyLTE2LTUtMTYgNXoiIC8+CiAgICA8L2RlZnM+CiAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPG1hc2sgaWQ9Imljb24yLWQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpY29uMi1hIiAvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGZpbGw9InVybCgjaWNvbjItYikiIHhsaW5rOmhyZWY9IiNpY29uMi1hIiAvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjaWNvbjItYykiIG1hc2s9InVybCgjaWNvbjItZCkiIGQ9Ik0xNi02aDIwdjM4SDE2eiIgLz4KICAgIDwvZz4KPC9zdmc+";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard02.mjs
var DashboardCard02 = () => {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
      "06-01-2021",
      "07-01-2021",
      "08-01-2021",
      "09-01-2021",
      "10-01-2021",
      "11-01-2021",
      "12-01-2021",
      "01-01-2022",
      "02-01-2022",
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023"
    ],
    datasets: [
      {
        data: [
          622,
          622,
          426,
          471,
          365,
          365,
          238,
          324,
          288,
          206,
          324,
          324,
          500,
          409,
          409,
          273,
          232,
          273,
          500,
          570,
          767,
          808,
          685,
          767,
          685,
          685
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20
      },
      {
        data: [
          732,
          610,
          610,
          504,
          504,
          504,
          349,
          349,
          504,
          342,
          504,
          610,
          391,
          192,
          154,
          273,
          191,
          191,
          126,
          263,
          349,
          252,
          423,
          622,
          470,
          532
        ],
        borderColor: tailwindConfig().theme.colors.slate[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20
      }
    ]
  };
  return /* @__PURE__ */ React24.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React24.createElement("div", {
    className: "px-5 pt-5"
  }, /* @__PURE__ */ React24.createElement("header", {
    className: "flex justify-between items-start mb-2"
  }, /* @__PURE__ */ React24.createElement("img", {
    src: icon_02_default,
    width: "32",
    height: "32",
    alt: "Icon 02"
  }), /* @__PURE__ */ React24.createElement(DropdownEditMenu, {
    align: "right",
    className: "relative inline-flex"
  }, /* @__PURE__ */ React24.createElement("li", null, /* @__PURE__ */ React24.createElement(Link8, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 1")), /* @__PURE__ */ React24.createElement("li", null, /* @__PURE__ */ React24.createElement(Link8, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 2")), /* @__PURE__ */ React24.createElement("li", null, /* @__PURE__ */ React24.createElement(Link8, {
    className: "font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3",
    to: "#0"
  }, "Remove")))), /* @__PURE__ */ React24.createElement("h2", {
    className: "text-lg font-semibold text-slate-800 mb-2"
  }, "Acme Advanced"), /* @__PURE__ */ React24.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase mb-1"
  }, "Sales"), /* @__PURE__ */ React24.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React24.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "$17,489"), /* @__PURE__ */ React24.createElement("div", {
    className: "text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full"
  }, "-14%"))), /* @__PURE__ */ React24.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React24.createElement(LineChart01, {
    data: chartData,
    width: 389,
    height: 128
  })));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard03.mjs
import { React as React25, Link as Link9 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/icon-03.svg
var icon_03_default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9Imljb24zLWIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTJFOEYwIiBvZmZzZXQ9IjAlIiAvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTRBM0I4IiBvZmZzZXQ9IjEwMCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjI0LjUzNyUiIHgyPSI1MCUiIHkyPSI5OS4xNDIlIiBpZD0iaWNvbjMtYyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzQxNTUiIG9mZnNldD0iMCUiIC8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzQxNTUiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPHBhdGggaWQ9Imljb24zLWEiIGQ9Ik0xNiAwbDE2IDMyLTE2LTUtMTYgNXoiIC8+CiAgICA8L2RlZnM+CiAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPG1hc2sgaWQ9Imljb24zLWQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpY29uMy1hIiAvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGZpbGw9InVybCgjaWNvbjMtYikiIHhsaW5rOmhyZWY9IiNpY29uMy1hIiAvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjaWNvbjMtYykiIG1hc2s9InVybCgjaWNvbjMtZCkiIGQ9Ik0xNi02aDIwdjM4SDE2eiIgLz4KICAgIDwvZz4KPC9zdmc+";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard03.mjs
var DashboardCard03 = () => {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
      "06-01-2021",
      "07-01-2021",
      "08-01-2021",
      "09-01-2021",
      "10-01-2021",
      "11-01-2021",
      "12-01-2021",
      "01-01-2022",
      "02-01-2022",
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023"
    ],
    datasets: [
      {
        data: [
          540,
          466,
          540,
          466,
          385,
          432,
          334,
          334,
          289,
          289,
          200,
          289,
          222,
          289,
          289,
          403,
          554,
          304,
          289,
          270,
          134,
          270,
          829,
          344,
          388,
          364
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20
      },
      {
        data: [
          689,
          562,
          477,
          477,
          477,
          477,
          458,
          314,
          430,
          378,
          430,
          498,
          642,
          350,
          145,
          145,
          354,
          260,
          188,
          188,
          300,
          300,
          282,
          364,
          660,
          554
        ],
        borderColor: tailwindConfig().theme.colors.slate[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20
      }
    ]
  };
  return /* @__PURE__ */ React25.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "px-5 pt-5"
  }, /* @__PURE__ */ React25.createElement("header", {
    className: "flex justify-between items-start mb-2"
  }, /* @__PURE__ */ React25.createElement("img", {
    src: icon_03_default,
    width: "32",
    height: "32",
    alt: "Icon 03"
  }), /* @__PURE__ */ React25.createElement(DropdownEditMenu, {
    align: "right",
    className: "relative inline-flex"
  }, /* @__PURE__ */ React25.createElement("li", null, /* @__PURE__ */ React25.createElement(Link9, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 1")), /* @__PURE__ */ React25.createElement("li", null, /* @__PURE__ */ React25.createElement(Link9, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 2")), /* @__PURE__ */ React25.createElement("li", null, /* @__PURE__ */ React25.createElement(Link9, {
    className: "font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3",
    to: "#0"
  }, "Remove")))), /* @__PURE__ */ React25.createElement("h2", {
    className: "text-lg font-semibold text-slate-800 mb-2"
  }, "Acme Professional"), /* @__PURE__ */ React25.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase mb-1"
  }, "Sales"), /* @__PURE__ */ React25.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "$9,962"), /* @__PURE__ */ React25.createElement("div", {
    className: "text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full"
  }, "+49%"))), /* @__PURE__ */ React25.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React25.createElement(LineChart01, {
    data: chartData,
    width: 389,
    height: 128
  })));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard04.mjs
import { React as React26 } from "/libs/vendors-v0.0.1.mjs";
var DashboardCard04 = () => {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021"
    ],
    datasets: [
      {
        label: "Direct",
        data: [
          800,
          1600,
          900,
          1300,
          1950,
          1700
        ],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66
      },
      {
        label: "Indirect",
        data: [
          4900,
          2600,
          5350,
          4800,
          5200,
          4800
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66
      }
    ]
  };
  return /* @__PURE__ */ React26.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React26.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React26.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Direct VS Indirect")), /* @__PURE__ */ React26.createElement(BarChart01, {
    data: chartData,
    width: 595,
    height: 248
  }));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard05.mjs
import { React as React27, useState as useState10, useEffect as useEffect15 } from "/libs/vendors-v0.0.1.mjs";
var DashboardCard05 = () => {
  const [counter, setCounter] = useState10(0);
  const [increment, setIncrement] = useState10(0);
  const [range, setRange] = useState10(35);
  const data = [
    57.81,
    57.75,
    55.48,
    54.28,
    53.14,
    52.25,
    51.04,
    52.49,
    55.49,
    56.87,
    53.73,
    56.42,
    58.06,
    55.62,
    58.16,
    55.22,
    58.67,
    60.18,
    61.31,
    63.25,
    65.91,
    64.44,
    65.97,
    62.27,
    60.96,
    59.34,
    55.07,
    59.85,
    53.79,
    51.92,
    50.95,
    49.65,
    48.09,
    49.81,
    47.85,
    49.52,
    50.21,
    52.22,
    54.42,
    53.42,
    50.91,
    58.52,
    53.37,
    57.58,
    59.09,
    59.36,
    58.71,
    59.42,
    55.93,
    57.71,
    50.62,
    56.28,
    57.37,
    53.08,
    55.94,
    55.82,
    53.94,
    52.65,
    50.25
  ];
  const [slicedData, setSlicedData] = useState10(data.slice(0, range));
  const generateDates = () => {
    const now = new Date();
    const dates = [];
    data.forEach((v, i) => {
      dates.push(new Date(now - 2e3 - i * 2e3));
    });
    return dates;
  };
  const [slicedLabels, setSlicedLabels] = useState10(generateDates().slice(0, range).reverse());
  useEffect15(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 2e3);
    return () => clearInterval(interval);
  }, [counter]);
  useEffect15(() => {
    setIncrement(increment + 1);
    if (increment + range < data.length) {
      setSlicedData(([x, ...slicedData2]) => [...slicedData2, data[increment + range]]);
    } else {
      setIncrement(0);
      setRange(0);
    }
    setSlicedLabels(([x, ...slicedLabels2]) => [...slicedLabels2, new Date()]);
    return () => setIncrement(0);
  }, [counter]);
  const chartData = {
    labels: slicedLabels,
    datasets: [
      {
        data: slicedData,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20
      }
    ]
  };
  return /* @__PURE__ */ React27.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React27.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100 flex items-center"
  }, /* @__PURE__ */ React27.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Real Time Value"), /* @__PURE__ */ React27.createElement(Tooltip, {
    className: "ml-2"
  }, /* @__PURE__ */ React27.createElement("div", {
    className: "text-xs text-center whitespace-nowrap"
  }, "Built with ", /* @__PURE__ */ React27.createElement("a", {
    className: "underline",
    href: "https://www.chartjs.org/",
    target: "_blank",
    rel: "noreferrer"
  }, "Chart.js")))), /* @__PURE__ */ React27.createElement(RealtimeChart, {
    data: chartData,
    width: 595,
    height: 248
  }));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard06.mjs
import { React as React28 } from "/libs/vendors-v0.0.1.mjs";
var DashboardCard06 = () => {
  const chartData = {
    labels: ["United States", "Italy", "Other"],
    datasets: [
      {
        label: "Top Countries",
        data: [
          35,
          30,
          35
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800]
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900]
        ],
        hoverBorderColor: tailwindConfig().theme.colors.white
      }
    ]
  };
  return /* @__PURE__ */ React28.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React28.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React28.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Top Countries")), /* @__PURE__ */ React28.createElement(DoughnutChart, {
    data: chartData,
    width: 389,
    height: 260
  }));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard07.mjs
import { React as React29 } from "/libs/vendors-v0.0.1.mjs";
var DashboardCard07 = () => {
  return /* @__PURE__ */ React29.createElement("div", {
    className: "col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React29.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React29.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Top Channels")), /* @__PURE__ */ React29.createElement("div", {
    className: "p-3"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "overflow-x-auto"
  }, /* @__PURE__ */ React29.createElement("table", {
    className: "table-auto w-full"
  }, /* @__PURE__ */ React29.createElement("thead", {
    className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm"
  }, /* @__PURE__ */ React29.createElement("tr", null, /* @__PURE__ */ React29.createElement("th", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "font-semibold text-left"
  }, "Source")), /* @__PURE__ */ React29.createElement("th", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "font-semibold text-center"
  }, "Visitors")), /* @__PURE__ */ React29.createElement("th", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "font-semibold text-center"
  }, "Revenues")), /* @__PURE__ */ React29.createElement("th", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "font-semibold text-center"
  }, "Sales")), /* @__PURE__ */ React29.createElement("th", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "font-semibold text-center"
  }, "Conversion")))), /* @__PURE__ */ React29.createElement("tbody", {
    className: "text-sm font-medium divide-y divide-slate-100"
  }, /* @__PURE__ */ React29.createElement("tr", null, /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React29.createElement("svg", {
    className: "shrink-0 mr-2 sm:mr-3",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React29.createElement("circle", {
    fill: "#24292E",
    cx: "18",
    cy: "18",
    r: "18"
  }), /* @__PURE__ */ React29.createElement("path", {
    d: "M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z",
    fill: "#FFF"
  })), /* @__PURE__ */ React29.createElement("div", {
    className: "text-slate-800"
  }, "Github.com"))), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center"
  }, "2.4K")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center text-emerald-500"
  }, "$3,877")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center"
  }, "267")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center text-sky-500"
  }, "4.7%"))), /* @__PURE__ */ React29.createElement("tr", null, /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React29.createElement("svg", {
    className: "shrink-0 mr-2 sm:mr-3",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React29.createElement("circle", {
    fill: "#1DA1F2",
    cx: "18",
    cy: "18",
    r: "18"
  }), /* @__PURE__ */ React29.createElement("path", {
    d: "M26 13.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H10c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z",
    fill: "#FFF",
    fillRule: "nonzero"
  })), /* @__PURE__ */ React29.createElement("div", {
    className: "text-slate-800"
  }, "Twitter"))), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center"
  }, "2.2K")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center text-emerald-500"
  }, "$3,426")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center"
  }, "249")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center text-sky-500"
  }, "4.4%"))), /* @__PURE__ */ React29.createElement("tr", null, /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React29.createElement("svg", {
    className: "shrink-0 mr-2 sm:mr-3",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React29.createElement("circle", {
    fill: "#EA4335",
    cx: "18",
    cy: "18",
    r: "18"
  }), /* @__PURE__ */ React29.createElement("path", {
    d: "M18 17v2.4h4.1c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C21.6 11.7 20 11 18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H18z",
    fill: "#FFF",
    fillRule: "nonzero"
  })), /* @__PURE__ */ React29.createElement("div", {
    className: "text-slate-800"
  }, "Google (organic)"))), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center"
  }, "2.0K")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center text-emerald-500"
  }, "$2,444")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center"
  }, "224")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center text-sky-500"
  }, "4.2%"))), /* @__PURE__ */ React29.createElement("tr", null, /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React29.createElement("svg", {
    className: "shrink-0 mr-2 sm:mr-3",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React29.createElement("circle", {
    fill: "#4BC9FF",
    cx: "18",
    cy: "18",
    r: "18"
  }), /* @__PURE__ */ React29.createElement("path", {
    d: "M26 14.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C14 19.9 13.4 15 12 15c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3z",
    fill: "#FFF",
    fillRule: "nonzero"
  })), /* @__PURE__ */ React29.createElement("div", {
    className: "text-slate-800"
  }, "Vimeo.com"))), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center"
  }, "1.9K")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center text-emerald-500"
  }, "$2,236")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center"
  }, "220")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center text-sky-500"
  }, "4.2%"))), /* @__PURE__ */ React29.createElement("tr", null, /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React29.createElement("svg", {
    className: "shrink-0 mr-2 sm:mr-3",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React29.createElement("circle", {
    fill: "#0E2439",
    cx: "18",
    cy: "18",
    r: "18"
  }), /* @__PURE__ */ React29.createElement("path", {
    d: "M14.232 12.818V23H11.77V12.818h2.46zM15.772 23V12.818h2.462v4.087h4.012v-4.087h2.456V23h-2.456v-4.092h-4.012V23h-2.461z",
    fill: "#E6ECF4"
  })), /* @__PURE__ */ React29.createElement("div", {
    className: "text-slate-800"
  }, "Indiehackers.com"))), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center"
  }, "1.7K")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center text-emerald-500"
  }, "$2,034")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center"
  }, "204")), /* @__PURE__ */ React29.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-center text-sky-500"
  }, "3.9%"))))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard08.mjs
import { React as React30 } from "/libs/vendors-v0.0.1.mjs";
var DashboardCard08 = () => {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
      "06-01-2021",
      "07-01-2021",
      "08-01-2021",
      "09-01-2021",
      "10-01-2021",
      "11-01-2021",
      "12-01-2021",
      "01-01-2022",
      "02-01-2022",
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023"
    ],
    datasets: [
      {
        label: "Current",
        data: [
          73,
          64,
          73,
          69,
          104,
          104,
          164,
          164,
          120,
          120,
          120,
          148,
          142,
          104,
          122,
          110,
          104,
          152,
          166,
          233,
          268,
          252,
          284,
          284,
          333,
          323
        ],
        borderColor: tailwindConfig().theme.colors.indigo[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20
      },
      {
        label: "Previous",
        data: [
          184,
          86,
          42,
          378,
          42,
          243,
          38,
          120,
          0,
          0,
          42,
          0,
          84,
          0,
          276,
          0,
          124,
          42,
          124,
          88,
          88,
          215,
          156,
          88,
          124,
          64
        ],
        borderColor: tailwindConfig().theme.colors.blue[400],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
        clip: 20
      },
      {
        label: "Average",
        data: [
          122,
          170,
          192,
          86,
          102,
          124,
          115,
          115,
          56,
          104,
          0,
          72,
          208,
          186,
          223,
          188,
          114,
          162,
          200,
          150,
          118,
          118,
          76,
          122,
          230,
          268
        ],
        borderColor: tailwindConfig().theme.colors.emerald[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.emerald[500],
        clip: 20
      }
    ]
  };
  return /* @__PURE__ */ React30.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React30.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100 flex items-center"
  }, /* @__PURE__ */ React30.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Sales Over Time (all stores)")), /* @__PURE__ */ React30.createElement(LineChart02, {
    data: chartData,
    width: 595,
    height: 248
  }));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard09.mjs
import { React as React31 } from "/libs/vendors-v0.0.1.mjs";
var DashboardCard09 = () => {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021"
    ],
    datasets: [
      {
        label: "Stack 1",
        data: [
          6200,
          9200,
          6600,
          8800,
          5200,
          9200
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66
      },
      {
        label: "Stack 2",
        data: [
          -4e3,
          -2600,
          -5350,
          -4e3,
          -7500,
          -2e3
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[300],
        barPercentage: 0.66,
        categoryPercentage: 0.66
      }
    ]
  };
  return /* @__PURE__ */ React31.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React31.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100 flex items-center"
  }, /* @__PURE__ */ React31.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Sales VS Refunds"), /* @__PURE__ */ React31.createElement(Tooltip, {
    className: "ml-2",
    size: "lg"
  }, /* @__PURE__ */ React31.createElement("div", {
    className: "text-sm"
  }, "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."))), /* @__PURE__ */ React31.createElement("div", {
    className: "px-5 py-3"
  }, /* @__PURE__ */ React31.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React31.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "+$6,796"), /* @__PURE__ */ React31.createElement("div", {
    className: "text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full"
  }, "-34%"))), /* @__PURE__ */ React31.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React31.createElement(BarChart02, {
    data: chartData,
    width: 595,
    height: 248
  })));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard10.mjs
import { React as React32 } from "/libs/vendors-v0.0.1.mjs";
var DashboardCard10 = () => {
  return /* @__PURE__ */ React32.createElement("div", {
    className: "col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React32.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React32.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Recent Activity")), /* @__PURE__ */ React32.createElement("div", {
    className: "p-3"
  }, /* @__PURE__ */ React32.createElement("div", null, /* @__PURE__ */ React32.createElement("header", {
    className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2"
  }, "Today"), /* @__PURE__ */ React32.createElement("ul", {
    className: "my-1"
  }, /* @__PURE__ */ React32.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3"
  }, /* @__PURE__ */ React32.createElement("svg", {
    className: "w-9 h-9 fill-current text-indigo-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React32.createElement("path", {
    d: "M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"
  }))), /* @__PURE__ */ React32.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Nick Mark"), " mentioned ", /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-slate-800",
    href: "#0"
  }, "Sara Smith"), " in a new post"), /* @__PURE__ */ React32.createElement("div", {
    className: "shrink-0 self-end ml-2"
  }, /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    href: "#0"
  }, "View", /* @__PURE__ */ React32.createElement("span", {
    className: "hidden sm:inline"
  }, " ->")))))), /* @__PURE__ */ React32.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3"
  }, /* @__PURE__ */ React32.createElement("svg", {
    className: "w-9 h-9 fill-current text-rose-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React32.createElement("path", {
    d: "M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z"
  }))), /* @__PURE__ */ React32.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "self-center"
  }, "The post ", /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-slate-800",
    href: "#0"
  }, "Post Name"), " was removed by ", /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Nick Mark")), /* @__PURE__ */ React32.createElement("div", {
    className: "shrink-0 self-end ml-2"
  }, /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    href: "#0"
  }, "View", /* @__PURE__ */ React32.createElement("span", {
    className: "hidden sm:inline"
  }, " ->")))))), /* @__PURE__ */ React32.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3"
  }, /* @__PURE__ */ React32.createElement("svg", {
    className: "w-9 h-9 fill-current text-emerald-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React32.createElement("path", {
    d: "M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z"
  }))), /* @__PURE__ */ React32.createElement("div", {
    className: "grow flex items-center text-sm py-2"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Patrick Sullivan"), " published a new ", /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-slate-800",
    href: "#0"
  }, "post")), /* @__PURE__ */ React32.createElement("div", {
    className: "shrink-0 self-end ml-2"
  }, /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    href: "#0"
  }, "View", /* @__PURE__ */ React32.createElement("span", {
    className: "hidden sm:inline"
  }, " ->")))))))), /* @__PURE__ */ React32.createElement("div", null, /* @__PURE__ */ React32.createElement("header", {
    className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2"
  }, "Yesterday"), /* @__PURE__ */ React32.createElement("ul", {
    className: "my-1"
  }, /* @__PURE__ */ React32.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-sky-500 my-2 mr-3"
  }, /* @__PURE__ */ React32.createElement("svg", {
    className: "w-9 h-9 fill-current text-sky-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React32.createElement("path", {
    d: "M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z"
  }))), /* @__PURE__ */ React32.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "240+"), " users have subscribed to ", /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-slate-800",
    href: "#0"
  }, "Newsletter #1")), /* @__PURE__ */ React32.createElement("div", {
    className: "shrink-0 self-end ml-2"
  }, /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    href: "#0"
  }, "View", /* @__PURE__ */ React32.createElement("span", {
    className: "hidden sm:inline"
  }, " ->")))))), /* @__PURE__ */ React32.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3"
  }, /* @__PURE__ */ React32.createElement("svg", {
    className: "w-9 h-9 fill-current text-indigo-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React32.createElement("path", {
    d: "M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"
  }))), /* @__PURE__ */ React32.createElement("div", {
    className: "grow flex items-center text-sm py-2"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "self-center"
  }, "The post ", /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-slate-800",
    href: "#0"
  }, "Post Name"), " was suspended by ", /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Nick Mark")), /* @__PURE__ */ React32.createElement("div", {
    className: "shrink-0 self-end ml-2"
  }, /* @__PURE__ */ React32.createElement("a", {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    href: "#0"
  }, "View", /* @__PURE__ */ React32.createElement("span", {
    className: "hidden sm:inline"
  }, " ->"))))))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/components/DashboardCard11.mjs
import { React as React33 } from "/libs/vendors-v0.0.1.mjs";
var DashboardCard11 = () => {
  return /* @__PURE__ */ React33.createElement("div", {
    className: "col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React33.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React33.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Income/Expenses")), /* @__PURE__ */ React33.createElement("div", {
    className: "p-3"
  }, /* @__PURE__ */ React33.createElement("div", null, /* @__PURE__ */ React33.createElement("header", {
    className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2"
  }, "Today"), /* @__PURE__ */ React33.createElement("ul", {
    className: "my-1"
  }, /* @__PURE__ */ React33.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3"
  }, /* @__PURE__ */ React33.createElement("svg", {
    className: "w-9 h-9 fill-current text-rose-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z"
  }))), /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Qonto"), " billing"), /* @__PURE__ */ React33.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React33.createElement("span", {
    className: "font-medium text-slate-800"
  }, "-$49.88"))))), /* @__PURE__ */ React33.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3"
  }, /* @__PURE__ */ React33.createElement("svg", {
    className: "w-9 h-9 fill-current text-emerald-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z"
  }))), /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Cruip.com"), " Market Ltd 70 Wilson St London"), /* @__PURE__ */ React33.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React33.createElement("span", {
    className: "font-medium text-emerald-500"
  }, "+249.88"))))), /* @__PURE__ */ React33.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3"
  }, /* @__PURE__ */ React33.createElement("svg", {
    className: "w-9 h-9 fill-current text-emerald-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z"
  }))), /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Notion Labs Inc")), /* @__PURE__ */ React33.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React33.createElement("span", {
    className: "font-medium text-emerald-500"
  }, "+99.99"))))), /* @__PURE__ */ React33.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3"
  }, /* @__PURE__ */ React33.createElement("svg", {
    className: "w-9 h-9 fill-current text-emerald-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z"
  }))), /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Market Cap Ltd")), /* @__PURE__ */ React33.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React33.createElement("span", {
    className: "font-medium text-emerald-500"
  }, "+1,200.88"))))), /* @__PURE__ */ React33.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-slate-200 my-2 mr-3"
  }, /* @__PURE__ */ React33.createElement("svg", {
    className: "w-9 h-9 fill-current text-slate-400",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M21.477 22.89l-8.368-8.367a6 6 0 008.367 8.367zm1.414-1.413a6 6 0 00-8.367-8.367l8.367 8.367zM18 26a8 8 0 110-16 8 8 0 010 16z"
  }))), /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "App.com"), " Market Ltd 70 Wilson St London"), /* @__PURE__ */ React33.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React33.createElement("span", {
    className: "font-medium text-slate-800 line-through"
  }, "+$99.99"))))), /* @__PURE__ */ React33.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3"
  }, /* @__PURE__ */ React33.createElement("svg", {
    className: "w-9 h-9 fill-current text-rose-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z"
  }))), /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex items-center text-sm py-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "App.com"), " Market Ltd 70 Wilson St London"), /* @__PURE__ */ React33.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React33.createElement("span", {
    className: "font-medium text-slate-800"
  }, "-$49.88")))))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/dash/Dashboard.mjs
var Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState11(false);
  return /* @__PURE__ */ React34.createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /* @__PURE__ */ React34.createElement(Sidebar, {
    sidebarOpen,
    setSidebarOpen
  }), /* @__PURE__ */ React34.createElement("div", {
    className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
  }, /* @__PURE__ */ React34.createElement(Header, {
    sidebarOpen,
    setSidebarOpen
  }), /* @__PURE__ */ React34.createElement("main", null, /* @__PURE__ */ React34.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"
  }, /* @__PURE__ */ React34.createElement(WelcomeBanner, null), /* @__PURE__ */ React34.createElement("div", {
    className: "sm:flex sm:justify-between sm:items-center mb-8"
  }, /* @__PURE__ */ React34.createElement(DashboardAvatars, null), /* @__PURE__ */ React34.createElement("div", {
    className: "grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
  }, /* @__PURE__ */ React34.createElement(DropdownFilter, {
    align: "right"
  }), /* @__PURE__ */ React34.createElement(Datepicker, {
    align: "right"
  }), /* @__PURE__ */ React34.createElement("button", {
    className: "btn bg-indigo-500 hover:bg-indigo-600 text-white"
  }, /* @__PURE__ */ React34.createElement("svg", {
    className: "w-4 h-4 fill-current opacity-50 shrink-0",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React34.createElement("path", {
    d: "M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
  })), /* @__PURE__ */ React34.createElement("span", {
    className: "hidden xs:block ml-2"
  }, "Add View")))), /* @__PURE__ */ React34.createElement("div", {
    className: "grid grid-cols-12 gap-6"
  }, /* @__PURE__ */ React34.createElement(DashboardCard01, null), /* @__PURE__ */ React34.createElement(DashboardCard02, null), /* @__PURE__ */ React34.createElement(DashboardCard03, null), /* @__PURE__ */ React34.createElement(DashboardCard04, null), /* @__PURE__ */ React34.createElement(DashboardCard05, null), /* @__PURE__ */ React34.createElement(DashboardCard06, null), /* @__PURE__ */ React34.createElement(DashboardCard07, null), /* @__PURE__ */ React34.createElement(DashboardCard08, null), /* @__PURE__ */ React34.createElement(DashboardCard09, null), /* @__PURE__ */ React34.createElement(DashboardCard10, null), /* @__PURE__ */ React34.createElement(DashboardCard11, null))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/index.mjs
var App = () => {
  const location = useLocation2();
  useEffect16(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);
  return /* @__PURE__ */ React35.createElement(React35.Fragment, null, /* @__PURE__ */ React35.createElement(Routes, null, /* @__PURE__ */ React35.createElement(Route, {
    exact: true,
    path: "/",
    element: /* @__PURE__ */ React35.createElement(SignIn, null)
  }), /* @__PURE__ */ React35.createElement(Route, {
    exact: true,
    path: "/dash",
    element: /* @__PURE__ */ React35.createElement(Dashboard, null)
  }), /* @__PURE__ */ React35.createElement(Route, {
    path: "*",
    element: /* @__PURE__ */ React35.createElement(SignIn, null)
  })));
};
var rootElement = document.getElementById("root");
createRoot(rootElement).render(/* @__PURE__ */ React35.createElement(React35.StrictMode, null, /* @__PURE__ */ React35.createElement(Router, null, /* @__PURE__ */ React35.createElement(App, null))));

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/index.mjs
import { React as React25, createRoot, useEffect as useEffect15 } from "/libs/vendors-v0.0.1.mjs";
import { BrowserRouter as Router, Route, Routes, useLocation as useLocation3 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/auth/SignIn.mjs
import { React, Link } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/auth-image.jpg
var auth_image_default = "./assets/auth-image.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/libs/assets/images/auth-decoration.png
var auth_decoration_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbQAAAHACAMAAAD9WW2jAAADAFBMVEVHcEyFi/f///+EjPr////////V1/3////6+v/Lz/////////////////////////////+FkPmDjfn///////////////////////////+CjPj///+IkvqBjPj///+Aivf///////////////////////+ZpfyGkfqCjPh/iPb///////+Un/z///////99hfSBjPmCjfiBiveCjfn///////+FkPmBi/eIlPmbqf2EjvqcqfxmZuScqvyBjPn///9SS9Wcqvuerf+Aivb///+PnPqLmPqMmPqfrf5QStVNRdGFkPpQSNSRnfpucOifrP2Bivb///9hYOCerfxKQM+CjPh0ee6Ej/lxdeuVovtTTtZqbeefrv1tb+RFOsuLl/tEOctjYuGisP1jYuFEOcubqfxTTtZ5gPGYpvyPm/uUoPtORtFzeOxXUdh9iPWbqPyQnPuKlvmJlfmLl/mAivaSn/qIlPmBi/d9hvV/ifaMmPmToPqGkvmNmfp6gfKVovuUofuaqPt7g/OHk/mQnfqZp/uEj/mOm/mGkvh/iPZ4f/CPnPqRnvqFkfl+h/WFkPiQnPqdrPx5gPF+h/R0ee1yduuCjfmGkfl+iPWPm/p/iPVvcumPnPmbqfuMmPqWo/prbed8hPOXpftzeO19hvR1e+5wdOp/ifeDjvlyd+x6gvKdq/t2fO9uceiXpPqHk/h8hfNoaORiYeBsb+d3fu9tcOifrfxDOMpqbOZfXd6BjPiAi/aAivV2fO6Ik/mYpfpmZ+NcWdyJlPloauV4fvCNmvmAivd8hPKWo/t6gvF7g/JaV9t9hvNRS9RxdetUTtZkZOFmZuNdW913fe91eu2Ai/h/ivaBi/ZlZeJgX96isfxZVdqgr/xVUNdPSNOIlPhhYN+RnvlYVNlNRtGHkvhWUtijsvyLmPmOmvp3ffBjY+FKQs9IP85HPc2aqPpqa+ZFO8tMQ9Bpa+WLl/qKlfmerPyUofqKl/l8hfKOmPSAhu2FjfCEj/aTnvaJlPWJkvHP4bICAAAAcXRSTlMADr4b0d0H4AEEIhQPG9mnOC8jtsuVxTAKi2M/QsHWtK8qg09felh1kW5VoRdaRlv5pk3LZm3k2btue7Q8nPWcTswq73GK0aI+K4L0aON+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";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/auth/SignIn.mjs
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
  }, "Welcome back! \u2728"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-end mt-6"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3",
    to: "/"
  }, "Google"), /* @__PURE__ */ React.createElement(Link, {
    className: "btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3",
    to: "/"
  }, "Guest")), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4 pt-2"
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

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/auth/AuthProvider.mjs
import { React as React2, Navigate, useLocation } from "/libs/vendors-v0.0.1.mjs";
var AuthContext = React2.createContext(null);
var AuthProvider = ({ children }) => {
  let [user, setUser] = React2.useState(null);
  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };
  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };
  let value = { user, signin, signout };
  return /* @__PURE__ */ React2.createElement(AuthContext.Provider, {
    value
  }, children);
};
var RequireAuth = ({ children }) => {
  const auth = React2.useContext(AuthContext);
  const location = useLocation();
  if (!auth.user) {
    return /* @__PURE__ */ React2.createElement(Navigate, {
      to: "/",
      state: { from: location },
      replace: true
    });
  }
  return children;
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/3stats/Dashboard.mjs
import { React as React24, useState as useState10 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/partials/src/Sidebar.mjs
import { React as React4, useState as useState2, useEffect, useRef } from "/libs/vendors-v0.0.1.mjs";
import { NavLink, useLocation as useLocation2 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/partials/src/SidebarLinkGroup.mjs
import { React as React3, useState } from "/libs/vendors-v0.0.1.mjs";
var SidebarLinkGroup = ({
  children,
  activecondition
}) => {
  const [open, setOpen] = useState(activecondition);
  const handleClick = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ React3.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && "bg-slate-900"}`
  }, children(handleClick, open));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/partials/src/Sidebar.mjs
var Sidebar = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  const location = useLocation2();
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
  return /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("div", {
    className: `fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
    "aria-hidden": "true"
  }), /* @__PURE__ */ React4.createElement("div", {
    id: "sidebar",
    ref: sidebar,
    className: `flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "flex justify-between mb-10 pr-3 sm:px-2"
  }, /* @__PURE__ */ React4.createElement("button", {
    ref: trigger,
    className: "lg:hidden text-slate-500 hover:text-slate-400",
    onClick: () => setSidebarOpen(!sidebarOpen),
    "aria-controls": "sidebar",
    "aria-expanded": sidebarOpen
  }, /* @__PURE__ */ React4.createElement("span", {
    className: "sr-only"
  }, "Close sidebar"), /* @__PURE__ */ React4.createElement("svg", {
    className: "w-6 h-6 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
  }))), /* @__PURE__ */ React4.createElement(NavLink, {
    end: true,
    to: "/",
    className: "block"
  }, /* @__PURE__ */ React4.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, /* @__PURE__ */ React4.createElement("defs", null, /* @__PURE__ */ React4.createElement("linearGradient", {
    x1: "28.538%",
    y1: "20.229%",
    x2: "100%",
    y2: "108.156%",
    id: "logo-a"
  }, /* @__PURE__ */ React4.createElement("stop", {
    stopColor: "#A5B4FC",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React4.createElement("stop", {
    stopColor: "#A5B4FC",
    offset: "100%"
  })), /* @__PURE__ */ React4.createElement("linearGradient", {
    x1: "88.638%",
    y1: "29.267%",
    x2: "22.42%",
    y2: "100%",
    id: "logo-b"
  }, /* @__PURE__ */ React4.createElement("stop", {
    stopColor: "#38BDF8",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React4.createElement("stop", {
    stopColor: "#38BDF8",
    offset: "100%"
  }))), /* @__PURE__ */ React4.createElement("rect", {
    fill: "#6366F1",
    width: "32",
    height: "32",
    rx: "16"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",
    fill: "#4F46E5"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",
    fill: "url(#logo-a)"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",
    fill: "url(#logo-b)"
  })))), /* @__PURE__ */ React4.createElement("div", {
    className: "space-y-8"
  }, /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("h3", {
    className: "text-xs uppercase text-slate-500 font-semibold pl-3"
  }, /* @__PURE__ */ React4.createElement("span", {
    className: "hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6",
    "aria-hidden": "true"
  }, "\u2022\u2022\u2022"), /* @__PURE__ */ React4.createElement("span", {
    className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
  }, "Pages")), /* @__PURE__ */ React4.createElement("ul", {
    className: "mt-3"
  }, /* @__PURE__ */ React4.createElement(SidebarLinkGroup, {
    activecondition: pathname === "/" || pathname.includes("dashboard")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${(pathname === "/" || pathname.includes("dashboard")) && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React4.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React4.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React4.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React4.createElement("path", {
      className: `fill-current text-slate-400 ${(pathname === "/" || pathname.includes("dashboard")) && "!text-indigo-500"}`,
      d: "M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
    }), /* @__PURE__ */ React4.createElement("path", {
      className: `fill-current text-slate-600 ${(pathname === "/" || pathname.includes("dashboard")) && "text-indigo-600"}`,
      d: "M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
    }), /* @__PURE__ */ React4.createElement("path", {
      className: `fill-current text-slate-400 ${(pathname === "/" || pathname.includes("dashboard")) && "text-indigo-200"}`,
      d: "M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
    })), /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Dashboard")), /* @__PURE__ */ React4.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React4.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React4.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React4.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React4.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Main"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/dashboard/analytics",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Analytics"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/dashboard/fintech",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Fintech"))))));
  }), /* @__PURE__ */ React4.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("ecommerce")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("ecommerce") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React4.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React4.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React4.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React4.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("ecommerce") && "text-indigo-300"}`,
      d: "M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
    }), /* @__PURE__ */ React4.createElement("path", {
      className: `fill-current text-slate-700 ${pathname.includes("ecommerce") && "!text-indigo-600"}`,
      d: "M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
    }), /* @__PURE__ */ React4.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("ecommerce") && "text-indigo-500"}`,
      d: "M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
    })), /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "E-Commerce")), /* @__PURE__ */ React4.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React4.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React4.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React4.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React4.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/ecommerce/customers",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Customers"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/ecommerce/orders",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Orders"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/ecommerce/invoices",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Invoices"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/ecommerce/shop",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Shop"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/ecommerce/shop-2",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Shop 2"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/ecommerce/product",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Single Product"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/ecommerce/cart",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cart"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/ecommerce/cart-2",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cart 2"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/ecommerce/cart-3",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cart 3"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/ecommerce/pay",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Pay"))))));
  }), /* @__PURE__ */ React4.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("campaigns") && "bg-slate-900"}`
  }, /* @__PURE__ */ React4.createElement(NavLink, {
    end: true,
    to: "/campaigns",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("campaigns") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React4.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("campaigns") && "text-indigo-500"}`,
    d: "M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
  }), /* @__PURE__ */ React4.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("campaigns") && "text-indigo-300"}`,
    d: "M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
  })), /* @__PURE__ */ React4.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Campaigns")))), /* @__PURE__ */ React4.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("settings")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("settings") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React4.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React4.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React4.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React4.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("settings") && "text-indigo-500"}`,
      d: "M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
    }), /* @__PURE__ */ React4.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("settings") && "text-indigo-300"}`,
      d: "M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
    }), /* @__PURE__ */ React4.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("settings") && "text-indigo-500"}`,
      d: "M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
    }), /* @__PURE__ */ React4.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("settings") && "text-indigo-300"}`,
      d: "M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
    })), /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Settings")), /* @__PURE__ */ React4.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React4.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React4.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React4.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React4.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/settings/account",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "My Account"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/settings/notifications",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "My Notifications"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/settings/apps",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Connected Apps"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/settings/plans",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Plans"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/settings/billing",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Billing & Invoices"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/settings/feedback",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Give Feedback"))))));
  }), /* @__PURE__ */ React4.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("utility")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("utility") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React4.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React4.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React4.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React4.createElement("circle", {
      className: `fill-current text-slate-400 ${pathname.includes("utility") && "text-indigo-300"}`,
      cx: "18.5",
      cy: "5.5",
      r: "4.5"
    }), /* @__PURE__ */ React4.createElement("circle", {
      className: `fill-current text-slate-600 ${pathname.includes("utility") && "text-indigo-500"}`,
      cx: "5.5",
      cy: "5.5",
      r: "4.5"
    }), /* @__PURE__ */ React4.createElement("circle", {
      className: `fill-current text-slate-600 ${pathname.includes("utility") && "text-indigo-500"}`,
      cx: "18.5",
      cy: "18.5",
      r: "4.5"
    }), /* @__PURE__ */ React4.createElement("circle", {
      className: `fill-current text-slate-400 ${pathname.includes("utility") && "text-indigo-300"}`,
      cx: "5.5",
      cy: "18.5",
      r: "4.5"
    })), /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Utility")), /* @__PURE__ */ React4.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React4.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React4.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React4.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React4.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/utility/changelog",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Changelog"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/utility/roadmap",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Roadmap"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/utility/faqs",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "FAQs"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/utility/empty-state",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Empty State"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/utility/404",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "404"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/utility/knowledge-base",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Knowledge Base"))))));
  }))), /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("h3", {
    className: "text-xs uppercase text-slate-500 font-semibold pl-3"
  }, /* @__PURE__ */ React4.createElement("span", {
    className: "hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6",
    "aria-hidden": "true"
  }, "\u2022\u2022\u2022"), /* @__PURE__ */ React4.createElement("span", {
    className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
  }, "More")), /* @__PURE__ */ React4.createElement("ul", {
    className: "mt-3"
  }, /* @__PURE__ */ React4.createElement(SidebarLinkGroup, {
    activecondition: pathname.includes("component")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("component") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React4.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React4.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React4.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React4.createElement("circle", {
      className: `fill-current text-slate-600 ${pathname.includes("component") && "text-indigo-500"}`,
      cx: "16",
      cy: "8",
      r: "8"
    }), /* @__PURE__ */ React4.createElement("circle", {
      className: `fill-current text-slate-400 ${pathname.includes("component") && "text-indigo-300"}`,
      cx: "8",
      cy: "16",
      r: "8"
    })), /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Components")), /* @__PURE__ */ React4.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React4.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React4.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React4.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React4.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/button",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Button"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/form",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Input Form"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/dropdown",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Dropdown"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/alert",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Alert & Banner"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/modal",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Modal"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/pagination",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Pagination"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/tabs",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Tabs"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/breadcrumb",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Breadcrumb"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/badge",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Badge"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/avatar",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Avatar"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/tooltip",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Tooltip"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/accordion",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Accordion"))), /* @__PURE__ */ React4.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React4.createElement(NavLink, {
      end: true,
      to: "/component/icons",
      className: ({ isActive }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-indigo-500" : "")
    }, /* @__PURE__ */ React4.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Icons"))))));
  })))), /* @__PURE__ */ React4.createElement("div", {
    className: "pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "px-3 py-2"
  }, /* @__PURE__ */ React4.createElement("button", {
    onClick: () => setSidebarExpanded(!sidebarExpanded)
  }, /* @__PURE__ */ React4.createElement("span", {
    className: "sr-only"
  }, "Expand / collapse sidebar"), /* @__PURE__ */ React4.createElement("svg", {
    className: "w-6 h-6 fill-current sidebar-expanded:rotate-180",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React4.createElement("path", {
    className: "text-slate-400",
    d: "M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
  }), /* @__PURE__ */ React4.createElement("path", {
    className: "text-slate-600",
    d: "M3 23H1V1h2z"
  })))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/partials/src/Header.mjs
import { React as React15, useState as useState9 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/ModalSearch.mjs
import { React as React6, useRef as useRef3, useEffect as useEffect3, Link as Link2 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/utils/Transition.mjs
import { React as React5, useRef as useRef2, useEffect as useEffect2, useContext } from "/libs/vendors-v0.0.1.mjs";
import { CSSTransition as ReactCSSTransition } from "/libs/vendors-v0.0.1.mjs";
var TransitionContext = React5.createContext({
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
  const nodeRef = React5.useRef(null);
  const Component2 = tag;
  return /* @__PURE__ */ React5.createElement(ReactCSSTransition, {
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
  }, /* @__PURE__ */ React5.createElement(Component2, {
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
    return /* @__PURE__ */ React5.createElement(CSSTransition, {
      appear: parent.appear || !parent.isInitialRender,
      show: parent.show,
      ...rest
    });
  }
  return /* @__PURE__ */ React5.createElement(TransitionContext.Provider, {
    value: {
      parent: {
        show,
        isInitialRender,
        appear
      }
    }
  }, /* @__PURE__ */ React5.createElement(CSSTransition, {
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
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(Transition, {
    className: "fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",
    show: modalOpen,
    enter: "transition ease-out duration-200",
    enterStart: "opacity-0",
    enterEnd: "opacity-100",
    leave: "transition ease-out duration-100",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React6.createElement(Transition, {
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
  }, /* @__PURE__ */ React6.createElement("div", {
    ref: modalContent,
    className: "bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
  }, /* @__PURE__ */ React6.createElement("form", {
    className: "border-b border-slate-200"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React6.createElement("label", {
    htmlFor: searchId,
    className: "sr-only"
  }, "Search"), /* @__PURE__ */ React6.createElement("input", {
    id: searchId,
    className: "w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4",
    type: "search",
    placeholder: "Search Anything\u2026",
    ref: searchInput
  }), /* @__PURE__ */ React6.createElement("button", {
    className: "absolute inset-0 right-auto group",
    type: "submit",
    "aria-label": "Search"
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
  }), /* @__PURE__ */ React6.createElement("path", {
    d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
  }))))), /* @__PURE__ */ React6.createElement("div", {
    className: "py-4 px-2"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "mb-3 last:mb-0"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase px-2 mb-2"
  }, "Recent searches"), /* @__PURE__ */ React6.createElement("ul", {
    className: "text-sm"
  }, /* @__PURE__ */ React6.createElement("li", null, /* @__PURE__ */ React6.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React6.createElement("span", null, "Form Builder - 23 hours on-demand video"))), /* @__PURE__ */ React6.createElement("li", null, /* @__PURE__ */ React6.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React6.createElement("span", null, "Access Mosaic on mobile and TV"))), /* @__PURE__ */ React6.createElement("li", null, /* @__PURE__ */ React6.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React6.createElement("span", null, "Product Update - Q4 2021"))), /* @__PURE__ */ React6.createElement("li", null, /* @__PURE__ */ React6.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React6.createElement("span", null, "Master Digital Marketing Strategy course"))), /* @__PURE__ */ React6.createElement("li", null, /* @__PURE__ */ React6.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React6.createElement("span", null, "Dedicated forms for products"))), /* @__PURE__ */ React6.createElement("li", null, /* @__PURE__ */ React6.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React6.createElement("span", null, "Product Update - Q4 2021"))))), /* @__PURE__ */ React6.createElement("div", {
    className: "mb-3 last:mb-0"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase px-2 mb-2"
  }, "Recent pages"), /* @__PURE__ */ React6.createElement("ul", {
    className: "text-sm"
  }, /* @__PURE__ */ React6.createElement("li", null, /* @__PURE__ */ React6.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
  })), /* @__PURE__ */ React6.createElement("span", null, /* @__PURE__ */ React6.createElement("span", {
    className: "font-medium text-slate-800 group-hover:text-white"
  }, "Messages"), " - Conversation / \u2026 / Mike Mills"))), /* @__PURE__ */ React6.createElement("li", null, /* @__PURE__ */ React6.createElement(Link2, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
  })), /* @__PURE__ */ React6.createElement("span", null, /* @__PURE__ */ React6.createElement("span", {
    className: "font-medium text-slate-800 group-hover:text-white"
  }, "Messages"), " - Conversation / \u2026 / Eva Patrick")))))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/DropdownNotifications.mjs
import { React as React7, useState as useState3, useRef as useRef4, useEffect as useEffect4, Link as Link3 } from "/libs/vendors-v0.0.1.mjs";
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
  }, "Notifications"), /* @__PURE__ */ React7.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React7.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
  }), /* @__PURE__ */ React7.createElement("path", {
    className: "fill-current text-slate-400",
    d: "M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
  })), /* @__PURE__ */ React7.createElement("div", {
    className: "absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"
  })), /* @__PURE__ */ React7.createElement(Transition, {
    className: `origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
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
  }, "Notifications"), /* @__PURE__ */ React7.createElement("ul", null, /* @__PURE__ */ React7.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React7.createElement(Link3, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React7.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F4E3} ", /* @__PURE__ */ React7.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Edit your information in a swipe"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React7.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Feb 12, 2021"))), /* @__PURE__ */ React7.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React7.createElement(Link3, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React7.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F4E3} ", /* @__PURE__ */ React7.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Edit your information in a swipe"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React7.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Feb 9, 2021"))), /* @__PURE__ */ React7.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React7.createElement(Link3, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React7.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F680}", /* @__PURE__ */ React7.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Say goodbye to paper receipts!"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React7.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Jan 24, 2020")))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/DropdownHelp.mjs
import { React as React8, useState as useState4, useRef as useRef5, useEffect as useEffect5, Link as Link4 } from "/libs/vendors-v0.0.1.mjs";
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
  return /* @__PURE__ */ React8.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React8.createElement("button", {
    ref: trigger,
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && "bg-slate-200"}`,
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React8.createElement("span", {
    className: "sr-only"
  }, "Need help?"), /* @__PURE__ */ React8.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React8.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
  }))), /* @__PURE__ */ React8.createElement(Transition, {
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
    className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4"
  }, "Need help?"), /* @__PURE__ */ React8.createElement("ul", null, /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link4, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React8.createElement("rect", {
    y: "3",
    width: "12",
    height: "9",
    rx: "1"
  }), /* @__PURE__ */ React8.createElement("path", {
    d: "M2 0h8v2H2z"
  })), /* @__PURE__ */ React8.createElement("span", null, "Documentation"))), /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link4, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z"
  })), /* @__PURE__ */ React8.createElement("span", null, "Support Site"))), /* @__PURE__ */ React8.createElement("li", null, /* @__PURE__ */ React8.createElement(Link4, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React8.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React8.createElement("path", {
    d: "M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
  })), /* @__PURE__ */ React8.createElement("span", null, "Contact us")))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/DropdownProfile.mjs
import { React as React9, useState as useState5, useRef as useRef6, useEffect as useEffect6, Link as Link5 } from "/libs/vendors-v0.0.1.mjs";

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
  return /* @__PURE__ */ React9.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React9.createElement("button", {
    ref: trigger,
    className: "inline-flex justify-center items-center group",
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React9.createElement("img", {
    className: "w-8 h-8 rounded-full",
    src: user_avatar_32_default,
    width: "32",
    height: "32",
    alt: "User"
  }), /* @__PURE__ */ React9.createElement("div", {
    className: "flex items-center truncate"
  }, /* @__PURE__ */ React9.createElement("span", {
    className: "truncate ml-2 text-sm font-medium group-hover:text-slate-800"
  }, "Acme Inc."), /* @__PURE__ */ React9.createElement("svg", {
    className: "w-3 h-3 shrink-0 ml-1 fill-current text-slate-400",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React9.createElement("path", {
    d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
  })))), /* @__PURE__ */ React9.createElement(Transition, {
    className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
    show: dropdownOpen,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React9.createElement("div", {
    ref: dropdown,
    onFocus: () => setDropdownOpen(true),
    onBlur: () => setDropdownOpen(false)
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200"
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "font-medium text-slate-800"
  }, "Acme Inc."), /* @__PURE__ */ React9.createElement("div", {
    className: "text-xs text-slate-500 italic"
  }, "Administrator")), /* @__PURE__ */ React9.createElement("ul", null, /* @__PURE__ */ React9.createElement("li", null, /* @__PURE__ */ React9.createElement(Link5, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "/settings",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, "Settings")), /* @__PURE__ */ React9.createElement("li", null, /* @__PURE__ */ React9.createElement(Link5, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "/signin",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, "Sign Out"))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/DropdownFilter.mjs
import { React as React10, useState as useState6, useRef as useRef7, useEffect as useEffect7 } from "/libs/vendors-v0.0.1.mjs";
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
  return /* @__PURE__ */ React10.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React10.createElement("button", {
    ref: trigger,
    className: "btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600",
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React10.createElement("span", {
    className: "sr-only"
  }, "Filter"), /* @__PURE__ */ React10.createElement("wbr", null), /* @__PURE__ */ React10.createElement("svg", {
    className: "w-4 h-4 fill-current",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React10.createElement("path", {
    d: "M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z"
  }))), /* @__PURE__ */ React10.createElement(Transition, {
    show: dropdownOpen,
    tag: "div",
    className: `origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React10.createElement("div", {
    ref: dropdown
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4"
  }, "Filters"), /* @__PURE__ */ React10.createElement("ul", {
    className: "mb-4"
  }, /* @__PURE__ */ React10.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React10.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React10.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React10.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Direct VS Indirect"))), /* @__PURE__ */ React10.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React10.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React10.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React10.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Real Time Value"))), /* @__PURE__ */ React10.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React10.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React10.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React10.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Top Channels"))), /* @__PURE__ */ React10.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React10.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React10.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React10.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Sales VS Refunds"))), /* @__PURE__ */ React10.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React10.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React10.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React10.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Last Order"))), /* @__PURE__ */ React10.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React10.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React10.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React10.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Total Spent")))), /* @__PURE__ */ React10.createElement("div", {
    className: "py-2 px-3 border-t border-slate-200 bg-slate-50"
  }, /* @__PURE__ */ React10.createElement("ul", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React10.createElement("li", null, /* @__PURE__ */ React10.createElement("button", {
    className: "btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
  }, "Clear")), /* @__PURE__ */ React10.createElement("li", null, /* @__PURE__ */ React10.createElement("button", {
    className: "btn-xs bg-indigo-500 hover:bg-indigo-600 text-white",
    onClick: () => setDropdownOpen(false),
    onBlur: () => setDropdownOpen(false)
  }, "Apply")))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/DropdownEditMenu.mjs
import { React as React11, useState as useState7, useRef as useRef8, useEffect as useEffect8 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/Tooltip.mjs
import { React as React12, useState as useState8 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/Datepicker.mjs
import { React as React14 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/components/src/Flatpickr.mjs
import { React as React13, Component } from "/libs/vendors-v0.0.1.mjs";
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
    return options.wrap ? /* @__PURE__ */ React13.createElement("div", {
      ...props,
      ref: this.handleNodeChange
    }, children) : /* @__PURE__ */ React13.createElement("input", {
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
  return /* @__PURE__ */ React14.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React14.createElement(Flatpickr, {
    className: "form-input pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 w-60",
    options
  }), /* @__PURE__ */ React14.createElement("div", {
    className: "absolute inset-0 right-auto flex items-center pointer-events-none"
  }, /* @__PURE__ */ React14.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-500 ml-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React14.createElement("path", {
    d: "M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z"
  }))));
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/partials/src/Header.mjs
var Header = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  const [searchModalOpen, setSearchModalOpen] = useState9(false);
  return /* @__PURE__ */ React15.createElement("header", {
    className: "sticky top-0 bg-white border-b border-slate-200 z-30"
  }, /* @__PURE__ */ React15.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React15.createElement("div", {
    className: "flex items-center justify-between h-16 -mb-px"
  }, /* @__PURE__ */ React15.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React15.createElement("button", {
    className: "text-slate-500 hover:text-slate-600 lg:hidden",
    "aria-controls": "sidebar",
    "aria-expanded": sidebarOpen,
    onClick: () => setSidebarOpen(!sidebarOpen)
  }, /* @__PURE__ */ React15.createElement("span", {
    className: "sr-only"
  }, "Open sidebar"), /* @__PURE__ */ React15.createElement("svg", {
    className: "w-6 h-6 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React15.createElement("rect", {
    x: "4",
    y: "5",
    width: "16",
    height: "2"
  }), /* @__PURE__ */ React15.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "2"
  }), /* @__PURE__ */ React15.createElement("rect", {
    x: "4",
    y: "17",
    width: "16",
    height: "2"
  })))), /* @__PURE__ */ React15.createElement("div", {
    className: "flex items-center space-x-3"
  }, /* @__PURE__ */ React15.createElement("button", {
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${searchModalOpen && "bg-slate-200"}`,
    onClick: (e) => {
      e.stopPropagation();
      setSearchModalOpen(true);
    },
    "aria-controls": "search-modal"
  }, /* @__PURE__ */ React15.createElement("span", {
    className: "sr-only"
  }, "Search"), /* @__PURE__ */ React15.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React15.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
  }), /* @__PURE__ */ React15.createElement("path", {
    className: "fill-current text-slate-400",
    d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
  }))), /* @__PURE__ */ React15.createElement(ModalSearch, {
    id: "search-modal",
    searchId: "search",
    modalOpen: searchModalOpen,
    setModalOpen: setSearchModalOpen
  }), /* @__PURE__ */ React15.createElement(DropdownNotifications, {
    align: "right"
  }), /* @__PURE__ */ React15.createElement(DropdownHelp, {
    align: "right"
  }), /* @__PURE__ */ React15.createElement("hr", {
    className: "w-px h-6 bg-slate-200 mx-3"
  }), /* @__PURE__ */ React15.createElement(DropdownProfile, {
    align: "right"
  })))));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/3stats/cards/AnalyticsCard01.mjs
import { React as React22 } from "/libs/vendors-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/LineChart01.mjs
import { React as React16, useRef as useRef9, useEffect as useEffect9 } from "/libs/vendors-v0.0.1.mjs";
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
  return /* @__PURE__ */ React16.createElement("canvas", {
    ref: canvas,
    width,
    height
  });
};

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/LineChart02.mjs
import { React as React17, useRef as useRef10, useEffect as useEffect10 } from "/libs/vendors-v0.0.1.mjs";
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

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/BarChart01.mjs
import { React as React18, useRef as useRef11, useEffect as useEffect11 } from "/libs/vendors-v0.0.1.mjs";
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

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/BarChart02.mjs
import { React as React19, useRef as useRef12, useEffect as useEffect12 } from "/libs/vendors-v0.0.1.mjs";
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

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/RealtimeChart.mjs
import { React as React20, useRef as useRef13, useEffect as useEffect13 } from "/libs/vendors-v0.0.1.mjs";
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

// pnp:/home/mamluk/3pass/esm-pwa/libs/charts/src/DoughnutChart.mjs
import { React as React21, useRef as useRef14, useEffect as useEffect14 } from "/libs/vendors-v0.0.1.mjs";
import {
  Chart as Chart6,
  DoughnutController,
  ArcElement,
  TimeScale as TimeScale6,
  Tooltip as Tooltip7
} from "/libs/vendors-v0.0.1.mjs";
Chart6.register(DoughnutController, ArcElement, TimeScale6, Tooltip7);

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/3stats/cards/AnalyticsCard01.mjs
var AnalyticsCard01 = () => {
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
          5e3,
          8700,
          7500,
          12e3,
          11e3,
          9500,
          10500,
          1e4,
          15e3,
          9e3,
          1e4,
          7e3,
          22e3,
          7200,
          9800,
          9e3,
          1e4,
          8e3,
          15e3,
          12e3,
          11e3,
          13e3,
          11e3,
          15e3,
          17e3,
          18e3
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
        label: "Previous",
        data: [
          8e3,
          5e3,
          6500,
          5e3,
          6500,
          12e3,
          8e3,
          9e3,
          8e3,
          8e3,
          12500,
          1e4,
          1e4,
          12e3,
          11e3,
          16e3,
          12e3,
          1e4,
          1e4,
          14e3,
          9e3,
          1e4,
          15e3,
          12500,
          14e3,
          11e3
        ],
        borderColor: tailwindConfig().theme.colors.slate[300],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20
      }
    ]
  };
  return /* @__PURE__ */ React22.createElement("div", {
    className: "flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React22.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100 flex items-center"
  }, /* @__PURE__ */ React22.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Analytics")), /* @__PURE__ */ React22.createElement("div", {
    className: "px-5 py-1"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "flex flex-wrap"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "flex items-center py-2"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "mr-5"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "24.7K"), /* @__PURE__ */ React22.createElement("div", {
    className: "text-sm font-medium text-emerald-500"
  }, "+49%")), /* @__PURE__ */ React22.createElement("div", {
    className: "text-sm text-slate-500"
  }, "Unique Visitors")), /* @__PURE__ */ React22.createElement("div", {
    className: "hidden md:block w-px h-8 bg-slate-200 mr-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React22.createElement("div", {
    className: "flex items-center py-2"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "mr-5"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "56.9K"), /* @__PURE__ */ React22.createElement("div", {
    className: "text-sm font-medium text-emerald-500"
  }, "+7%")), /* @__PURE__ */ React22.createElement("div", {
    className: "text-sm text-slate-500"
  }, "Total Pageviews")), /* @__PURE__ */ React22.createElement("div", {
    className: "hidden md:block w-px h-8 bg-slate-200 mr-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React22.createElement("div", {
    className: "flex items-center py-2"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "mr-5"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "54%"), /* @__PURE__ */ React22.createElement("div", {
    className: "text-sm font-medium text-amber-500"
  }, "-7%")), /* @__PURE__ */ React22.createElement("div", {
    className: "text-sm text-slate-500"
  }, "Bounce Rate")), /* @__PURE__ */ React22.createElement("div", {
    className: "hidden md:block w-px h-8 bg-slate-200 mr-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React22.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React22.createElement("div", null, /* @__PURE__ */ React22.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "2m 56s"), /* @__PURE__ */ React22.createElement("div", {
    className: "text-sm font-medium text-amber-500"
  }, "+7%")), /* @__PURE__ */ React22.createElement("div", {
    className: "text-sm text-slate-500"
  }, "Visit Duration"))))), /* @__PURE__ */ React22.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React22.createElement(LineChart01, {
    data: chartData,
    width: 800,
    height: 300
  })));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/3stats/cards/AnalyticsCard02.mjs
import { React as React23, Link as Link6 } from "/libs/vendors-v0.0.1.mjs";
var AnalyticsCard02 = () => {
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
      }
    ]
  };
  return /* @__PURE__ */ React23.createElement("div", {
    className: "flex flex-col col-span-full xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React23.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React23.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Active Users Right Now")), /* @__PURE__ */ React23.createElement("div", {
    className: "flex flex-col h-full"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "px-5 py-3"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "relative flex items-center justify-center w-4 h-4 rounded-full bg-rose-100 mr-3",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "absolute w-1.5 h-1.5 rounded-full bg-rose-500"
  })), /* @__PURE__ */ React23.createElement("div", null, /* @__PURE__ */ React23.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "347"), /* @__PURE__ */ React23.createElement("div", {
    className: "text-sm text-slate-500"
  }, "Live visitors")))), /* @__PURE__ */ React23.createElement("div", null, /* @__PURE__ */ React23.createElement(LineChart01, {
    data: chartData,
    width: 389,
    height: 70
  })), /* @__PURE__ */ React23.createElement("div", {
    className: "grow px-5 pt-3 pb-1"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "overflow-x-auto"
  }, /* @__PURE__ */ React23.createElement("table", {
    className: "table-auto w-full"
  }, /* @__PURE__ */ React23.createElement("thead", {
    className: "text-xs uppercase text-slate-400"
  }, /* @__PURE__ */ React23.createElement("tr", null, /* @__PURE__ */ React23.createElement("th", {
    className: "py-2"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "font-semibold text-left"
  }, "Top pages")), /* @__PURE__ */ React23.createElement("th", {
    className: "py-2"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "font-semibold text-right"
  }, "Active users")))), /* @__PURE__ */ React23.createElement("tbody", {
    className: "text-sm divide-y divide-slate-100"
  }, /* @__PURE__ */ React23.createElement("tr", null, /* @__PURE__ */ React23.createElement("td", {
    className: "py-2"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "text-left"
  }, "preview.cruip.com/open-pro/")), /* @__PURE__ */ React23.createElement("td", {
    className: "py-2"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "font-medium text-right text-slate-800"
  }, "94"))), /* @__PURE__ */ React23.createElement("tr", null, /* @__PURE__ */ React23.createElement("td", {
    className: "py-2"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "text-left"
  }, "preview.cruip.com/simple/")), /* @__PURE__ */ React23.createElement("td", {
    className: "py-2"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "font-medium text-right text-slate-800"
  }, "42"))), /* @__PURE__ */ React23.createElement("tr", null, /* @__PURE__ */ React23.createElement("td", {
    className: "py-2"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "text-left"
  }, "cruip.com/unlimited/")), /* @__PURE__ */ React23.createElement("td", {
    className: "py-2"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "font-medium text-right text-slate-800"
  }, "12"))), /* @__PURE__ */ React23.createElement("tr", null, /* @__PURE__ */ React23.createElement("td", {
    className: "py-2"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "text-left"
  }, "preview.cruip.com/twist/")), /* @__PURE__ */ React23.createElement("td", {
    className: "py-2"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "font-medium text-right text-slate-800"
  }, "4"))))))), /* @__PURE__ */ React23.createElement("div", {
    className: "text-right px-5 pb-4"
  }, /* @__PURE__ */ React23.createElement(Link6, {
    className: "text-sm font-medium text-indigo-500 hover:text-indigo-600",
    to: "#0"
  }, "Real-Time Report ->"))));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/3stats/Dashboard.mjs
var DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState10(false);
  return /* @__PURE__ */ React24.createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /* @__PURE__ */ React24.createElement(Sidebar, {
    sidebarOpen,
    setSidebarOpen
  }), /* @__PURE__ */ React24.createElement("div", {
    className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
  }, /* @__PURE__ */ React24.createElement(Header, {
    sidebarOpen,
    setSidebarOpen
  }), /* @__PURE__ */ React24.createElement("main", null, /* @__PURE__ */ React24.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"
  }, /* @__PURE__ */ React24.createElement("div", {
    className: "sm:flex sm:justify-between sm:items-center mb-8"
  }, /* @__PURE__ */ React24.createElement("div", {
    className: "mb-4 sm:mb-0"
  }, /* @__PURE__ */ React24.createElement("h1", {
    className: "text-2xl md:text-3xl text-slate-800 font-bold"
  }, "Analytics \u2728")), /* @__PURE__ */ React24.createElement("div", {
    className: "grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
  }, /* @__PURE__ */ React24.createElement(DropdownFilter, {
    align: "right"
  }), /* @__PURE__ */ React24.createElement(Datepicker, {
    align: "right"
  }))), /* @__PURE__ */ React24.createElement("div", {
    className: "grid grid-cols-12 gap-6"
  }, /* @__PURE__ */ React24.createElement(AnalyticsCard01, null), /* @__PURE__ */ React24.createElement(AnalyticsCard02, null))))));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/index.mjs
var App = () => {
  const location = useLocation3();
  useEffect15(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);
  return /* @__PURE__ */ React25.createElement(React25.Fragment, null, /* @__PURE__ */ React25.createElement(AuthProvider, null, /* @__PURE__ */ React25.createElement(Routes, null, /* @__PURE__ */ React25.createElement(Route, {
    exact: true,
    path: "/",
    element: /* @__PURE__ */ React25.createElement(SignIn, null)
  }), /* @__PURE__ */ React25.createElement(Route, {
    path: "/protected",
    element: /* @__PURE__ */ React25.createElement(RequireAuth, null, /* @__PURE__ */ React25.createElement(DashboardPage, null))
  }), /* @__PURE__ */ React25.createElement(Route, {
    path: "*",
    element: /* @__PURE__ */ React25.createElement("h1", null, "Not Found")
  }))));
};
var rootElement = document.getElementById("root");
createRoot(rootElement).render(/* @__PURE__ */ React25.createElement(React25.StrictMode, null, /* @__PURE__ */ React25.createElement(Router, null, /* @__PURE__ */ React25.createElement(App, null))));

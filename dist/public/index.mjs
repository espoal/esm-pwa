// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/index.mjs
import {
  React as React37,
  createRoot,
  useEffect as useEffect17,
  useLocation as useLocation2,
  BrowserRouter as Router,
  Route,
  Routes
} from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/Dash.mjs
import { React as React36, useState as useState12 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/Sidebar.jsx
import { React as React2, useState as useState2, useEffect, useRef, NavLink, useLocation } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/SidebarLinkGroup.jsx
import { React, useState } from "/libs/react-v0.0.1.mjs";
function SidebarLinkGroup({
  children,
  activecondition
}) {
  const [open, setOpen] = useState(activecondition);
  const handleClick = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ React.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && "bg-slate-900"}`
  }, children(handleClick, open));
}
var SidebarLinkGroup_default = SidebarLinkGroup;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/Sidebar.jsx
function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {
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
  return /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("div", {
    className: `fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
    "aria-hidden": "true"
  }), /* @__PURE__ */ React2.createElement("div", {
    id: "sidebar",
    ref: sidebar,
    className: `flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex justify-between mb-10 pr-3 sm:px-2"
  }, /* @__PURE__ */ React2.createElement("button", {
    ref: trigger,
    className: "lg:hidden text-slate-500 hover:text-slate-400",
    onClick: () => setSidebarOpen(!sidebarOpen),
    "aria-controls": "sidebar",
    "aria-expanded": sidebarOpen
  }, /* @__PURE__ */ React2.createElement("span", {
    className: "sr-only"
  }, "Close sidebar"), /* @__PURE__ */ React2.createElement("svg", {
    className: "w-6 h-6 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React2.createElement("path", {
    d: "M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
  }))), /* @__PURE__ */ React2.createElement(NavLink, {
    end: true,
    to: "/",
    className: "block"
  }, /* @__PURE__ */ React2.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, /* @__PURE__ */ React2.createElement("defs", null, /* @__PURE__ */ React2.createElement("linearGradient", {
    x1: "28.538%",
    y1: "20.229%",
    x2: "100%",
    y2: "108.156%",
    id: "logo-a"
  }, /* @__PURE__ */ React2.createElement("stop", {
    stopColor: "#A5B4FC",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React2.createElement("stop", {
    stopColor: "#A5B4FC",
    offset: "100%"
  })), /* @__PURE__ */ React2.createElement("linearGradient", {
    x1: "88.638%",
    y1: "29.267%",
    x2: "22.42%",
    y2: "100%",
    id: "logo-b"
  }, /* @__PURE__ */ React2.createElement("stop", {
    stopColor: "#38BDF8",
    stopOpacity: "0",
    offset: "0%"
  }), /* @__PURE__ */ React2.createElement("stop", {
    stopColor: "#38BDF8",
    offset: "100%"
  }))), /* @__PURE__ */ React2.createElement("rect", {
    fill: "#6366F1",
    width: "32",
    height: "32",
    rx: "16"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",
    fill: "#4F46E5"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",
    fill: "url(#logo-a)"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",
    fill: "url(#logo-b)"
  })))), /* @__PURE__ */ React2.createElement("div", {
    className: "space-y-8"
  }, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("h3", {
    className: "text-xs uppercase text-slate-500 font-semibold pl-3"
  }, /* @__PURE__ */ React2.createElement("span", {
    className: "hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6",
    "aria-hidden": "true"
  }, "\u2022\u2022\u2022"), /* @__PURE__ */ React2.createElement("span", {
    className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
  }, "Pages")), /* @__PURE__ */ React2.createElement("ul", {
    className: "mt-3"
  }, /* @__PURE__ */ React2.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === "/" && "bg-slate-900"}`
  }, /* @__PURE__ */ React2.createElement(NavLink, {
    end: true,
    to: "/",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname === "/" && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React2.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-400 ${pathname === "/" && "!text-indigo-500"}`,
    d: "M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
  }), /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-600 ${pathname === "/" && "text-indigo-600"}`,
    d: "M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
  }), /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-400 ${pathname === "/" && "text-indigo-200"}`,
    d: "M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
  })), /* @__PURE__ */ React2.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Dashboard")))), /* @__PURE__ */ React2.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("analytics") && "bg-slate-900"}`
  }, /* @__PURE__ */ React2.createElement(NavLink, {
    end: true,
    to: "/",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("analytics") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React2.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("analytics") && "text-indigo-500"}`,
    d: "M0 20h24v2H0z"
  }), /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("analytics") && "text-indigo-300"}`,
    d: "M4 18h2a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1zM11 18h2a1 1 0 001-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v14a1 1 0 001 1zM17 12v5a1 1 0 001 1h2a1 1 0 001-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1z"
  })), /* @__PURE__ */ React2.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Analytics")))), /* @__PURE__ */ React2.createElement(SidebarLinkGroup_default, {
    activecondition: pathname.includes("ecommerce")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("ecommerce") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React2.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React2.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React2.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React2.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("ecommerce") && "text-indigo-300"}`,
      d: "M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
    }), /* @__PURE__ */ React2.createElement("path", {
      className: `fill-current text-slate-700 ${pathname.includes("ecommerce") && "!text-indigo-600"}`,
      d: "M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
    }), /* @__PURE__ */ React2.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("ecommerce") && "text-indigo-500"}`,
      d: "M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
    })), /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "E-Commerce")), /* @__PURE__ */ React2.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React2.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React2.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React2.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React2.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Customers"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Orders"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Invoices"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Shop"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Shop 2"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Single Product"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cart"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Cart 2"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Pay"))))));
  }), /* @__PURE__ */ React2.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("campaigns") && "bg-slate-900"}`
  }, /* @__PURE__ */ React2.createElement(NavLink, {
    end: true,
    to: "/",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("campaigns") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React2.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("campaigns") && "text-indigo-500"}`,
    d: "M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
  }), /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("campaigns") && "text-indigo-300"}`,
    d: "M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
  })), /* @__PURE__ */ React2.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Campaigns")))), /* @__PURE__ */ React2.createElement(SidebarLinkGroup_default, {
    activecondition: pathname.includes("team")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("team") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React2.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React2.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React2.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React2.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("team") && "text-indigo-500"}`,
      d: "M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
    }), /* @__PURE__ */ React2.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("team") && "text-indigo-300"}`,
      d: "M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
    })), /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Team")), /* @__PURE__ */ React2.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React2.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React2.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React2.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React2.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Team - Tabs"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Team - Tiles"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Profile"))))));
  }), /* @__PURE__ */ React2.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("messages") && "bg-slate-900"}`
  }, /* @__PURE__ */ React2.createElement(NavLink, {
    end: true,
    to: "/",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("messages") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React2.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("messages") && "text-indigo-500"}`,
    d: "M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
  }), /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("messages") && "text-indigo-300"}`,
    d: "M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
  })), /* @__PURE__ */ React2.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Messages")))), /* @__PURE__ */ React2.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("tasks") && "bg-slate-900"}`
  }, /* @__PURE__ */ React2.createElement(NavLink, {
    end: true,
    to: "/",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("tasks") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React2.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("tasks") && "text-indigo-500"}`,
    d: "M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
  }), /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("tasks") && "text-indigo-500"}`,
    d: "M1 1h22v23H1z"
  }), /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("tasks") && "text-indigo-300"}`,
    d: "M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
  })), /* @__PURE__ */ React2.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Tasks")))), /* @__PURE__ */ React2.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("inbox") && "bg-slate-900"}`
  }, /* @__PURE__ */ React2.createElement(NavLink, {
    end: true,
    to: "/",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("inbox") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React2.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("inbox") && "text-indigo-500"}`,
    d: "M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
  }), /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("inbox") && "text-indigo-300"}`,
    d: "m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
  })), /* @__PURE__ */ React2.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Inbox")))), /* @__PURE__ */ React2.createElement("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("calendar") && "bg-slate-900"}`
  }, /* @__PURE__ */ React2.createElement(NavLink, {
    end: true,
    to: "/",
    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("calendar") && "hover:text-slate-200"}`
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React2.createElement("svg", {
    className: "shrink-0 h-6 w-6",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-600 ${pathname.includes("calendar") && "text-indigo-500"}`,
    d: "M1 3h22v20H1z"
  }), /* @__PURE__ */ React2.createElement("path", {
    className: `fill-current text-slate-400 ${pathname.includes("calendar") && "text-indigo-300"}`,
    d: "M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
  })), /* @__PURE__ */ React2.createElement("span", {
    className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
  }, "Calendar")))), /* @__PURE__ */ React2.createElement(SidebarLinkGroup_default, {
    activecondition: pathname.includes("settings")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("settings") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React2.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React2.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React2.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React2.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("settings") && "text-indigo-500"}`,
      d: "M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
    }), /* @__PURE__ */ React2.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("settings") && "text-indigo-300"}`,
      d: "M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
    }), /* @__PURE__ */ React2.createElement("path", {
      className: `fill-current text-slate-600 ${pathname.includes("settings") && "text-indigo-500"}`,
      d: "M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
    }), /* @__PURE__ */ React2.createElement("path", {
      className: `fill-current text-slate-400 ${pathname.includes("settings") && "text-indigo-300"}`,
      d: "M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
    })), /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Settings")), /* @__PURE__ */ React2.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React2.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React2.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React2.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React2.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "My Account"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "My Notifications"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Connected Apps"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Plans"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Billing & Invoices"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Give Feedback"))))));
  }), /* @__PURE__ */ React2.createElement(SidebarLinkGroup_default, {
    activecondition: pathname.includes("utility")
  }, (handleClick, open) => {
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("a", {
      href: "#0",
      className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("utility") && "hover:text-slate-200"}`,
      onClick: (e) => {
        e.preventDefault();
        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
      }
    }, /* @__PURE__ */ React2.createElement("div", {
      className: "flex items-center justify-between"
    }, /* @__PURE__ */ React2.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React2.createElement("svg", {
      className: "shrink-0 h-6 w-6",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React2.createElement("circle", {
      className: `fill-current text-slate-400 ${pathname.includes("utility") && "text-indigo-300"}`,
      cx: "18.5",
      cy: "5.5",
      r: "4.5"
    }), /* @__PURE__ */ React2.createElement("circle", {
      className: `fill-current text-slate-600 ${pathname.includes("utility") && "text-indigo-500"}`,
      cx: "5.5",
      cy: "5.5",
      r: "4.5"
    }), /* @__PURE__ */ React2.createElement("circle", {
      className: `fill-current text-slate-600 ${pathname.includes("utility") && "text-indigo-500"}`,
      cx: "18.5",
      cy: "18.5",
      r: "4.5"
    }), /* @__PURE__ */ React2.createElement("circle", {
      className: `fill-current text-slate-400 ${pathname.includes("utility") && "text-indigo-300"}`,
      cx: "5.5",
      cy: "18.5",
      r: "4.5"
    })), /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Utility")), /* @__PURE__ */ React2.createElement("div", {
      className: "flex shrink-0 ml-2"
    }, /* @__PURE__ */ React2.createElement("svg", {
      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
      viewBox: "0 0 12 12"
    }, /* @__PURE__ */ React2.createElement("path", {
      d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
    }))))), /* @__PURE__ */ React2.createElement("div", {
      className: "lg:hidden lg:sidebar-expanded:block 2xl:block"
    }, /* @__PURE__ */ React2.createElement("ul", {
      className: `pl-9 mt-1 ${!open && "hidden"}`
    }, /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Changelog"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Roadmap"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "FAQs"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "Empty State"))), /* @__PURE__ */ React2.createElement("li", {
      className: "mb-1 last:mb-0"
    }, /* @__PURE__ */ React2.createElement(NavLink, {
      end: true,
      to: "/",
      className: "block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
    }, /* @__PURE__ */ React2.createElement("span", {
      className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
    }, "404"))))));
  })))), /* @__PURE__ */ React2.createElement("div", {
    className: "pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "px-3 py-2"
  }, /* @__PURE__ */ React2.createElement("button", {
    onClick: () => setSidebarExpanded(!sidebarExpanded)
  }, /* @__PURE__ */ React2.createElement("span", {
    className: "sr-only"
  }, "Expand / collapse sidebar"), /* @__PURE__ */ React2.createElement("svg", {
    className: "w-6 h-6 fill-current sidebar-expanded:rotate-180",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React2.createElement("path", {
    className: "text-slate-400",
    d: "M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
  }), /* @__PURE__ */ React2.createElement("path", {
    className: "text-slate-600",
    d: "M3 23H1V1h2z"
  })))))));
}
var Sidebar_default = Sidebar;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/Header.jsx
import { React as React8, useState as useState6 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/header/SearchModal.jsx
import { React as React4, useRef as useRef3, useEffect as useEffect3, Link } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/utils/Transition.jsx
import { React as React3, useContext, useEffect as useEffect2, useRef as useRef2 } from "/libs/react-v0.0.1.mjs";
import { CSSTransition as ReactCSSTransition } from "/libs/react-v0.0.1.mjs";
var TransitionContext = React3.createContext({
  parent: {}
});
function useIsInitialRender() {
  const isInitialRender = useRef2(true);
  useEffect2(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}
function CSSTransition({
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
}) {
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
  const nodeRef = React3.useRef(null);
  const Component = tag;
  return /* @__PURE__ */ React3.createElement(ReactCSSTransition, {
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
  }, /* @__PURE__ */ React3.createElement(Component, {
    ref: nodeRef,
    ...rest,
    style: { display: !removeFromDom ? "none" : null }
  }, children));
}
function Transition({ show, appear, ...rest }) {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === void 0;
  if (isChild) {
    return /* @__PURE__ */ React3.createElement(CSSTransition, {
      appear: parent.appear || !parent.isInitialRender,
      show: parent.show,
      ...rest
    });
  }
  return /* @__PURE__ */ React3.createElement(TransitionContext.Provider, {
    value: {
      parent: {
        show,
        isInitialRender,
        appear
      }
    }
  }, /* @__PURE__ */ React3.createElement(CSSTransition, {
    appear,
    show,
    ...rest
  }));
}
var Transition_default = Transition;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/header/SearchModal.jsx
function SearchModal({
  id,
  searchId,
  modalOpen,
  setModalOpen
}) {
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
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(Transition_default, {
    className: "fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",
    show: modalOpen,
    enter: "transition ease-out duration-200",
    enterStart: "opacity-0",
    enterEnd: "opacity-100",
    leave: "transition ease-out duration-100",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React4.createElement(Transition_default, {
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
  }, /* @__PURE__ */ React4.createElement("div", {
    ref: modalContent,
    className: "bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
  }, /* @__PURE__ */ React4.createElement("form", {
    className: "border-b border-slate-200"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React4.createElement("label", {
    htmlFor: searchId,
    className: "sr-only"
  }, "Search"), /* @__PURE__ */ React4.createElement("input", {
    id: searchId,
    className: "w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4",
    type: "search",
    placeholder: "Search Anything\u2026",
    ref: searchInput
  }), /* @__PURE__ */ React4.createElement("button", {
    className: "absolute inset-0 right-auto group",
    type: "submit",
    "aria-label": "Search"
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
  }))))), /* @__PURE__ */ React4.createElement("div", {
    className: "py-4 px-2"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "mb-3 last:mb-0"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase px-2 mb-2"
  }, "Recent searches"), /* @__PURE__ */ React4.createElement("ul", {
    className: "text-sm"
  }, /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement(Link, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React4.createElement("span", null, "Form Builder - 23 hours on-demand video"))), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement(Link, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React4.createElement("span", null, "Access Mosaic on mobile and TV"))), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement(Link, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React4.createElement("span", null, "Product Update - Q4 2021"))), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement(Link, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React4.createElement("span", null, "Master Digital Marketing Strategy course"))), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement(Link, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React4.createElement("span", null, "Dedicated forms for products"))), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement(Link, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
  })), /* @__PURE__ */ React4.createElement("span", null, "Product Update - Q4 2021"))))), /* @__PURE__ */ React4.createElement("div", {
    className: "mb-3 last:mb-0"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase px-2 mb-2"
  }, "Recent pages"), /* @__PURE__ */ React4.createElement("ul", {
    className: "text-sm"
  }, /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement(Link, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
  })), /* @__PURE__ */ React4.createElement("span", null, /* @__PURE__ */ React4.createElement("span", {
    className: "font-medium text-slate-800 group-hover:text-white"
  }, "Messages"), " - Conversation / \u2026 / Mike Mills"))), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement(Link, {
    className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",
    to: "#0",
    onClick: () => setModalOpen(!modalOpen)
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
  })), /* @__PURE__ */ React4.createElement("span", null, /* @__PURE__ */ React4.createElement("span", {
    className: "font-medium text-slate-800 group-hover:text-white"
  }, "Messages"), " - Conversation / \u2026 / Eva Patrick")))))))));
}
var SearchModal_default = SearchModal;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/header/Notifications.jsx
import { React as React5, useRef as useRef4, useEffect as useEffect4, useState as useState3, Link as Link2 } from "/libs/react-v0.0.1.mjs";
function Notifications() {
  const [dropdownOpen, setDropdownOpen] = useState3(false);
  const trigger = useRef4(null);
  const dropdown = useRef4(null);
  useEffect4(() => {
    const clickHandler = ({ target }) => {
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
  return /* @__PURE__ */ React5.createElement("div", {
    className: "relative inline-flex ml-3"
  }, /* @__PURE__ */ React5.createElement("button", {
    ref: trigger,
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && "bg-slate-200"}`,
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React5.createElement("span", {
    className: "sr-only"
  }, "Notifications"), /* @__PURE__ */ React5.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React5.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
  }), /* @__PURE__ */ React5.createElement("path", {
    className: "fill-current text-slate-400",
    d: "M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
  })), /* @__PURE__ */ React5.createElement("div", {
    className: "absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"
  })), /* @__PURE__ */ React5.createElement(Transition_default, {
    className: "origin-top-right z-10 absolute top-full right-0 -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
    show: dropdownOpen,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React5.createElement("div", {
    ref: dropdown,
    onFocus: () => setDropdownOpen(true),
    onBlur: () => setDropdownOpen(false)
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4"
  }, "Notifications"), /* @__PURE__ */ React5.createElement("ul", null, /* @__PURE__ */ React5.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React5.createElement(Link2, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React5.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F4E3} ", /* @__PURE__ */ React5.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Edit your information in a swipe"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React5.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Feb 12, 2021"))), /* @__PURE__ */ React5.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React5.createElement(Link2, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React5.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F4E3} ", /* @__PURE__ */ React5.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Edit your information in a swipe"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React5.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Feb 9, 2021"))), /* @__PURE__ */ React5.createElement("li", {
    className: "border-b border-slate-200 last:border-0"
  }, /* @__PURE__ */ React5.createElement(Link2, {
    className: "block py-2 px-4 hover:bg-slate-50",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React5.createElement("span", {
    className: "block text-sm mb-2"
  }, "\u{1F680}", /* @__PURE__ */ React5.createElement("span", {
    className: "font-medium text-slate-800"
  }, "Say goodbye to paper receipts!"), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."), /* @__PURE__ */ React5.createElement("span", {
    className: "block text-xs font-medium text-slate-400"
  }, "Jan 24, 2020")))))));
}
var Notifications_default = Notifications;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/header/Help.jsx
import { React as React6, useState as useState4, useRef as useRef5, useEffect as useEffect5, Link as Link3 } from "/libs/react-v0.0.1.mjs";
function Help() {
  const [dropdownOpen, setDropdownOpen] = useState4(false);
  const trigger = useRef5(null);
  const dropdown = useRef5(null);
  useEffect5(() => {
    const clickHandler = ({ target }) => {
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
  return /* @__PURE__ */ React6.createElement("div", {
    className: "relative inline-flex ml-3"
  }, /* @__PURE__ */ React6.createElement("button", {
    ref: trigger,
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && "bg-slate-200"}`,
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "sr-only"
  }, "Need help?"), /* @__PURE__ */ React6.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React6.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
  }))), /* @__PURE__ */ React6.createElement(Transition_default, {
    className: "origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
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
  }, "Need help?"), /* @__PURE__ */ React6.createElement("ul", null, /* @__PURE__ */ React6.createElement("li", null, /* @__PURE__ */ React6.createElement(Link3, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React6.createElement("rect", {
    y: "3",
    width: "12",
    height: "9",
    rx: "1"
  }), /* @__PURE__ */ React6.createElement("path", {
    d: "M2 0h8v2H2z"
  })), /* @__PURE__ */ React6.createElement("span", null, "Documentation"))), /* @__PURE__ */ React6.createElement("li", null, /* @__PURE__ */ React6.createElement(Link3, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z"
  })), /* @__PURE__ */ React6.createElement("span", null, "Support Site"))), /* @__PURE__ */ React6.createElement("li", null, /* @__PURE__ */ React6.createElement(Link3, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "#0",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, /* @__PURE__ */ React6.createElement("svg", {
    className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
  })), /* @__PURE__ */ React6.createElement("span", null, "Contact us")))))));
}
var Help_default = Help;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/header/UserMenu.jsx
import { React as React7, useState as useState5, useRef as useRef6, useEffect as useEffect6, Link as Link4 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/user-avatar-32.png
var user_avatar_32_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAD/ElEQVR4Ae2axXorRxCFq+by3VyT2NkENTecrC4zMz5A3sIw3mUXfoLQNsywCTOzMSiIhWZ7ZrpSU25NmGFGX/p8UneV8Pzq023E63edg3aWBVHIABgAA2AADIABMAAGwAAYAANw9VU39HTbbQzgurNbNvdv2zKQ6LHbEqBYfAsBerrz27b0b98mGO0FUG+MLi42AJFrdr9je//OHYPJhN1Om7hQehuImCEYAZOJ/M4dA7t2DqaSdnsAFEtvE0+BeQwmaVLJ/O5dA3v2CEbMASqVjzxvQawHEAKCXLJSCXvvnoF9+5x0yo4vgFJe+dv3CMQ4sAQkkCwIYipx2b59gwcOCEYMAeQselPME0tAQNTaGNJzqA4eHDx4yMmk7dgBlMvvKd+TJcBl51oUVrpIJ/OHDg0ePuxkMnaMAFxvfrL6MZBsgnA/i3QlM2kezKTzR444R486WcGIGkBUKLzV8qgllUzCxQPKLuFeWuJFOHp08NhxJ5u1owcold5CvY918kH6oAmF4UCo78dcxj5xwuFLLmdHCTC/0KjVRmUF9L5FSZNuxDFJp4VIROHj2f3Jk0OnTju9ghEBAKtQfDtcAVG4CsGgG11ryp88PpfdyAxnzg719m6MAqDwpvgKP2nkWawShkAo+QlZfunxuWz+7Fnn7PmhC/4Yxkr4h6SIFmZ5EPlKEciVS1KuxyVXvk++y6PyPd/3lL64ynU9Hj3X95Y8d8lnGG/F1wsrp8H6DwHSqesBqJVsZCJEUhRwoGUBIykgkHv0GMzyYFkTIrmbrX+zsPJFz/oKRP8dQCp5HeiDkidFSodFWEhnXbWSREIgt+IyE+IifDFjPb+04ssINvHaNR2dnRcF7nTukaVDjhZpKtAi7Tx8+IL/RWXprpq6dwm/d/+frkA6dR0p0oenUmISpBNJQlQAoS+Ss4Bj1p2oTD87701AqIgArkcLKYi5nJhIIsGAAAmxFSENB7OL46Xa07NL4yCKEmDVynXdnbYEwyImQFRilIH0kW9ZchgBWgA+TM+PFSaf4BFE0QMkE1ezRUAdaH2qy74Ux0ra4NqcHv2q9PjU7Gi8vp1OZ663GACAlAq//xEICb5lcd+YHvlo5PaPxu7Q7uMDYFkrE91XinVAxiC9AgIRDI2p4Xc+vvm9T29tzIzAzxV5hHq6L1+1ar18/CTBRzn1iYHqzeHRiYfqzc8gVOwA5ADFIOcKEclXgMCqNYdHxh6sNbT1WANkUtcSkYW4nKdK7dOR0Qeq9U9BFHeAjo6LV6/pANFk9dOR4ftD620BIN/AIVYqnwyP3F+taevtBLB69fpXXrmxItajkvl/IQNgAAyAATAABsAAGAADYAD+vwDfAQSHHlNp5b1mAAAAAElFTkSuQmCC";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/header/UserMenu.jsx
function UserMenu() {
  const [dropdownOpen, setDropdownOpen] = useState5(false);
  const trigger = useRef6(null);
  const dropdown = useRef6(null);
  useEffect6(() => {
    const clickHandler = ({ target }) => {
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
  return /* @__PURE__ */ React7.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React7.createElement("button", {
    ref: trigger,
    className: "inline-flex justify-center items-center group",
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React7.createElement("img", {
    className: "w-8 h-8 rounded-full",
    src: user_avatar_32_default,
    width: "32",
    height: "32",
    alt: "User"
  }), /* @__PURE__ */ React7.createElement("div", {
    className: "flex items-center truncate"
  }, /* @__PURE__ */ React7.createElement("span", {
    className: "truncate ml-2 text-sm font-medium group-hover:text-slate-800"
  }, "Acme Inc."), /* @__PURE__ */ React7.createElement("svg", {
    className: "w-3 h-3 shrink-0 ml-1 fill-current text-slate-400",
    viewBox: "0 0 12 12"
  }, /* @__PURE__ */ React7.createElement("path", {
    d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
  })))), /* @__PURE__ */ React7.createElement(Transition_default, {
    className: "origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
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
    className: "pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "font-medium text-slate-800"
  }, "Acme Inc."), /* @__PURE__ */ React7.createElement("div", {
    className: "text-xs text-slate-500 italic"
  }, "Administrator")), /* @__PURE__ */ React7.createElement("ul", null, /* @__PURE__ */ React7.createElement("li", null, /* @__PURE__ */ React7.createElement(Link4, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "/",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, "Settings")), /* @__PURE__ */ React7.createElement("li", null, /* @__PURE__ */ React7.createElement(Link4, {
    className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
    to: "/",
    onClick: () => setDropdownOpen(!dropdownOpen)
  }, "Sign Out"))))));
}
var UserMenu_default = UserMenu;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/Header.jsx
function Header({
  sidebarOpen,
  setSidebarOpen
}) {
  const [searchModalOpen, setSearchModalOpen] = useState6(false);
  return /* @__PURE__ */ React8.createElement("header", {
    className: "sticky top-0 bg-white border-b border-slate-200 z-30"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "flex items-center justify-between h-16 -mb-px"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React8.createElement("button", {
    className: "text-slate-500 hover:text-slate-600 lg:hidden",
    "aria-controls": "sidebar",
    "aria-expanded": sidebarOpen,
    onClick: () => setSidebarOpen(!sidebarOpen)
  }, /* @__PURE__ */ React8.createElement("span", {
    className: "sr-only"
  }, "Open sidebar"), /* @__PURE__ */ React8.createElement("svg", {
    className: "w-6 h-6 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React8.createElement("rect", {
    x: "4",
    y: "5",
    width: "16",
    height: "2"
  }), /* @__PURE__ */ React8.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "2"
  }), /* @__PURE__ */ React8.createElement("rect", {
    x: "4",
    y: "17",
    width: "16",
    height: "2"
  })))), /* @__PURE__ */ React8.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React8.createElement("button", {
    className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${searchModalOpen && "bg-slate-200"}`,
    onClick: (e) => {
      e.stopPropagation();
      setSearchModalOpen(true);
    },
    "aria-controls": "search-modal"
  }, /* @__PURE__ */ React8.createElement("span", {
    className: "sr-only"
  }, "Search"), /* @__PURE__ */ React8.createElement("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React8.createElement("path", {
    className: "fill-current text-slate-500",
    d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
  }), /* @__PURE__ */ React8.createElement("path", {
    className: "fill-current text-slate-400",
    d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
  }))), /* @__PURE__ */ React8.createElement(SearchModal_default, {
    id: "search-modal",
    searchId: "search",
    modalOpen: searchModalOpen,
    setModalOpen: setSearchModalOpen
  }), /* @__PURE__ */ React8.createElement(Notifications_default, null), /* @__PURE__ */ React8.createElement(Help_default, null), /* @__PURE__ */ React8.createElement("hr", {
    className: "w-px h-6 bg-slate-200 mx-3"
  }), /* @__PURE__ */ React8.createElement(UserMenu_default, null)))));
}
var Header_default = Header;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/WelcomeBanner.jsx
import { React as React9 } from "/libs/react-v0.0.1.mjs";
function WelcomeBanner() {
  return /* @__PURE__ */ React9.createElement("div", {
    className: "relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8"
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React9.createElement("svg", {
    width: "319",
    height: "198",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /* @__PURE__ */ React9.createElement("defs", null, /* @__PURE__ */ React9.createElement("path", {
    id: "welcome-a",
    d: "M64 0l64 128-64-20-64 20z"
  }), /* @__PURE__ */ React9.createElement("path", {
    id: "welcome-e",
    d: "M40 0l40 80-40-12.5L0 80z"
  }), /* @__PURE__ */ React9.createElement("path", {
    id: "welcome-g",
    d: "M40 0l40 80-40-12.5L0 80z"
  }), /* @__PURE__ */ React9.createElement("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "welcome-b"
  }, /* @__PURE__ */ React9.createElement("stop", {
    stopColor: "#A5B4FC",
    offset: "0%"
  }), /* @__PURE__ */ React9.createElement("stop", {
    stopColor: "#818CF8",
    offset: "100%"
  })), /* @__PURE__ */ React9.createElement("linearGradient", {
    x1: "50%",
    y1: "24.537%",
    x2: "50%",
    y2: "100%",
    id: "welcome-c"
  }, /* @__PURE__ */ React9.createElement("stop", {
    stopColor: "#4338CA",
    offset: "0%"
  }), /* @__PURE__ */ React9.createElement("stop", {
    stopColor: "#6366F1",
    stopOpacity: "0",
    offset: "100%"
  }))), /* @__PURE__ */ React9.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ React9.createElement("g", {
    transform: "rotate(64 36.592 105.604)"
  }, /* @__PURE__ */ React9.createElement("mask", {
    id: "welcome-d",
    fill: "#fff"
  }, /* @__PURE__ */ React9.createElement("use", {
    xlinkHref: "#welcome-a"
  })), /* @__PURE__ */ React9.createElement("use", {
    fill: "url(#welcome-b)",
    xlinkHref: "#welcome-a"
  }), /* @__PURE__ */ React9.createElement("path", {
    fill: "url(#welcome-c)",
    mask: "url(#welcome-d)",
    d: "M64-24h80v152H64z"
  })), /* @__PURE__ */ React9.createElement("g", {
    transform: "rotate(-51 91.324 -105.372)"
  }, /* @__PURE__ */ React9.createElement("mask", {
    id: "welcome-f",
    fill: "#fff"
  }, /* @__PURE__ */ React9.createElement("use", {
    xlinkHref: "#welcome-e"
  })), /* @__PURE__ */ React9.createElement("use", {
    fill: "url(#welcome-b)",
    xlinkHref: "#welcome-e"
  }), /* @__PURE__ */ React9.createElement("path", {
    fill: "url(#welcome-c)",
    mask: "url(#welcome-f)",
    d: "M40.333-15.147h50v95h-50z"
  })), /* @__PURE__ */ React9.createElement("g", {
    transform: "rotate(44 61.546 392.623)"
  }, /* @__PURE__ */ React9.createElement("mask", {
    id: "welcome-h",
    fill: "#fff"
  }, /* @__PURE__ */ React9.createElement("use", {
    xlinkHref: "#welcome-g"
  })), /* @__PURE__ */ React9.createElement("use", {
    fill: "url(#welcome-b)",
    xlinkHref: "#welcome-g"
  }), /* @__PURE__ */ React9.createElement("path", {
    fill: "url(#welcome-c)",
    mask: "url(#welcome-h)",
    d: "M40.333-15.147h50v95h-50z"
  }))))), /* @__PURE__ */ React9.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React9.createElement("h1", {
    className: "text-2xl md:text-3xl text-slate-800 font-bold mb-1"
  }, "Good afternoon, Acme Inc. \u{1F44B}"), /* @__PURE__ */ React9.createElement("p", null, "Here is what\u2019s happening with your projects today:")));
}
var WelcomeBanner_default = WelcomeBanner;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardAvatars.jsx
import { React as React10, Link as Link5 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/user-36-01.jpg
var user_36_01_default = "./user-36-01.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/user-36-02.jpg
var user_36_02_default = "./user-36-02.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/user-36-03.jpg
var user_36_03_default = "./user-36-03.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/user-36-04.jpg
var user_36_04_default = "./user-36-04.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardAvatars.jsx
function DashboardAvatars() {
  return /* @__PURE__ */ React10.createElement("ul", {
    className: "flex flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px"
  }, /* @__PURE__ */ React10.createElement("li", null, /* @__PURE__ */ React10.createElement(Link5, {
    className: "block",
    to: "#0"
  }, /* @__PURE__ */ React10.createElement("img", {
    className: "w-9 h-9 rounded-full",
    src: user_36_01_default,
    width: "36",
    height: "36",
    alt: "User 01"
  }))), /* @__PURE__ */ React10.createElement("li", null, /* @__PURE__ */ React10.createElement(Link5, {
    className: "block",
    to: "#0"
  }, /* @__PURE__ */ React10.createElement("img", {
    className: "w-9 h-9 rounded-full",
    src: user_36_02_default,
    width: "36",
    height: "36",
    alt: "User 02"
  }))), /* @__PURE__ */ React10.createElement("li", null, /* @__PURE__ */ React10.createElement(Link5, {
    className: "block",
    to: "#0"
  }, /* @__PURE__ */ React10.createElement("img", {
    className: "w-9 h-9 rounded-full",
    src: user_36_03_default,
    width: "36",
    height: "36",
    alt: "User 03"
  }))), /* @__PURE__ */ React10.createElement("li", null, /* @__PURE__ */ React10.createElement(Link5, {
    className: "block",
    to: "#0"
  }, /* @__PURE__ */ React10.createElement("img", {
    className: "w-9 h-9 rounded-full",
    src: user_36_04_default,
    width: "36",
    height: "36",
    alt: "User 04"
  }))), /* @__PURE__ */ React10.createElement("li", null, /* @__PURE__ */ React10.createElement("button", {
    className: "flex justify-center items-center w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-indigo-500 shadow-sm transition duration-150 ml-2"
  }, /* @__PURE__ */ React10.createElement("span", {
    className: "sr-only"
  }, "Add new user"), /* @__PURE__ */ React10.createElement("svg", {
    className: "w-4 h-4 fill-current",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React10.createElement("path", {
    d: "M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
  })))));
}
var DashboardAvatars_default = DashboardAvatars;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/actions/FilterButton.jsx
import { React as React11, useState as useState7, useEffect as useEffect7, useRef as useRef7 } from "/libs/react-v0.0.1.mjs";
function FilterButton() {
  const [dropdownOpen, setDropdownOpen] = useState7(false);
  const trigger = useRef7(null);
  const dropdown = useRef7(null);
  useEffect7(() => {
    const clickHandler = ({ target }) => {
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
  return /* @__PURE__ */ React11.createElement("div", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React11.createElement("button", {
    ref: trigger,
    className: "btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600",
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React11.createElement("span", {
    className: "sr-only"
  }, "Filter"), /* @__PURE__ */ React11.createElement("wbr", null), /* @__PURE__ */ React11.createElement("svg", {
    className: "w-4 h-4 fill-current",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React11.createElement("path", {
    d: "M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z"
  }))), /* @__PURE__ */ React11.createElement(Transition_default, {
    show: dropdownOpen,
    tag: "div",
    className: "origin-top-right z-10 absolute top-full left-0 right-auto md:left-auto md:right-0 min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1",
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React11.createElement("div", {
    ref: dropdown
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4"
  }, "Filters"), /* @__PURE__ */ React11.createElement("ul", {
    className: "mb-4"
  }, /* @__PURE__ */ React11.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React11.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React11.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React11.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Direct VS Indirect"))), /* @__PURE__ */ React11.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React11.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React11.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React11.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Real Time Value"))), /* @__PURE__ */ React11.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React11.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React11.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React11.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Top Channels"))), /* @__PURE__ */ React11.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React11.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React11.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React11.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Sales VS Refunds"))), /* @__PURE__ */ React11.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React11.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React11.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React11.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Last Order"))), /* @__PURE__ */ React11.createElement("li", {
    className: "py-1 px-3"
  }, /* @__PURE__ */ React11.createElement("label", {
    className: "flex items-center"
  }, /* @__PURE__ */ React11.createElement("input", {
    type: "checkbox",
    className: "form-checkbox"
  }), /* @__PURE__ */ React11.createElement("span", {
    className: "text-sm font-medium ml-2"
  }, "Total Spent")))), /* @__PURE__ */ React11.createElement("div", {
    className: "py-2 px-3 border-t border-slate-200 bg-slate-50"
  }, /* @__PURE__ */ React11.createElement("ul", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React11.createElement("li", null, /* @__PURE__ */ React11.createElement("button", {
    className: "btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
  }, "Clear")), /* @__PURE__ */ React11.createElement("li", null, /* @__PURE__ */ React11.createElement("button", {
    className: "btn-xs bg-indigo-500 hover:bg-indigo-600 text-white",
    onClick: () => setDropdownOpen(false),
    onBlur: () => setDropdownOpen(false)
  }, "Apply")))))));
}
var FilterButton_default = FilterButton;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/actions/Datepicker.jsx
import { React as React12, Flatpickr } from "/libs/react-v0.0.1.mjs";
var Datepicker = () => {
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
    },
    onChange: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace("to", "-");
    }
  };
  return /* @__PURE__ */ React12.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "absolute inset-0 right-auto flex items-center pointer-events-none"
  }, /* @__PURE__ */ React12.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-500 ml-3",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React12.createElement("path", {
    d: "M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z"
  }))));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard01.jsx
import { React as React15, Link as Link6 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/charts/LineChart01.jsx
import { React as React13, useRef as useRef8, useEffect as useEffect8 } from "/libs/react-v0.0.1.mjs";
import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
} from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/vendors/tailwind/index.mjs
var config = { "theme": { "screens": { "sm": "640px", "md": "768px", "lg": "1024px", "xl": "1280px", "2xl": "1536px" }, "colors": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "columns": { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10", "11": "11", "12": "12", "auto": "auto", "3xs": "16rem", "2xs": "18rem", "xs": "20rem", "sm": "24rem", "md": "28rem", "lg": "32rem", "xl": "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, "spacing": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem" }, "animation": { "none": "none", "spin": "spin 1s linear infinite", "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", "bounce": "bounce 1s infinite" }, "aspectRatio": { "auto": "auto", "square": "1 / 1", "video": "16 / 9" }, "backdropBlur": { "0": "0", "none": "0", "sm": "4px", "DEFAULT": "8px", "md": "12px", "lg": "16px", "xl": "24px", "2xl": "40px", "3xl": "64px" }, "backdropBrightness": { "0": "0", "50": ".5", "75": ".75", "90": ".9", "95": ".95", "100": "1", "105": "1.05", "110": "1.1", "125": "1.25", "150": "1.5", "200": "2" }, "backdropContrast": { "0": "0", "50": ".5", "75": ".75", "100": "1", "125": "1.25", "150": "1.5", "200": "2" }, "backdropGrayscale": { "0": "0", "DEFAULT": "100%" }, "backdropHueRotate": { "0": "0deg", "15": "15deg", "30": "30deg", "60": "60deg", "90": "90deg", "180": "180deg" }, "backdropInvert": { "0": "0", "DEFAULT": "100%" }, "backdropOpacity": { "0": "0", "5": "0.05", "10": "0.1", "20": "0.2", "25": "0.25", "30": "0.3", "40": "0.4", "50": "0.5", "60": "0.6", "70": "0.7", "75": "0.75", "80": "0.8", "90": "0.9", "95": "0.95", "100": "1" }, "backdropSaturate": { "0": "0", "50": ".5", "100": "1", "150": "1.5", "200": "2" }, "backdropSepia": { "0": "0", "DEFAULT": "100%" }, "backgroundColor": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "backgroundImage": { "none": "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, "backgroundOpacity": { "0": "0", "5": "0.05", "10": "0.1", "20": "0.2", "25": "0.25", "30": "0.3", "40": "0.4", "50": "0.5", "60": "0.6", "70": "0.7", "75": "0.75", "80": "0.8", "90": "0.9", "95": "0.95", "100": "1" }, "backgroundPosition": { "bottom": "bottom", "center": "center", "left": "left", "left-bottom": "left bottom", "left-top": "left top", "right": "right", "right-bottom": "right bottom", "right-top": "right top", "top": "top" }, "backgroundSize": { "auto": "auto", "cover": "cover", "contain": "contain" }, "blur": { "0": "0", "none": "0", "sm": "4px", "DEFAULT": "8px", "md": "12px", "lg": "16px", "xl": "24px", "2xl": "40px", "3xl": "64px" }, "brightness": { "0": "0", "50": ".5", "75": ".75", "90": ".9", "95": ".95", "100": "1", "105": "1.05", "110": "1.1", "125": "1.25", "150": "1.5", "200": "2" }, "borderColor": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" }, "DEFAULT": "#e5e7eb" }, "borderOpacity": { "0": "0", "5": "0.05", "10": "0.1", "20": "0.2", "25": "0.25", "30": "0.3", "40": "0.4", "50": "0.5", "60": "0.6", "70": "0.7", "75": "0.75", "80": "0.8", "90": "0.9", "95": "0.95", "100": "1" }, "borderRadius": { "none": "0px", "sm": "0.125rem", "DEFAULT": "0.25rem", "md": "0.375rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "full": "9999px" }, "borderWidth": { "0": "0px", "2": "2px", "4": "4px", "8": "8px", "DEFAULT": "1px" }, "boxShadow": { "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)", "DEFAULT": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", "xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", "none": "none" }, "boxShadowColor": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "caretColor": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "accentColor": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" }, "auto": "auto" }, "contrast": { "0": "0", "50": ".5", "75": ".75", "100": "1", "125": "1.25", "150": "1.5", "200": "2" }, "container": {}, "content": { "none": "none" }, "cursor": { "auto": "auto", "default": "default", "pointer": "pointer", "wait": "wait", "text": "text", "move": "move", "help": "help", "not-allowed": "not-allowed", "none": "none", "context-menu": "context-menu", "progress": "progress", "cell": "cell", "crosshair": "crosshair", "vertical-text": "vertical-text", "alias": "alias", "copy": "copy", "no-drop": "no-drop", "grab": "grab", "grabbing": "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, "divideColor": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" }, "DEFAULT": "#e5e7eb" }, "divideOpacity": { "0": "0", "5": "0.05", "10": "0.1", "20": "0.2", "25": "0.25", "30": "0.3", "40": "0.4", "50": "0.5", "60": "0.6", "70": "0.7", "75": "0.75", "80": "0.8", "90": "0.9", "95": "0.95", "100": "1" }, "divideWidth": { "0": "0px", "2": "2px", "4": "4px", "8": "8px", "DEFAULT": "1px" }, "dropShadow": { "sm": "0 1px 1px rgb(0 0 0 / 0.05)", "DEFAULT": ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], "md": ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], "lg": ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], "xl": ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", "none": "0 0 #0000" }, "fill": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "grayscale": { "0": "0", "DEFAULT": "100%" }, "hueRotate": { "0": "0deg", "15": "15deg", "30": "30deg", "60": "60deg", "90": "90deg", "180": "180deg" }, "invert": { "0": "0", "DEFAULT": "100%" }, "flex": { "1": "1 1 0%", "auto": "1 1 auto", "initial": "0 1 auto", "none": "none" }, "flexBasis": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "auto": "auto", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", "full": "100%" }, "flexGrow": { "0": "0", "DEFAULT": "1" }, "flexShrink": { "0": "0", "DEFAULT": "1" }, "fontFamily": { "sans": ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], "serif": ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], "mono": ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, "fontSize": { "xs": ["0.75rem", { "lineHeight": "1rem" }], "sm": ["0.875rem", { "lineHeight": "1.25rem" }], "base": ["1rem", { "lineHeight": "1.5rem" }], "lg": ["1.125rem", { "lineHeight": "1.75rem" }], "xl": ["1.25rem", { "lineHeight": "1.75rem" }], "2xl": ["1.5rem", { "lineHeight": "2rem" }], "3xl": ["1.875rem", { "lineHeight": "2.25rem" }], "4xl": ["2.25rem", { "lineHeight": "2.5rem" }], "5xl": ["3rem", { "lineHeight": "1" }], "6xl": ["3.75rem", { "lineHeight": "1" }], "7xl": ["4.5rem", { "lineHeight": "1" }], "8xl": ["6rem", { "lineHeight": "1" }], "9xl": ["8rem", { "lineHeight": "1" }] }, "fontWeight": { "thin": "100", "extralight": "200", "light": "300", "normal": "400", "medium": "500", "semibold": "600", "bold": "700", "extrabold": "800", "black": "900" }, "gap": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem" }, "gradientColorStops": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "gridAutoColumns": { "auto": "auto", "min": "min-content", "max": "max-content", "fr": "minmax(0, 1fr)" }, "gridAutoRows": { "auto": "auto", "min": "min-content", "max": "max-content", "fr": "minmax(0, 1fr)" }, "gridColumn": { "auto": "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, "gridColumnEnd": { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10", "11": "11", "12": "12", "13": "13", "auto": "auto" }, "gridColumnStart": { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10", "11": "11", "12": "12", "13": "13", "auto": "auto" }, "gridRow": { "auto": "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-full": "1 / -1" }, "gridRowStart": { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "auto": "auto" }, "gridRowEnd": { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "auto": "auto" }, "gridTemplateColumns": { "1": "repeat(1, minmax(0, 1fr))", "2": "repeat(2, minmax(0, 1fr))", "3": "repeat(3, minmax(0, 1fr))", "4": "repeat(4, minmax(0, 1fr))", "5": "repeat(5, minmax(0, 1fr))", "6": "repeat(6, minmax(0, 1fr))", "7": "repeat(7, minmax(0, 1fr))", "8": "repeat(8, minmax(0, 1fr))", "9": "repeat(9, minmax(0, 1fr))", "10": "repeat(10, minmax(0, 1fr))", "11": "repeat(11, minmax(0, 1fr))", "12": "repeat(12, minmax(0, 1fr))", "none": "none" }, "gridTemplateRows": { "1": "repeat(1, minmax(0, 1fr))", "2": "repeat(2, minmax(0, 1fr))", "3": "repeat(3, minmax(0, 1fr))", "4": "repeat(4, minmax(0, 1fr))", "5": "repeat(5, minmax(0, 1fr))", "6": "repeat(6, minmax(0, 1fr))", "none": "none" }, "height": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "auto": "auto", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "full": "100%", "screen": "100vh", "min": "min-content", "max": "max-content", "fit": "fit-content" }, "inset": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "auto": "auto", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "full": "100%" }, "keyframes": { "spin": { "to": { "transform": "rotate(360deg)" } }, "ping": { "75%, 100%": { "transform": "scale(2)", "opacity": "0" } }, "pulse": { "50%": { "opacity": ".5" } }, "bounce": { "0%, 100%": { "transform": "translateY(-25%)", "animationTimingFunction": "cubic-bezier(0.8,0,1,1)" }, "50%": { "transform": "none", "animationTimingFunction": "cubic-bezier(0,0,0.2,1)" } } }, "letterSpacing": { "tighter": "-0.05em", "tight": "-0.025em", "normal": "0em", "wide": "0.025em", "wider": "0.05em", "widest": "0.1em" }, "lineHeight": { "3": ".75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "none": "1", "tight": "1.25", "snug": "1.375", "normal": "1.5", "relaxed": "1.625", "loose": "2" }, "listStyleType": { "none": "none", "disc": "disc", "decimal": "decimal" }, "margin": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "auto": "auto", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem" }, "maxHeight": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem", "full": "100%", "screen": "100vh", "min": "min-content", "max": "max-content", "fit": "fit-content" }, "maxWidth": { "0": "0rem", "none": "none", "xs": "20rem", "sm": "24rem", "md": "28rem", "lg": "32rem", "xl": "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", "full": "100%", "min": "min-content", "max": "max-content", "fit": "fit-content", "prose": "65ch", "screen-sm": "640px", "screen-md": "768px", "screen-lg": "1024px", "screen-xl": "1280px", "screen-2xl": "1536px" }, "minHeight": { "0": "0px", "full": "100%", "screen": "100vh", "min": "min-content", "max": "max-content", "fit": "fit-content" }, "minWidth": { "0": "0px", "full": "100%", "min": "min-content", "max": "max-content", "fit": "fit-content" }, "objectPosition": { "bottom": "bottom", "center": "center", "left": "left", "left-bottom": "left bottom", "left-top": "left top", "right": "right", "right-bottom": "right bottom", "right-top": "right top", "top": "top" }, "opacity": { "0": "0", "5": "0.05", "10": "0.1", "20": "0.2", "25": "0.25", "30": "0.3", "40": "0.4", "50": "0.5", "60": "0.6", "70": "0.7", "75": "0.75", "80": "0.8", "90": "0.9", "95": "0.95", "100": "1" }, "order": { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10", "11": "11", "12": "12", "first": "-9999", "last": "9999", "none": "0" }, "padding": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem" }, "placeholderColor": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "placeholderOpacity": { "0": "0", "5": "0.05", "10": "0.1", "20": "0.2", "25": "0.25", "30": "0.3", "40": "0.4", "50": "0.5", "60": "0.6", "70": "0.7", "75": "0.75", "80": "0.8", "90": "0.9", "95": "0.95", "100": "1" }, "outlineColor": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "outlineOffset": { "0": "0px", "1": "1px", "2": "2px", "4": "4px", "8": "8px" }, "outlineWidth": { "0": "0px", "1": "1px", "2": "2px", "4": "4px", "8": "8px" }, "ringColor": { "DEFAULT": "#3b82f6", "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "ringOffsetColor": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "ringOffsetWidth": { "0": "0px", "1": "1px", "2": "2px", "4": "4px", "8": "8px" }, "ringOpacity": { "0": "0", "5": "0.05", "10": "0.1", "20": "0.2", "25": "0.25", "30": "0.3", "40": "0.4", "50": "0.5", "60": "0.6", "70": "0.7", "75": "0.75", "80": "0.8", "90": "0.9", "95": "0.95", "100": "1", "DEFAULT": "0.5" }, "ringWidth": { "0": "0px", "1": "1px", "2": "2px", "4": "4px", "8": "8px", "DEFAULT": "3px" }, "rotate": { "0": "0deg", "1": "1deg", "2": "2deg", "3": "3deg", "6": "6deg", "12": "12deg", "45": "45deg", "90": "90deg", "180": "180deg" }, "saturate": { "0": "0", "50": ".5", "100": "1", "150": "1.5", "200": "2" }, "scale": { "0": "0", "50": ".5", "75": ".75", "90": ".9", "95": ".95", "100": "1", "105": "1.05", "110": "1.1", "125": "1.25", "150": "1.5" }, "scrollMargin": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem" }, "scrollPadding": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem" }, "sepia": { "0": "0", "DEFAULT": "100%" }, "skew": { "0": "0deg", "1": "1deg", "2": "2deg", "3": "3deg", "6": "6deg", "12": "12deg" }, "space": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem" }, "stroke": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "strokeWidth": { "0": "0", "1": "1", "2": "2" }, "textColor": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "textDecorationColor": { "inherit": "inherit", "current": "currentColor", "transparent": "transparent", "black": "#000", "white": "#fff", "slate": { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a" }, "gray": { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827" }, "zinc": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b" }, "neutral": { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717" }, "stone": { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917" }, "red": { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d" }, "orange": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "amber": { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f" }, "yellow": { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12" }, "lime": { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314" }, "green": { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d" }, "emerald": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "teal": { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a" }, "cyan": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "sky": { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, "blue": { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }, "indigo": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "violet": { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95" }, "purple": { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" }, "fuchsia": { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75" }, "pink": { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843" }, "rose": { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337" } }, "textDecorationThickness": { "0": "0px", "1": "1px", "2": "2px", "4": "4px", "8": "8px", "auto": "auto", "from-font": "from-font" }, "textUnderlineOffset": { "0": "0px", "1": "1px", "2": "2px", "4": "4px", "8": "8px", "auto": "auto" }, "textIndent": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem" }, "textOpacity": { "0": "0", "5": "0.05", "10": "0.1", "20": "0.2", "25": "0.25", "30": "0.3", "40": "0.4", "50": "0.5", "60": "0.6", "70": "0.7", "75": "0.75", "80": "0.8", "90": "0.9", "95": "0.95", "100": "1" }, "transformOrigin": { "center": "center", "top": "top", "top-right": "top right", "right": "right", "bottom-right": "bottom right", "bottom": "bottom", "bottom-left": "bottom left", "left": "left", "top-left": "top left" }, "transitionDelay": { "75": "75ms", "100": "100ms", "150": "150ms", "200": "200ms", "300": "300ms", "500": "500ms", "700": "700ms", "1000": "1000ms" }, "transitionDuration": { "75": "75ms", "100": "100ms", "150": "150ms", "200": "200ms", "300": "300ms", "500": "500ms", "700": "700ms", "1000": "1000ms", "DEFAULT": "150ms" }, "transitionProperty": { "none": "none", "all": "all", "DEFAULT": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", "colors": "color, background-color, border-color, text-decoration-color, fill, stroke", "opacity": "opacity", "shadow": "box-shadow", "transform": "transform" }, "transitionTimingFunction": { "DEFAULT": "cubic-bezier(0.4, 0, 0.2, 1)", "linear": "linear", "in": "cubic-bezier(0.4, 0, 1, 1)", "out": "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, "translate": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "full": "100%" }, "width": { "0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", "auto": "auto", "px": "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", "full": "100%", "screen": "100vw", "min": "min-content", "max": "max-content", "fit": "fit-content" }, "willChange": { "auto": "auto", "scroll": "scroll-position", "contents": "contents", "transform": "transform" }, "zIndex": { "0": "0", "10": "10", "20": "20", "30": "30", "40": "40", "50": "50", "auto": "auto" } }, "corePlugins": ["preflight", "container", "accessibility", "pointerEvents", "visibility", "position", "inset", "isolation", "zIndex", "order", "gridColumn", "gridColumnStart", "gridColumnEnd", "gridRow", "gridRowStart", "gridRowEnd", "float", "clear", "margin", "boxSizing", "display", "aspectRatio", "height", "maxHeight", "minHeight", "width", "minWidth", "maxWidth", "flex", "flexShrink", "flexGrow", "flexBasis", "tableLayout", "borderCollapse", "transformOrigin", "translate", "rotate", "skew", "scale", "transform", "animation", "cursor", "touchAction", "userSelect", "resize", "scrollSnapType", "scrollSnapAlign", "scrollSnapStop", "scrollMargin", "scrollPadding", "listStylePosition", "listStyleType", "appearance", "columns", "breakBefore", "breakInside", "breakAfter", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateColumns", "gridTemplateRows", "flexDirection", "flexWrap", "placeContent", "placeItems", "alignContent", "alignItems", "justifyContent", "justifyItems", "gap", "space", "divideWidth", "divideStyle", "divideColor", "divideOpacity", "placeSelf", "alignSelf", "justifySelf", "overflow", "overscrollBehavior", "scrollBehavior", "textOverflow", "whitespace", "wordBreak", "borderRadius", "borderWidth", "borderStyle", "borderColor", "borderOpacity", "backgroundColor", "backgroundOpacity", "backgroundImage", "gradientColorStops", "boxDecorationBreak", "backgroundSize", "backgroundAttachment", "backgroundClip", "backgroundPosition", "backgroundRepeat", "backgroundOrigin", "fill", "stroke", "strokeWidth", "objectFit", "objectPosition", "padding", "textAlign", "textIndent", "verticalAlign", "fontFamily", "fontSize", "fontWeight", "textTransform", "fontStyle", "fontVariantNumeric", "lineHeight", "letterSpacing", "textColor", "textOpacity", "textDecoration", "textDecorationColor", "textDecorationStyle", "textDecorationThickness", "textUnderlineOffset", "fontSmoothing", "placeholderColor", "placeholderOpacity", "caretColor", "accentColor", "opacity", "backgroundBlendMode", "mixBlendMode", "boxShadow", "boxShadowColor", "outlineStyle", "outlineWidth", "outlineOffset", "outlineColor", "ringWidth", "ringColor", "ringOpacity", "ringOffsetWidth", "ringOffsetColor", "blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia", "filter", "backdropBlur", "backdropBrightness", "backdropContrast", "backdropGrayscale", "backdropHueRotate", "backdropInvert", "backdropOpacity", "backdropSaturate", "backdropSepia", "backdropFilter", "transitionProperty", "transitionDelay", "transitionDuration", "transitionTimingFunction", "willChange", "content"], "plugins": [null], "postcssPlugin": "tailwindcss", "content": { "files": [], "extract": {}, "transform": {} }, "presets": [], "darkMode": "media", "variantOrder": ["first", "last", "odd", "even", "visited", "checked", "empty", "read-only", "group-hover", "group-focus", "focus-within", "hover", "focus", "focus-visible", "active", "disabled"], "prefix": "", "important": false, "separator": ":", "safelist": [] };
var tailwindConfig = () => {
  return config;
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

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/charts/LineChart01.jsx
Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip);
function LineChart01({
  data,
  width,
  height
}) {
  const canvas = useRef8(null);
  useEffect8(() => {
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
  return /* @__PURE__ */ React13.createElement("canvas", {
    ref: canvas,
    width,
    height
  });
}
var LineChart01_default = LineChart01;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/icon-01.svg
var icon_01_default = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon1-b">\n            <stop stop-color="#A5B4FC" offset="0%" />\n            <stop stop-color="#818CF8" offset="100%" />\n        </linearGradient>\n        <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="icon1-c">\n            <stop stop-color="#4338CA" offset="0%" />\n            <stop stop-color="#6366F1" stop-opacity="0" offset="100%" />\n        </linearGradient>\n        <path id="icon1-a" d="M16 0l16 32-16-5-16 5z" />\n    </defs>\n    <g transform="rotate(90 16 16)" fill="none" fill-rule="evenodd">\n        <mask id="icon1-d" fill="#fff">\n            <use xlink:href="#icon1-a" />\n        </mask>\n        <use fill="url(#icon1-b)" xlink:href="#icon1-a" />\n        <path fill="url(#icon1-c)" mask="url(#icon1-d)" d="M16-6h20v38H16z" />\n    </g>\n</svg>';

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/EditMenu.jsx
import { React as React14, useState as useState8, useRef as useRef9, useEffect as useEffect9 } from "/libs/react-v0.0.1.mjs";
function EditMenu({
  children,
  ...rest
}) {
  const [dropdownOpen, setDropdownOpen] = useState8(false);
  const trigger = useRef9(null);
  const dropdown = useRef9(null);
  useEffect9(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  useEffect9(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ React14.createElement("div", {
    ...rest
  }, /* @__PURE__ */ React14.createElement("button", {
    ref: trigger,
    className: `text-slate-400 hover:text-slate-500 rounded-full ${dropdownOpen && "bg-slate-100 text-slate-500"}`,
    "aria-haspopup": "true",
    onClick: () => setDropdownOpen(!dropdownOpen),
    "aria-expanded": dropdownOpen
  }, /* @__PURE__ */ React14.createElement("span", {
    className: "sr-only"
  }, "Menu"), /* @__PURE__ */ React14.createElement("svg", {
    className: "w-8 h-8 fill-current",
    viewBox: "0 0 32 32"
  }, /* @__PURE__ */ React14.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "2"
  }), /* @__PURE__ */ React14.createElement("circle", {
    cx: "10",
    cy: "16",
    r: "2"
  }), /* @__PURE__ */ React14.createElement("circle", {
    cx: "22",
    cy: "16",
    r: "2"
  }))), /* @__PURE__ */ React14.createElement(Transition_default, {
    show: dropdownOpen,
    tag: "div",
    className: "origin-top-right z-10 absolute top-full right-0 min-w-36 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, /* @__PURE__ */ React14.createElement("ul", {
    ref: dropdown,
    onFocus: () => setDropdownOpen(true),
    onBlur: () => setDropdownOpen(false)
  }, children)));
}
var EditMenu_default = EditMenu;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard01.jsx
function DashboardCard01() {
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
  return /* @__PURE__ */ React15.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React15.createElement("div", {
    className: "px-5 pt-5"
  }, /* @__PURE__ */ React15.createElement("header", {
    className: "flex justify-between items-start mb-2"
  }, /* @__PURE__ */ React15.createElement("img", {
    src: icon_01_default,
    width: "32",
    height: "32",
    alt: "Icon 01"
  }), /* @__PURE__ */ React15.createElement(EditMenu_default, {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React15.createElement("li", null, /* @__PURE__ */ React15.createElement(Link6, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 1")), /* @__PURE__ */ React15.createElement("li", null, /* @__PURE__ */ React15.createElement(Link6, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 2")), /* @__PURE__ */ React15.createElement("li", null, /* @__PURE__ */ React15.createElement(Link6, {
    className: "font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3",
    to: "#0"
  }, "Remove")))), /* @__PURE__ */ React15.createElement("h2", {
    className: "text-lg font-semibold text-slate-800 mb-2"
  }, "Acme Plus"), /* @__PURE__ */ React15.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase mb-1"
  }, "Sales"), /* @__PURE__ */ React15.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React15.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "$24,780"), /* @__PURE__ */ React15.createElement("div", {
    className: "text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full"
  }, "+49%"))), /* @__PURE__ */ React15.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React15.createElement(LineChart01_default, {
    data: chartData,
    width: 389,
    height: 128
  })));
}
var DashboardCard01_default = DashboardCard01;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard02.jsx
import { React as React16, Link as Link7 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/icon-02.svg
var icon_02_default = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon2-b">\n            <stop stop-color="#BAE6FD" offset="0%" />\n            <stop stop-color="#38BDF8" offset="100%" />\n        </linearGradient>\n        <linearGradient x1="50%" y1="25.718%" x2="50%" y2="100%" id="icon2-c">\n            <stop stop-color="#0284C7" offset="0%" />\n            <stop stop-color="#0284C7" stop-opacity="0" offset="100%" />\n        </linearGradient>\n        <path id="icon2-a" d="M16 0l16 32-16-5-16 5z" />\n    </defs>\n    <g transform="rotate(90 16 16)" fill="none" fill-rule="evenodd">\n        <mask id="icon2-d" fill="#fff">\n            <use xlink:href="#icon2-a" />\n        </mask>\n        <use fill="url(#icon2-b)" xlink:href="#icon2-a" />\n        <path fill="url(#icon2-c)" mask="url(#icon2-d)" d="M16-6h20v38H16z" />\n    </g>\n</svg>';

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard02.jsx
function DashboardCard02() {
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
  return /* @__PURE__ */ React16.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React16.createElement("div", {
    className: "px-5 pt-5"
  }, /* @__PURE__ */ React16.createElement("header", {
    className: "flex justify-between items-start mb-2"
  }, /* @__PURE__ */ React16.createElement("img", {
    src: icon_02_default,
    width: "32",
    height: "32",
    alt: "Icon 02"
  }), /* @__PURE__ */ React16.createElement(EditMenu_default, {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React16.createElement("li", null, /* @__PURE__ */ React16.createElement(Link7, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 1")), /* @__PURE__ */ React16.createElement("li", null, /* @__PURE__ */ React16.createElement(Link7, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 2")), /* @__PURE__ */ React16.createElement("li", null, /* @__PURE__ */ React16.createElement(Link7, {
    className: "font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3",
    to: "#0"
  }, "Remove")))), /* @__PURE__ */ React16.createElement("h2", {
    className: "text-lg font-semibold text-slate-800 mb-2"
  }, "Acme Advanced"), /* @__PURE__ */ React16.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase mb-1"
  }, "Sales"), /* @__PURE__ */ React16.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React16.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "$17,489"), /* @__PURE__ */ React16.createElement("div", {
    className: "text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full"
  }, "-14%"))), /* @__PURE__ */ React16.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React16.createElement(LineChart01_default, {
    data: chartData,
    width: 389,
    height: 128
  })));
}
var DashboardCard02_default = DashboardCard02;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard03.jsx
import { React as React17, Link as Link8 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/icon-03.svg
var icon_03_default = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icon3-b">\n            <stop stop-color="#E2E8F0" offset="0%" />\n            <stop stop-color="#94A3B8" offset="100%" />\n        </linearGradient>\n        <linearGradient x1="50%" y1="24.537%" x2="50%" y2="99.142%" id="icon3-c">\n            <stop stop-color="#334155" offset="0%" />\n            <stop stop-color="#334155" stop-opacity="0" offset="100%" />\n        </linearGradient>\n        <path id="icon3-a" d="M16 0l16 32-16-5-16 5z" />\n    </defs>\n    <g transform="rotate(90 16 16)" fill="none" fill-rule="evenodd">\n        <mask id="icon3-d" fill="#fff">\n            <use xlink:href="#icon3-a" />\n        </mask>\n        <use fill="url(#icon3-b)" xlink:href="#icon3-a" />\n        <path fill="url(#icon3-c)" mask="url(#icon3-d)" d="M16-6h20v38H16z" />\n    </g>\n</svg>';

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard03.jsx
function DashboardCard03() {
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
  return /* @__PURE__ */ React17.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "px-5 pt-5"
  }, /* @__PURE__ */ React17.createElement("header", {
    className: "flex justify-between items-start mb-2"
  }, /* @__PURE__ */ React17.createElement("img", {
    src: icon_03_default,
    width: "32",
    height: "32",
    alt: "Icon 03"
  }), /* @__PURE__ */ React17.createElement(EditMenu_default, {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React17.createElement("li", null, /* @__PURE__ */ React17.createElement(Link8, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 1")), /* @__PURE__ */ React17.createElement("li", null, /* @__PURE__ */ React17.createElement(Link8, {
    className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
    to: "#0"
  }, "Option 2")), /* @__PURE__ */ React17.createElement("li", null, /* @__PURE__ */ React17.createElement(Link8, {
    className: "font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3",
    to: "#0"
  }, "Remove")))), /* @__PURE__ */ React17.createElement("h2", {
    className: "text-lg font-semibold text-slate-800 mb-2"
  }, "Acme Professional"), /* @__PURE__ */ React17.createElement("div", {
    className: "text-xs font-semibold text-slate-400 uppercase mb-1"
  }, "Sales"), /* @__PURE__ */ React17.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "$9,962"), /* @__PURE__ */ React17.createElement("div", {
    className: "text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full"
  }, "+49%"))), /* @__PURE__ */ React17.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React17.createElement(LineChart01_default, {
    data: chartData,
    width: 389,
    height: 128
  })));
}
var DashboardCard03_default = DashboardCard03;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard04.jsx
import { React as React19 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/charts/BarChart01.jsx
import { React as React18, useRef as useRef10, useEffect as useEffect10 } from "/libs/react-v0.0.1.mjs";
import {
  Chart as Chart2,
  BarController,
  BarElement,
  LinearScale as LinearScale2,
  TimeScale as TimeScale2,
  Tooltip as Tooltip2,
  Legend
} from "/libs/react-v0.0.1.mjs";
Chart2.register(BarController, BarElement, LinearScale2, TimeScale2, Tooltip2, Legend);
function BarChart01({
  data,
  width,
  height
}) {
  const canvas = useRef10(null);
  const legend = useRef10(null);
  useEffect10(() => {
    const ctx = canvas.current;
    const chart = new Chart2(ctx, {
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
  return /* @__PURE__ */ React18.createElement(React18.Fragment, null, /* @__PURE__ */ React18.createElement("div", {
    className: "px-5 py-3"
  }, /* @__PURE__ */ React18.createElement("ul", {
    ref: legend,
    className: "flex flex-wrap"
  })), /* @__PURE__ */ React18.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React18.createElement("canvas", {
    ref: canvas,
    width,
    height
  })));
}
var BarChart01_default = BarChart01;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard04.jsx
function DashboardCard04() {
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
  return /* @__PURE__ */ React19.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React19.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React19.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Direct VS Indirect")), /* @__PURE__ */ React19.createElement(BarChart01_default, {
    data: chartData,
    width: 595,
    height: 248
  }));
}
var DashboardCard04_default = DashboardCard04;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard05.jsx
import { React as React22, useState as useState10, useEffect as useEffect12 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/utils/Info.jsx
import { React as React20, useState as useState9 } from "/libs/react-v0.0.1.mjs";
function Info({
  children,
  className,
  containerClassName
}) {
  const [infoOpen, setInfoOpen] = useState9(false);
  return /* @__PURE__ */ React20.createElement("div", {
    className: `relative ${className}`,
    onMouseEnter: () => setInfoOpen(true),
    onMouseLeave: () => setInfoOpen(false),
    onFocus: () => setInfoOpen(true),
    onBlur: () => setInfoOpen(false)
  }, /* @__PURE__ */ React20.createElement("button", {
    className: "block",
    "aria-haspopup": "true",
    "aria-expanded": infoOpen,
    onClick: (e) => e.preventDefault()
  }, /* @__PURE__ */ React20.createElement("svg", {
    className: "w-4 h-4 fill-current text-slate-400",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React20.createElement("path", {
    d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
  }))), /* @__PURE__ */ React20.createElement("div", {
    className: "z-10 absolute bottom-full left-1/2 transform -translate-x-1/2"
  }, /* @__PURE__ */ React20.createElement(Transition_default, {
    show: infoOpen,
    tag: "div",
    className: `bg-white border border-slate-200 p-3 rounded shadow-lg overflow-hidden mb-2 ${containerClassName}`,
    enter: "transition ease-out duration-200 transform",
    enterStart: "opacity-0 -translate-y-2",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-out duration-200",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  }, children)));
}
var Info_default = Info;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/charts/RealtimeChart.jsx
import { React as React21, useRef as useRef11, useEffect as useEffect11 } from "/libs/react-v0.0.1.mjs";
import {
  Chart as Chart3,
  LineController as LineController2,
  LineElement as LineElement2,
  Filler as Filler2,
  PointElement as PointElement2,
  LinearScale as LinearScale3,
  TimeScale as TimeScale3,
  Tooltip as Tooltip3
} from "/libs/react-v0.0.1.mjs";
Chart3.register(LineController2, LineElement2, Filler2, PointElement2, LinearScale3, TimeScale3, Tooltip3);
function RealtimeChart({
  data,
  width,
  height
}) {
  const canvas = useRef11(null);
  const chartValue = useRef11(null);
  const chartDeviation = useRef11(null);
  useEffect11(() => {
    const ctx = canvas.current;
    const chart = new Chart3(ctx, {
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
  useEffect11(() => {
    const currentValue = data.datasets[0].data[data.datasets[0].data.length - 1];
    const previousValue = data.datasets[0].data[data.datasets[0].data.length - 2];
    const diff = (currentValue - previousValue) / previousValue * 100;
    chartValue.current.innerHTML = data.datasets[0].data[data.datasets[0].data.length - 1];
    if (diff < 0) {
      chartDeviation.current.style.backgroundColor = tailwindConfig().theme.colors.yellow[500];
    } else {
      chartDeviation.current.style.backgroundColor = tailwindConfig().theme.colors.green[500];
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
}
var RealtimeChart_default = RealtimeChart;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard05.jsx
function DashboardCard05() {
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
  useEffect12(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 2e3);
    return () => clearInterval(interval);
  }, [counter]);
  useEffect12(() => {
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
  return /* @__PURE__ */ React22.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React22.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100 flex items-center"
  }, /* @__PURE__ */ React22.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Real Time Value"), /* @__PURE__ */ React22.createElement(Info_default, {
    className: "ml-2",
    containerClassName: "min-w-44"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "text-sm text-center"
  }, "Built with ", /* @__PURE__ */ React22.createElement("a", {
    className: "underline",
    href: "https://www.chartjs.org/",
    target: "_blank",
    rel: "noreferrer"
  }, "Chart.js")))), /* @__PURE__ */ React22.createElement(RealtimeChart_default, {
    data: chartData,
    width: 595,
    height: 248
  }));
}
var DashboardCard05_default = DashboardCard05;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard06.jsx
import { React as React24 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/charts/DoughnutChart.jsx
import { React as React23, useRef as useRef12, useEffect as useEffect13 } from "/libs/react-v0.0.1.mjs";
import {
  Chart as Chart4,
  DoughnutController,
  ArcElement,
  TimeScale as TimeScale4,
  Tooltip as Tooltip4
} from "/libs/react-v0.0.1.mjs";
Chart4.register(DoughnutController, ArcElement, TimeScale4, Tooltip4);
function DoughnutChart({
  data,
  width,
  height
}) {
  const canvas = useRef12(null);
  const legend = useRef12(null);
  useEffect13(() => {
    const ctx = canvas.current;
    const chart = new Chart4(ctx, {
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
  return /* @__PURE__ */ React23.createElement("div", {
    className: "grow flex flex-col justify-center"
  }, /* @__PURE__ */ React23.createElement("div", null, /* @__PURE__ */ React23.createElement("canvas", {
    ref: canvas,
    width,
    height
  })), /* @__PURE__ */ React23.createElement("div", {
    className: "px-5 pt-2 pb-6"
  }, /* @__PURE__ */ React23.createElement("ul", {
    ref: legend,
    className: "flex flex-wrap justify-center -m-1"
  })));
}
var DoughnutChart_default = DoughnutChart;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard06.jsx
function DashboardCard06() {
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
  return /* @__PURE__ */ React24.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React24.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React24.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Top Countries")), /* @__PURE__ */ React24.createElement(DoughnutChart_default, {
    data: chartData,
    width: 389,
    height: 260
  }));
}
var DashboardCard06_default = DashboardCard06;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard07.jsx
import { React as React25 } from "/libs/react-v0.0.1.mjs";
function DashboardCard07() {
  return /* @__PURE__ */ React25.createElement("div", {
    className: "col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React25.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React25.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Top Channels")), /* @__PURE__ */ React25.createElement("div", {
    className: "p-3"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "overflow-x-auto"
  }, /* @__PURE__ */ React25.createElement("table", {
    className: "table-auto w-full"
  }, /* @__PURE__ */ React25.createElement("thead", {
    className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm"
  }, /* @__PURE__ */ React25.createElement("tr", null, /* @__PURE__ */ React25.createElement("th", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "font-semibold text-left"
  }, "Source")), /* @__PURE__ */ React25.createElement("th", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "font-semibold text-center"
  }, "Visitors")), /* @__PURE__ */ React25.createElement("th", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "font-semibold text-center"
  }, "Revenues")), /* @__PURE__ */ React25.createElement("th", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "font-semibold text-center"
  }, "Sales")), /* @__PURE__ */ React25.createElement("th", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "font-semibold text-center"
  }, "Conversion")))), /* @__PURE__ */ React25.createElement("tbody", {
    className: "text-sm font-medium divide-y divide-slate-100"
  }, /* @__PURE__ */ React25.createElement("tr", null, /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React25.createElement("svg", {
    className: "shrink-0 mr-2 sm:mr-3",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React25.createElement("circle", {
    fill: "#24292E",
    cx: "18",
    cy: "18",
    r: "18"
  }), /* @__PURE__ */ React25.createElement("path", {
    d: "M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z",
    fill: "#FFF"
  })), /* @__PURE__ */ React25.createElement("div", {
    className: "text-slate-800"
  }, "Github.com"))), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center"
  }, "2.4K")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center text-green-500"
  }, "$3,877")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center"
  }, "267")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center text-sky-500"
  }, "4.7%"))), /* @__PURE__ */ React25.createElement("tr", null, /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React25.createElement("svg", {
    className: "shrink-0 mr-2 sm:mr-3",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React25.createElement("circle", {
    fill: "#1DA1F2",
    cx: "18",
    cy: "18",
    r: "18"
  }), /* @__PURE__ */ React25.createElement("path", {
    d: "M26 13.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H10c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z",
    fill: "#FFF",
    fillRule: "nonzero"
  })), /* @__PURE__ */ React25.createElement("div", {
    className: "text-slate-800"
  }, "Twitter"))), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center"
  }, "2.2K")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center text-green-500"
  }, "$3,426")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center"
  }, "249")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center text-sky-500"
  }, "4.4%"))), /* @__PURE__ */ React25.createElement("tr", null, /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React25.createElement("svg", {
    className: "shrink-0 mr-2 sm:mr-3",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React25.createElement("circle", {
    fill: "#EA4335",
    cx: "18",
    cy: "18",
    r: "18"
  }), /* @__PURE__ */ React25.createElement("path", {
    d: "M18 17v2.4h4.1c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C21.6 11.7 20 11 18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H18z",
    fill: "#FFF",
    fillRule: "nonzero"
  })), /* @__PURE__ */ React25.createElement("div", {
    className: "text-slate-800"
  }, "Google (organic)"))), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center"
  }, "2.0K")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center text-green-500"
  }, "$2,444")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center"
  }, "224")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center text-sky-500"
  }, "4.2%"))), /* @__PURE__ */ React25.createElement("tr", null, /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React25.createElement("svg", {
    className: "shrink-0 mr-2 sm:mr-3",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React25.createElement("circle", {
    fill: "#4BC9FF",
    cx: "18",
    cy: "18",
    r: "18"
  }), /* @__PURE__ */ React25.createElement("path", {
    d: "M26 14.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C14 19.9 13.4 15 12 15c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3z",
    fill: "#FFF",
    fillRule: "nonzero"
  })), /* @__PURE__ */ React25.createElement("div", {
    className: "text-slate-800"
  }, "Vimeo.com"))), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center"
  }, "1.9K")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center text-green-500"
  }, "$2,236")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center"
  }, "220")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center text-sky-500"
  }, "4.2%"))), /* @__PURE__ */ React25.createElement("tr", null, /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React25.createElement("svg", {
    className: "shrink-0 mr-2 sm:mr-3",
    width: "36",
    height: "36",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React25.createElement("circle", {
    fill: "#0E2439",
    cx: "18",
    cy: "18",
    r: "18"
  }), /* @__PURE__ */ React25.createElement("path", {
    d: "M14.232 12.818V23H11.77V12.818h2.46zM15.772 23V12.818h2.462v4.087h4.012v-4.087h2.456V23h-2.456v-4.092h-4.012V23h-2.461z",
    fill: "#E6ECF4"
  })), /* @__PURE__ */ React25.createElement("div", {
    className: "text-slate-800"
  }, "Indiehackers.com"))), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center"
  }, "1.7K")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center text-green-500"
  }, "$2,034")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center"
  }, "204")), /* @__PURE__ */ React25.createElement("td", {
    className: "p-2"
  }, /* @__PURE__ */ React25.createElement("div", {
    className: "text-center text-sky-500"
  }, "3.9%"))))))));
}
var DashboardCard07_default = DashboardCard07;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard08.jsx
import { React as React27, Link as Link9 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/charts/LineChart02.jsx
import { React as React26, useRef as useRef13, useEffect as useEffect14 } from "/libs/react-v0.0.1.mjs";
import {
  Chart as Chart5,
  LineController as LineController3,
  LineElement as LineElement3,
  Filler as Filler3,
  PointElement as PointElement3,
  LinearScale as LinearScale4,
  TimeScale as TimeScale5,
  Tooltip as Tooltip5
} from "/libs/react-v0.0.1.mjs";
Chart5.register(LineController3, LineElement3, Filler3, PointElement3, LinearScale4, TimeScale5, Tooltip5);
function LineChart02({
  data,
  width,
  height
}) {
  const canvas = useRef13(null);
  const legend = useRef13(null);
  useEffect14(() => {
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
  return /* @__PURE__ */ React26.createElement(React26.Fragment, null, /* @__PURE__ */ React26.createElement("div", {
    className: "px-5 py-3"
  }, /* @__PURE__ */ React26.createElement("div", {
    className: "flex flex-wrap justify-between items-end"
  }, /* @__PURE__ */ React26.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React26.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "$1,482"), /* @__PURE__ */ React26.createElement("div", {
    className: "text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full"
  }, "-22%")), /* @__PURE__ */ React26.createElement("div", {
    className: "grow ml-2 mb-1"
  }, /* @__PURE__ */ React26.createElement("ul", {
    ref: legend,
    className: "flex flex-wrap justify-end"
  })))), /* @__PURE__ */ React26.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React26.createElement("canvas", {
    ref: canvas,
    width,
    height
  })));
}
var LineChart02_default = LineChart02;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard08.jsx
function DashboardCard08() {
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
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500]
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
        pointBackgroundColor: tailwindConfig().theme.colors.blue[400]
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
        borderColor: tailwindConfig().theme.colors.green[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[500]
      }
    ]
  };
  return /* @__PURE__ */ React27.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React27.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100 flex items-center"
  }, /* @__PURE__ */ React27.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Sales Over Time (all stores)")), /* @__PURE__ */ React27.createElement(LineChart02_default, {
    data: chartData,
    width: 595,
    height: 248
  }));
}
var DashboardCard08_default = DashboardCard08;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard09.jsx
import { React as React29, Link as Link10 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/charts/BarChart02.jsx
import { React as React28, useRef as useRef14, useEffect as useEffect15 } from "/libs/react-v0.0.1.mjs";
import {
  Chart as Chart6,
  BarController as BarController2,
  BarElement as BarElement2,
  LinearScale as LinearScale5,
  TimeScale as TimeScale6,
  Tooltip as Tooltip6,
  Legend as Legend2
} from "/libs/react-v0.0.1.mjs";
Chart6.register(BarController2, BarElement2, LinearScale5, TimeScale6, Tooltip6, Legend2);
function BarChart02({
  data,
  width,
  height
}) {
  const canvas = useRef14(null);
  useEffect15(() => {
    const ctx = canvas.current;
    const chart = new Chart6(ctx, {
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
  return /* @__PURE__ */ React28.createElement("canvas", {
    ref: canvas,
    width,
    height
  });
}
var BarChart02_default = BarChart02;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard09.jsx
function DashboardCard09() {
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
  return /* @__PURE__ */ React29.createElement("div", {
    className: "flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React29.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100 flex items-center"
  }, /* @__PURE__ */ React29.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Sales VS Refunds"), /* @__PURE__ */ React29.createElement(Info_default, {
    className: "ml-2",
    containerClassName: "min-w-80"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-sm"
  }, "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."))), /* @__PURE__ */ React29.createElement("div", {
    className: "px-5 py-3"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "+$6,796"), /* @__PURE__ */ React29.createElement("div", {
    className: "text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full"
  }, "-34%"))), /* @__PURE__ */ React29.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React29.createElement(BarChart02_default, {
    data: chartData,
    width: 595,
    height: 248
  })));
}
var DashboardCard09_default = DashboardCard09;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard10.jsx
import { React as React30, Link as Link11 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/user-36-05.jpg
var user_36_05_default = "./user-36-05.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/user-36-06.jpg
var user_36_06_default = "./user-36-06.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/user-36-07.jpg
var user_36_07_default = "./user-36-07.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/user-36-08.jpg
var user_36_08_default = "./user-36-08.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/assets/images/user-36-09.jpg
var user_36_09_default = "./user-36-09.jpg";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard10.jsx
function DashboardCard10() {
  const customers = [
    {
      id: "0",
      image: user_36_05_default,
      name: "Alex Shatov",
      email: "alexshatov@gmail.com",
      location: "\u{1F1FA}\u{1F1F8}",
      spent: "$2,890.66"
    },
    {
      id: "1",
      image: user_36_06_default,
      name: "Philip Harbach",
      email: "philip.h@gmail.com",
      location: "\u{1F1E9}\u{1F1EA}",
      spent: "$2,767.04"
    },
    {
      id: "2",
      image: user_36_07_default,
      name: "Mirko Fisuk",
      email: "mirkofisuk@gmail.com",
      location: "\u{1F1EB}\u{1F1F7}",
      spent: "$2,996.00"
    },
    {
      id: "3",
      image: user_36_08_default,
      name: "Olga Semklo",
      email: "olga.s@cool.design",
      location: "\u{1F1EE}\u{1F1F9}",
      spent: "$1,220.66"
    },
    {
      id: "4",
      image: user_36_09_default,
      name: "Burak Long",
      email: "longburak@gmail.com",
      location: "\u{1F1EC}\u{1F1E7}",
      spent: "$1,890.66"
    }
  ];
  return /* @__PURE__ */ React30.createElement("div", {
    className: "col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React30.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React30.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Customers")), /* @__PURE__ */ React30.createElement("div", {
    className: "p-3"
  }, /* @__PURE__ */ React30.createElement("div", {
    className: "overflow-x-auto"
  }, /* @__PURE__ */ React30.createElement("table", {
    className: "table-auto w-full"
  }, /* @__PURE__ */ React30.createElement("thead", {
    className: "text-xs font-semibold uppercase text-slate-400 bg-slate-50"
  }, /* @__PURE__ */ React30.createElement("tr", null, /* @__PURE__ */ React30.createElement("th", {
    className: "p-2 whitespace-nowrap"
  }, /* @__PURE__ */ React30.createElement("div", {
    className: "font-semibold text-left"
  }, "Name")), /* @__PURE__ */ React30.createElement("th", {
    className: "p-2 whitespace-nowrap"
  }, /* @__PURE__ */ React30.createElement("div", {
    className: "font-semibold text-left"
  }, "Email")), /* @__PURE__ */ React30.createElement("th", {
    className: "p-2 whitespace-nowrap"
  }, /* @__PURE__ */ React30.createElement("div", {
    className: "font-semibold text-left"
  }, "Spent")), /* @__PURE__ */ React30.createElement("th", {
    className: "p-2 whitespace-nowrap"
  }, /* @__PURE__ */ React30.createElement("div", {
    className: "font-semibold text-center"
  }, "Country")))), /* @__PURE__ */ React30.createElement("tbody", {
    className: "text-sm divide-y divide-slate-100"
  }, customers.map((customer) => {
    return /* @__PURE__ */ React30.createElement("tr", {
      key: customer.id
    }, /* @__PURE__ */ React30.createElement("td", {
      className: "p-2 whitespace-nowrap"
    }, /* @__PURE__ */ React30.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ React30.createElement("div", {
      className: "w-10 h-10 shrink-0 mr-2 sm:mr-3"
    }, /* @__PURE__ */ React30.createElement("img", {
      className: "rounded-full",
      src: customer.image,
      width: "40",
      height: "40",
      alt: customer.name
    })), /* @__PURE__ */ React30.createElement("div", {
      className: "font-medium text-slate-800"
    }, customer.name))), /* @__PURE__ */ React30.createElement("td", {
      className: "p-2 whitespace-nowrap"
    }, /* @__PURE__ */ React30.createElement("div", {
      className: "text-left"
    }, customer.email)), /* @__PURE__ */ React30.createElement("td", {
      className: "p-2 whitespace-nowrap"
    }, /* @__PURE__ */ React30.createElement("div", {
      className: "text-left font-medium text-green-500"
    }, customer.spent)), /* @__PURE__ */ React30.createElement("td", {
      className: "p-2 whitespace-nowrap"
    }, /* @__PURE__ */ React30.createElement("div", {
      className: "text-lg text-center"
    }, customer.location)));
  }))))));
}
var DashboardCard10_default = DashboardCard10;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard11.jsx
import { React as React32 } from "/libs/react-v0.0.1.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/charts/BarChart03.jsx
import { React as React31, useRef as useRef15, useEffect as useEffect16 } from "/libs/react-v0.0.1.mjs";
import {
  Chart as Chart7,
  BarController as BarController3,
  BarElement as BarElement3,
  LinearScale as LinearScale6,
  CategoryScale,
  Tooltip as Tooltip7,
  Legend as Legend3
} from "/libs/react-v0.0.1.mjs";
Chart7.register(BarController3, BarElement3, LinearScale6, CategoryScale, Tooltip7, Legend3);
function BarChart03({
  data,
  width,
  height
}) {
  const canvas = useRef15(null);
  const legend = useRef15(null);
  useEffect16(() => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const values = data.datasets.map((x) => x.data.reduce(reducer));
    const max = values.reduce(reducer);
    const ctx = canvas.current;
    const chart = new Chart7(ctx, {
      type: "bar",
      data,
      options: {
        indexAxis: "y",
        layout: {
          padding: {
            top: 12,
            bottom: 12,
            left: 20,
            right: 20
          }
        },
        scales: {
          x: {
            stacked: true,
            display: false,
            max
          },
          y: {
            stacked: true,
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              title: () => false,
              label: (context) => context.parsed.x
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
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.alignItems = "center";
            li.style.paddingTop = tailwindConfig().theme.padding[2.5];
            li.style.paddingBottom = tailwindConfig().theme.padding[2.5];
            const wrapper = document.createElement("div");
            wrapper.style.display = "flex";
            wrapper.style.alignItems = "center";
            const box = document.createElement("div");
            box.style.width = tailwindConfig().theme.width[3];
            box.style.height = tailwindConfig().theme.width[3];
            box.style.borderRadius = tailwindConfig().theme.borderRadius.sm;
            box.style.marginRight = tailwindConfig().theme.margin[3];
            box.style.backgroundColor = item.fillStyle;
            const label = document.createElement("div");
            const value = document.createElement("div");
            value.style.fontWeight = tailwindConfig().theme.fontWeight.medium;
            value.style.marginLeft = tailwindConfig().theme.margin[3];
            value.style.color = item.text === "Other" ? tailwindConfig().theme.colors.slate[400] : item.fillStyle;
            const theValue = c.data.datasets[item.datasetIndex].data.reduce((a, b) => a + b, 0);
            const valueText = document.createTextNode(`${parseInt(theValue / max * 100)}%`);
            const labelText = document.createTextNode(item.text);
            value.appendChild(valueText);
            label.appendChild(labelText);
            ul.appendChild(li);
            li.appendChild(wrapper);
            li.appendChild(value);
            wrapper.appendChild(box);
            wrapper.appendChild(label);
          });
        }
      }]
    });
    return () => chart.destroy();
  }, []);
  return /* @__PURE__ */ React31.createElement("div", {
    className: "grow flex flex-col justify-center"
  }, /* @__PURE__ */ React31.createElement("div", null, /* @__PURE__ */ React31.createElement("canvas", {
    ref: canvas,
    width,
    height
  })), /* @__PURE__ */ React31.createElement("div", {
    className: "px-5 pt-2 pb-2"
  }, /* @__PURE__ */ React31.createElement("ul", {
    ref: legend,
    className: "text-sm divide-y divide-slate-100"
  }), /* @__PURE__ */ React31.createElement("ul", {
    className: "text-sm divide-y divide-slate-100"
  })));
}
var BarChart03_default = BarChart03;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard11.jsx
function DashboardCard11() {
  console.log({ tailwindConfig });
  const chartData = {
    labels: ["Reasons"],
    datasets: [
      {
        label: "Having difficulties using the product",
        data: [131],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 1,
        categoryPercentage: 1
      },
      {
        label: "Missing features I need",
        data: [100],
        backgroundColor: tailwindConfig().theme.colors.indigo[800],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[900],
        barPercentage: 1,
        categoryPercentage: 1
      },
      {
        label: "Not satisfied about the quality of the product",
        data: [81],
        backgroundColor: tailwindConfig().theme.colors.sky[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
        barPercentage: 1,
        categoryPercentage: 1
      },
      {
        label: "The product doesn\u2019t look as advertised",
        data: [65],
        backgroundColor: tailwindConfig().theme.colors.green[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[500],
        barPercentage: 1,
        categoryPercentage: 1
      },
      {
        label: "Other",
        data: [72],
        backgroundColor: tailwindConfig().theme.colors.slate[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.slate[300],
        barPercentage: 1,
        categoryPercentage: 1
      }
    ]
  };
  return /* @__PURE__ */ React32.createElement("div", {
    className: "col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React32.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React32.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Reason for Refunds")), /* @__PURE__ */ React32.createElement("div", {
    className: "px-5 py-3"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "text-3xl font-bold text-slate-800 mr-2"
  }, "449"), /* @__PURE__ */ React32.createElement("div", {
    className: "text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full"
  }, "-22%"))), /* @__PURE__ */ React32.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React32.createElement(BarChart03_default, {
    data: chartData,
    width: 595,
    height: 48
  })));
}
var DashboardCard11_default = DashboardCard11;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard12.jsx
import { React as React33 } from "/libs/react-v0.0.1.mjs";
function DashboardCard12() {
  return /* @__PURE__ */ React33.createElement("div", {
    className: "col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React33.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React33.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Recent Activity")), /* @__PURE__ */ React33.createElement("div", {
    className: "p-3"
  }, /* @__PURE__ */ React33.createElement("div", null, /* @__PURE__ */ React33.createElement("header", {
    className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2"
  }, "Today"), /* @__PURE__ */ React33.createElement("ul", {
    className: "my-1"
  }, /* @__PURE__ */ React33.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3"
  }, /* @__PURE__ */ React33.createElement("svg", {
    className: "w-9 h-9 fill-current text-indigo-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"
  }))), /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Nick Mark"), " mentioned ", /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800",
    href: "#0"
  }, "Sara Smith"), " in a new post"), /* @__PURE__ */ React33.createElement("div", {
    className: "shrink-0 self-end ml-2"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    href: "#0"
  }, "View", /* @__PURE__ */ React33.createElement("span", {
    className: "hidden sm:inline"
  }, " ->")))))), /* @__PURE__ */ React33.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3"
  }, /* @__PURE__ */ React33.createElement("svg", {
    className: "w-9 h-9 fill-current text-rose-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z"
  }))), /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "self-center"
  }, "The post ", /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800",
    href: "#0"
  }, "Post Name"), " was removed by ", /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Nick Mark")), /* @__PURE__ */ React33.createElement("div", {
    className: "shrink-0 self-end ml-2"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    href: "#0"
  }, "View", /* @__PURE__ */ React33.createElement("span", {
    className: "hidden sm:inline"
  }, " ->")))))), /* @__PURE__ */ React33.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3"
  }, /* @__PURE__ */ React33.createElement("svg", {
    className: "w-9 h-9 fill-current text-green-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z"
  }))), /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex items-center text-sm py-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Patrick Sullivan"), " published a new ", /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800",
    href: "#0"
  }, "post")), /* @__PURE__ */ React33.createElement("div", {
    className: "shrink-0 self-end ml-2"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    href: "#0"
  }, "View", /* @__PURE__ */ React33.createElement("span", {
    className: "hidden sm:inline"
  }, " ->")))))))), /* @__PURE__ */ React33.createElement("div", null, /* @__PURE__ */ React33.createElement("header", {
    className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2"
  }, "Yesterday"), /* @__PURE__ */ React33.createElement("ul", {
    className: "my-1"
  }, /* @__PURE__ */ React33.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-sky-500 my-2 mr-3"
  }, /* @__PURE__ */ React33.createElement("svg", {
    className: "w-9 h-9 fill-current text-sky-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z"
  }))), /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "240+"), " users have subscribed to ", /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800",
    href: "#0"
  }, "Newsletter #1")), /* @__PURE__ */ React33.createElement("div", {
    className: "shrink-0 self-end ml-2"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    href: "#0"
  }, "View", /* @__PURE__ */ React33.createElement("span", {
    className: "hidden sm:inline"
  }, " ->")))))), /* @__PURE__ */ React33.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3"
  }, /* @__PURE__ */ React33.createElement("svg", {
    className: "w-9 h-9 fill-current text-indigo-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React33.createElement("path", {
    d: "M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"
  }))), /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex items-center text-sm py-2"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "self-center"
  }, "The post ", /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800",
    href: "#0"
  }, "Post Name"), " was suspended by ", /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Nick Mark")), /* @__PURE__ */ React33.createElement("div", {
    className: "shrink-0 self-end ml-2"
  }, /* @__PURE__ */ React33.createElement("a", {
    className: "font-medium text-indigo-500 hover:text-indigo-600",
    href: "#0"
  }, "View", /* @__PURE__ */ React33.createElement("span", {
    className: "hidden sm:inline"
  }, " ->"))))))))));
}
var DashboardCard12_default = DashboardCard12;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/dashboard/DashboardCard13.jsx
import { React as React34 } from "/libs/react-v0.0.1.mjs";
function DashboardCard13() {
  return /* @__PURE__ */ React34.createElement("div", {
    className: "col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200"
  }, /* @__PURE__ */ React34.createElement("header", {
    className: "px-5 py-4 border-b border-slate-100"
  }, /* @__PURE__ */ React34.createElement("h2", {
    className: "font-semibold text-slate-800"
  }, "Income/Expenses")), /* @__PURE__ */ React34.createElement("div", {
    className: "p-3"
  }, /* @__PURE__ */ React34.createElement("div", null, /* @__PURE__ */ React34.createElement("header", {
    className: "text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2"
  }, "Today"), /* @__PURE__ */ React34.createElement("ul", {
    className: "my-1"
  }, /* @__PURE__ */ React34.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3"
  }, /* @__PURE__ */ React34.createElement("svg", {
    className: "w-9 h-9 fill-current text-rose-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React34.createElement("path", {
    d: "M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z"
  }))), /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React34.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Qonto"), " billing"), /* @__PURE__ */ React34.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React34.createElement("span", {
    className: "font-medium text-slate-800"
  }, "-$49.88"))))), /* @__PURE__ */ React34.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3"
  }, /* @__PURE__ */ React34.createElement("svg", {
    className: "w-9 h-9 fill-current text-green-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React34.createElement("path", {
    d: "M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z"
  }))), /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React34.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Cruip.com"), " Market Ltd 70 Wilson St London"), /* @__PURE__ */ React34.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React34.createElement("span", {
    className: "font-medium text-green-500"
  }, "+249.88"))))), /* @__PURE__ */ React34.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3"
  }, /* @__PURE__ */ React34.createElement("svg", {
    className: "w-9 h-9 fill-current text-green-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React34.createElement("path", {
    d: "M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z"
  }))), /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React34.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Notion Labs Inc")), /* @__PURE__ */ React34.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React34.createElement("span", {
    className: "font-medium text-green-500"
  }, "+99.99"))))), /* @__PURE__ */ React34.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3"
  }, /* @__PURE__ */ React34.createElement("svg", {
    className: "w-9 h-9 fill-current text-green-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React34.createElement("path", {
    d: "M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z"
  }))), /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React34.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "Market Cap Ltd")), /* @__PURE__ */ React34.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React34.createElement("span", {
    className: "font-medium text-green-500"
  }, "+1,200.88"))))), /* @__PURE__ */ React34.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-slate-200 my-2 mr-3"
  }, /* @__PURE__ */ React34.createElement("svg", {
    className: "w-9 h-9 fill-current text-slate-400",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React34.createElement("path", {
    d: "M21.477 22.89l-8.368-8.367a6 6 0 008.367 8.367zm1.414-1.413a6 6 0 00-8.367-8.367l8.367 8.367zM18 26a8 8 0 110-16 8 8 0 010 16z"
  }))), /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex items-center border-b border-slate-100 text-sm py-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React34.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "App.com"), " Market Ltd 70 Wilson St London"), /* @__PURE__ */ React34.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React34.createElement("span", {
    className: "font-medium text-slate-800 line-through"
  }, "+$99.99"))))), /* @__PURE__ */ React34.createElement("li", {
    className: "flex px-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3"
  }, /* @__PURE__ */ React34.createElement("svg", {
    className: "w-9 h-9 fill-current text-rose-50",
    viewBox: "0 0 36 36"
  }, /* @__PURE__ */ React34.createElement("path", {
    d: "M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z"
  }))), /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex items-center text-sm py-2"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "grow flex justify-between"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "self-center"
  }, /* @__PURE__ */ React34.createElement("a", {
    className: "font-medium text-slate-800 hover:text-slate-900",
    href: "#0"
  }, "App.com"), " Market Ltd 70 Wilson St London"), /* @__PURE__ */ React34.createElement("div", {
    className: "shrink-0 self-start ml-2"
  }, /* @__PURE__ */ React34.createElement("span", {
    className: "font-medium text-slate-800"
  }, "-$49.88")))))))));
}
var DashboardCard13_default = DashboardCard13;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/partials/Banner.jsx
import { React as React35, useState as useState11 } from "/libs/react-v0.0.1.mjs";
function Banner() {
  const [bannerOpen, setBannerOpen] = useState11(true);
  return /* @__PURE__ */ React35.createElement(React35.Fragment, null, bannerOpen && /* @__PURE__ */ React35.createElement("div", {
    className: "fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60"
  }, /* @__PURE__ */ React35.createElement("div", {
    className: "bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between"
  }, /* @__PURE__ */ React35.createElement("div", null, "\u{1F449} ", /* @__PURE__ */ React35.createElement("a", {
    className: "hover:underline",
    href: "https://github.com/cruip/tailwind-dashboard-template",
    target: "_blank",
    rel: "noreferrer"
  }, "Download Mosaic Lite on GitHub")), /* @__PURE__ */ React35.createElement("button", {
    className: "text-slate-500 hover:text-slate-400 ml-5",
    onClick: () => setBannerOpen(false)
  }, /* @__PURE__ */ React35.createElement("span", {
    className: "sr-only"
  }, "Close"), /* @__PURE__ */ React35.createElement("svg", {
    className: "w-4 h-4 shrink-0 fill-current",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"
  }))))));
}
var Banner_default = Banner;

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/Dash.mjs
var Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState12(false);
  return /* @__PURE__ */ React36.createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /* @__PURE__ */ React36.createElement(Sidebar_default, {
    sidebarOpen,
    setSidebarOpen
  }), /* @__PURE__ */ React36.createElement("div", {
    className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
  }, /* @__PURE__ */ React36.createElement(Header_default, {
    sidebarOpen,
    setSidebarOpen
  }), /* @__PURE__ */ React36.createElement("main", null, /* @__PURE__ */ React36.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"
  }, /* @__PURE__ */ React36.createElement(WelcomeBanner_default, null), /* @__PURE__ */ React36.createElement("div", {
    className: "sm:flex sm:justify-between sm:items-center mb-8"
  }, /* @__PURE__ */ React36.createElement(DashboardAvatars_default, null), /* @__PURE__ */ React36.createElement("div", {
    className: "grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
  }, /* @__PURE__ */ React36.createElement(FilterButton_default, null), /* @__PURE__ */ React36.createElement(Datepicker, null), /* @__PURE__ */ React36.createElement("button", {
    className: "btn bg-indigo-500 hover:bg-indigo-600 text-white"
  }, /* @__PURE__ */ React36.createElement("svg", {
    className: "w-4 h-4 fill-current opacity-50 shrink-0",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React36.createElement("path", {
    d: "M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
  })), /* @__PURE__ */ React36.createElement("span", {
    className: "hidden xs:block ml-2"
  }, "Add view")))), /* @__PURE__ */ React36.createElement("div", {
    className: "grid grid-cols-12 gap-6"
  }, /* @__PURE__ */ React36.createElement(DashboardCard01_default, null), /* @__PURE__ */ React36.createElement(DashboardCard02_default, null), /* @__PURE__ */ React36.createElement(DashboardCard03_default, null), /* @__PURE__ */ React36.createElement(DashboardCard04_default, null), /* @__PURE__ */ React36.createElement(DashboardCard05_default, null), /* @__PURE__ */ React36.createElement(DashboardCard06_default, null), /* @__PURE__ */ React36.createElement(DashboardCard07_default, null), /* @__PURE__ */ React36.createElement(DashboardCard08_default, null), /* @__PURE__ */ React36.createElement(DashboardCard09_default, null), /* @__PURE__ */ React36.createElement(DashboardCard10_default, null), /* @__PURE__ */ React36.createElement(DashboardCard11_default, null), /* @__PURE__ */ React36.createElement(DashboardCard12_default, null), /* @__PURE__ */ React36.createElement(DashboardCard13_default, null)))), /* @__PURE__ */ React36.createElement(Banner_default, null)));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/index.html
var app_default = "./index.html";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/index.mjs
console.assert(app_default);
var rootElement = document.getElementById("react-root");
var App = () => {
  const location = useLocation2();
  useEffect17(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);
  return /* @__PURE__ */ React37.createElement(Routes, null, /* @__PURE__ */ React37.createElement(Route, {
    exact: true,
    path: "/",
    element: /* @__PURE__ */ React37.createElement(Dashboard, null)
  }));
};
createRoot(rootElement).render(/* @__PURE__ */ React37.createElement(React37.StrictMode, null, /* @__PURE__ */ React37.createElement(Router, null, /* @__PURE__ */ React37.createElement(App, null))));

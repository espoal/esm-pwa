// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/src/index.mjs
import { React as React3, createRoot } from "/libs/vendors-v00.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/login/Login.mjs
import { React } from "/libs/vendors-v00.mjs";
var Login = () => {
  return /* @__PURE__ */ React.createElement("h1", null, "Login page!");
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/components/sidebar/Sidebar.mjs
import { React as React2 } from "/libs/vendors-v00.mjs";
var Sidebar = () => {
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h3", null, "Hello From Navigation!"), /* @__PURE__ */ React2.createElement("details", null, /* @__PURE__ */ React2.createElement("summary", null, "Generic React Components"), /* @__PURE__ */ React2.createElement("br", null), "Hello"), /* @__PURE__ */ React2.createElement("br", null), /* @__PURE__ */ React2.createElement("details", null, /* @__PURE__ */ React2.createElement("summary", null, "Typography"), /* @__PURE__ */ React2.createElement("br", null), "World"));
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/src/index.html
var src_default = "./index.html";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/src/index.mjs
console.assert(src_default);
var rootElement = document.getElementById("react-app");
createRoot(rootElement).render(/* @__PURE__ */ React3.createElement(Login, null));
var sideBarElement = document.getElementById("sidebar");
createRoot(sideBarElement).render(/* @__PURE__ */ React3.createElement(Sidebar, null));

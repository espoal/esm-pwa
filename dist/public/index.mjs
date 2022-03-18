// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/src/index.mjs
import { React as React3, createRoot } from "/libs/vendors.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/login/Login.mjs
import { React } from "/libs/vendors.mjs";
var Login = () => {
  return /* @__PURE__ */ React.createElement("h1", null, "Login page!");
};

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/pages/dash/Dash.mjs
import { React as React2 } from "/libs/vendors.mjs";

// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/src/index.mjs
var rootElement = document.getElementById("react-app");
createRoot(rootElement).render(/* @__PURE__ */ React3.createElement(Login, null));

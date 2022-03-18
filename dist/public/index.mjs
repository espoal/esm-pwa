// pnp:/home/mamluk/3pass/esm-pwa/pkgs/app/index.mjs
import { React, createRoot } from "/libs/vendors.mjs";
var App = () => {
  const ref = React.useRef();
  function logichandler() {
    console.log("I handle some logic!!!");
  }
  const secondHandler = {
    hello: "world",
    logichandler
  };
  return /* @__PURE__ */ React.createElement("error-modal", {
    ref: (el) => {
      el.refHandler = secondHandler;
    },
    logicHandler: secondHandler,
    test: "test"
  });
};
var rootElement = document.getElementById("react-app");
createRoot(rootElement).render(/* @__PURE__ */ React.createElement(App, null));

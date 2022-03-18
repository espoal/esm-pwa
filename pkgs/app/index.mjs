import { React, createRoot } from '@espoal/vendors'

const App = () => {
  const ref = React.useRef()

  function logichandler() {
    console.log("I handle some logic!!!")
  }

  const secondHandler = {
    hello: 'world',
    logichandler
  }

  return (
    <error-modal
      ref={el => {
        el.refHandler= secondHandler
      }}
      logicHandler={secondHandler}
      test={'test'}
    />
  );
}


const rootElement = document.getElementById("react-app")
// React 18+
createRoot(rootElement).render(<App />);

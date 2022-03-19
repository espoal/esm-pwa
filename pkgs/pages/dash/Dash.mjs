import { React } from '@vendors/react'


export const Dash = () => {
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

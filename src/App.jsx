import React from "react";
import { MessageProvider } from "./contexts/MessageContext";
import Form from "./components/Form";
import RenderedMessages from "./components/RenderedMessages";

const App = () => {
  return (
    <MessageProvider>
      <div>
        <h1>Exo Context reducer</h1>
        <Form />
        <RenderedMessages />
      </div>
    </MessageProvider>
  );
};

export default App;

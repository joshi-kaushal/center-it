import { CodeProvider } from "./codeContext";
import Dropdowns from "./Dropdowns";
import Code from "./Code";

import "./App.css";

function App() {
  return (
    <CodeProvider>
      <h1>Center it!</h1>
      <main className="container">
        <Dropdowns />
        <Code />
      </main>
    </CodeProvider>
  );
}

export default App;

import { CodeProvider } from "./hooks/codeContext";
import Header from "./Header";
import Dropdowns from "./Dropdowns";
import Code from "./Code";

import "./App.css";

function App() {
  return (
    <CodeProvider>
      <Header />
      <main className="container">
        <Dropdowns />
        <Code />
      </main>
    </CodeProvider>
  );
}

export default App;

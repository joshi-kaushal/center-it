import { useCodeContext } from "./codeContext.jsx";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function Code(props) {
  const { code } = useCodeContext();
  return (
    <>
      {/* <section className="code">{code && <pre>{code}</pre>}</section> */}
      <section className="code">
        {code && <SyntaxHighlighter language="css">{code}</SyntaxHighlighter>}
      </section>
    </>
  );
}

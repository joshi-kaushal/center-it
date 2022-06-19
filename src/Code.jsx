import { useCodeContext } from "./codeContext.jsx";
import SyntaxHighlighter from "react-syntax-highlighter";

const handleCopy = (code) => {
  navigator.clipboard.writeText(code);
};

export default function Code(props) {
  const { code } = useCodeContext();
  return (
    <>
      <section className="code">
        {code && (
          <>
            <SyntaxHighlighter language="css">{code}</SyntaxHighlighter>
            <button
              type="button"
              onClick={() => handleCopy(code)}
              className="copy-button"
            >
              Copy
            </button>
          </>
        )}
      </section>
    </>
  );
}

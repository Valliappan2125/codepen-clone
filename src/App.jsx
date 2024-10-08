import Editor from "./components/Editor";
import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [html, setHtml] = useLocalStorage('html','')
  const [css, setCss] = useLocalStorage('css','')
  const [js, setJs] = useLocalStorage('js','')
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
        `)
    }, 500);

    return () => clearTimeout(timeout)
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          DisplayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          DisplayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor language="js" DisplayName="JS" value={js} onChange={setJs} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
};

export default App;

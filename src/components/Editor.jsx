import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

const Editor = ({ DisplayName, language, value, onChange }) => {

    const [open, setOpen] = useState(true);

    function handleChange(editor, data, value){
        onChange(value);
    }
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {DisplayName}
        <button className="btn" onClick={() => setOpen(prevOpen => !prevOpen)}>
            <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt}/>
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
            lineNumbers: true,
            mode: language,
            lint: true,
            lineWrapping: true,
            theme: 'material' 
        }}
      />
    </div>
  );
};

export default Editor;

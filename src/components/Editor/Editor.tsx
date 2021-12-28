import React from "react";
import "./Editor.scss";
import { useAppContext } from "../../AppContext";
import { FaEdit } from "react-icons/fa";

const Editor: React.FC = () => {
  const { editorValue, setEditorValue, previewerHeight } = useAppContext();

  return (
    <div className='editor-container container'>
      <header className='header'>
        <FaEdit className='icon' />
        <p>Editor</p>
      </header>
      <textarea
        style={{ height: `${previewerHeight}px` }}
        name='editor'
        id='editor'
        className='editor'
        value={editorValue}
        onChange={(e) => setEditorValue(e.target.value)}
      />
    </div>
  );
};

export default Editor;

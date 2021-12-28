import React, { useEffect, useRef } from "react";
import "./Previewer.scss";
import { useAppContext } from "../../AppContext";
import { marked } from "marked";
import { AiOutlineEye } from "react-icons/ai";

const Previewer: React.FC = () => {
  const { editorValue, setPreviewerHeight } = useAppContext();
  marked.setOptions({
    breaks: true,
  });
  const markedText = marked.parse(editorValue);

  const previewerRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const newHeight = previewerRef.current!.getBoundingClientRect().height;
    setPreviewerHeight(newHeight);
  }, [markedText, setPreviewerHeight]);

  return (
    <div className='previewer-container container'>
      <header className='header'>
        <AiOutlineEye className='icon' />
        <p>Previewer</p>
      </header>
      <div
        ref={previewerRef}
        className='previewer'
        id='previewer'
        dangerouslySetInnerHTML={{ __html: markedText }}
      />
    </div>
  );
};

export default Previewer;

import React, { useContext } from "react";

type AppContextType = {
  editorValue: string;
  setEditorValue: (s: string) => void;
  previewerHeight: number;
  setPreviewerHeight: (s: number) => void;
};

export const AppContext = React.createContext<AppContextType>({
  editorValue: "",
  setEditorValue: () => {},
  previewerHeight: 0,
  setPreviewerHeight: () => {},
});

export const useAppContext = () => useContext(AppContext);

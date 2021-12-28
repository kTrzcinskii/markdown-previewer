import React, { useState } from "react";
import "./App.scss";
import Editor from "./components/Editor/Editor";
import Previewer from "./components/Previewer/Previewer";
import { AppContext } from "./AppContext";

const App: React.FC = () => {
  const [previewerHeight, setPreviewerHeight] = useState(0);
  const [editorValue, setEditorValue] =
    useState(`# Welcome to a Markdown Previewer Project

## Hope you enjoy!

It's a project done as a part of [FreeCodeCamp Course](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer).

### In this editor you can create a lot of amazing stuff, for example \`<h1>Inline code</h1\` just like that.

You can also make your text **bold**, _italic_, and **_both_**. 

And there is a code block :

\`\`\`
//useful function

const arrowFunction = () => {
    console.log("am I even working?");
}
\`\`\`

1. We
1. have
1. even
1. lists!

- They
  - can
    - be
      - nested!

#### We can even have blockqoutes and images!

>Everyone love cats, don't they?

![Lovely cats](http://www.freshboo.com/wp-content/uploads/2014/05/two-kissing-cats-wallpaper-660x330.jpg)

If you want to learn more about the Marked library I used check out [the docs](https://marked.js.org).
`);

  return (
    <AppContext.Provider
      value={{
        editorValue,
        setEditorValue,
        previewerHeight,
        setPreviewerHeight,
      }}
    >
      <Editor />
      <Previewer />
    </AppContext.Provider>
  );
};

export default App;

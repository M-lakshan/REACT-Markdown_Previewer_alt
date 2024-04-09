import { useState } from 'react';
import './App.css';
import ReactMarkdown from "react-markdown";

function App() {
  const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and > Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
   - Some are bulleted.
     - With different indentation levels.
       - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](hhttps://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <h1 id="title">Markdown Previewer</h1>
      <div className="main_container">
        <input type="checkbox" name="edt_expander" id="edt_expander" hidden/>
        <section className="for_editor">
          <h3 className="sub_container_title">
            <span><i className="fa-brands fa-free-code-camp"></i>Editor</span>
            <label htmlFor="edt_expander" className="edt_expand_toggle">
              <i className="fa-solid fa-arrows-left-right-to-line"></i>
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </label>
          </h3>
          <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
        </section>
        <input type="checkbox" name="prv_expander" id="prv_expander" hidden/>
        <section className="for_previewer">
          <h3 className="sub_container_title">
            <span><i className="fa-brands fa-free-code-camp"></i>Previewer</span>
            <label htmlFor="prv_expander" className="prv_expand_toggle">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
              <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
            </label>
          </h3>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
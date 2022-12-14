import React from "react";
import ReactDOM from "react-dom";
import marked from "marked";
import hljs from "highlight.js";

const MARKDOWN_TEXT = `React + marked + highlight.js

**Code Sample:**
\`\`\`javascript
import marked from "marked";

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function(code) {
    return require("highlight.js").highlightAuto(code, ["html", "javascript"])
      .value;
  }
});
\`\`\`
`;

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function(code) {
    return hljs.highlightAuto(code, ["html", "javascript"]).value;
  }
});

class Text extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html: marked(MARKDOWN_TEXT) }} />;
  }
}

ReactDOM.render(<Text />, document.getElementById("root"));

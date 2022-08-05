import React, {
  DOMElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Data from "./story.js";
import "./App.scss";
import TerminalTextArea from "./components/TerminalTextArea";
import InputArea from "./components/InputArea";
import "./fonts/retganon.ttf";
import focus from "./utils/focus";
import useResizeScreen from "./hooks/useResizeScreen";

function App() {
  const [inputText, setInputText] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(1);
  const [textNode, setTextNode] = React.useState(
    Data.find((textNode) => textNode.id === page)
  );

  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  useResizeScreen();

  useEffect(() => {
    setTextNode(Data.find((textNode) => textNode.id === page));
    focus(inputRef);
  }, [page]);

  //
  const handleEnterKeydown = (event: { key: string }, input: string) => {
    if (event.key !== "Enter") return;

    input = input.toLocaleLowerCase().trim();

    let nextText = 0;
    textNode?.options?.forEach((el) => {
      if (el.text.toLocaleLowerCase() === input) {
        nextText = el.nextText;
      }
    });

    setInputText("");

    if (nextText === 0) {
      console.log("Command does not exist");
    }

    if (nextText > 0) {
      setPage(nextText);
    }

    if (nextText < 0) {
      setPage(1);
    }
  };

  return (
    <div>
      <div onClick={() => focus(inputRef)} className="app-wrap">
        <div id="monitor" className="monitor">
          <div className="monitor__terminal">
            <div className="noise"></div>
            <div className="overlay"></div>
            <div id="container">
              <div className="column left">
                <TerminalTextArea
                  page={page}
                  setPage={setPage}
                  textNode={textNode}
                />
                <InputArea
                  inputRef={inputRef}
                  inputText={inputText}
                  setInputText={setInputText}
                  handleEnter={handleEnterKeydown}
                />
              </div>

              <div className="column right">
                <div className="animated-img-wrap">
                  <div className={`animated-img ${page}`}></div>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

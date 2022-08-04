import React, {
  DOMElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Data from "./story.js";
import "./App.scss";
import TypedText from "./components/TypedText";
import InputArea from "./components/InputArea";
import "./fonts/retganon.ttf";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [page, setPage] = React.useState("loading");

  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  useLayoutEffect(() => {
    function updateMonitorSize() {
      let bounding = document.body.getBoundingClientRect();
      let monitorElement = document.getElementById("monitor");
      if (monitorElement) {
        let n = Math.min(
          (bounding.height - 15) / monitorElement.clientHeight,
          (bounding.width - 100) / monitorElement.clientWidth
        );
        monitorElement.style.transform = `matrix(${n},0,0,${n}, 1, 1)`;
      }
    }
    window.addEventListener("resize", updateMonitorSize);
    updateMonitorSize();
    return () => window.removeEventListener("resize", updateMonitorSize);
  }, []);

  const handleEnterKeydown = (event: { key: string }, input: string) => {
    if (event.key !== "Enter") return;

    input = input.toLocaleLowerCase();
    if (input in Data) {
      setInputText("");
      setPage(input);
    }
  };

  // useEffect(() => {
  //   // focusInput();
  //   focusTop();
  //   console.log("render");
  // }, []);
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <div onClick={() => focusInput()} className="app-wrap">
        <div id="monitor" className="monitor">
          <div className="monitor__terminal">
            <div className="noise"></div>
            <div className="overlay"></div>
            <div id="container">
              <div className="column left">
                <TypedText
                  page={page}
                  setPage={setPage}
                  textArray={Data.find((textNode) => textNode.id === 1)}
                  commandsArray={["1243", "4356"]}
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

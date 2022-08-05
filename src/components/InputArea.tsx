import React from "react";

function InputArea({
  handleEnter,
  inputText,
  setInputText,
  inputRef,
}: {
  handleEnter: any;
  inputText: any;
  setInputText: any;
  inputRef: any;
}) {
  function handleInput(event: any) {
    const { value } = event.target;

    setInputText(value);
  }

  function handleKeyDown(e: any) {
    handleEnter(e, inputText);
  }

  return (
    <div>
      <div className="cmd-input">
        <span>A:/ &gt; </span>
        <div className="input-wrapper">
          <input
            onKeyDown={handleKeyDown}
            onChange={handleInput}
            name="firstName"
            value={inputText}
            ref={inputRef}
          />
          <div className="input-display">
            <span className="char">{inputText}</span>
            <span className="char caret" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputArea;

import React, { useEffect, useRef, useState } from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

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

  const inputElement =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  function handleKeyDown(e: any) {
    handleEnter(e, inputText);
  }

  return (
    <div>
      <div className="cmd-input">
        <span>C:/ &gt; </span>
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

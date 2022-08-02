import React, { useEffect, useMemo, useRef, useState } from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

function TypedText({
  textArray,
  commandsArray,
  page,
  setPage,
}: {
  textArray: string[];
  commandsArray: string[];
  page: string;
  setPage: (value: string) => void;
}) {
  const inputElement =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const text = useMemo(() => {
    return [...textArray, ...commandsArray].map((el: any, key: number) => {
      return (
        <p key={key} className="typed-paragraph">
          {el.split(" ").map((word: string, key: number) => (
            <span key={key} className="typed-word">
              {word.split("").map((char: string, key: number) => (
                <span key={key} className="typed-char">
                  {char}
                </span>
              ))}
              &nbsp;
            </span>
          ))}
        </p>
      );
    });
  }, [textArray]);

  // Animate paragraphs
  useEffect(() => {
    // Reset on page rerender
    let pargs = document.querySelectorAll(".typed-paragraph-show");
    pargs.forEach((par) => (par.className = "typed-paragraph"));

    let intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      let paragraph = document.querySelector(".typed-paragraph");

      if (!paragraph) {
        // no hidden paragraphs left
        return clearInterval(intervalId); // stop running interval and exit
      }

      paragraph.className = "typed-paragraph-show";
    }, 200);
  }, [text]);

  useEffect(() => {
    // Animate text
    // const myNode = document.getElementById("text-container");
    // if (myNode) myNode.innerHTML = null;

    let chars = document.querySelectorAll(".typed-char-show");
    chars.forEach((char) => (char.className = "typed-char"));

    let intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      let char = document.querySelector(".typed-char");

      if (!char) {
        if (page === "loading") setPage("home");
        // no hidden paragraphs left
        return clearInterval(intervalId); // stop running interval and exit
      }

      char.className = "typed-char-show";
    }, 20);
  }, [text]);

  return (
    <div>
      <div id="text-container">{text}</div>
    </div>
  );
}

export default TypedText;

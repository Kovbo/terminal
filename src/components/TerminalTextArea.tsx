import React, { useEffect, useMemo, useRef, useState } from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import useAnimateTearminalText from "../hooks/useAnimateTearminalText";

function TypedText({
  textNode,
  page,
  setPage,
}: {
  textNode: any;
  page: number;
  setPage: (value: number) => void;
}) {
  const inputElement =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const options = useMemo(() => {
    return textNode.options?.map((el: any, key: number) => {
      if (!el.hide) {
        return (
          <p key={key} className="typed-paragraph">
            &gt; {el.text}
          </p>
        );
      }
    });
  }, [textNode]);

  const text = useMemo(() => {
    return textNode.text.map((el: any, key: number) => {
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
  }, [textNode]);

  // Animate paragraphs

  // Animate characters
  const { loading } = useAnimateTearminalText(text);

  //Showing first page after loading
  useEffect(() => {
    if (!loading && page === 1) {
      setPage(2);
    }
  }, [loading]);

  return (
    <div>
      <div className="text-container">{text}</div>
      <div className="text-container">{options}</div>
    </div>
  );
}

export default TypedText;

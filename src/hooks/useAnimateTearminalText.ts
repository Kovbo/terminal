import { useEffect, useState } from "react";

export default function useAnimateTearminalText(text: any) {
  const [loading, setLoading] = useState(true);

  // Animate paragraphs
  useEffect(() => {
    let pargs = document.querySelectorAll(".typed-paragraph-show");
    pargs.forEach((par) => (par.className = "typed-paragraph"));

    let intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      let paragraph = document.querySelector(".typed-paragraph");

      if (!paragraph) {
        // no hidden paragraphs left
        return clearInterval(intervalId); // stop running interval and exit
      }

      paragraph.className = "typed-paragraph-show";
    }, 250);
  }, [text]);

  // Animate characters
  useEffect(() => {
    setLoading(true);
    let chars = document.querySelectorAll(".typed-char-show");
    chars.forEach((char) => (char.className = "typed-char"));

    let intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      let char = document.querySelector(".typed-char");

      if (!char) {
        setLoading(false);
        // no hidden paragraphs left
        return clearInterval(intervalId); // stop running interval and exit
      }

      char.className = "typed-char-show";
    }, 20);
  }, [text]);

  return { loading };
}

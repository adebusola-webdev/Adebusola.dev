import React, { useEffect, useState } from "react";

export default function LayoutBackground() {
  const [scrollY, setScrollY] = useState();
  const [lineCount, setLineCount] = useState(10)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setLineCount(window.innerWidth > 600 ? 10 : 4)
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  return (
    <>
      <div className="app__background">
        {/* {[...Array(100)].map((_, i) => (
        <span>+</span>
      ))} */}

        {[...Array(window.innerWidth > 600 ? lineCount : 5)].map((_, i) => (
          <div
            style={{
              transform: `translate(0, -${
                (choices[i] ? 0.1 : 0.3) * scrollY
              }px)`,
            }}
          >
            {[...Array(10)].map((_, i) => (
              <span></span>
            ))}
          </div>
        ))}
      </div>
¸
      <div className="app__background-img"></div>
    </>
  );
}

const choices = [...Array(10)].map(() => Math.random() < 0.5);

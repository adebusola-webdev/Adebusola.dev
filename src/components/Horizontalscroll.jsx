// import { Children, useEffect, useRef } from "react";
// import PropTypes from "prop-types";

import { useEffect, useRef, useState } from "react";

// const MAX_SKEW = 20;
// const MIN_SKEW = 1;
// const SKEW_FACTOR = 0.8;

// export default function Horizontalscroll({ children, offset = 0 }) {
//   const horizontalScrollRef = useRef();
//   const horizontalFrameRef = useRef();

//   useEffect(() => {
//     const container = horizontalScrollRef.current;
//     const frame = horizontalFrameRef.current;
//     const defaultTranslate = frame.clientWidth - window.innerWidth;
//     let isScrolling = false;

//     const scrollPos = { prev: window.scrollY, current: 0 };

//     function getDistanceMoved() {
//       scrollPos.current = window.scrollY;
//       let distanceMoved = scrollPos.current - scrollPos.prev;
//       if (distanceMoved > 200) distanceMoved = 0;
//       distanceMoved > 0 ? distanceMoved-- : distanceMoved++;
//       scrollPos.prev = scrollPos.current;
//       return distanceMoved;
//     }

//     function updateFrameTransform() {
//       if (isScrolling) return;
//       isScrolling = true;

//       requestAnimationFrame(() => {
//         const scrollTop = container.getBoundingClientRect().top;
//         const frameScrollTop = frame.getBoundingClientRect().top;
//         const distanceMoved = getDistanceMoved();

//         let skewX = distanceMoved * SKEW_FACTOR;
//         skewX = Math.min(skewX, MAX_SKEW);
//         skewX = Math.max(skewX, -MAX_SKEW);
//         skewX = Math.abs(skewX) < MIN_SKEW ? 0 : skewX;

//         const percentageScrolled =
//           (Math.abs(scrollTop) / container.clientHeight) * 100;

//         if (
//           frameScrollTop <= 0 &&
//           Math.abs(scrollTop - window.innerHeight) < container.clientHeight
//         ) {
//           window.gsap.to(frame, {
//             x: `-${percentageScrolled}%`,
//             skewX: skewX,
//             duration: 0,
//           });
//         } else {
//           window.gsap.to(frame, {
//             x: frameScrollTop > 0 ? `0%` : -1 * defaultTranslate,
//             skewX: 0,
//             duration: 0,
//           });
//         }

//         isScrolling = false;
//       });
//     }

//     updateFrameTransform();

//     window.addEventListener("scroll", updateFrameTransform);

//     return () => {
//       window.removeEventListener("scroll", updateFrameTransform);
//     };
//   }, []);

//   const mapChildren = Children.map(children, (child) => {
//     if (child.props["data-abs"]) return child;
//     return <div className="horizontal-scroll__frame">{child}</div>;
//   });

//   const filteredChildren = Children.toArray(children).filter(
//     (c) => c.props["data-abs"] !== true
//   );

//   return (
//     <div
//       className="horizontal-scroll-container"
//       ref={horizontalScrollRef}
//       style={{
//         height: `calc(${filteredChildren.length * 100}vh + ${
//           (offset / window.innerWidth) * window.innerHeight
//         }px)`,
//       }}
//     >
//       <div className="horizontal-scroll" ref={horizontalFrameRef}>
//         {mapChildren}
//       </div>
//     </div>
//   );
// }

// HorizontalScroll.propTypes = {
//   children: PropTypes.node,
//   offset: PropTypes.number,
// };

export default function HorizontalScroll({ children }) {
  const scrollRef = useRef();
  const [percentageScrolled, setPercentageScrolled] = useState();

  useEffect(() => {
    const listener = () => {
      const clientRect = scrollRef.current?.getBoundingClientRect();
      setPercentageScrolled(
        (clientRect.height - clientRect.bottom) / clientRect.height
      );
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    }
  }, []);

  return (
    <>
      <div className="app__horizontal-scroll" ref={scrollRef}>
        <div
          className="app__horizontal-scroll-content"
          style={{
            transform: `translate(-${(percentageScrolled < 0.75 ? percentageScrolled : 0.75) * 100}%, 0)`,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

// top

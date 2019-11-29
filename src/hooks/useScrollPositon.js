import { useState, useLayoutEffect, useRef } from 'react';

export default function useScrollPosition() {
  const [curPos, setCurPos] = useState({
    x: window.scrollX,
    y: window.scrollY
  });

  let throttleTimeout = useRef(null);

  useLayoutEffect(() => {
    function handleScroll() {
      if (throttleTimeout.current === null) {
        throttleTimeout.current = setTimeout(() => {
          setCurPos({ x: window.scrollX, y: window.scrollY });
          throttleTimeout.current = null;
        }, 300);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return curPos;
}

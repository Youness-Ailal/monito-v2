import { useEffect, useRef } from "react";
//@ts-ignore
export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(
    function () {
      function handleClick(e: Event) {
        //@ts-ignore
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}

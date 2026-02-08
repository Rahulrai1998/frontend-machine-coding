import { useEffect } from "react";

export default function useModalRef(parentRef, handler) {
  useEffect(() => {
    const cb = (e) => {
      if (!parentRef.current?.contains(e.target)) {
        handler();
        // console.log(e.target)
      }
    };
    document.addEventListener("mousedown", cb);

    return () => {
      document.removeEventListener("mousedown", cb);
    };
  }, []);
}

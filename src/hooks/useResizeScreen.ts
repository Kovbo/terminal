import { useLayoutEffect } from "react";

const useResizeScreen = () => {
  useLayoutEffect(() => {
    window.addEventListener("resize", updateMonitorSize);
    updateMonitorSize();
    return () => window.removeEventListener("resize", updateMonitorSize);
  }, []);

  const updateMonitorSize = () => {
    let monitorElement = document.getElementById("monitor");

    // hardcoded values of css monitor size to prevent GH pages production bug with clientWidth/offsetWidth and getBoundingClientRect.
    const monitorElementHeight = 855;
    const monitorElementWidth = 970;

    if (monitorElement) {
      let n = Math.min(
        (window.innerHeight - 15) / monitorElementHeight,
        (window.innerWidth - 100) / monitorElementWidth
      );
      monitorElement.style.transform = `matrix(${n},0,0,${n}, 1, 1)`;
    }
  };
};

export default useResizeScreen;

import { useLayoutEffect } from "react";

const useResizeScreen = () => {
  useLayoutEffect(() => {
    window.addEventListener("resize", updateMonitorSize);
    updateMonitorSize();
    return () => window.removeEventListener("resize", updateMonitorSize);
  }, []);

  const updateMonitorSize = () => {
    let bounding = document.body.getBoundingClientRect();
    let monitorElement = document.getElementById("monitor");
    if (monitorElement) {
      let n = Math.min(
        (bounding.height - 15) / monitorElement.clientHeight,
        (bounding.width - 100) / monitorElement.clientWidth
      );
      monitorElement.style.transform = `matrix(${n},0,0,${n}, 1, 1)`;
    }
  };
};

export default useResizeScreen;

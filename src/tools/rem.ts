(() => {
  const rem = () => {
    const viewWidth = window.innerWidth;
    const width: number = Math.max(320, Math.min(750, viewWidth));
    (document.querySelector("html")?.style as any).fontSize = width / 10 + "px";
  };
  rem();
  window.onresize = rem;
})();

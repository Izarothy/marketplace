const handleGridScroll = () => {
  const itemGrid = document.querySelector("#itemGrid");
  itemGrid?.scrollIntoView({ behavior: "smooth" });
};

export default handleGridScroll;

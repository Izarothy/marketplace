const handleElementScroll = (elementID: string) => {
  const element = document.querySelector(`#${elementID}`);
  element?.scrollIntoView({ behavior: "smooth" });
};

export default handleElementScroll;

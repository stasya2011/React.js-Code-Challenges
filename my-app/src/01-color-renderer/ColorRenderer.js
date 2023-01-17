import Color from "./Color";

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

const ColorRenderer = () => {
  return (
    <>
      {colors.map((element) => (
        <Color hex={element.hex} name={element.name} />
      ))}
    </>
  );
};

export default ColorRenderer;

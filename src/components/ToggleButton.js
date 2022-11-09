import { useState } from "react";

export default function ToggleButton({ statusIndex, texts, handler }) {
  console.log({ statusIndex });
  const [myIndex, setMyIndex] = useState(statusIndex);

  const classNames = ["btn"];
  classNames.push(!myIndex ? "btn-primary" : "btn-outline-primary");
  const myClick = () => {
    const nextStatusIndex = myIndex === 0 ? 1 : 0;
    setMyIndex(nextStatusIndex);
    handler(nextStatusIndex);
  };

  return (
    <>
      <button type="button" className={classNames.join(" ")} onClick={myClick}>
        {texts[myIndex]}
      </button>
    </>
  );
}

ToggleButton.defaultProps = {
  statusIndex: 0,
  texts: ["關", "開"],
  handler: (index) => {},
};

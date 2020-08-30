import React, { useState } from "react";

function TabGroup({ tabnames, activeClass, onChange }) {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
    onChange && onChange(index);
  };

  return (
    <div className="tabs">
      {tabnames.map((tab, index) => (
        <h2
          key={index}
          className={selected === index ? activeClass : null}
          onClick={() => handleClick(index)}
        >
          {tab.text}
        </h2>
      ))}
    </div>
  );
}

export default TabGroup;

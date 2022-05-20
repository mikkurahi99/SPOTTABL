import React from "react";

const Chip = ({ item, index, chips, setChips }) => {
    return (
        <div className="main__chip-wrapper" key={item.id}>
            <span className="main__chip-content">{item.name}</span>
            <span
                className="main__chip-close"
                onClick={() => {
                    const newChips = [...chips];
                    newChips.splice(index, 1);
                    setChips(newChips);
                }}
            >
                &times;
            </span>
        </div>
    );
};

export default Chip;

import React from "react";
import Image from "./Image";

const Autosuggestion = ({ suggestions, handleSuggestionClick }) => {
    const handleClick = (suggestion) => {
        handleSuggestionClick(suggestion);
    };

    return (
        <React.Fragment>
            {suggestions.length > 0 && (
                <div className="main__autosuggestion">
                    {suggestions.map((item, index) => (
                        <div
                            className="main__autosuggestion__item"
                            key={index}
                            onClick={() => handleClick(item)}
                        >
                            <Image content={item.name} />
                            <div className="main__autosuggestion__item-content">
                                <h4 className="main__autosuggestion__item-name">
                                    {item.name}
                                </h4>
                                <div className="main__autosuggestion__item-details">
                                    <span className="main__autosuggestion__item-designation">
                                        {item.designation}
                                    </span>
                                    <span className="main__autosuggestion__item-email">
                                        {item.email}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
};

export default Autosuggestion;

import React, { useState } from "react";
import data from "../data";
import Autosuggestion from "./Autosuggestion";
import Chip from "./Chip";
import UserListItem from "./UserListItem";

const Main = () => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [chips, setChips] = useState([]);
    const [usersList, setUsersList] = useState([]);

    // this method is executed when user types in the input field
    const handleChange = (e) => {
        // if the value is empty, set suggestions to empty array
        if (!e.target.value.trim()) {
            setSuggestions([]);
            setValue("");
            return;
        }
        setValue(e.target.value);
        // filtering the data based on the name and value of the input field
        const filtered = data.filter((item) => {
            if (item.name.toLowerCase().includes(value.toLowerCase()))
                return true;
            if (item.email.includes(value)) return true;
            return false;
        });
        // update the suggestions array accordingly
        setSuggestions(filtered);
    };

    // this method is executed when user clicks on a suggestion
    const handleSuggestionClick = (suggestion) => {
        setChips([
            ...chips,
            {
                id: suggestion.id,
                name: suggestion.name,
                designation: suggestion.designation,
            },
        ]);
    };

    // executed when Add CSM button is clicked
    const handleAdd = () => {
        setUsersList([...usersList, ...chips]);
        setSuggestions([]);
        setValue("");
        setChips([]);
    };

    // executed when delete button is clicked
    const handleDelete = (id) => {
        const filteredUsersList = usersList.filter((item) => item.id !== id);
        setUsersList(filteredUsersList);
    };

    return (
        <main className="main">
            <h3 className="main__title">Customer Success Managers</h3>
            <div className="main__search">
                <div className="main__search__input-wrapper">
                    <div className="main__chips-wrapper">
                        {chips.map((item, index) => (
                            <Chip
                                key={item.id}
                                item={item}
                                index={index}
                                chips={chips}
                                setChips={setChips}
                            />
                        ))}
                        <input
                            type="text"
                            className="main__search__input"
                            value={value}
                            onChange={handleChange}
                            placeholder="Add by Name or email"
                        />
                    </div>
                    <Autosuggestion
                        suggestions={suggestions}
                        handleSuggestionClick={handleSuggestionClick}
                    />
                </div>
                <button className="main__submit__button" onClick={handleAdd}>
                    Add CSM
                </button>
            </div>

            <div className="user__list">
                {usersList.map((item) => (
                    <UserListItem
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </main>
    );
};

export default Main;

import React from "react";
import Image from "./Image";

const UserListItem = ({ item, handleDelete }) => {
    return (
        <div className="user__list-item">
            <div className="user__list-item-left">
                <Image content={item.name} />
                <div className="user__list-item-info">
                    <h4 className="user__list-item-info-name">{item.name}</h4>
                    <span className="user__list-item-info-designation">
                        {item.designation}
                    </span>
                </div>
            </div>
            <div className="user__list-item-right">
                <button
                    className="user__list-item-delete-button"
                    onClick={() => handleDelete(item.id)}
                >
                    <img
                        src="https://img.icons8.com/ios-glyphs/24/0d0d98/filled-trash.png"
                        alt="Delete"
                    />
                </button>
            </div>
        </div>
    );
};

export default UserListItem;

import React from 'react';
import Button from './Button';

const Header = ({ onAdd, showAddTask }) => {
    return (
        <header className="header" >
            <h1>Task Tracker</h1>
            <Button color={showAddTask ? "red" : "green"} text={showAddTask ? "Close" : "Add"} onAdd={onAdd} />
        </header>
    );
};

export default Header;

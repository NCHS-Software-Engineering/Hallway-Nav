import React, { useEffect, useState } from "react";

const Select = (index) => {
    const [options, setOptions] = useState([]);
    const rooms = [
        ["000","301","302","303","304","305","306","307","308","309"],
        ["100","301","302","303","304","305","306","307","308","309"],
        ["200","301","302","303","304","305","306","307","308","309"],
        ["300","301","302","303","304","305","306","307","308","309"],
    ];

    useEffect(() => {
        let roomSelection = [];
        for(let i = 0; i < 10; i++) 
            roomSelection.push(<option>{rooms[3][i]}</option>);
        setOptions(roomSelection);
    }, []);

    return (
        <>
            <select>
                {options}
            </select>
        </>
    );
};

export default Select;
import React, { useEffect, useState } from "react";

const Select = (index) => {
    const [options, setOptions] = useState([]);
    const rooms = {
        "A": ["000","301","302","303","304","305","306","307","308","309"],
        "B": ["100","301","302","303","304","305","306","307","308","309"],
        "C": ["200","301","302","303","304","305","306","307","308","309"],
        "D": ["300","301","302","303","304","305","306","307","308","309"],
    }
    console.log(index);
    console.log(rooms.A)
    useEffect(() => {
        let roomSelection = [];
        for(let i = 0; i < 10; i++) 
            roomSelection.push(<option value={rooms.index[i]}>{rooms.index[i]}</option>);
        setOptions(roomSelection);
    }, [options]);

    return (
        <>
            <select>
                {options}
            </select>
        </>
    );
};

export default Select;
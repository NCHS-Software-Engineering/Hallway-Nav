import React, { useEffect, useState } from "react";

const Select = () => {
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        const rooms = [
            "B1", "B2", "B3", "B4", "B05A", "B5", "B6",
            "B7", "B13", "B14", "B15", "B16", "B17",
            "B18", "B19", "B20", "B20A", "B20B", "B20C",
            "B21", "B21A", "B22", "B22E", "B23", "B24",
            "B24B", "B25", "B26", "B29", "B29H", "B29K", "B29M", "B29N", "B50",


        ];
        
        for(let i = 0; i < 46; i++)
            rooms.push(200 + i);
        for(let i = 0; i < 46; i++)
            rooms.push(300 + i);

        let roomSelection = [];
        for(let i = 0; i < rooms.length; i++) 
            roomSelection.push(<option>{rooms[i]}</option>);
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

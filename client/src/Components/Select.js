import React, { useEffect, useState } from "react";

const Select = () => {
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        const rooms = [
            "B1", "B2", "B3", "B4", "B05A", "B5", "B6",
            "B7", "B13", "B14", "B15", "B16", "B17",
            "B18", "B19", "B20", "B20A", "B20B", "B20C",
            "B21", "B21A", "B22", "B22E", "B23", "B24",
            "B24B", "B25", "B26", "B29", "B29H", "B29K", "B29M",
            "B29N", "B50", 10, 11, "11A", "11B", "11C", "11D",
            "11E", "11K", "11M", "11N", 12, 13, "13B", 14, 15, 16,
            17, "17A", "18/19", 20, "20A", 21, 22, 23, 24, "24A", 25,
            "25A", 26, "26B", "26E", 27, 28, 30, 31, 32, 33, 34,
            35, 36, "36B", "36C", "36D", 38, 39, 40, 41, 42, 43, 
            44, 45, "45A", 46, 47, 48, 49, 50, 51, 52, 54, 56,
            58, 59, "59A", "59C", 61, "61B", 63, 64, 65, 66, 67,
            68, 69, 70, "70B", "70C", "70E", 71, "71B", 74, 75,
            "75A", 76, "76A", 77, "77B", 78, 79, 80, "81E", "81F",
            "81G", "81H", 82, "82B", 83, "83D", 84, 85, "85F", "85G",
            86, 87, 88, "88A", "89A", "89E", 90, 94, "112A",
            "124A", 155, "210A", "210G",
            "211A", "211B", "212A", "212B", "212C", "212D",
            "212G", "212H", "212I", "214C", "242A", "242B", "245A",
            "310K", "311A", "311B", "337A", "337B"
        ];
        
        for(let i = 0; i < 31; i++)
        {
            if([111, 121, 122, 125].indexOf(100 + i) === -1)
                rooms.push(100 + i);
        }
        for(let i = 0; i < 46; i++)
        {
            if([210, 211, 212, 242, 243].indexOf(200 + i) === -1)
                rooms.push(200 + i);
        }
        for(let i = 0; i < 44; i++)
        {
            if([311, 329, 336, 337, 338].indexOf(300 + i) === -1)
                rooms.push(300 + i);
        }

        rooms.sort((i) => {
            if(i[0] === "B")
                return -1;
        });

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

import React, { useEffect, useState } from "react";

const Select = (props) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        let rooms = {
            "Basement": [
            "B1", "B2", "B3", "B4", "B05A", "B5", "B6",
            "B7", "B13", "B14", "B15", "B16", "B17",
            "B18", "B19", "B20", "B20A", "B20B", "B20C",
            "B21", "B21A", "B22", "B22E", "B23", "B24",
            "B24B", "B25", "B26", "B29", "B29H", "B29K", "B29M",
            "B29N", "B50"
        ], "1st floor": [10, 11, "11A", "11B", "11C", "11D",
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
            "124A", 155
        ], "2nd floor": [200, 201, 202, 203, 204, 205,
            206, 207, 208, 209, "210A", "210G",
            "211A", "211B", "212A", "212B", "212C", "212D",
            "212G", "212H", "212I", 213, 214, "214C"
        ], "3rd floor": [
            300, 301, 302, 303, 304, 305, 306, 307, 308, 309,
            310, "310K", "311A", "311B"
        ]};
        
        for(let i = 0; i < 31; i++)
        {
            if([111, 121, 122, 125].indexOf(100 + i) === -1)
                rooms["1st floor"].push(100 + i);
        }

        for(let i = 15; i < 42; i++)
            rooms["2nd floor"].push(200 + i);
        rooms["2nd floor"] = rooms["2nd floor"].concat(["242A", "242B", 245, "245A"]);
        
        for(let i = 12; i < 36; i++)
        {
            if(300 + i !== 329)
                rooms["3rd floor"].push(300 + i);
        }
        rooms["3rd floor"] = rooms["3rd floor"].concat(["337A", "337B"]);

        for(let i = 39; i < 44; i++)
            rooms["3rd floor"].push(300 + i);

        let groups = [];
        let floors = ["1st floor", "2nd floor", "3rd floor", "Basement"];
        for(let i = 0; i < 4; i++)
        {
            let roomSelection = [];
            const optgroup = (...rooms) => <optgroup key={floors[i][0]} label={floors[i]}>{rooms}</optgroup>;
            for(let j = 0; j < rooms[floors[i]].length; j++) 
                roomSelection.push(<option key={j}>{rooms[floors[i]][j]}</option>);
            groups.push(optgroup(roomSelection));
        }
        setOptions(groups);
    }, []);

    return (
        <>
            <select id={props.idStr}>
                {options}
            </select>
        </>
    );
};

export default Select;

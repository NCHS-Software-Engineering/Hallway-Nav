import React, { useEffect, useState } from "react";

const Barcode = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        const fetchCode = async() => {
            let res;
            try {
                res = await fetch("http://localhost:8080/barcode");
            } catch(err) {
                console.log("Device error.");
            }

            const json = await res.json();
            setNum(json.barcode);
        };
        
        fetchCode();
    }, [num]);

    return (
        <>
            Barcode: {num===0 ? "Scan now" : num}
        </>
    );
};

export default Barcode;
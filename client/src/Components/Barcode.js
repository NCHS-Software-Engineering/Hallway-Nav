import React, { useEffect, useState } from "react";

const Barcode = () => {
    const [num, setNum] = useState("<scan now>");

    useEffect(() => {
        const fetchCode = async() => {
            let res;
            try {
                res = await fetch("http://localhost:8080/barcode");
            } catch(err) {
                console.log("Device error.");
            }

            setNum(res.num);
        };
        setInterval(fetchCode, 500);
    }, [num]);

    return (
        <>
            Barcode: {num}
        </>
    );
};

export default Barcode;
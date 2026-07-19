import { useState } from "react";
export default function UseState() {

    let [count, setCount] = useState<number>(0);

    return (
        <>
            <h1>{count}</h1>

            <button
                onClick={() => setCount(count + 1)}
            >
                +
            </button>
        </>
    );
}
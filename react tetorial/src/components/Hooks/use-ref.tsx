import { useEffect, useRef , useState} from "react";

export default function UseRef(){
    let inputRef = useRef<HTMLInputElement>(null);
    let [input, setInput] = useState(null)

    function hundelClick(){
        inputRef.current?.focus();
        setInput(inputRef.current.value)
        console.log(input);
    }

    useEffect(()=>{
        inputRef.current?.focus();
    },[]);
    return(
        <div>
        <h1>{input}</h1>
        <input ref={inputRef} placeholder="Type here" />
        <button onClick={hundelClick}>Sumbmit</button>
        </div>
    )
}
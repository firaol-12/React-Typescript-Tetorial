import { useEffect, useRef } from "react";

export default function UseRef(){
    let inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[]);
    return(
        <input ref={inputRef} placeholder="Type here" />
    )
}
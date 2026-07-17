export default function HOC({name}: welcome){
    return <h1>Welcome {name}</h1>
}

type welcome = {
    name: string;
}
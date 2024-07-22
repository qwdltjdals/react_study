import { useState } from "react";

function App() {
    const [inputValue, setinputValue] = useState("");
    const [names, setNames] = useState([]);
    const liList = [
        <li>{"test1"}</li>,
        <li>{"test2"}</li>,
        <li>{"test3"}</li>,
        <li>{"test4"}</li>
    ];

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }
    const handleInputKeyDown = (e) => {
        if (e.keyCode === 13) {
            setNames(names => [...names, inputValue]);
            setinputValue("");
        }
    }
    return <>

        <input onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={inputValue} />
        <ul>
            {liList}
            {names.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
    </>
}
// map을 사용하면 key값을 반드시 잡아줘야함
export default App;
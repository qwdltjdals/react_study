import { useState } from "react";

function App() {
    // inputValue
    const [inputValue, setInputValue] = useState("");

    const handleKeyChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleResetClick = () => {
        setInputValue("");
    }

    return <>
        <h3>값 : {inputValue}</h3>
        <button onClick={handleResetClick}>초기화</button>
        <input type="text" onChange={handleKeyChange} value={inputValue} />
    </>
}

export default App;
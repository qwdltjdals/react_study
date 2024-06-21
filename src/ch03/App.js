import { useState } from "react";

function App() {
    const [ num, setNum ] = useState(0);
    let num2 = 0; //재랜더링이 안됨

    const handleClick = (e) => {
        const value = parseInt(e.target.value);
        setNum(num + value);
        num2 += value;
    }
    const deleteClick = (e) => {
        setNum(0);
    }

    console.log(num);
    console.log(num2);

    return <>
    <h1>번호 : {num}</h1>
    <h1>번호2 : {num2}</h1>
    <button onClick={handleClick} value={-10}>-10</button>
    <button onClick={handleClick} value={+10}>+10</button>
    <button onClick={handleClick} value={-100}>-100</button>
    <button onClick={handleClick} value={+100}>+100</button>
    <button onClick={deleteClick} value={0}>삭제</button>

    </>
}


export default App;
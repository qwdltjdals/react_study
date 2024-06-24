import { useEffect, useState } from "react";

function App() {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    useEffect(() => {
        //마운트 지점
        console.log(number2);
        setNumber3(number * 10); //첫 호출땐 한번 실행 // 그 다음부터는 상태가 변할떄 마다 실행 최초에 한 번만 실행되어야 하는 것들
        return () => {
            //언마운트 지점 - 언마운트 시점에 뭔가 변화를 줄것이 있을 떄
        }
    }, [number, number2]); // (함수, []) 

    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
    }
    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }
    return (
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>
    )
}

export default App;
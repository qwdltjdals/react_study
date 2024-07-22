import { useRef } from "react";

function App() {
    const inputRef = {
        a: useRef(),
        b: useRef(),
        c: useRef(),
    }
    /*     const aRef = useRef();
        const bRef = useRef(); // use로 시작하는 것들은 함수 안에 들어올 수 없음
        const cRef = useRef(); */

    console.log(inputRef.a);
    console.log(inputRef.b);
    console.log(inputRef.c);

    const handleKeyDown = (e) => {

        if (e.keyCode === 13) {
            switch (e.target.name) {
                case "a":
                    inputRef.a.current.focus();
                    break;
                case "b":
                    inputRef.b.current.focus();
                    break;
                case "c":
                    inputRef.c.current.focus();
                    break;
                default:
            }
        }
    }

    return <>
        <input name="a" onKeyDown={handleKeyDown} ref={inputRef.a} />
        <input name="b" onKeyDown={handleKeyDown} ref={inputRef.b} />
        <input name="c" onKeyDown={handleKeyDown} ref={inputRef.c} />
    </>
}

export default App;

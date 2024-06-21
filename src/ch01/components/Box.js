// JSX 에서는 null, true, false는 문자로 보지 않음(표기가 안됨)
// 기본값 = true
// 아예 입력하지 않으면 false => 굳이 true, false를 넣어줄 필요 없음

function Box({ name, isShow, children }) {
    const result = false && 10; // &&는 곱하기 연산
    const result1 = true && 10;  // 10 
    const result2 = false && 10;  // false

    return <div>
        <h1>{name}</h1>
        {children}
        {1 + 1}
        {false && "김준일"}
        {isShow && <h3>안녕하세요</h3>}
        {isShow ? <h3>안녕하세요</h3> : <h4>안녕히가세요</h4>}
    </div>
}

export default Box;
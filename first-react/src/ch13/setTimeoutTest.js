function setTimeoutTest() {
    
    setTimeout(() => {
        print(count);
    }, 2000); //콜백 함수

    function print(fx) {
        console.log(4)
        fx();
    }

    function count() {
        console.log(1);
        console.log(2);
        console.log(3);
    }

    /**
     * 콜백함수
     * 함수 주소 자체를 넣어줌
     * 매개변수로 함수를 받아서 필요한 위치에 넣어줌
     */
    function test(fx) {
        console.log("test 함수 호출")
        fx();
    }
    
    function add() {
        console.log("add 함수 호출")

    }

    test(add)
    return (
        <>
        
        </>
    )
}

export default setTimeoutTest;
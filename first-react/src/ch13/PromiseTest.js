function PromiseTest() {

    /**
     * Promise 비동기 객체
     * 프로미스의 3가지 상태
     * 1. 대기 -> 이행되지도, 거부되지도 않은 상태
     * 2. 이행 -> 연산이 성공했을 때의 상태
     * 3. 거부 -> 연산을 실패했을 때의 상태
     */

    function p1(name) {
        return new Promise((resolve, reject) => {
            // 대기(동기)
            console.log(name + "프로미스 생성");
            if (!name) {
                reject("오류!!!")
            }
            resolve(name);
        });
    }

    async function p2() {
        let a = null;
        try {
            a = await p4(); // p2를 호출했을 때, p4가 호출되게  await = 이행할 때까지 기다려 /  p4의 return값을 가져옴(동기처리) - async안에서만 사용할 수 있고 promise객체에만 사용 가능
            // setTimeout(() => {}, 2000); 여기서는 불가
            await p5();
        } catch (error) {
            console.log(error);
            a = "p5";
        }
        return a;
    }

    function p3() {
        return new Promise((resolve, reject) => {
            // return "p3"; // 안나옴
            resolve("p3"); //나옴
        })
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!!!");
    }

    const handleClick = () => {
        p1("p1")
            .then(result => { // resolve가 호출되면 then이 실행됨
                console.log("이행");
                console.log(result);
                if (true) {
                    throw new Error("거부!!"); // 거부(reject)
                }
                return "두번째 then"; // 이행(resolve)
            })
            .then(result => { // 비동기 안에서의 동기(promise는 동기 / then은 순서대로 동작 then1 -> then2 ...)
                console.log(result);
            }).catch(error => { // 위에 있는 reject를 받아옴
                // console.log(error);
            });

        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }

    const handleClick2 = () => {
        setTimeout(() => {
            p2().then(r => {
                console.log(r);
            });
        }, 2000);

        // p3().then(r => console.log(r));
    }

    return (
        <>
            <button onClick={handleClick}>promise</button>
            <button onClick={handleClick2}>async</button>
        </>
    );
}

export default PromiseTest;
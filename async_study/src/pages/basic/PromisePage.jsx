import React from 'react';
import { FaColonSign } from 'react-icons/fa6';

function PromisePage(props) {

    const loop = (name) => {
        //random 0 < 1 0.1223454522
        const random = Math.floor(Math.random() * 100) + 1;
        for (let i = 0; i < random; i++) {
            console.log(`${name}: ${i}`);
        }
    }

    // const testPromise0 = async () => {
    //     loop("test1");
    //     return "test0반복 완료"; = 이렇게 써도 됨(개개별로 async를 씀)
    // }

    const testPromise = () => {
        return new Promise((resolve, reject) => {
            loop("Test1");
            resolve("test1 반복 완료")
        });
    }
    const testPromise2 = () => {
        return new Promise((resolve, reject) => {
            loop("Test2");
            resolve("test2 반복 완료")
        });
    }
    const testPromise3 = () => {
        return new Promise((resolve, reject) => {
            loop("Test3");
            resolve("test3 반복 완료")
        });
    }
    const testPromise4 = (num) => {
        return new Promise((resolve, reject) => {
            console.log("test4");
            if (num === 0) {
                reject("4오류!!!"); // 기다렸다가 예외 터뜨림
                return;
            }
            resolve("4성공!!");
        });
    } // 4랑 5는 같은 코드임
    const testPromise5 = async (num) => {
        console.log("test5");
        if (num === 0) {
            throw new Error("5오류!!!"); // 예외를 먼저 터뜨림
        }
        return "5성공!!";
    }

    const handleClick1 = () => {
        testPromise().then(r => {
            console.log(r);
            testPromise2().then(r => {
                console.log(r);
                testPromise3().then(r => {
                    console.log(r);
                });
            });
        });
    }

    const handleClick2 = async () => {
        const r = await testPromise();
        console.log(r);
        const r2 = await testPromise2();
        console.log(r2);
        const r3 = await testPromise3();
        console.log(r3);
    }

    const handleClick3 = () => {
        testPromise4(0)
            .then(r => {
                console.log(r);
                testPromise5(0)
                .then(r => {
                    console.log(r);
                })
            .catch(e => {
                console.log(e);
            });
        })
        .catch(e => {
            console.error(e);
            testPromise5(0)
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.error(e);
            });
        });
    }

    const handleClick4 = async () => {
        try {
            const r = await testPromise4(0);
            console.log(r);
        } catch (e) {
            console.error(e);
        }

        try {
            const r = await testPromise5(0);
            console.log(r);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div>
            <button onClick={handleClick1}>버튼1</button>
            <button onClick={handleClick2}>버튼2</button>
            <button onClick={handleClick3}>버튼3</button>
            <button onClick={handleClick4}>버튼4</button>
        </div>
    );
}

export default PromisePage;
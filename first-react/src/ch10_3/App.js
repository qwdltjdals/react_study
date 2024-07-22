import { useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

// 배열에는 맵을 사용 가능 [].map 맵 다음에는 함수를 사용 가능 외부에서 함수를 정의해서 불러와도 됨
// 화살표 함수 = 실제로는 for문을 돌린다? (전체반복을 하면서 새로운 리스트를 만들어서 값들을 꺼내와서 대입) = newList = [...newlist, fx(a,i)]
// map은 return이 필수 = newList를 리턴

function App() {

    const test = {
        a:"aaa",
        b:"bbb"
    }
    console.log(test["a"]); // 변수가 들어오면 안된다. 변수안에 문자열이 들어있으면 가능하다.

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }
    const [userList, setUserList] = useState([]);
    const [inputData, setInputData] = useState({ ...emptyUser });

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef(),
    }

    const handleInputKeyDown = (e) => {
        if (e.keyCode === 13) {
            const { username, password, name } = inputRef;
            switch (e.target.name) {
                case "username":
                    password.current.focus();
                    break;
                case "password":
                    name.current.focus();
                    break;
                case "name":
                    username.current.focus();
                    setUserList(userList => [...userList, inputData]);
                    setInputData({ ...emptyUser });
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inpuData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleEditClick = (key, index) => {
        Swal.fire({
            title: `${key} edit`,
            input: "text",
            inputValue: userList[index][key],
            showCancelButton : true,
            cancelButtonText : "취소",
            confirmButtonText : "확인"
        }).then(result => {
            if(result.isConfirmed) {
            setUserList(userList => [ ...userList.map((user, i) => { // 처음은 값 / 두번째는 인덱스가 들어옴
                if(i === index) {
                    return {
                        ...user,
                        [key] : result.value
                    }
                }
                return user;
            })]);
            }
        });
    }

    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?",
            icon: "question",
            showCancelButton: "true",
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
        }).then(result => {
            if (result.isConfirmed) {
                setUserList(userList => [...userList.filter((user, index) => index !== parseInt(e.target.value))])
            }
        });
    }

    return <>
        {/* 입력 후에 엔터를 입력하면 다음 input으로 포커스 이동
    2. name필드에서 엔터를 입력하면 배열에 user객체 추가
    그리고 input value를 초기화 */}
        <input onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={inputData.username}
            name="username" placeholder="사용자명"
            ref={inputRef.username} />

        <input onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={inputData.password}
            name="password" placeholder="비밀번호"
            ref={inputRef.password} />

        <input onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={inputData.name}
            name="name" placeholder="이름"
            ref={inputRef.name} />

        {/* tbody -> tr묶음을 userList에서 map을 통해 렌더링 
        table 디자인 -> border : 1px solid #dbdbdb;*/}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({ username, password, name }, index) => {
                        return (
                            < tr key={index} >
                                <td>{index + 1}</td>
                                <td onClick={() => handleEditClick("username", index)}>{username}</td> {/*함수 정의 */ }
                                <td onClick={() => handleEditClick("password", index)}>{password}</td>
                                <td onClick={() => handleEditClick("name", index)}>{name}</td>
                                <td>
                                    <button value={index}>리스트에서 선택</button>
                                </td>
                                <td>
                                    <button value={index} onClick={handleDeleteClick}>delete</button>
                                </td>
                            </tr>
                        );
                    })
                }

            </tbody>
        </table >
    </>
}

export default App;
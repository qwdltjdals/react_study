import { useRef, useState } from "react";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);
    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef(),
    }

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

    const [userStatus, setuserStatus] = useState({ ...emptyUser })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newUsers = {
            ...userStatus,
            [name]: value
        }
        setuserStatus(newUsers);
    }

    const handleEnter = (e) => {

        setuserStatus(userStatus)
        if (e.keyCode === 13) {
            switch (e.target.name) {
                case "username":
                    inputRef.password.current.focus();
                    break;
                case "password":
                    inputRef.name.current.focus();
                    break;
                case "name":
                    if (e.keyCode === 13) {
                        inputRef.username.current.focus();

                    }
                    break;
                default:
            }
        }
    }

    return <>
        {/* 입력 후에 엔터를 입력하면 다음 input으로 포커스 이동
    2. name필드에서 엔터를 입력하면 배열에 user객체 추가
    그리고 input value를 초기화 */}
        <input onChange={handleInputChange} onKeyDown={handleEnter} name="username" placeholder="사용자명" value={userStatus.username} ref={inputRef.username} />
        <input onChange={handleInputChange} onKeyDown={handleEnter} name="password" placeholder="비밀번호" value={userStatus.password} ref={inputRef.password} />
        <input onChange={handleInputChange} onKeyDown={handleEnter} name="name" placeholder="이름" value={userStatus.name} ref={inputRef.name} />

        {/* tbody -> tr묶음을 userList에서 map을 통해 렌더링 
        table 디자인 -> border : 1px solid #dbdbdb;*/}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>{users.username}</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{users.map((name, index) => <li key={index}>{name}</li>)}</td>
                    <td>{ }</td>
                    <td>{ }</td>
                    <td>{ }</td>
                </tr>
            </tbody>
        </table>
    </>

}
export default App;
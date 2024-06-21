import { useState } from "react";

function App() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const emptyUser = {
        username: "",
        password: "",
        email: ""
    }

    const [user, setUser] = useState({ ...emptyUser })
    const [ inputData, setInputData ] = useState({...emptyUser});

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return{
                ...inputData,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleOkClick = (e)=> {
        setUser(inputData);
    }
    return <>
        <input name="username" onChange={handleInputChange} value={inputData.username} placeholder="사용자이름" />
        <input name="password" onChange={handleInputChange} value={inputData.password} placeholder="비밀번호" />
        <input name="email" onChange={handleInputChange} value={inputData.email} placeholder="이메일" />
        <button onClick={handleOkClick}>확인</button>
        <ul>
            <li>사용자이름 : {user.username}</li>
            <li>비밀번호 : {user.password}</li>
            <li>이메일 : {user.email}</li>
        </ul>
    </>
}

export default App;
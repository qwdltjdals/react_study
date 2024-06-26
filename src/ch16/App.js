import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imgSrc, setImgSrc] = useState("");


    const emptyProfile = {
        name: "",
        email: ""
    }

    const [users, setUsers] = useState({ ...emptyProfile });


    const handleSubmitClick = (e) => {
        Swal.fire({
            title: "저장하시겠습니까?",
            showCancelButton: true,
            cancelButtonText: "아니오",
            confirmButtonText: "예"
        }).then(result => {
            if (result.isConfirmed) {
                
            }
        })
    }

    const handleInputChange2 = (e) => {
        /*         const name = e.target.name;
                const value = e.target.value; */
        const { name, value } = e.target;
        const newUsers = {
            ...users,
            [name]: value
        }
        setUsers(newUsers);
    }

    const handleImgSave = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.click();

        fileElement.onchange = (e) => {
            const file = e.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                setImgSrc(e.target.result)
            }
            fileReader.readAsDataURL(file);
        }
    }

    const handleInputChange = (e) => { // (객체) / {함수의 몸체}
        setUsers(e.target.value);
        return setUsers;
    }

    return (
        <div className="main-box">
            <div className="profile">프로필</div>
            <div className="circle" onClick={handleImgSave} placeholder="사진">
                <img src={imgSrc} alt="" />
            </div>
            <input name={name} type="text" onChange={handleInputChange} placeholder="이름" value={users.name} />
            <input name={email} type="text" onChange={handleInputChange} placeholder="이메일" value={users.email} />
            <button onClick={handleSubmitClick}>저장</button>
        </div>
    )
}

export default App;
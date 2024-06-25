import { useEffect, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [inputData, setInputData] = useState("");
    const [inputs, setInputs] = useState([name, email]);

    const emptyProfile = {
        name: "",
        email: "",
    }


    const handleSubmitClick = (e) => {
        Swal.fire({
            title: "저장하시겠습니까?",
            showCancelButton: true,
            cancelButtonText: "아니오",
            confirmButtonText: "예"
        }).then(result => {
            if (result.isConfirmed) {
                handleInputChange(e);
            }
        })
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
        setInputData(e.target.value);
        return setInputData;
    }

    return (
        <div className="main-box">
            <div className="profile">프로필</div>
            <div className="circle" onClick={handleImgSave }placeholder="사진">
                <img src={imgSrc} alt="" />
            </div>
            <input name={name} type="text" onChange={handleInputChange} placeholder="이름" value={inputData.name} />
            <input name={email} type="text" onChange={handleInputChange} placeholder="이메일" value={inputData.email} />
            <button onClick={handleSubmitClick}>저장</button>
        </div>
    )
}

export default App;
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import useInput from '../../hooks/useInput';
import axios from 'axios';

function PostPage(props) {
    const schoolNameInput = useInput();
    const departmentInput = useInput();
    const gradeInput = useInput();
    const NameInput = useInput();
    
    const teacherSchoolNameInput = useInput();
    const phoneNumberInput = useInput();
    const adressInput = useInput();
    const teacherNameInput = useInput();

    const handleSubmit =() => {
        const student = {
            schoolName : schoolNameInput.value,
            department : departmentInput.value,
            grade : gradeInput.value,
            name : NameInput.value,

        }
        // fetch("http://localhost:8080/basic/student", {//첫 번째 ; 문자열url
        //     method: "post", // 객체
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body:JSON.stringify(student)
        // }).then(response => {
        //     response.json().then(responseData => {
        //         console.log(responseData);
        //     })
        // })
        axios.post("http://localhost:8080/basic/student", student)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const handleSubmitTeacher =() => {
        const teacher = {
            teacherSchoolName : teacherSchoolNameInput.value,
            phoneNumber : phoneNumberInput.value,
            adress : adressInput.value,
            teacherName : teacherNameInput.value,
        }
        axios.post("http://localhost:8080/basic/teacher", teacher)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <>
            <header>
                <h1>비동기 데이터 통신</h1>
            </header>
            <main>
                <h3>학생정보</h3>
                <p>
                    <label htmlFor="">학교명 : </label>
                    <input type="text"
                    onChange={schoolNameInput.onChange}
                    value={schoolNameInput.value}
                    placeholder='학생 학교명'
                    />
                </p>
                <p>
                    <label htmlFor="">학과명 : </label>
                    <input type="text"
                    onChange={departmentInput.onChange}
                    value={departmentInput.value}
                    placeholder='학생 학과명'
                    />
                </p>
                <p>
                    <label htmlFor="">학년 : </label>
                    <input type="text"
                    onChange={gradeInput.onChange}
                    value={gradeInput.value}
                    placeholder='학생 학년'
                    />
                </p>
                <p>
                    <label htmlFor="">이름 : </label>
                    <input type="text"
                    onChange={NameInput.onChange}
                    value={NameInput.value}
                    placeholder='학생 이름'
                    />
                </p>
                <p>
                    <button onClick={handleSubmit}>전송</button>
                </p>
            </main>
            <main>
                <h3>선생님정보</h3>
                <p>
                    <label htmlFor="">학교명 : </label>
                    <input type="text"
                    onChange={teacherSchoolNameInput.onChange}
                    value={teacherSchoolNameInput.value}
                    placeholder='선생 학교명'
                    />
                </p>
                <p>
                    <label htmlFor="">연락처 : </label>
                    <input type="text"
                    onChange={phoneNumberInput.onChange}
                    value={phoneNumberInput.value}
                    placeholder='선생 연락처'
                    />
                </p>
                <p>
                    <label htmlFor="">주소 : </label>
                    <input type="text"
                    onChange={adressInput.onChange}
                    value={adressInput.value}
                    placeholder='선생 주소'
                    />
                </p>
                <p>
                    <label htmlFor="">이름 : </label>
                    <input type="text"
                    onChange={teacherNameInput.onChange}
                    value={teacherNameInput.value}
                    placeholder='선생 이름'
                    />
                </p>
                <p>
                    <button onClick={handleSubmitTeacher}>전송</button>
                </p>
            </main>
        </>
    );
}

export default PostPage;
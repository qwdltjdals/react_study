import { useState } from "react";

function App() {

    const [grade, setGrade] = useState("");
    const [group, setGroup] = useState("");
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");

    const emptyStudent = {
        grade: "",
        group: "",
        number: "",
        name: ""
    };

    const [student, setStudent] = useState({ ...emptyStudent });

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "grade":
                setGrade(e.target.value)
                break;
            case "group":
                setGroup(e.target.value)
                break;
            case "number":
                setNumber(e.target.value)
                break;
            case "name":
                setName(e.target.value)
                break;
            default:
        }
    }

    const handleInputChange2 = (e) => {
        /*         const name = e.target.name;
                const value = e.target.value; */
        const { name, value } = e.target;
        const newStudent = {
            ...student,
            [name]: value
        }
        setStudent(newStudent);


        /*         setStudent(student => {
                    return {
                        ...student,
                        [e.target.name]: e.target.value
                    }
                });
            } */

        return <>
            <input onChange={handleInputChange} name="grade" placeholder="학년" value={grade} />
            <input onChange={handleInputChange} name="group" placeholder="반" value={group} />
            <input onChange={handleInputChange} name="number" placeholder="번호" value={number} />
            <input onChange={handleInputChange} name="name" placeholder="이름" value={name} />

            <ul>
                <li>학년 : {grade}</li>
                <li>반 : {group}</li>
                <li>번호 : {number}</li>
                <li>이름 : {name}</li>
            </ul>

            <input onChange={handleInputChange2} name="grade" placeholder="학년" value={student.grade} />
            <input onChange={handleInputChange2} name="group" placeholder="반" value={student.group} />
            <input onChange={handleInputChange2} name="number" placeholder="번호" value={student.number} />
            <input onChange={handleInputChange2} name="name" placeholder="이름" value={student.name} />

            <ul>
                <li>학년 : {student.grade}</li>
                <li>반 : {student.group}</li>
                <li>번호 : {student.number}</li>
                <li>이름 : {student.name}</li>
            </ul>
        </>

    }
}

    export default App;
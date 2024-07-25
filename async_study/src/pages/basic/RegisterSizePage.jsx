import axios from 'axios';
import React, { useState } from 'react';

/**
 * 
 * 
 */

function RegisterSizePage(props) {
    const [size, setSize] = useState({ // 등록 하기위해 상태를 받아와야함
        sizeName: "",
    });

    const handleInputChange = (e) => {
        setSize(size => {
            return {
                ...size,
                [e.target.name]: e.target.value // 타겟의 네임이랑 내가 작성한 것이랑 매칭
            }
        });
    }

    const handleSubmitClick = async () => { // async = awiat을 사용하기 위해 필요
        try {
            const response = await axios.post("http://localhost:8080/api/v1/size", size); // 뒤에께 실행되면 then의 결과를 가져옴
        } catch (error) {
            console.error(error);
        }

        setSize(size => {
            return {
                sizeName: "", // 클릭하면 value 초기화
            }
        });
    }

    return (
        <div>
            <h1>사이즈 등록 페이지</h1>
            <p>
                <label htmlFor="">사이즈 이름</label>
                <input type="text"
                    name="sizeName"
                    onChange={handleInputChange} // 이벤트 생성
                    value={size.sizeName}
                />
            </p>
            <p>
                <button onClick={handleSubmitClick}>등록</button>
            </p>
        </div>
    );
}

export default RegisterSizePage;
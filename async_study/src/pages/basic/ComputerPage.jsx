import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import ReactModal from 'react-modal';
ReactModal.setAppElement("#root");

const layout = css`
    box-sizing: border-box;
    margin-bottom: 20px;
    border-bottom: 2px solid #dbdbdb;
`;

function Computer(props) {

    const [isModalOpen, setModalOpen] = useState(false);

    const [computerDetail, setComputerDetail] = useState({
        computerId: "",
        company: "",
        cpu: "",
        ram: "",
        ssd: "",
    });

    const [registerComputer, setRegisterComputer] = useState({
        company: "",
        cpu: "",
        ram: "",
        ssd: "",
    });

    const [updateComputer, setUpdateComputer] = useState({
        computerId: "",
        company: "",
        cpu: "",
        ram: "",
        ssd: "",
    });

    const [params, setparams] = useState({ // 검색 옵션으로 쓸 상태
        company: "",
        cpu: "",
    });


    const [computerList, setComputerList] = useState([]);

    const requsetComputerList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/computers", {
                params // 원래 : params : params 인데, 키값과 벨류가 같으니까 이렇게 써도됨
            });
            setComputerList(response.data);
        } catch (e) {
            console.error(e)
        }
    }

    const handleSearchInputChange = (e) => {
        setparams(p => {
            return {
                ...p,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleRegisterInputChange = (e) => {
        setRegisterComputer(rc => {
            return {
                ...rc,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSearchClick = () => {

        requsetComputerList(); // 클릭이 되면 리스트 줌

        setparams({ // 빈값으로 바꿔줌
            company: "",
            cpu: "",
        });
    }

    const handleSelectComputerClick = async (computerId) => {
        const data = await requestGetComputer(computerId);
        if (!data) {
            setComputerDetail({
                computerId: "",
                company: "",
                cpu: "",
                ram: "",
                ssd: "",
            });
            return;
        }
        setComputerDetail(data);
    };

    const requestGetComputer = async (computerId) => {
        let responseData = null;
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/computer/${computerId}`); // ${}사용하기 위해 `` 썼음
            responseData = response.data;
        } catch (e) {
            console.error(e);
        }
        return responseData;
    }

    const handleRegisterSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/computer", registerComputer);
            if (response.data > 0) { // 상태별로 응답이 필요하면 response에 status로 들고옴(response.status === 200) = 성공
                alert("등록성공!!");
            }

        } catch (e) {
            console.error(e);
            alert("등록실패!!");
        }
    }

    const handleDeleteComputerClick = async (computerId) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            await requestDeleteComputer(computerId);
            await requsetComputerList();
            alert("삭제 완료");
        }
    }

    const requestDeleteComputer = async (computerId) => {
        let responseData = null;
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/computer/${computerId}`);
            responseData = response.data
        } catch (e) {
            console.error(e);
        }
        return responseData
    }

    const closeModal = () => {
        setModalOpen(false);
        setUpdateComputer({
            computerId: "",
            company: "",
            cpu: "",
            ram: "",
            ssd: "",
        });
    }

    const handleUpdateComputerClick = async (computerId) => {
        setModalOpen(true);
        const data = await requestGetComputer(computerId);
        setUpdateComputer(data);
    }

    const handleUpdateSubmitClick = async () => {
        await requestUpdateComputer();
        await requsetComputerList();
        closeModal();
    }

    const requestUpdateComputer = async () => {
        let responseData = null;
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/computer/${updateComputer.computerId}`, updateComputer) // 업데이트컴퓨터 안에 정보가 들어있을 것.
            responseData = response.data;
        } catch (e) {
            console.error(e)
        }
        return responseData;
    }

    const handleUpdateInputChange = (e) => {
        setUpdateComputer(uc => {
            return {
                ...uc,
                [e.target.name]: e.target.value
            }
        });
    }

    return (
        <div>
            <ReactModal
                style={{
                    content: {
                        boxSizing: `boder-box`,
                        transform: `translate(-50%, -50%)`,
                        top: `50%`,
                        left: `50%`,
                        width: `400px`,
                        height: `400px`,
                        BackgroundColor: `#fafafa`
                    }
                }}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <div css={css`display`}>
                    <h2>컴퓨터 정보 수정</h2>
                    <p><input type="text" name='computerId' onChange={handleUpdateInputChange} value={updateComputer.computerId} disabled={true} /></p>
                    <p><input type="text" name='company' placeholder='제조사' onChange={handleUpdateInputChange} value={updateComputer.company} /></p>
                    <p><input type="text" name='cpu' placeholder='CPU' onChange={handleUpdateInputChange} value={updateComputer.cpu} /></p>
                    <p><input type="text" name='ram' placeholder='RAM' onChange={handleUpdateInputChange} value={updateComputer.ram} /></p>
                    <p><input type="text" name='ssd' placeholder='SSD' onChange={handleUpdateInputChange} value={updateComputer.ssd} /></p>
                    <div>
                        <button onClick={handleUpdateSubmitClick}>확인</button>
                        <button onClick={() => closeModal()}>취소</button>
                    </div>
                </div>
            </ ReactModal>
            <div css={layout}>
                <h2>목록</h2>
                <p>
                    <input type="text" name='company' onChange={handleSearchInputChange} value={params.company} placeholder='제조사' />
                    <input type="text" name='cpu' onChange={handleSearchInputChange} value={params.cpu} placeholder='cpu' />
                    <button onClick={handleSearchClick}>조회</button>
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>ID</th>
                            <th>제조사</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            computerList.map(computer =>
                                <tr key={computer.computerId}>
                                    <td><button onClick={() => handleSelectComputerClick(computer.computerId)}>선택</button></td>
                                    <td>{computer.computerId}</td>
                                    <td>{computer.company}</td>
                                    <td><button onClick={() => handleUpdateComputerClick(computer.computerId)}>수정</button></td>
                                    <td><button onClick={() => handleDeleteComputerClick(computer.computerId)}>삭제</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div css={layout}>
                <h2>세부정보</h2>
                <ul>
                    <li>ID : {computerDetail.computerId}</li>
                    <li>제조사 : {computerDetail.company}</li>
                    <li>CPU : {computerDetail.cpu}</li>
                    <li>RAM : {computerDetail.ram}</li>
                    <li>SSD : {computerDetail.ssd}</li>
                </ul>
            </div>
            <div css={layout}>
                <h2>등록</h2>
                <p>
                    <label htmlFor="">제조사</label>
                    <input type="text"
                        name="company"
                        onChange={handleRegisterInputChange}
                        value={registerComputer.company}
                    />
                </p>
                <p>
                    <label htmlFor="">CPU</label>
                    <input type="text"
                        name="cpu"
                        onChange={handleRegisterInputChange}
                        value={registerComputer.cpu}
                    />
                </p>
                <p>
                    <label htmlFor="">RAM</label>
                    <input type="text"
                        name="ram"
                        onChange={handleRegisterInputChange}
                        value={registerComputer.ram}
                    />
                </p>
                <p>
                    <label htmlFor="">SSD</label>
                    <input type="text"
                        name="ssd"
                        onChange={handleRegisterInputChange}
                        value={registerComputer.ssd}
                    />
                </p>
                <p>
                    <button onClick={handleRegisterSubmitClick}>등록하기</button>
                </p>
            </div>
        </div>
    );
}

export default Computer;
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

function PostPage(props) {
    const schoolNameInput = useInput();
    return (
        <>
            <header>
                <h1>비동기 데이터 통신</h1>
            </header>
            <main>
                <p>
                    <label htmlFor="">학교명 : </label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">학과명 : </label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">학년 : </label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">이름 : </label>
                    <input type="text" />
                </p>
                <p>
                    <button>전송</button>
                </p>
            </main>
        </>
    );
}

export default PostPage;
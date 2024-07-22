import "./App.css";

function App(props) {
    return (
        <div className="mainbox">
            <h1 className="user-mod">회원정보 수정</h1>
            <ul className="info">이름 : </ul>
            <input type="text" />
            <ul className="info">이메일 : </ul>
            <input type="text" />
            <ul className="info">비밀번호 : </ul>
            <input type="text" />
            <button>저장</button>
        </div>
    );
}

export default App;
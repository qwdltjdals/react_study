import "./App.css";

function App(props) {
    return (
        <div className="mainbox">
            <div className="user-mod">
                <h1>회원정보 수정</h1>
            </div>
            <div className="box">
                <ul className="info">이름 : </ul>
                <div className="input-box">
                    <input type="text" />
                </div>
                <ul className="info">이메일 : </ul>
                <div className="input-box">
                    <input type="text" />
                </div>
                <ul className="info">비밀번호 : </ul>
                <div className="input-box">
                    <input type="text" />
                </div>
                <div className="save-button">
                    <button>저장</button>
                </div>
            </div>
        </div>
    );
}

export default App;
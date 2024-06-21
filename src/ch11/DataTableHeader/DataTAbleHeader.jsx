import "./style.css";

function DataTableHeader({ mode, setMode }) {

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        resetMode();
    }

    const handleCencelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
    }

    return (
        <header className="table-header">
            <div className="input-group">
                <input type="text" disabled={mode === 0 || mode === 3} autoFocus placeholder="상품명" />
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="사이즈" />
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="색상" />
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="가격" />
            </div>
            <div>
                {
                    !mode && (

                        <div className="button-group">
                            <button onClick={handleChangeModeClick} value={1}>추가</button>
                            <button onClick={handleChangeModeClick} value={2}>수정</button>
                            <button onClick={handleChangeModeClick} value={3}>삭제</button>
                        </div>
                    )
                }
                {
                    !!mode && (

                        <div className="button-group">
                            <button onClick={handleSubmitClick}>확인</button>
                            <button onClick={handleCencelClick}>취소</button>
                        </div>
                    )
                }
            </div>
        </header>
    );
}

export default DataTableHeader;
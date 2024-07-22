/** @jsxImportSource @emotion/react */
import * as s from "./style"; // style에서 있는 모든걸 가져와서 s로 참조해라 사용할 때는 s.~

function App() {
    return (
        <div css={s.container(1200, 1200)}>
            <div css={s.container2}>
                <div css={s.container3}>
                    <div css={s.container4}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import { css } from '@emotion/react';

const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

function HomePage(props) {
    return (
        <div css={layout}>
            <h1>메인페이지 입니다.</h1>
            <Routes>
                <Route>

                </Route>
            </Routes>
        </div>
    );
}

export default HomePage;
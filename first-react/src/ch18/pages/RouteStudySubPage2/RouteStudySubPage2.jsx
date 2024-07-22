/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import RouteStudyPage from '../RouteStudyPage/RouteStudyPage';

function RouteStudySubPage2(props) {
    return (
        <MainContainer>
            <div>
                <h1>할일 목록</h1>
                <ul>
                    <Link to={"/routestudy/page2/mon"}><li>월요일</li></Link>
                    <Link to={"/routestudy/page2/tus"}><li>화요일</li></Link>
                    <Link to={"/routestudy/page2/wen"}><li>수요일</li></Link>
                    <Link to={"/routestudy/"}><li>뒤로가기</li></Link>
                </ul>
                <div>
                <Routes>
                        <Route path="/mon" element={<h1>게임하기 </h1>} />
                        <Route path="/tus" element={<h1>공부하기 </h1>} />
                        <Route path="/wen" element={<h1>게임하기 </h1>} />
                        <Route path="/page/*" element={< RouteStudyPage />} />
                    </Routes>
                </div>
            </div>
        </MainContainer>
    );
}

export default RouteStudySubPage2;
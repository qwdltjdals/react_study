/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import * as s from './style';
import { RiH1 } from 'react-icons/ri';
import RouteStudyPage from '../RouteStudyPage/RouteStudyPage';

function RouteStudySubPage1(props) {
    return (
        <MainContainer>
            <div>
                <h1>사용자 정보</h1>
                <ul>
                    <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                    <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                    <Link to={"/routestudy/page1/adress"}><li>주소</li></Link>
                    <Link to={"/routestudy"}><li>뒤로가기</li></Link>
                </ul>
                <div>
                    <Routes>
                        <Route path="/name" element={<h1>이성민 </h1>} />
                        <Route path="/age" element={<h1>28 </h1>} />
                        <Route path="/adress" element={<h1>부산 </h1>} />
                        <Route path="/page/*" element={< RouteStudyPage />} />
                    </Routes>
                </div>
            </div>
        </MainContainer >
    );
}

export default RouteStudySubPage1;
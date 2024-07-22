/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import RouteStudyPage from '../RouteStudyPage/RouteStudyPage';

function RouteStudySubPage1(props) {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index +1));

    const handleAgeClick = () => {
        navigate("/routestudy/page1/age");
        // window.location.href = "https://naver.com" => replace:false
        // window.location.replace = ("https://naver.com") => replace:true

    }
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
                <button onClick={handleAgeClick}>나이</button>
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
/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import * as s from './style';
import RouteStudyPage from '../../pages/RouteStudyPage/RouteStudyPage';
import RouteStudySubPage1 from '../../pages/RouteStudySubPage1/RouteStudySubPage1';

function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/routestudy/*" element={ <RouteStudyPage />} /> {/** 서브라우터 */}
            </Routes>
        </div>
    );
}

export default MainBody;
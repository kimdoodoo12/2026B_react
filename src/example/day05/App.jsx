import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import TopNavi from "./TopNavi";
import CommonLayout from "./CommonLayout";
import LayoutIndex from "./LayoutIndex";
import RouterHooks from "./RouterHooks";


export default function App(props){
    return(<>
        <TopNavi></TopNavi>
        <Routes>{/* 여기에 들어가는 경로들은 주소정의에 따라 렌더링 */}
            <Route path='/' element={<Home></Home>}></Route>
            <Route path="/intro" element={<CommonLayout></CommonLayout>}>
                <Route index element={<LayoutIndex/>}></Route>
                <Route path="router" element={<RouterHooks/>}></Route>
            </Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </>)
}
import { Link, NavLink } from "react-router-dom"

const TopNavi = () => {
    return(<>
        <nav>
            <a href="/">Home</a>&nbsp;
            <NavLink to="/intro">Intro</NavLink>&nbsp;
            <NavLink to="/intro/router">Router Hook</NavLink>&nbsp;
            <Link to="/xyz">Wrong URL</Link>&nbsp;
        </nav>
    </>)
}

// <a> 페이지 로드(새로고침)한다
// <NavLink to = "이동할경로"> 페이지 로드(새로고침) 없다
// <Link to = "이동할경로"> 페이지로드 (새로고침) 없다. active클래스가 없다.

export default TopNavi;
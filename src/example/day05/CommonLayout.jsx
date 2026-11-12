import { Outlet } from "react-router-dom"

const CommonLayout = () =>{
    return(<>
        <div> Component Outlet</div>
        <div>
            <Outlet/> {/* 여기에 하위 컴포넌트가 표시되는 위치 */}
        </div>
        <div>Component Footer</div>
    </>)
}

export default CommonLayout;
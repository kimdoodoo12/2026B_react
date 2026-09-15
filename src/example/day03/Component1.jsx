import FrontComp from "./FrontCompt"
import BackComp from "./BackComp"

function Componet1(props){
    return(<>
        <h2>리엑트 모듈</h2>
        <FrontComp></FrontComp>
        <BackComp event2={(msg) =>{alert(msg)}}/>
    </>)
}

export default Componet1
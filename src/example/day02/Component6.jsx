
export default function Component6(props){
    return(<>
        <h2>React-Event</h2>
        <ol>
            <FrontComp event1={()=>{
                alert('프론트엔드 클릭됨(부모전달)')
                }
            }></FrontComp>
            <BackComp event2={(msg) => {
                alert(msg);
            }}></BackComp>        
        </ol>

    </>)
}

function FrontComp(props){
    return(<>
        <li> <a href="/" onClick={() => {props.event1();}}>프론트 엔드</a></li>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
        </ul>
    </>)
}

const BackComp = ({event2}) => {
    return (<>
        <li><a href="/" onClick={(event) =>{
            event.preventDefault();
            event2('백엔드 클릭됨(자식전달)')
        }}>백엔드</a></li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>)
}
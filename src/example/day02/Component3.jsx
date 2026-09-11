// Component3.jsx
// 변수: 하나의 값 저장하는 수, 매개변수: 

function plus(x, y){ }  // 함수 정의 , x/y 매개변수

// 프롭스: 상위컴포넌트에서 하위컴포넌트에게 전달하는 객체 props , 읽기모드
function plus2(props){ }
plus2({v1:3, v2:4})

// -------------------------------------------------------- //
export default function Component3(props){   // 이 props는 상위요소
    let name = "유재석";
    // ---return 부터 jsx문법 구역 , 주석주의: { /* 주석*/}
    // jsx에서는 html문법{JS 표현식} HTML 문법 { JS 표현식}
    return (<>
        {/* JSX 주석 */}
        <div>{name}</div>
        <div>{10 + 20}</div>
        {/* 마크업명 속성명="속성값" 속성명="속성값" 속성명="속성값" */}
        <input type="text" value="안녕" name="입력상자"></input>
        <SubComp1 name="유재석" age="40"></SubComp1>
        <SubComp1 name="강호동" age="50"></SubComp1>
        <SubComp2 name="신동엽" age="44"></SubComp2>
    </>)
}

function SubComp1(props){   // 이 props 하위요소
    console.log(props);
    return (<>
        <h4>{props.name}님 {props.age}세</h4>
    </>)
}

function SubComp2({name , age}){
    return(<>
        <h4>{name}님 {age}세</h4>
    </>)
}

// props: 객체 { }
// {name, age} = props{} 구조분해
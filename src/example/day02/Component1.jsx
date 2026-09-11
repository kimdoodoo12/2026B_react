
/*
    1. 컴포넌트명.jsx 파일 생성
    2. export default function 컴포넌트명(props){ }
        export default: 내보내기, 다른 파일에서 import할 수 있도록 
        만약에 내부에서 사용하는 컴포넌트 생략
        컴포넌트명: 첫글자는 대문자
    3. { } 안에 return에서는 jsx문법가능, 그외 js문법
        return에서는 2줄 이상 입력시 (<> <> ) 묶는다.
    */
function Footer(props){
    return <div> 푸터 구역</div>
}
function Header(props){
    return <div> 헤더 구역 </div>
}
export default function Component1(props){
    return (<>
        <Header></Header>
        <div>Main Page</div>
        <Footer></Footer>
    </>
    )
}

const BackComp = ({event2}) => {
    return (<>
        <li> <a href="/" onClick={(event) => {
            event.preventDefault(); // 깜빡거리지 않음
            event2('백엔드 클릭됨(함수는 전달받음')
        }}>백엔드</a></li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
        </ul>
    </>)
}

/*
a 마크업 사용시 주의할점 
    - a 마크업은 HTTP GET 통신 마크업이라서
    - 리액트는 CSR(HTTP통신 1번) 이라서 깜빡거림 제거
    onClick = {(e) => {e.preventDefault()}}

콜백함수 형식
    함수정의와 실행을 구별해야함
*/

export default BackComp
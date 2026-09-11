export default function Component5(props){
    //

    function event1(){alert('정형진')}

    const event2 = function(){alert('버')}

    const event3 = () => {alert('러')}

    // onclick = "함수명()" -- 리액트 방법 --> onClick = 함수명
    return(<>
        <button onClick={event1}> 이벤트1</button>
        <button onClick={event2}> 이벤트2</button>
        <button onClick={event3}> 이벤트3</button>
        <button onClick={() => {alert('지');}}>이벤트4</button>
    </>)
}
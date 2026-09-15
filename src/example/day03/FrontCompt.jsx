function FrontComp(){
    return (<>
        <li><a href="/" onClick={() => {alert('프론트 클릭됨')}}>프론트엔드</a></li>
        <ul>
            <li>HTML5</li>
            <li>CSS5</li>
        </ul>
    </>)
}

export default FrontComp
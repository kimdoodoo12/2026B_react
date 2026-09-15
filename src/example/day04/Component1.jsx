import './index.css'
import hero from '../../assets/hero.png'

export default function Component1(props){
    // [3] CSS 객체 방식의 CSS 적용 : -하이픈 대신에 카멜표기법 사용
    const myStyle = {
        color: 'white', backgroundColor:"DodgerBlue",
        padding: "10px", fontFamily: "Verdana"
    }
    const iWidth = {maxWidth: '300px'}
    return(<>
        <h2>리액트 스타일</h2>
        <ol>
            {/* 인라인 방식의 CSS 적용 , {key:value} */}
            <li style={{color:"red"}}>프론트엔드</li>
            <ul>
                <li><img src='/img/cid_piano.png'></img></li>
                <li><img src={hero}></img></li>
                <li><img src='/img/shadow_piano.png'/></li>
            </ul>
            <li className="backEnd">백엔드</li>
            <ul>
                <li id="backEndSub">java</li>
                <li class="warning">Oracle</li>
                <li style={myStyle}>jsp</li>
            </ul>
        </ol>
    </>)
}
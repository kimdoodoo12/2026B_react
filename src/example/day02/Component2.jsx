// Component2.jsx 생성


// 1. 선언적 함수 방법으로 컴포넌트 생성
function FrontComp() {
    return(
        <>
        <li>프론트엔드</li>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
        </ul>
        </>
    )
}

// 2. 화살표함수 방법으로 컴포넌트 생성
const BackComp = (props) => {
    return(<>
        <li>백엔드</li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>)
}

// 3. 익명함수 방법으로 컴포넌트 생성
let FormComp = function() {
    return(<>
        <form>
            <select name="gubun">
                <option value="front">프론트엔드</option>
                <option value="back">백엔드</option>
            </select>
            <input type="text" name="title"></input>
            <input type="submit" value="추가"></input>
        </form>
    </>)
}

// 4. 3가지의 컴포넌트 합치는 컴포넌트
function Component2() {
    return(<>
        <div>
            <h2>React - Component</h2>
            <ol>
                <FrontComp></FrontComp>
                <BackComp></BackComp>
            </ol>
            <FormComp></FormComp>
        </div>
    </>)
}

export default Component2
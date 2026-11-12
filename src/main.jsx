// [필수] 1. 리액트 라이브러리 최초 렌더링(그리기)하는 함수
import { createRoot } from "react-dom/client";
// [필수] 2. index.html에서 root 마크업 가져오기
const root = document.querySelector('#root')
// [필수] 3. 가져온 root 마크업을 createRoot 함수에 전달한다.
const create = createRoot(root);

// [선택] 최초로 화면을 그리기 할 컴포넌트 가져와서 렌더링
// 1. import 이용하여 컴포넌트 가져온다
// import App from './App.jsx'
// 2. 가져온 컴포넌트 렌더링
// create.render( <App> </App>)

// [day01] render 1번 가능하므로 예제 컴포넌트 변경
// import MyComponent from "./example/day02/MyComponent";
// create.render(<MyComponent></MyComponent>)

// import Component1 from "./example/day02/Component1";
// create.render(<Component1></Component1>)

// import Component2 from "./example/day02/Component2";
// create.render(<Component2></Component2>)

// import Component3 from "./example/day02/Component3";
// create.render(<Component3></Component3>)

// import Component4 from "./example/day02/Component4";
// create.render(<Component4></Component4>)

// import Component5 from "./example/day02/Component5";
// create.render(<Component5></Component5>)

// import Component6 from "./example/day02/Component6"
// create.render(<Component6></Component6>)

// import Practice1 from "./example/practice1/Practice1";
// create.render(<Practice1></Practice1>)

// import Componet1 from "./example/day03/Component1";
// create.render(<Componet1></Componet1>)

// import Component2 from "./example/day03/Component2";
// create.render(<Component2></Component2>)

// import Component3 from "./example/day03/Component3";
// create.render(<Component3></Component3>)

// import Component1 from "./example/day04/Component1";
// create.render(<Component1></Component1>)

// import Component2 from "./example/day04/Component2";
// create.render(<Component2></Component2>)

// import Component3 from "./example/day04/Component3";
// create.render(<Component3></Component3>)

// import Practice2 from "./example/practice2/practice2";
// create.render(<Practice2></Practice2>)


// // 라우터
// import { BrowserRouter } from "react-router-dom";
// import App from "./example/day05/App";
// // 최초 렌더링 컴포넌트을 라우터컴포넌트로 감쌈
// create.render(<BrowserRouter>
//     <App/>
// </BrowserRouter>)

// import App from "./example/practice3/App";
// import { BrowserRouter } from "react-router-dom";
// create.render(<BrowserRouter>
//     <App></App>
// </BrowserRouter>)

// import App from "./example/day06/App";
// import { BrowserRouter } from "react-router-dom";
// create.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
// )

// import Axios from "./example/day06/Axois";
// create.render(<Axios></Axios>)

// import App from "./example/day07/App";
// import { BrowserRouter } from "react-router-dom";
// create.render(
//     <BrowserRouter>
//         <App></App>
//     </BrowserRouter>
// )

// import App from "./components/App";
// create.render(<App></App>)

// import App from "./example/day08/App";
// import { BrowserRouter } from "react-router-dom";
// create.render(<BrowserRouter>
//     <App></App>
// </BrowserRouter>)

// import App from "./example/day10/App"
// import { BrowserRouter } from "react-router-dom";
// create.render(<BrowserRouter>
//     <App></App>
// </BrowserRouter>)

// import App from "./example/day11/App"
// import { BrowserRouter } from "react-router-dom";
// create.render(<BrowserRouter>
//     <App></App>
// </BrowserRouter>)

// import ChatRoom from "./example/day15/ChatRoom";
// create.render(<ChatRoom></ChatRoom>)

import ChatBot from "./example/day16/ChatBot";
create.render(<ChatBot></ChatBot>)
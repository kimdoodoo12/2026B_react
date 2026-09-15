

import { useState } from "react";
// 구조분해
// const {name , age} = {name: '유재석' , age: 40}
// console.log(name, age);
// const [name, setName] = ['유재석' , function set(){}]
// console.log(name); setName();

let 전역변수 = 0;
export default function Component2(props){
    let 지역변수 = 0;
    // 1. 전역변수, 지역변수 증가함수 : 내부적으로는 증가, 화면으로는 아님
    const 증가함수1 = () => {
        전역변수++;
        지역변수++;
        console.log(지역변수, 전역변수)
    }
    // 2. useState함수 이용한 새로고침(함수재호출)
    // const [상태변수명, set상태변수명] = useState(초기값);
    // 상태변수는 값/유지 된다
    const[count, setCount] = useState(0);
    
    const 증가함수2 = () => {setCount(count+1);}

    // 3. 수박 요소 1개를 갖는 배열 초기값으로 상태변수 선언
    // 3(상수 101호) -> 4(상수102호) : 3 + 4 => 7(상수101호)
    const[array , setArray] = useState(['수박']);
    // 배열내 '사과' 요소 추가하여 setXXX 배열을 대입
    // 주로 스프레드연산자 이용하여 배열/객체 복사한다. ...객체명 , ...배열명
    const 증가함수3 = () => {
        array.push('사과'); setArray([...array])
    }


    return (<>
        <h3>상태 관리</h3>
        <h4>전역변수: {전역변수} , 지역변수: {지역변수}</h4>
        <button onClick={증가함수1}>버튼1</button>
        <h4>상태변수: {count}</h4>
        <button onClick={증가함수2}>버튼2</button>
        <h4>상태변수: {array}</h4>
        <button onClick={증가함수3}>버튼3</button>
    </>)
}
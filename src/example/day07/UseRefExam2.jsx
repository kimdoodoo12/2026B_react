import { useEffect, useRef } from "react";

export default function UseRefExam2(props){
    const passRef1 = useRef();  // 재렌더링시 값 유지 변수
    const passRef2 = useRef();
    // useEffect(() => {}, []) // 컴포넌트 생성시 최초 1번 실행 + 재렌더링마다 실행
    // useEffect(() => {} , [state변수명]) // 컴포넌트 생성시 최초 1번 실행 + 특정 state 변경시 재렌더링 실행
    useEffect(() => {
        console.log(passRef1, passRef2)
        passRef1.current.focus();   // .focus : 해당 DOM에 마우스 (깜빡)커서 두기
    }, [])

    const checkPassword = () => {
        if(!passRef1.current.value || passRef2.current.value == ''){ // 비밀번호 또는 비밀번호 확인 하나라도 없으면
            alert('비밀번호를 입력하세요'); passRef1.current.focus(); return;
        }
        if(passRef2.current.value === passRef2.current.value){
            alert('비밀번호 확인 성공')
        }
        else{
            alert('비밀번호 불일치')
        }
    }

    return(<>
        <form>
            패스워드1: <input ref={passRef1}></input> <br/>
            패스워드2: <input ref={passRef2}></input> <br/>
            <button onClick={checkPassword}>패스워드 확인</button>
        </form>
    </>)
}

/*
    입력상자 내 입력받은값 제어
    1. useState
        const [title, setTitle] = useState('');
        <input value={title} onChange{(e) => {setTitle(e.target.value);}}/>

    2. useRef
        const titleRef = useRef('')
        <input ref={titleRef}/>

    -------------------------------------------------
    <form ref={formRef}>
    </form>

*/
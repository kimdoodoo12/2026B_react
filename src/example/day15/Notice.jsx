import { useEffect, useState } from "react"


export default function Notice(props){
    const [notices, setNotices] = useState([]); // 알림 목록
    
    // 1. SSE 구독
    useEffect(() => {
        // 2. SSE 구독 신청, 내장 라이브러리(EventSource), new EventSource(구독주소);
        const eventSource = new EventSource("http://localhost:8080/api/sse/subscribe")

        // 3. 구독 중 서버가 메시지 보내오면 수신 이벤트
        eventSource.addEventListener('notice', (e) => {
            // 4. 받은 메시지의 내용을 e.data 확인 가능
            const newNotice = {id: Math.random(), text: e.data} // id: 난수(삭제용), text(받은 내용)
            // 5. 상태에 저장
            notices.push(newNotice);
            setNotices([...notices]);
        })
        return () => {
            eventSource.close(); // SSE 닫기
        }
    }, [])

    // 알림 삭제 함수
    const removeNotice = (id) => {
        setNotices(notices.filter((notice) => notice.id !== id));
    }
    
    return(<div>
        {
            notices.map((notice) => 
                <div>
                    <p>{notice.text}</p>
                    <button type="button" onClick={() => removeNotice(notice.id)}> X </button>
                </div>
            )
        }
    </div>)
}
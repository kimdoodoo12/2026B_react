import axios from "axios";
import { useEffect, useState } from "react";

function RandomUser(props){
    const[myJSON, setMyJSON] = useState({results: []});

    // axios 이용하여 api 통신하고 응답결과 상태변수에 저장
    useEffect(function(){
        const getUsers = async () => {
            const response = await axios.get("https://api.randomuser.me?results=10");
            const data = response.data;
            setMyJSON(data);
        };
        getUsers();
    }, []);

    let trTag = myJSON.results.map((data) => {
        return(<tr key={data.login.md5}>
            <td><img src={data.picture.thumbnail} alt={data.login.username}></img></td>
            <td><a href="/" onClick={(e) => {
                e.preventDefault();
                props.onProfile(data);
            }}>{data.login.username}</a></td>
            <td>{data.name.title} {data.name.first} {data.name.last}</td>
            <td>{data.nat}</td>
            <td>{data.email}</td>
        </tr>)
    });

    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>사진</th><th>로그인</th><th>이름</th>
                        <th>국가</th><th>Email</th>
                    </tr>
                </thead>
                <tbody>{trTag}</tbody>
            </table>
        </div>
    )
}

export default function Axios() {
    return(<>
        <h2>외부 서버 통신</h2>
        <RandomUser onProfile={(sData) => {
            console.log(sData);
            let info = `전화번호: ${sData.cell}
            성별: ${sData.gender}
            username: ${sData.login.username}
            password: ${sData.login.password}`;
            alert(info);
        }}></RandomUser>
    </>)
}


/*
    axios란? 주로 API 비동기 통신
    - 주로 외부 API와 백엔드 API(Controller) 통신 도구
    - content-type 기본값이 application/json

    1. 사용법
        const 함수명 = async() => {
                const response = await
            }
*/
import { useState } from "react"

export default function Practice2(){

    const[data, setData] = useState([{성명: '유재석', 연락처: '010-1234-1234', 나이: 30},
    {성명: '강호동', 연락처: '010-4321-4321', 나이: 40},
    {성명: '신동엽', 연락처: '010-7894-7894', 나이: 50},
    ]);

    const del = (i) => {
        const newData = [...data];
        newData.splice(i, 1);
        setData(newData);
    }

    return (<>
        <h3>전화번호부</h3>       
        <WriteForm data={data} setData={setData}></WriteForm>
        <Information data={data} del={del}></Information>
    </>)
}


const Information = ({data, del}) => {
    return (<>
        <ol>
            {data.map((item, i) => (
                <li key={i}>성명: {item.성명}   연락처: {item.연락처}   나이: {item.나이}   <button value="delete" onClick={() => del(i)}>삭제</button></li>
            ))}
        </ol>
        <span> 총 인원: {data.length} 명</span>
    </>)
}

const WriteForm = ({data , setData}) => {
    return(<>
        <form onSubmit={(event) =>{
            event.preventDefault();
            let name = event.target.userName.value;
            let phone = event.target.phone.value;
            let age = event.target.age.value;
            const newData = [...data, {성명: name , 연락처: phone , 나이: age}]
            setData(newData)
        }}>
            <input placeholder="성명" name="userName"></input> 
            <input placeholder="연락처 (예: 010-1234-5678)" name="phone"></input> 
            <input placeholder="나이" name="age"></input> 
            <input type="submit"></input>

        </form>
    </>)
}
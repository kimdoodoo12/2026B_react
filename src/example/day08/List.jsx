import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
    const [boardData, setBoardData] = useState([]);
    let requestUrl = "http://localhost:8080/api"
    

    useEffect(() => {
        async function getAllBoard(){
            const response = await axios.get(requestUrl);
            const data = response.data;
            setBoardData(data);
        }
        getAllBoard();
    }, []);

    let lists = boardData.map((row) => {
        let date = row.regdate.substring(0, 10)
        let subject = row.subject.substring(0, 20);
        
        return(<tr key={row.idx}>
            <td className="cen">{row.idx}</td>
            <td><Link to={"/view/"+row.idx}>{subject}</Link></td>
            <td className="cen">{row.name}</td>
            <td className="cen">{date}</td>
        </tr>)
    })

    return(<>
        <header>
            <h2>게시판-목록</h2>
        </header>
        <nav>
            <Link to="/write">글쓰기</Link>
        </nav>
        <article>
            <table id="boardTable">
                <thead>
                    <tr>
                        <th>NO</th><th>작성자</th><th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                </tbody>
            </table>
        </article>
    </>)
}

export default List;
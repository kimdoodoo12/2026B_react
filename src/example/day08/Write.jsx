import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Write() {
    // 화면이동하기위한 훅
    const navigate = useNavigate();
    let requestUrl = "http://localhost:8080/api"

    return(<>
         <header>
            <h2>게시판-작성</h2>
         </header>
         <nav>
            <Link to="/list"></Link>
         </nav>
         <article>
            <form onSubmit={async (event) => {
                event.preventDefault();
                const boardData = {
                    name: event.target.writer.value,
                    subject: event.target.title.value,
                    content: event.target.contents.value
                }
                const response = await axios.post(requestUrl, boardData);
                const data = response.data;
                if (data == true){navigate("/list")}   
            }}>
                <table id="boardTable">
                    <tbody>
                        <tr>
                            <th>작성자</th>
                            <td><input type="text" name="writer"></input></td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td><input type="text" name="title"></input></td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><textarea name="contents" rows="3"></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="작성"></input>
            </form>
         </article>
    </>)
}
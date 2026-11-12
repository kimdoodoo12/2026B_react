import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import List from "./List";
import "./index.css"
import Write from "./Write";

export default function App(props){

    return(<>
        <Routes>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/list" element={<List/>}></Route>
            <Route path="/write" element={<Write/>}></Route>
        </Routes>
    </>)
}
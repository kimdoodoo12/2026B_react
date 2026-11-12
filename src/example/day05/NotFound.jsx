import { Link } from "react-router-dom"

const NotFound = () => {
    return(<>
        <div>
            <h2>Not Found</h2>
            <p>
                coudn't find page. <br/>
                <Link to="/">Home</Link>
            </p>
        </div>
    </>)
}

export default NotFound;
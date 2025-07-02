import {Link} from "react-router";
const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Home Page...</h1>
            <a href="/view">View_anchor</a><br/>
            <Link to="/view">_View_link</Link>
        </div>
    );
};
export default HomePage;
import {Link} from "react-router";
const ViewPage = () => {
    return (
        <div>
            <h1>View....</h1>
            <a href="/">Home_anchor</a><br/>
            <Link to="/">_Home_link</Link>
        </div>
    );
};
export default ViewPage;
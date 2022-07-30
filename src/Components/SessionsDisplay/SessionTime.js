import "./style.css";
import { Link } from "react-router-dom";
export default function SessionTime(props){
    let idRoute = `/assentos/${props.id}`;
    return(
        <>
            <Link to={idRoute} className="session-time">
                    {props.showtime}
            </Link>
        </>
    )
}
import "./style.css";
import { Link } from "react-router-dom";
export default function SessionTime(props){
    idRoute = `/assentos/${props.id}`;
    return(
        <>
            <Link to={idRoute}></Link>
            <div className="session-time">
                {props.showtime}
            </div>
        </>
    )
}
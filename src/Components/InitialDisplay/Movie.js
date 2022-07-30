import "./style.css";
import { Link } from "react-router-dom";
export default function Movie(props){
    let idRoute = `/sessoes/${props.id}`;
    return(
        <div className="initial-display-movie">
            <Link to={idRoute}><img src={props.image} alt="Film"/></Link>
        </div>
    )
}
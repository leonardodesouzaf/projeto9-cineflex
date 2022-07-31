import "./style.css";
import SessionTime from "./SessionTime";
export default function Session(props){
    return(
        <>
            <p className="session-date">{props.weekday} - {props.date}</p>
            <div className="session-times">
                {props.showtimes.map((showtimes,index) => <SessionTime key={index} id={showtimes.id} showtime={showtimes.name}/>)}
            </div>
        </>
    )
}
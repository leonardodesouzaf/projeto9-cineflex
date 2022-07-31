import "./style.css";
import React from "react";
export default function SessionTime(props){
    const [seatClass, setSeatClass] = React.useState("seats-display-seat");
    function selectSeat(){
        if(seatClass === "seats-display-seat"){
            setSeatClass("seats-display-seat selected");
        }else{
            setSeatClass("seats-display-seat");
        }
    }
    return(
        <>
            {
                props.available === true ? <div className={seatClass} onClick={() => selectSeat()}>{props.name}</div>
                 : <div className="seats-display-seat occupied" onClick={() => alert("Esse assento não está disponível!")}>{props.name}</div>
            }
        </>
    )
}
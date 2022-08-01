import "./style.css";
import React from "react";
export default function SessionTime(props){
    const [seatClass, setSeatClass] = React.useState("seats-display-seat");
    function selectSeat(){
        if(props.name < 10){
            let nameEx = (`0${props.name}`);
            if(seatClass === "seats-display-seat"){
                setSeatClass("seats-display-seat selected");
                props.setSelectedSeat({number: +props.id, isSelected: false, name: nameEx});
            }else{
                setSeatClass("seats-display-seat");
                props.setSelectedSeat({number: +props.id, isSelected: true, name: nameEx});
            }
        }else{
            if(seatClass === "seats-display-seat"){
                setSeatClass("seats-display-seat selected");
                props.setSelectedSeat({number: +props.id, isSelected: false, name: +props.name});
            }else{
                setSeatClass("seats-display-seat");
                props.setSelectedSeat({number: +props.id, isSelected: true, name: +props.name});
            }
        }
    }
    if(props.name < 10){
        let nameEx = (`0${props.name}`);
        return(
            <>
                {
                    props.available === true ? <div className={seatClass} onClick={() => selectSeat()}>{nameEx}</div>
                    : <div className="seats-display-seat occupied" onClick={() => alert("Esse assento não está disponível!")}>{nameEx}</div>
                }
            </>
        )
    }else{
        return(
            <>
                {
                    props.available === true ? <div className={seatClass} onClick={() => selectSeat()}>{props.name}</div>
                    : <div className="seats-display-seat occupied" onClick={() => alert("Esse assento não está disponível!")}>{props.name}</div>
                }
            </>
        )
    }
}
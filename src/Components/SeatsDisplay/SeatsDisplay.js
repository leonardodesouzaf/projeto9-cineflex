import "./style.css";
import React from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Seat from "./Seat";
export default function SeatsDisplay(){
    const {idSessao} = useParams();
    const [sessionSpecs, setSessionSpecs] = React.useState([]);
    const [sessionProfile, setSessionProfile] = React.useState([]);
    const [sessionMovie, setSessionMovie] = React.useState([]);
    const [sessionSeats, setSessionSeats] = React.useState([]);
   React.useEffect(() => {
	const requisition = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
	requisition.then(specs => {
		setSessionSpecs(specs.data.day);
        setSessionProfile(specs.data);
        setSessionMovie(specs.data.movie);
        setSessionSeats(specs.data.seats);
	});
   },[]);
    return(
        <div className="seats-display-content">
            <div className="seats-display-title">Selecione o(s) assento(s)</div>
            <div className="seats-display-seats">
                {sessionSeats.map((seat,index) => <Seat key={index} name={seat.name} available={seat.isAvailable}/>)}
            </div>
            <div className="seats-display-legend">
                <div className="legend">
                    <div className="seats-display-seat-legend selected"></div>
                    Selecionado
                </div>
                <div className="legend">
                    <div className="seats-display-seat-legend"></div>
                    Disponível
                </div>
                <div className="legend">
                    <div className="seats-display-seat-legend occupied"></div>
                    Indisponível
                </div>
            </div>
            <div className="seats-display-form">
                
            </div>
        </div>
    )
}
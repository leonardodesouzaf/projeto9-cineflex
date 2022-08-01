import "./style.css";
import { useParams } from 'react-router-dom';
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function SucessDisplay(){
    const {nameUser, cpfUser, selectedSeatsArray, idSessao} = useParams();
    const [sessionSpecs, setSessionSpecs] = React.useState([]);
    const [sessionProfile, setSessionProfile] = React.useState([]);
    const [sessionMovie, setSessionMovie] = React.useState([]);
    React.useEffect(() => {
	const requisition = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
	requisition.then(specs => {
		setSessionSpecs(specs.data.day);
        setSessionProfile(specs.data);
        setSessionMovie(specs.data.movie);
	});
    },[]);
    console.log(Array.from(selectedSeatsArray));
    console.log(selectedSeatsArray);
    return(
        <>
            <div className="sucess-display-title-div">
                <div className="sucess-display-title">Pedido feito com sucesso!</div>
            </div>
            <div className="sucess-display-subtitle">Filme e sessão</div>
            <div className="sucess-display-text">
                {sessionMovie.title} <br/>
                {sessionSpecs.date} - {sessionProfile.name}
            </div>
            <div className="sucess-display-subtitle">Ingressos</div>
            <div className="sucess-display-text">
                <div>Assentos: {selectedSeatsArray}</div>
            </div>
            <div className="sucess-display-subtitle">Comprador</div>
            <div className="sucess-display-text">
                <div>
                    Nome: {nameUser}
                <br/>
                    CPF: {cpfUser}
                </div>
            </div>
            <div className="sucess-button-div">
                <Link to="/" className="sucess-button-link">
                    <button className="sucess-button">Voltar pra Home</button>
                </Link>
            </div>
        </>
    )
}
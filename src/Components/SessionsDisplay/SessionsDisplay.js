import "./style.css";
import React from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Session from "./Session";
export default function SessionsDisplay(){
    const {idFilme} = useParams();
    const [movieSpecs, setMovieSpecs] = React.useState([]);
    const [movieProfile, setMovieProfile] = React.useState([]);
   React.useEffect(() => {
	const requisition = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);
	requisition.then(specs => {
		setMovieSpecs(specs.data.days);
        setMovieProfile(specs.data);
	});
   },[]);
    return(
        <>
            <div className="sessions-display-title">Selecione o horário</div>
            {movieSpecs.map((specs,index) => <Session key={index} id={specs.id} weekday={specs.weekday} date={specs.date} showtimes={specs.showtimes}/>)}
            <div className="sessions-display-footer">
                <div className="image-sessions-display-footer">
                    <img src={movieProfile.posterURL} alt="Film"/>
                </div>
                <p>{movieProfile.title}</p>
            </div>
        </>
    )
}

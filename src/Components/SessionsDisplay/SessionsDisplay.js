import "./style.css";
import React from "react";
import axios from "axios";
export default function SessionsDisplay(){
    const {idFilme} = React.useParams();
    const [movieSpecs, setMovieSpecs] = React.useState([]);
   React.useEffect(() => {
	const requisition = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies/ID_DO_FILME/showtimes");
	requisition.then(specs => {
		setMovieSpecs(specs.data);
	});
   },[]);
    return(
        <>
            <div className="sessions-display-title">Selecione o horário</div>
        </>
    )
}
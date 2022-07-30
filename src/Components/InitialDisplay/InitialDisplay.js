import "./style.css";
import Movie from "./Movie";
import React from "react";
import axios from "axios";
export default function InitialDisplay(){
    const [moviesList, setMoviesList] = React.useState([]);
   React.useEffect(() => {
	const requisition = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
	requisition.then(list => {
		setMoviesList(list.data);
	});
   },[]);
    return(
        <>
            <div className="initial-display-title">Selecione o filme</div>
            <div className="initial-display-movies">
                {moviesList.map((movie,index) => <Movie key={index} image={movie.posterURL} id={movie.id}/>)}
            </div>
        </>
    )
}
import "./style.css";
import React from "react";
import axios from "axios";
import { useNavigate , useParams } from 'react-router-dom';
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
    const [nameUser, setNameUser] = React.useState("");
    const [cpfUser, setCpfUser] = React.useState("");
    const [selectedSeat, setSelectedSeat] = React.useState("");
    const [selectedSeatsArray, setSelectedSeatsArray] = React.useState([]);
    const [selectedSeatsNameArray, setSelectedSeatsNameArray] = React.useState([]);
    React.useEffect(() => {
        if(selectedSeat !== ""){
            if(selectedSeat.isSelected === false){
                selectedSeatsArray.push(selectedSeat.number);
                setSelectedSeatsArray([...selectedSeatsArray]);
                selectedSeatsNameArray.push(selectedSeat.name);
                setSelectedSeatsNameArray([...selectedSeatsNameArray]);
            }
            if(selectedSeat.isSelected === true){
                const filterArr = selectedSeatsArray.filter(filterSelectedSeat);
                setSelectedSeatsArray([...filterArr]);
                const filterArr2 = selectedSeatsNameArray.filter(filterSelectedSeat2);
                setSelectedSeatsNameArray([...filterArr2]);
            }
        }
    },[selectedSeat]);
    function filterSelectedSeat(seat){
        if (seat !== selectedSeat.number) {
            return true;
        }
    }
    function filterSelectedSeat2(seat){
        if (seat !== selectedSeat.name) {
            return true;
        }
    }
    const navigate = useNavigate();
    function orderTicket (event) {
        event.preventDefault();
        if(selectedSeatsArray.length === 0){
            alert("Selecione seu(s) assento(s)!");
        }else{
            const requisition = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
                ids: selectedSeatsArray,
                name: nameUser,
                cpf: cpfUser 
            });
            requisition.then(navigate(`/sucess/${nameUser}/${cpfUser}/${selectedSeatsNameArray}/${idSessao}`));
        }
    }
    return(
        <div className="seats-display-content">
            <div className="seats-display-title">Selecione o(s) assento(s)</div>
            <div className="seats-display-seats">
                {sessionSeats.map((seat,index) => <Seat key={index} name={seat.name} id={seat.id} available={seat.isAvailable} setSelectedSeat={setSelectedSeat}/>)}
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
            <div>
                <form onSubmit={orderTicket} className="seats-display-form">
                    <label htmlFor="name" className="form-text">Nome do comprador:</label>
                    <input type="text" placeholder="Digite seu nome..." id="name" className="form-input" autoComplete="off" required onChange={e => setNameUser(e.target.value)}/>
                    <label htmlFor="cpf" className="form-text">CPF do comprador:</label>
                    <input type="text" placeholder="Digite seu CPF..." id="cpf" className="form-input" pattern="^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}" required autoComplete="off" inputMode="number" minLength="11" maxLength="14" size="14" onChange={e => setCpfUser(e.target.value)} onInvalid={()=> alert('Digite o CPF no formato XXX.XXX.XXX-XX')}/>
                    <div className="button-div">
                        <button type="submit" className="form-button">Reservar assento(s)</button>
                    </div>
                </form>
            </div>
            <div className="seats-display-footer">
                <div className="image-seats-display-footer">
                    <img src={sessionMovie.posterURL} alt="Film"/>
                </div>
                <p>{sessionMovie.title} <br/> {sessionSpecs.weekday} - {sessionProfile.name}</p>
            </div>
        </div>
    )
}
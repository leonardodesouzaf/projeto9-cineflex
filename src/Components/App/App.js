import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialDisplay from "../InitialDisplay/InitialDisplay";
import SessionsDisplay from "../SessionsDisplay/SessionsDisplay";
import SeatsDisplay from "../SeatsDisplay/SeatsDisplay";
import SucessDisplay from "../SucessDisplay/SucessDisplay";

export default function App(){
    return(
        <>
            <div className="header">CINEFLEX</div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InitialDisplay />} />
                    <Route path="/sessoes/:idFilme" element={<SessionsDisplay />}/>
                    <Route path="/assentos/:idSessao" element={<SeatsDisplay />}/>
                    <Route path="/sucess/:nameUser/:cpfUser/:selectedSeatsArray/:idSessao" element={<SucessDisplay />}/>
                </Routes>
		    </BrowserRouter>
        </>
    )
}
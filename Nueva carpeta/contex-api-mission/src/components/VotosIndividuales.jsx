import React from "react";
import { useContext } from "react";
import { AuthContext } from "../store/context";

function Candidato1(){

    const auth = useContext(AuthContext)

    return(
        <button onClick={(e) => {
            auth.handleVotos(e)
        }}>
            Candidato 1
        </button>
    )
}

export default Candidato1;
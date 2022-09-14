import React from "react";

function Filtros() {
    return(
        <>
        <div>
            <label><input type="checkbox" id="cbox1" value="first_checkbox" />Candidato 1</label>
            <label><input type="checkbox" id="cbox2" value="second_checkbox" />Candidato 2</label>
            <label><input type="checkbox" id="cbox1" value="first_checkbox" />Candidato 3</label>
            <label><input type="checkbox" id="cbox2" value="second_checkbox" />Candidato 4</label>
            <label><input type="checkbox" id="cbox2" value="second_checkbox" />Todos</label>
            <label><input type="checkbox" id="cbox1" value="first_checkbox" />Porcentual</label>
            <label><input type="checkbox" id="cbox2" value="second_checkbox" />Numérico</label>
        </div>
        </>

    )
}

export default Filtros;
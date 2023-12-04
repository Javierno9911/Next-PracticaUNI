import "./style.css"
//import Link from 'next/link';

function InvitadoPage() {
    return (
        <div class="container-menu">
            <div class="titulo-menu">
                <h1>MENU</h1>
            </div>
            <div class="container-de-select">
                <div>
                    <label for="select1">Ciudad</label>
                    <select class="ciudad-select" id="select1">
                        <option value="">Ninguna ciudad ❌</option>
                        <option value="">Madrid 🏙️</option>
                        <option value="">Barcelona 🏙️</option>
                        <option value="">Valencia 🏙️</option>
                    </select>
                </div>

                <div>
                    <label for="select2">Actividad</label>
                    <select class="actividad-select" id="select2">
                        <option value="">Ninguna actividad ❌</option>
                        <option value="">Tapeo 🍺</option>
                        <option value="">Gourmet 🍽️</option>
                        <option value="">Menu 🍱</option>
                    </select>
                </div>
            </div>
            <div class="boton-buscar-usur">
                <button class="boton-menu-user">BUSCAR</button>
            </div>
        </div>
      )
}
export default InvitadoPage;
import "./style.css"
import Link from 'next/link';
import Formu from '@/components/formulario';

function CrearComercio() {
    return (
        <div>
            <div className="boton-atras-container">
                <Link href="/comercio/menu">
                    <button className="bton-atras">⬅</button>
                </Link>
            </div>
            <div className="formulario-div">
                <h1>Informacion Comercio</h1>
                <Formu tipo="comercio" />
            </div>
        </div>
    )
}
export default CrearComercio;
import "./style.css"
import Link from 'next/link';
import BorrarLista from '@/components/borrar-en-lista';
function CroquetaListadoPage() {
    return (
        <div>
            <div className="boton-atras-container">
                <Link href="/comercio/menu">
                    <button className="bton-atras">⬅</button>
                </Link>
            </div>
            <div className="formulario-div">
                <BorrarLista tipo="comercio" />
            </div>
        </div>
    )
}
export default CroquetaListadoPage;
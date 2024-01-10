import "./style.css"
import Link from 'next/link';
import ListasAdminy from '@/components/tipo-lista';
function InvitadoPage() {
    return (
        <div>
            <div className="boton-atras-container">
                <Link href="/comercio/menu">
                    <button className="bton-atras">⬅</button>
                </Link>
            </div>
            <div className="formulario-div">
                <ListasAdminy tipo="comercio" />
            </div>
        </div>
        
    )
}
export default InvitadoPage;
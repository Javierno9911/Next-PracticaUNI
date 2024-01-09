import "./style.css"
import Link from 'next/link';
import Lista from '@/components/listaCajas';
function InvitadoPage() {
    return (
        <div>
            <div className="boton-atras-container">
                <Link href="/usuario/menu">
                    <button className="bton-atras">⬅</button>
                </Link>
            </div>
            <div class="formulario-div">
                <Lista tipo="usuario" />
            </div>
        </div>
        
    )
}
export default InvitadoPage;
import "./style.css"
import Link from 'next/link';
import Formu from '@/components/formulario';

function FormuPage() {
    return (
        <div>
            <div className="boton-atras-container">
                <Link href="/usuario">
                    <button className="bton-atras">⬅</button>
                </Link>
            </div>
            <div class="formulario-div">
                <h1>Informacion Comercio</h1>
                <Formu tipo="usuario" />
            </div>
        </div>
        
      )
}
export default FormuPage;
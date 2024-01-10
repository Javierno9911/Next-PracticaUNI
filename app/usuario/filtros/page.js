import "./style.css"
import Link from 'next/link';
import Filtro from '@/components/filtro';
function FormuPage() {
    return (
        <div>
            <div className="boton-atras-container">
                <Link href="/usuario/menu">
                    <button className="bton-atras">⬅</button>
                </Link>
            </div>
            <div className="container-menu">
                <Filtro/>
            </div>
        </div>
      )
}
export default FormuPage;
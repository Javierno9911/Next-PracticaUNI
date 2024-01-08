import "./style.css"
import Link from 'next/link';
import Formu from '@/components/formulario';

function FormuAdminPage() {
    return (
        <div class="formulario-div">
            <div className="boton-atras-container">
                <Link href="/admin/menu">
                    <button className="bton-atras">⬅</button>
                </Link>
            </div>
            <h1>Informacion Admin</h1>
            <Formu tipo="admin" />
        </div>
      )
}
export default FormuAdminPage;
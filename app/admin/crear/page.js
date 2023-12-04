import "./style.css"
//import Link from 'next/link';
import Formu from '@/components/formulario';

function FormuAdminPage() {
    return (
        <div class="formulario-div">
            <h1>Informacion Admin</h1>
            <Formu tipo="admin" />
        </div>
      )
}
export default FormuAdminPage;
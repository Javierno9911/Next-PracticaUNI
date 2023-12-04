import "./style.css"
//import Link from 'next/link';
import Borrar from '@/components/borrar';
function InvitadoPage() {
    return (
        <div class="formulario-div">
            <h1>Informacion Comercio</h1>
            <Borrar tipo="admin" />
        </div>
    )
}
export default InvitadoPage;
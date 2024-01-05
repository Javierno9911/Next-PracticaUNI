import "./style.css"
import Lista from '@/components/listaCajas';
import ListasAdminy from '@/components/tipo-lista';
import BorrarLista from '@/components/borrar-en-lista';
function InvitadoPage() {
    return (
        <div class="formulario-div">
            <ListasAdminy tipo="admin" />
        </div>
        /*
        <div class="formulario-div">
            <Lista tipo="invitado" />
        </div>
        */
    )
}
export default InvitadoPage;
import "./style.css"
import ListasAdminy from '@/components/tipo-lista';
function InvitadoPage() {
    return (
        <div class="formulario-div">
            <ListasAdminy tipo="comercio" />
        </div>
        /*
        <div class="formulario-div">
            <Lista tipo="invitado" />
        </div>
        */
    )
}
export default InvitadoPage;
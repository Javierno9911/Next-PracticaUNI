import "./style.css"
//import Link from 'next/link';
import Formu from '@/components/formulario';

function FormuPage() {
    return (
        <div class="formulario-div">
            <h1>Informacion Comercio</h1>
            <Formu tipo="usuario" />
        </div>
      )
}
export default FormuPage;
import "./style.css"
//import Link from 'next/link';
import Formu from '@/components/formulario';

function CrearComercio() {
    return (
        <div class="formulario-div">
            <h1>Informacion Comercio</h1>
            <Formu tipo="comercio" />
        </div>
      )
}
export default CrearComercio;
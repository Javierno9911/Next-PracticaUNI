import "./style.css"
//import Link from 'next/link';
import Menu from '@/components/menu';
function MenuUsuario() {
    return (
        <div className="container-menu">
            <Menu tipo="usuario" />
        </div>
      )
}
export default MenuUsuario;
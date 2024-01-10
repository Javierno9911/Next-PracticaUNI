import "./style.css"
//import Link from 'next/link';
import Menu from '@/components/menu';
function MenuAdmin() {
    return (
        <div className="container-menu">
            <Menu tipo="admin" />
        </div>
      )
}
export default MenuAdmin;
import "./style.css"
import Link from 'next/link';
function UsuarioPage() {
    return (
        <div class="container-registro">
            <div class="col">
                <div class="titulo">
                    <h1>PUNTUACION CROQUETA</h1>
                </div>
                <div class="col-0">
                    <h4>0</h4>
                    <button className="estrellas-p">⭐</button>
                </div>
                
                <div class="col-1">
                    <h4>1</h4>
                    <button className="estrellas-p">⭐</button>
                </div>
                
                <div class="col-2">
                    <h4>2</h4>
                    <button className="estrellas-p">⭐</button>
                </div>
                
                <div class="col-3">
                    <h4>3</h4>
                    <button className="estrellas-p">⭐</button>
                </div>
                
                <div class="col-4">
                    <h4>4</h4>
                    <button className="estrellas-p">⭐</button>
                </div>
                
                <div class="col-5">
                    <h4>5</h4>
                    <button className="estrellas-p">⭐</button>  
                </div>
                
            </div>
        </div>
      )
}
export default UsuarioPage;
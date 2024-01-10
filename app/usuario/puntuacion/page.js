import "./style.css"
import Link from 'next/link';
function UsuarioPage() {
    return (
        <div className="container-registro">
            <div className="col">
                <div className="titulo">
                    <h1>PUNTUACION CROQUETA</h1>
                </div>
                <div className="col-0">
                    <h4>0</h4>
                    <button className="estrellas-p">⭐</button>
                </div>
                
                <div className="col-1">
                    <h4>1</h4>
                    <button className="estrellas-p">⭐</button>
                </div>
                
                <div className="col-2">
                    <h4>2</h4>
                    <button className="estrellas-p">⭐</button>
                </div>
                
                <div className="col-3">
                    <h4>3</h4>
                    <button className="estrellas-p">⭐</button>
                </div>
                
                <div className="col-4">
                    <h4>4</h4>
                    <button className="estrellas-p">⭐</button>
                </div>
                
                <div className="col-5">
                    <h4>5</h4>
                    <button className="estrellas-p">⭐</button>  
                </div>
                
            </div>
        </div>
      )
}
export default UsuarioPage;
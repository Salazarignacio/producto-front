import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Style.css";

export default function MainPage({children}) {
  return (
    <div className="general">
      
      <div className="aside">
        <h1 className="app-title">
          Product POS
        </h1>

        <div className="botones">
          
            <Link to={"/ventas"}><Button>Ventas</Button></Link>
          
          
            <Link to={"/edicion"}><Button>Edicion</Button></Link>
          
          
            <Link to={""}><Button>Balance</Button></Link>
          
        </div>
      </div>
      {children}
      
    </div>
  );
}


import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Navbar(){
    const { user, login, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">MyShop</Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/checkout" className="navbar-link">Cart</Link>
                </div>
                { !user? 
                    <div className="navbar-auth">
                        <Link to="/auth" className="btn btn-secondary">Login</Link>
                        <Link to="/auth" className="btn btn-primary">Signup</Link>
                    </div> :
                    <div className="navbar-user">
                        <span className="navbar-greeting"> Hello, {user} </span>
                        <button className="btn btn-secondary" onClick={()=>{
                            logOut();
                            navigate("/auth");
                        }}>LogOut</button>
                    </div>
                }
            </div>
        </nav>
    );
}
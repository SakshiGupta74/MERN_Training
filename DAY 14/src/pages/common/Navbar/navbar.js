import { useContext } from "react";
import PointsContext from "../../../context/pointsContext";
import "./navbar.css"
import { Link } from 'react-router-dom';



const Navbar = (props) => {
    const contextValues = useContext(PointsContext);
    // console.log(contextValues);

    const page = props.page;

    const customcolor = (x) => {
        return { color: page === x ? 'black' : 'white' }
    }
    // console.log('Navbar re-rendered!');
    return (
        <div className='header-parent-container'>
            <div className='left'>
                <Link to="/" style={customcolor('home')}>Home</Link>
                <Link to="/image-generator" style={customcolor('imageGenerator')} >Image Generator</Link>
                <Link to="/history" style={customcolor('history')}>History</Link>
                <Link to="/contact" >Contact Us</Link>
                <Link to="/help" >Help</Link>
                <Link to="/signup" style={customcolor('signup')}>Signup</Link>
            </div>
            <div className="right" style={{ padding: '4px', color: 'brown' }}>
                {contextValues.userPoints}

            </div>
            {contextValues.isLoggedIn?
                <button onClick={contextValues.logout}>Logout</button>
                : <button onClick={contextValues.login}>Login</button>
            }
        </div>
    )
}

export default Navbar;
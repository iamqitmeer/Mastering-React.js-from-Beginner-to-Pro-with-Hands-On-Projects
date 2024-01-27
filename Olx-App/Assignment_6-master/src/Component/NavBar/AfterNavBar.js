import React, { useEffect, useState } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { getuser, logout } from '../../Config/FireBase';
import logo from '../../Images/logo.png';
import gifGrocery from '../../Images/gifGrocery.gif';
import gifVagetable from '../../Images/gifVagetable.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { getCurrentUserUID } from '../../Config/FireBase';

const AfterNavBar = () => {
    const [isRotated, setIsRotated] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [user, setUser] = useState();

    const uid = getCurrentUserUID();

    useEffect(() => {
        userInfo(uid);
    }, [uid]);

    const userInfo = async (uid) => {
        const users = await getuser(uid);
        setUser(users.data);
    };
    console.log("user navbar", user);
    const handleRotationToggle = () => {
        setIsRotated((prev) => !prev);
        setShowProfile(!isRotated);
    };

    if (user === undefined) {
        return (
          <div className="loading-container">
            <div className="loader"></div>
            <p>Loading...</p>
          </div>
        );
      }
  
    return (
        <div>
            <div className='bg-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-1 col-md-3 col-sm-3 col-2' style={{ marginTop: "px", marginLeft: "%" }}>
                            <a href='/'>
                                <img src={logo} alt='Logo' className='Nav-First-logo' />
                            </a>
                        </div>
                        <div className='col-lg-2 col-md-3 col-sm-3 col-5' style={{ marginTop: "20px", fontSize: "12px" }}>
                            <img src={gifGrocery} alt='' height={30} /><span style={{ marginLeft: "5px" }}>GROCERY</span>
                        </div>
                        <div className='col-lg-2 col-md-3 col-sm-3 col-5' style={{ marginTop: "20px", fontSize: "12px" }}>
                            <img src={gifVagetable} alt='' height={30} /><span style={{ marginLeft: "5px" }}>VEGETABLES</span>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className='container'>
                        <a href='/'>
                            <img src={logo} alt='Logo' className='Nav-Second-logo' />
                        </a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className='row w-100'>
                                <div className='col-lg-4'>
                                    <select name="" id="" className="form-control">
                                        <option value="1">Select City</option>
                                        <option value="1">Karachi</option>
                                        <option value="1">Lahore</option>
                                        <option value="1">Islamabad</option>
                                    </select>
                                </div>
                                <div className='col-lg-8'>
                                    <input type='text' className='form-control' placeholder='Enter item' />
                                </div>
                            </div>
                        </div>

                        <div>
                            <a href='#' onClick={handleRotationToggle}>
                                <img
                                    src={user?.[0]?.pic}
                                    alt='insta'
                                    width={40}
                                    className='rounded-circle'
                                />
                                <span>
                                    <MdArrowDropDown
                                        size="30px"
                                        style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </span>
                            </a>
                            <a href='/AddPost'>
                                <button className='nav-custom-btn' style={{ marginLeft: "20px" }} variant="primary">
                                    POST ADD
                                </button>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

            {showProfile && (
                <div className='p-3 text-left  custom-card  custom-card-drop '>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                            <img
                                src={user?.[0]?.pic}
                                alt='insta'
                                width={80}
                                className='rounded-circle'
                            />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6 mt-3'>
                            <span><h5>{user?.[0]?.name}</h5></span>
                            <a href='/editprofile'>Edit Profile</a>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <a href='/'>
                            <button className='customize-drop-btn'>DashBoard</button>
                        </a>
                    </div>
                    <div>
                        <a href='/myadd'>
                            <button className='customize-drop-btn'>My Add</button>
                        </a>
                    </div>
                    <hr />
                    <button className='nav-custom-btn' variant="primary"
                        onClick={() => logout()}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default AfterNavBar
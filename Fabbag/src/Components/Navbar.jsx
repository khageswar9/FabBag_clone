import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState,useEffect} from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate =  useNavigate();
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState("")
  const [loged,setLoged] = useState(false);
  const [right, setRight] = useState(false);
  const handleChange = async (e) => {
    const data1 = await fetch(`https://cryptic-ocean-94076.herokuapp.com/mainproduct?category=${e.target.value}`)
    var data2 = await data1.json()
    console.log("data2" ,data2)
    setSelected(data2)
    setSearch(e.target.value)
  }
  console.log("search",search)
  useEffect(() => {
    handleChange()
  }, [])

  const handleproduct=(id) => {

    localStorage.setItem("id",JSON.stringify(id))
    localStorage.setItem("searched",(search))
    navigate("/productsdetails");
  
  }
  return (
    <div className="nav">
      <div className="navbar">
        <div>
          <a className="" href="" target="_self">
            <Link to="/productsdetails"><h2 className="lang2">SUBSCRIBE NOW</h2></Link>
          </a>
        </div>
        <div>
        <Link to="/"> <img
            className="titleimage"
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289"
            alt=""
          /></Link>
        </div>
        <div className="navbar_icon">
          <SearchIcon
            onClick={() => {
              setOpen(!open);
            }}
            className="goldenbutton"
          />
         <Link to="/cart"><FavoriteBorderIcon className="goldenbutton" /></Link>
         <Link to="/signup"><AccountCircleOutlinedIcon className="goldenbutton1" onMouseOver={() => {
            setLoged(!loged)
            console.log(loged)
          }}/>
         {loged === true ?
          <div className="accountLogin" onMouseLeave={()=>{setLoged(!loged)}}>
          <div className="accountfirst">
            <p style={{color:"black"}}>Language:</p>
            <p  style={{color:"goldenrod"}}>En</p>
            <p style={{marginLeft:"10px",color:"black"}}>Fr</p>
          </div>
          <div style={{marginLeft:"20px",color:"black",marginTop:"-20px"}}><p>Checkout</p></div>
          <div style={{marginLeft:"20px",color:"black"}}><p>Sign In</p></div>
          <div style={{marginLeft:"20px",color:"black"}}><p>Create An Account</p></div>
        </div>: null}</Link>
         <ShoppingCartOutlinedIcon className="goldenbutton"  onClick={() => {
              setRight(!right);
            }} />
        </div>
      </div>
      <div className="hiddendiv">
        {open === true ? (
          <div className="serchdiv">
            <span
              id="hidebtn"
              onClick={() => {
                setOpen(!open);
              }}
            >
              &#9587;
            </span>
            <p >WHAT ARE YOU LOOKING FOR?</p>
            <div className="inputdiv">
              <input type="text" id="textinput" placeholder="Search Products" onChange={handleChange}/>
              <SearchIcon id="btninput" />
              <div className="searchbox">
              {selected.map((e)=>{
                  console.log(e)
            return <div className="searchelement" onClick={()=>{handleproduct(e._id)}}>
              <div className="searchimagediv">
              <img src={e.image} style={{width:"100%",height:"100%"}}/>
              </div>
              <div className="searchtitlediv" >{e.title}</div>
              <div className="searchpricediv">Price: {e.price} Rs</div>
            </div>
              })
           }</div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="hiddendiv">
        {right === true ? (
          <div className="serchdiv1">
            <span
              id="hidebtn1"
              onClick={() => {
                setRight(!right);
              }}
            >
              &#9587;
            </span>
            <div className="carttop1">
            <h3>MY CART</h3>
            </div>      
          </div>
        ) : null}
      </div>
    </div>
  );
};

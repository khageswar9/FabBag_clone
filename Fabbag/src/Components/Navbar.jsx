import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.css";
import { useState,useEffect} from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState("")
  const handleChange = async (e) => {
   e.preventDefault()
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
  
  }
  return (
    <div className="nav">
      <div className="navbar">
        <div>
          <a className="" href="" target="_self">
            <h2 className="lang2">SUBSCRIBE NOW</h2>
          </a>
        </div>
        <div>
          <img
            className="titleimage"
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289"
            alt=""
          />
        </div>
        <div className="navbar_icon">
          <SearchIcon
            onClick={() => {
              setOpen(!open);
            }}
            className="goldenbutton"
          />
          <FavoriteBorderIcon className="goldenbutton" />
          <AccountCircleOutlinedIcon className="goldenbutton" />
          <ShoppingCartOutlinedIcon className="goldenbutton" />
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
    </div>
  );
};

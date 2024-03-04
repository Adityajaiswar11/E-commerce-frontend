/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Context } from "../utils/Constant";
import { FaShoppingCart, FaUser,  } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import MobileViewNavbar from "./MobileViewNavbar";




const Navbar = () => {
  const { cart } = useContext(Context);

  const [show, setShow] = useState(false);
  // const[user,setUser] = useState({});

  // const getusers = async()=>{
  //   try{
  //     const res = await axios.get("http://localhost:3000/api/user/65d2d5928ea30b5d22d80409");
  //     const data = res.data;
  //        setUser(data)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  // useEffect(()=>{
  //    getusers()
  // },[])
  
  return (
    <>
      <div className="shadow-sm md:py-1 shadow-black  fixed bg-[#eeebeb]  top-0 left-0 z-40 w-full text-black">
        {/* navbar for mobile devices */}
      
      {show &&   <MobileViewNavbar setShow ={setShow}/>}
          

        <nav className=" flex justify-between items-center mx-auto w-11/ h-16 md:p-5">
          <div className=" flex justify-between items-center gap-2 relative">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className=" w-10 ml-4 rounded-full"
              />
            </Link>
            <Link
              to="/"
              className=" md:text-2xl font-semibold text-2xl opacity-80 first-letter:text-red-700 first-letter:font-bold"
            >
              Easyshop
            </Link>
          </div>

          <ul
            className="md:flex md:justify-between md:items-center md:gap-9 cursor-pointer
                  md:text-lg hidden"
          >
            <li className="navbtn hover:text-red-600 duration-200 font-semibold">
              <Link to="/">Home</Link>
            </li>

            <li className="navbtn hover:text-red-600 duration-200 font-semibold">
              <Link to="/product">Products</Link>
            </li>

            <li className="navbtn hover:text-red-600 duration-200 font-semibold">
              <Link to="/contact">Contact</Link>
            </li>

            <button className=" hover:text-red-600 duration-200 font-semibold" onClick={()=>setShow(!show)}>
              <FaUser className="text-2xl text-red-600"/>
            </button>
            <div className="md:mr-6">
              <Link to={`/cart`}>
                <div className="relative">
                  <FaShoppingCart className="md:text-[36px] text-[35px] bg-red-600 px-1 py-2 rounded-md text-white" />
                  <span className=" absolute top-[-10px] right-0 bg-green-600 text-white rounded-full px-[5px] text-[14px]">
                    {cart?.totalitem}
                  </span>
                </div>
              </Link>
            </div>
          </ul>

          <div className="md:mr-6 md:hidden lg:hidden xl:hidden">
            <Link to={`/cart`}>
              <div className="relative">
                <FaShoppingCart className="md:text-[36px] text-[35px] bg-red-600 px-1 py-1 rounded-md text-white" />
                <span className=" absolute top-[-10px] right-0 bg-green-600 text-white rounded-full px-[5px] text-[14px]">
                  {cart.totalitem ? cart.totalitem : 0}
                </span>
              </div>
            </Link>
          </div>
          {!show ? (
            <RiMenu3Fill
              className="md:hidden lg:hidden  xl:hidden text-[26px] font-semibold mr-2"
              onClick={() => setShow(true)}
            />
          ) : (
            <RxCross1
              className="md:hidden lg:hidden  xl:hidden text-[25px] font-semibold mr-2"
              onClick={() => setShow(false)}
            ></RxCross1>
          )}
        </nav>
      </div>

     {/* {show && <div className="absolute top-[5rem] right-3 w-48 h-40 bg-slate-400 text-black rounded-md ">
                <FaUserCircle className="text-[3rem] text-white/80 mx-auto mt-5"/>
               <h1 className="text-center py-1 first-letter:capitalize font-semibold">Name : {user.name}</h1>
               <p className="lowerCase text-center font-semibold">Email : {user.email}</p>
          </div>} */}
    </>
  );
};

export default Navbar;

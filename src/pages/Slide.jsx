
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";


const Slide = () => {
    
  const data = [
    

    {
      id: 1,
      pic: "/images/c-2.avif",
    },

    {
      id: 2,
      pic: "/images/c-3.avif",
    },

    {
      id: 3,
      pic: "/images/c-4.avif",
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return (
    
      <>
        <div className="md:mx-auto md:my-5 md:w-[90%] md:m-0 w-[80%] mx-auto md:mt-[5rem] bg-slate-200  md:bg-transparent">
       
       <Slider {...settings} >
       {data?.map((d) => {
         return (
 
           <div
             className=" shadow-lg overflow-hidden"
             key={d?.id}
           >
             <img
               src={d?.pic}
               alt="img"
               className=" mx-auto  md:p-5 md:w-[80%] bg-center md:h-[32rem]"
             />
           </div>
         );
       })}
     </Slider>
 
     </div>

      </>
   )
  
};

export default Slide;

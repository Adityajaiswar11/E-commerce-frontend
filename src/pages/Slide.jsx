import Slider from "react-slick";


const Slide = () => {
  const data = [
    {
      id: 1,
      pic: "/images/c-1.avif",
    },

    {
      id: 2,
      pic: "/images/c-2.avif",
    },

    {
      id: 3,
      pic: "/images/c-3.avif",
    },

    {
      id: 4,
      pic: "/images/c-4.avif",
    },

    {
      id: 5,
      pic: "/images/c-5.avif",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  
  return (
    <div className=" w-full mx-auto px-12 bg-orange-200">
      <Slider {...settings}>
        {data.map((d) => {
          return (

            <div
              className=" mx-auto   shadow-lg overflow-hidden mt-4  rounded-md"
              key={d.id}
            >
              <img
                src={d.pic}
                alt="img"
                className=" mx-auto h-[32rem] p-5 w-[57rem] bg-center"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slide;

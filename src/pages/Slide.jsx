import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
      pic: "https://www.panaprium.com/cdn/shop/articles/online_thrift_store_vintage_fashion_1000.jpg?crop=center&v=1638333789&width=600",
    },
    {
      id: 4,
      pic: "https://www.iese.edu/insight/wp-content/uploads/sites/3/1970/01/Fast-Fashion-estrategia-minorista.jpg",
    },
  ];

  return (
    <>
      <div className="border-b">
        <marquee direction="" className=" capitalize p-2 mt-3">
          sale sale sale ! buy now 50% off
        </marquee>
        <Carousel
          className="p-3 w-[90%] mx-auto"
          dynamicHeight={true}
          showThumbs={false}
        >
          {data?.map((d) => {
            return (
              <div className="h-[90%]" key={d?.id}>
                <img src={d?.pic} alt="img" className="" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Slide;

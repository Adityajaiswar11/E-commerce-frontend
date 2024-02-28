const Slide = () => {
  const data = [
    {
      id: 1,
      pic: "/images/c-2.avif",
    },

    // {
    //   id: 2,
    //   pic: "/images/c-3.avif",
    // },

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
      <div className="w-[90%] mx-auto bg-red-200 mt-10 h-screen">
        <img src={data[1].pic} alt="" />
      </div>
    </>
  );
};

export default Slide;

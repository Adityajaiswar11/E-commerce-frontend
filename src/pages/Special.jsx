

const Special = () => {

  function goOut () {

  }


  
   const productName = [

          {
            id:2334,
            name: "Trending Shirts",
            rate: 4.5,
            img:"/images/img-2.jpeg",
            price: "60$"
          },
          {
            id:233,
            name: "Black &  Red t-shirt",
            rate: 3.0,
            img:"/images/img-3.webp",
            price: "30$"
          },
          {
            id:23,
            name: "Plan T-shirt",
            rate: 4.0,
            img:"/images/img-4.avif",
            price: "40$"
          },
          {
            id:23443,
            name: "Drop-down T-shirt",
            rate: 4.3,
            img:"/images/img-5.webp",
            price: "45$"
        
          }

   ]
     
  return (
    <>
     {
        productName.map((p)=>{
              return(
                // eslint-disable-next-line react/jsx-key
                <div className="box m-10 bg--500 rounded-lg bg-pink-200 shadow-md" key={p.id}>
                <div>
                     <img src={p.img} alt="" className='w-full rounded-md h-56 hover:scale-105 cursor-pointer p-1 duration-300 ease-linear' />
                </div>
                 
                 <div className="pt-1">
                      <h1 className="pl-5 text-center text-lg p-2 font-bold">{p.name}</h1>
                      <h1 className="pl-5 text-sm text-red-500">Rating - <span className=" font-bold">{p.rate}</span></h1>
                 </div>
            
                 <div className=" flex justify-around items-center gap-4 pb-2">
                     <h2>Price - <span className="">{p.price}</span></h2>
                    
                     <button className="bg-orange-500 rounded-lg  px-4 py-1 uppercase text-md cursor-pointer
                      duration-300 ease-linear border-2 border-gray-600 text-sm text-white font-bold" onClick={goOut}>add</button>
                      
                 </div>
             
            
            </div>
              )
        })
     }
    </>
  )
}

export default Special
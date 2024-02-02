
export const getDataFromLocalStorage = () =>{
         
           // eslint-disable-next-line no-unused-vars
           return new Promise((res,rej)=>{
                    let getCart = window.localStorage.getItem("cart");
                    res(getCart)
                   
           })
}

 export const products = [

          {
            id:123,
            name: "Trending Shirts",
            rate: 4.5,
            img:"/images/img-2.jpeg",
            price: "60"
          },
          {
            id:122,
            name: "Black &  Red t-shirt",
            rate: 3.0,
            img:"/images/img-3.webp",
            price: "30"
          },
          {
            id:121,
            name: "Plan T-shirt",
            rate: 4.0,
            img:"/images/img-4.avif",
            price: "40"
          },
          {
            id:124,
            name: "Drop-down T-shirt",
            rate: 4.3,
            img:"/images/img-5.webp",
            price: "45"
        
          }
          ,
          {
            id:125,
            name: "Drop-down T-shirt",
            rate: 4.3,
            img:"/images/img-5.webp",
            price: "45"
        
          } ,{
            id:146,
            name: "Drop-down T-shirt",
            rate: 4.3,
            img:"/images/img-5.webp",
            price: "45"
        
          }, {
            id:101,
            name: "Drop-down T-shirt",
            rate: 4.3,
            img:"/images/img-5.webp",
            price: "45"
        
          },
          {
            id:107,
            name: "Drop-down T-shirt",
            rate: 4.3,
            img:"/images/img-5.webp",
            price: "45"
        
          }

   ];

/* eslint-disable react/prop-types */


const Cartpage = ({data}) => {
  return (
   <div>
          <img src={data?.image} alt="" className="w-[350px] h-[350px]" />
          <h1>{data?.title}</h1>
   </div>
  )
}

export default Cartpage
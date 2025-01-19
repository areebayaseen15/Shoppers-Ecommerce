import {GoRocket} from "react-icons/go";
import {FaUndoAlt} from "react-icons/fa";
import {FaWallet} from "react-icons/fa";
import {PiChats }from "react-icons/pi";

const data =[
    {
        title:"Free delivery",
        description:"When ordering above $500",
        icon:<GoRocket/>
    },

    {
        title:"90 days return",
        description:"If goods have problem",
        icon:<FaUndoAlt/>
    },
    {
        title:"Success payment",
        description:"100% secure payment",
        icon:<FaWallet/>
    },

    {
        title:"24/7 Support",
        description:"Dedicated Support",
        icon:<PiChats/>
    },

]

const Facilities = () => {
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
     {data?.map((item)=>(
        <div key={item?.title}
        className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-3xl text-lightOrange">{item?.icon}</span>
         <div className="text-center sm:text-left">
            <h2 className="uppercase font-bold">
                  {item?.title}
            </h2>
            <p className="text-sm text-lightText">{item?.description}</p>
         </div>
        </div>
     ))}
    </div>
  )
}

export default Facilities

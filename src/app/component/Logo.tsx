import {twMerge} from "tailwind-merge";
import Link from "next/link"

const Logo = ({className}:{className?:string}) => {
  return (
    <Link  href={"/"} className={twMerge("text-2xl text-accent hover:text-darkOrange font-bold uppercase hoverEffect relative  group overflow-hidden" , className

    )}>
          Shoppers
          <span className='absolute left-0 bottom-0 w-full h-px bg-darkOrange -translate-x-[105%] group-hover:translate-x-0 hoverEffect transition-transform'>
            </span>
      </Link>
  );
};

export default Logo

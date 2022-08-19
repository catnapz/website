import Image from 'next/image'
import loader from "../image-loader";
import logo from "../public/logo.png";

export const Footer = () => {
  return (
    <div className='bg-[#23ACEC]'>
        footer
        <Image
          loader={loader}
          src={logo}
          alt="catnaps logo"
          height={100}
          width={100}
          placeholder="blur"                  
        />
    </div>
  )
}
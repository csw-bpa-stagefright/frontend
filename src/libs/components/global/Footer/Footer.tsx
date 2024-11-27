import React from 'react'
import Image from "next/image";
import Link from "next/link"
import cinzel from '@/~/libs/fonts/cinzel';

// Component Imports 
import { FooterLink } from './components/FooterLink';

const Footer = () => {
  return (
    <>
      <section className="px-5 py-6 bg-neutral-950 border-t-[1px] border-t-neutral-300">
        <div className="w-full mr-auto gap-7 ml-auto flex-col md:flex-row py-12 h-full max-w-[1200px] bg-neutral-950 text-white flex justify-between items-center relative">
          <div className="flex w-full flex-col sm:max-w-[50%] gap-3 items-start justify-center">
            <Link href="/" className="flex items-center justify-center gap-4 cursor-pointer w-full md:w-fit">
              <div className="w-full h-[40px] relative flex items-center justify-center gap-3">
                <Image
                  src="/images/discy-wiscy.svg"
                  alt="bob"
                  width={30}
                  height={30}
                  className='invert'
                />
                <h1 className={`text-[1.95rem] group-hover:opacity-100 opacity-70 font-medium ${cinzel.className} transition-all text-center md:text-left duration-100`}>Stage Fright</h1>
              </div>
            </Link>
            <p className="text-[0.92rem] text-neutral-500 w-full text-center md:text-left">This is some example text about StageFright.</p>
          </div>

          <div className="flex items-center sm:items-start gap-14 md:gap-20 lg:gap-5 w-full flex-col sm:flex-row  lg:max-w-[45%] justify-around mt-8 md:mt-0 md:justify-between">
            <div className="flex flex-col items-center md:items-start justify-center gap-3">
              <h1 className="text-[1.45rem] font-semibold opacity-90">Navigate</h1>
              <FooterLink linkHref="" linkText="Home" />
              <FooterLink linkHref="signup" linkText="Signup" />
              <FooterLink linkHref="login" linkText="Login" />
            </div>

            <div className="flex flex-col items-center md:items-start justify-center gap-3">
              <h1 className="text-[1.45rem] font-semibold opacity-90">Company</h1>
              <FooterLink linkHref="about" linkText="About" />
              <FooterLink linkHref="/#contact" linkText="Contact" />
            </div>

            <div className="flex flex-col items-center md:items-start justify-center gap-3">
              <h1 className="text-[1.45rem] font-semibold opacity-90">Store</h1>
              <FooterLink linkHref="concerts" linkText="Concerts" />
              <FooterLink linkHref="merchandise" linkText="Merchandise" />
              <FooterLink linkHref="releases" linkText="Releases" />
            </div>
          </div>

        </div>
      </section>
      <div className="w-full px-5 py-4 flex items-center justify-center bg-neutral-950 text-neutral-400">
        © StageFright 2023-2024
      </div>
    </>
  )
}

export default Footer;

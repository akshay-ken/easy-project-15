import fePic from "../assets/images/avatar-michelle.jpg";
import { RiShareForwardLine } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";

export function FooterSh({ toShare, shareClick }) {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-x-6 mt-8 relative">
        <img src={fePic} className="size-12 rounded-full" alt="" />
        <div className=" ">
          <p className="font-bold text-base text-Very-Dark-Grayish-Blue">
            Michelle Appleton
          </p>
          <p className="text-sm text-Desaturated-Dark-Blue">28 Jun 2020</p>
        </div>
        <RiShareForwardLine
          className="ml-auto size-6 fill-Desaturated-Dark-Blue rounded-full active:bg-Desaturated-Dark-Blue active:fill-white"
          onClick={shareClick}
        />

        {toShare ? (
          <div className="flex flex-col items-center absolute top-10 left-47 md:left-73 -mt-4">
            {/* Notch */}
            <IoMdArrowDropup className="size-14 fill-Very-Dark-Grayish-Blue" />
            {/* Bubble box */}
            <div className="bg-Very-Dark-Grayish-Blue px-6 py-3 rounded-xl shadow-lg flex items-center gap-4 text-sm font-bold tracking-widest -mt-6">
              SHARE
              <a href="#" className="hover:text-Soft-Red transition">
                <CiFacebook className="size-8 fill-white" />
              </a>
              <a href="#" className="hover:text-Soft-Red transition">
                <CiTwitter className="size-8 fill-white" />
              </a>
              <a href="#" className="hover:text-Soft-Red transition">
                <FaPinterestP className="size-8 fill-white" />
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

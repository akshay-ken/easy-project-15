import fePic from "../assets/images/avatar-michelle.jpg";
import { RiShareForwardLine } from "react-icons/ri";

export function FooterSh() {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-x-6 mt-8">
        <img src={fePic} className="size-12 rounded-full" alt="" />
        <div className=" ">
          <p className="font-bold text-base text-Very-Dark-Grayish-Blue">
            Michelle Appleton
          </p>
          <p className="text-sm text-Desaturated-Dark-Blue">28 Jun 2020</p>
        </div>
        <RiShareForwardLine className="ml-auto size-6 fill-Desaturated-Dark-Blue" />
      </div>
    </>
  );
}

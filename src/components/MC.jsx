import { useState } from "react";
import bgPicture from "../assets/images/drawers.jpg";
import { FooterSh } from "./FooterSh";

export function MC() {
  const [share, setShare] = useState(false);

  function handleShare() {
    setShare((currentShare) => !currentShare);
  }

  return (
    <>
      <main className="w-full my-28 md:flex">
        <div className="max-w-sm md:max-w-3xl bg-white mx-auto md:flex md:flex-row md:rounded-xl rounded-3xl">
          <div className="bg-[url('../src/assets/images/drawers.jpg')] bg-cover bg-center md:bg-left  w-full h-56 rounded-t-3xl md:rounded-l-xl md:rounded-tr-none md:h-full"></div>
          <div className="p-8 md:p-10 font-one ">
            <p className="font-bold text-Very-Dark-Grayish-Blue text-xl">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </p>
            <p className="font-medium text-Desaturated-Dark-Blue my-4 text-base/5">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
            <FooterSh toShare={share} shareClick={handleShare} />
          </div>
        </div>
      </main>
    </>
  );
}

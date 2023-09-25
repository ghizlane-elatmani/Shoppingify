import React from "react";

const Card = () => {
  return (
    <div className="px-10 py-10">
      <div className="w-full bg-dark-red rounded-xl px-2 py-4 flex gap-5 items-center">
        <div className="w-20 h-full relative">
          <img src="/source.svg" className="w-full absolute top-[-85px]" />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="font-bold text-base text-white mb-4 max-w-[15ch]">
            Didn’t find what you need?
          </p>
          <button className="btn-add-white max-w-fit">Add item</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

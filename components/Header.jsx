import { MdSearch } from "react-icons/md";

export const Header = () => {
  return (
    <div className="flex flex-wrap justify-between items-start mb-10">
      <h1 className="font-medium text-lg sm:text-2xl max-w-[24rem]">
        <span className="text-primary">Shoppingify</span> allows you take your
        shopping list wherever you got
      </h1>

      <div className="flex items-center gap-2 bg-white border border-stone-100 rounded-lg overflow-hidden py-1 px-2 shadow-sm">
        <MdSearch size={26} />
        <input
          type="text"
          placeholder="search item"
          className="bg-transparent p-1"
        />
      </div>
    </div>
  );
};

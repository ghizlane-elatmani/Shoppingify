import React from "react";

const Form = ({ shoppingList }) => {
  return (
    <div className="bg-white flex items-center justify-center min-h-[130px] relative">
      <form
        className={`${
          shoppingList.length > 0 ? "border-primary" : "border-stone-400"
        } border-2 rounded-lg overflow-hidden flex gap-1`}
      >
        {shoppingList.length > 0 ? (
          <input type="text" placeholder="enter a name" className="py-3 px-2" />
        ) : (
          <input
            type="text"
            placeholder="enter a name"
            className="py-3 px-2"
            disabled
          />
        )}

        {shoppingList.length > 0 ? (
          <button
            type="submit"
            className="bg-primary text-white text-sm font-bold rounded-bl-lg rounded-tl-lg px-5"
          >
            Save
          </button>
        ) : (
          <button
            type="submit"
            className="bg-stone-400 cursor-not-allowed text-white text-sm font-bold rounded-bl-lg rounded-tl-lg px-5"
            disabled
          >
            Save
          </button>
        )}
      </form>

      {shoppingList.length > 0 ? (
        ""
      ) : (
        <img
          src="/undraw_shopping_app_flsj 1.svg"
          className="absolute top-[-150px] sm:h-[150px]"
        />
      )}
    </div>
  );
};

export default Form;

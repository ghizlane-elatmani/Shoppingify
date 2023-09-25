import { MdAdd } from "react-icons/md";

const ItemsList = () => {
  const fruits = [
    "Avocado",
    "Banana",
    "Bunch of carrot 5pcs",
    "Chicken 1kg",
    "Pre-cooked corn 450g",
    "Mandarin Nadorcott",
    "Piele De Sapo Melon",
    "Watermelon",
  ];

  return (
    <div>
      {/* GET CATEGORIES AND LOOP */}
      <h2 className="heading-2">Fruit and vegetables</h2>

      {/* GET PRODUCTS AND LOOP */}
      <div className="flex flex-wrap gap-5">
        {fruits.map((fruit) => (
          <button type="button" className="btn-add">
            <p className="max-w-[14ch] text-sm sm:text-md">{fruit}</p>
            <MdAdd size={24} className="text-stone-500" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;

"use client";

import { useState } from "react";
import Card from "./shoppingList/Card";
import List from "./shoppingList/List";
import Form from "./shoppingList/Form";

const Drawer = () => {
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <aside className="hidden sm:flex sm:min-w-[350px] min-h-screen bg-drawer flex-col justify-between">
      <Card />

      {shoppingList.length > 0 ? (
        <List shoppingList={shoppingList} setShoppingList={setShoppingList} />
      ) : (
        <div className="text-center font-bold">
          <p>No items</p>
        </div>
      )}

      <Form shoppingList={shoppingList} />
    </aside>
  );
};

export default Drawer;

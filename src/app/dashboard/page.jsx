import { ListCheck, ListOrdered, ListTreeIcon, PlusSquare } from "lucide-react";
import React from "react";
import AddProduct from "../../components/AddProduct";

function page() {
  return <div className="md:grid md:grid-cols-8 h-fit flex w-full">
    <div className="md:col-span-2 md:flex flex-col hidden h-full border-r-1 gap-6">
        <div className="flex items-center gap-2 px-5"><PlusSquare /> <span className="md:block hidden">Add Product </span></div>
        <div className="flex gap-2 items-center px-5"><ListOrdered /> <span className="md:block hidden"> Product List </span></div>
        <div className="flex gap-2 items-center px-5"><ListCheck /> <span className="md:block hidden">Orders </span></div>
    </div>
    <div className="md:col-span-6 md:px-8 px-2">
        <AddProduct />
    </div>
  </div>;
}

export default page;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UploadCloudIcon } from "lucide-react";
import React from "react";

function AddProduct() {
  return (
    <div className="w-full lg:w-[50%] flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="font-bold">Product Image</p>
        <div className="md:grid-cols-4 grid-cols-2 grid gap-2">
          <Input type="file" className="hidden" id="upload" />
          <label
            htmlFor="upload"
            className="h-28 flex flex-col bg-gray-200 items-center justify-center"
          >
            <UploadCloudIcon /> Upload
          </label>
          <label
            htmlFor="upload"
            className="h-28 flex flex-col bg-gray-200 items-center justify-center"
          >
            <UploadCloudIcon /> Upload
          </label>
          <label
            htmlFor="upload"
            className="h-28 flex flex-col bg-gray-200 items-center justify-center"
          >
            <UploadCloudIcon /> Upload
          </label>
          <label
            htmlFor="upload"
            className="h-28 flex flex-col bg-gray-200 items-center justify-center"
          >
            <UploadCloudIcon /> Upload
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-bold">Product Name</p>
        <Input placeholder="Type here..." className="text-sm" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-bold">Product Description</p>
        <textarea
          name=""
          id=""
          placeholder="type here..."
          className="border-1 p-3 h-32 text-sm rounded-md shadow-sm w-full"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 justify-center items-center">
        <div className="flex flex-col gap-2">
          <p className="">Category</p>
          <select name="" id="" className="shadow-sm px-2 py-2">
            <option value="earphone">Earphone</option>
            <option value="earphone">Headphone</option>
            <option value="earphone">Laptop</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p className="">Price</p>
          <Input placeholder="Insert price..." />
        </div>
        <div className="flex flex-col gap-2">
          <p className="">Category</p>
          <select name="" id="" className="shadow-sm px-2 py-2">
            <option value="earphone">Earphone</option>
            <option value="earphone">Headphone</option>
            <option value="earphone">Laptop</option>
          </select>
        </div>
      </div>

      <Button className='cursor-pointer'> Add Product</Button>
    </div>
  );
}

export default AddProduct;
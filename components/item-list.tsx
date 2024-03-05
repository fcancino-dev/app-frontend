import React from "react";
import { Check } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

const ItemList = ({children}: Props) => {
  return (
    <li className="flex gap-4 items-center">
      <span className="bg-red-500 rounded-full w-5 h-5 grid place-content-center">
        <Check className="stroke-white w-4 h-4" />
      </span>
      <span> {children} </span>
    </li>
  );
};

export default ItemList;

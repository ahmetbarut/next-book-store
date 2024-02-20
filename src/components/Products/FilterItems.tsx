"use client";

import FilterItem from "@/components/Products/FilterItem";
import {useState} from "react";

export default function FilterItems() {
  const [showFilter, setShowFilter] = useState(false);


  return (
      <div className="md:w-2/12 flex flex-col">
          <div className="md:hidden flex">
              <button className="p-1 w-full bg-primary-500 text-white"
                        onClick={() => setShowFilter(!showFilter)}
              >
                  Filtrele
              </button>
          </div>
          <div className="w-full h-full flex flex-col">
              <div className={`md:flex flex-col items-center ${!showFilter ? 'hidden' : ''}`}>
                  <FilterItem/>
                  <FilterItem/>
                  <FilterItem/>
              </div>
          </div>
      </div>
  )
      ;
}
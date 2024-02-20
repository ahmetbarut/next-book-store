"use client";

import FilterToggle from "@/components/Products/FilterToggle";
import {useState} from "react";

export default function FilterItem() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full flex gap-3 flex-col bg-white rounded-full mt-4">
            <div className="flex justify-between border-b">
                <FilterToggle title="Fiyat" isOpen={open} setOpen={setOpen}/>
            </div>
            <div className={`items-center gap-2 justify-between ${open ? 'flex flex-col' : 'hidden'}`}>
                <div className="w-full flex gap-4">
                    <div className="w-1/2 flex gap-2 items-center relative">
                        <input type="text" className="border pr-10 w-full pl-2 h-10" placeholder="0"/>
                        <span className="absolute right-4">TL</span>
                    </div>
                    <div className="w-1/2 flex gap-2 items-center relative">
                        <input type="text" className="border pr-10 w-full pl-2 h-10" placeholder="0"/>
                        <span className="absolute right-4">
                            TL
                        </span>
                    </div>
                </div>
                <button className="w-full p-2 bg-blue-800 text-white">
                    Filtrele
                </button>
            </div>
        </div>
    );
}
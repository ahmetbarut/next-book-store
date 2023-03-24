import Image from "next/image"
import ArrowRightIcon from "../Icons/ArrowRightIcon"
import SliderItemProp from "@/app/types/SliderItem"

export default function SliderItem({ className, slider, active, index }: { className?: string, slider: SliderItemProp, active: boolean, index: number }) {
    return (
        <div className={className}>
            <div className="w-1/2 p-4 flex flex-col">
                <h2 className="text-6xl font-semibold text-primary">
                    {slider.title}
                </h2>
                <p className="text-primary font-normal mt-4 text-xl tracking-widest">
                {slider.description}
                </p>
                <button className="bg-transparent flex justify-center items-center w-1/3 h-12 uppercase border border-primary text-primary px-4 py-2 rounded-md mt-4">
                    <span>
                        Read More
                    </span> <ArrowRightIcon className="w-4 h-4 ml-1" />
                </button>
            </div>
            <div className="w-1/2 p-4">
                <img src={slider.image} alt={slider.title} />
            </div>
        </div>
    )
}
import CustomPagingSlider from "@/components/Slider/CustomPagingSlider";
import {Divider} from "@nextui-org/react";
import {StarIcon} from "@heroicons/react/16/solid";
import {WhatsappIcon} from "@/components/Icons/WhatsappIcon";
import ProductDetailTab from "@/components/Tab/ProductDetailTab";

export default function Page({params}:{params: {slug: string}}){
    return <div className="container mx-auto">
        <div className={"min-h-screen flex flex-col"}>
            <div className="w-full flex lg:flex-row flex-col lg:gap-2">
                <div className="h-96 lg:w-1/3 w-full">
                    <CustomPagingSlider sliders={[
                        "https://via.placeholder.com/1920x1080",
                        "https://via.placeholder.com/1920x1080",
                        "https://via.placeholder.com/1920x1080",
                        "https://via.placeholder.com/1920x1080",
                    ]}/>
                </div>

                <div className="lg:w-3/5 w-full">
                    <div className="w-full h-full">
                        <div className="w-full h-full p-5">
                            <div className="flex flex-col gap-4 border p-5 justify-between">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-gray-800 text-2xl">
                                        Çizgi Baskılı Önden Düğmeli Uzun Kollu Kadife Pijama
                                    </h2>
                                    <h3 className="text-gray-500 font-semibold text-sm italic">Kategori</h3>
                                </div>
                                <div className="flex w-1/3 gap-2">
                                    <span className="text-sm text-gray-400">4.5</span>
                                    <div className="flex gap-0 items-center">
                                        <StarIcon className="h-4 w-4 text-yellow-500"/>
                                        <StarIcon className="h-4 w-4 text-yellow-500"/>
                                        <StarIcon className="h-4 w-4 text-yellow-500"/>
                                        <StarIcon className="h-4 w-4 text-yellow-500"/>
                                        <StarIcon className="h-4 w-4 text-yellow-500"/>
                                    </div>
                                    <span className="text-sm text-gray-400">150+ Yorum</span>
                                </div>
                                <div className="flex h-14 gap-4 p-2 w-full items-center">
                                <span className="text-gray-800 text-sm">
                                    <s>395 TL</s>
                                </span>
                                    <Divider orientation="vertical"/>
                                    <span className="text-green-600 text-xl font-semibold">
                                    290 TL
                                </span>
                                </div>
                                <div className="flex flex-col gap-3 lg:w-1/2 w-full">
                                    <button className="w-full p-2 bg-primary-500 text-white">
                                        Sepete Ekle
                                    </button>
                                    <button
                                        className="w-full flex justify-center p-2 items-center border bg-white text-black">
                                        <WhatsappIcon/><span>Whatsapp İle Sipariş Ver</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <ProductDetailTab/>
            </div>
        </div>
    </div>;
}
import Image from "next/image";

export default function ProductItem(
    { image }: { image: string },
) {
    return (
        <div className="flex flex-col justify-between items-center hover:cursor-pointer group relative">
            <div className="rounded-md">
                <div className="shadow-lg p-4">
                    <Image src={image} alt="img" width={1000} height={1000} />
                </div>
                <div className="">
                    <h1 className="text-primary text-xl font-medium">
                        Lorem Ipsum Ve Yazılım
                    </h1>
                    <h2 className="text-gray-500/50 text-sm">
                        Yazar Adı
                    </h2>
                    <h2 className="font-bold text-lg text-primary-500/100">
                        $ 100
                    </h2>
                </div>
            </div>
            <button className="uppercase absolute group-hover:block font-xl bg-primary-500/80 hover:bg-primary-500 text-white h-12 w-10/12 group-hover:bottom-[40%] bottom-0
            group-hover:opacity-100 opacity-0 rounded-md hover:transition duration-500
            ">
                Add To Cart
            </button>
        </div>
    );
}

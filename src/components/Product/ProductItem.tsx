import Image from "next/image";
import Link from "next/link";

export default function ProductItem(
    { image }: { image: string },
) {
    return (
        <div className="flex flex-col gap-5 justify-between items-center hover:cursor-pointer group relative">
            <Link href="/product/test" className="rounded-md flex gap-5 flex-col">
                <div className="shadow-lg p-4">
                    <Image src={image} alt="img" width={1000} height={1000} />
                </div>
                <div className="md:w-full flex flex-col items-center justify-center">
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
            </Link>
            <button className="uppercase md:absolute group-hover:block font-xl bg-primary-500 md:bg-primary-500/80 hover:bg-primary-500 text-white md:h-12 h-8 p-1 md:p-0 text-xs md:w-10/12 w-2/3 group-hover:bottom-[40%] bottom-0
            group-hover:opacity-100 md:opacity-0 rounded-md hover:transition duration-500
            ">
                Add To Cart
            </button>
        </div>
    );
}

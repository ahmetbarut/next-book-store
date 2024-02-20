import Image from "next/image";

export default function Newsletter() {
    return (
        <div className="bg-white">
            <div className="mt-12 w-full mx-auto">
                <div className="flex md:flex-row flex-col gap-6 md:gap-0 p-6 justify-between items-center max-h bg-gradient-to-b to-[#FCECEC] from-[#F6FFFE]">
                    <div className="md:w-1/3 w-full flex md:justify-center md:items-center flex-col gap-3 md:m-6">
                        <h1 className="md:text-3xl text-lg font-bold text-primary-800">
                            Access, Read, Practice & Engage
                            with Digital Content (eBook)
                        </h1>
                        <p className="md:text-lg text-primary-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="flex flex-row items-center mt-4 w-full">
                            <input type="text" className="w-full h-12 border border-gray-300 rounded-md rounded-r-none p-2" placeholder="Enter your email address" />
                            <button className="bg-primary-500 h-12 rounded-r-md -mr-5 text-white text-lg font-semibold hover:bg-primary-500 p-2 hover:transition duration-500">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <Image width={1000} height={1000} src="/images/image-newsletter.jpg" alt="newsletter" />
                    </div>
                </div>
            </div>
        </div>
    )
}
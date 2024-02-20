import Image from "next/image";
import Logo from "../Head/Middle/Logo";
import FacebookIcon from "../Icons/FacebookIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import TwitterIcon from "../Icons/TwitterIcon";

export default function Footer() {
    return (
        <footer className="bg-white mx-auto divide-y mb-4 flex justify-center">
            <div className="w-11/12">
                <div className="flex md:flex-row flex-col justify-between">
                    <div className="md:w-1/4 w-full">
                        <div className="flex flex-col items-center mt-4 justify-center">
                            <Logo />
                            <p className="mt-2 text-gray-500 font-light text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea
                            </p>
                            <div className="flex md:justify-between gap-5 justify-center md:gap-0 mt-5">
                                <div className="bg-primary-500 w-9 h-9 rounded-full p-2 ">
                                    <FacebookIcon bgFill="white" className="" height="20" width="20" />
                                </div>
                                <div className="bg-primary-500 w-9 h-9 rounded-full p-2 ">
                                    <LinkedinIcon bgFill="white" className="" height="20" width="20" />
                                </div>
                                <div className="bg-primary-500 w-9 h-9 rounded-full p-2 ">
                                    <TwitterIcon bgFill="white" className="" height="20" width="20" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-auto md:mt-0 mt-5 w-full">
                        <div className="flex flex-col md:gap-0 gap-5">
                            <h1 className="text-primary-500 md:text-base text-4xl text-center md:text-left font-semibold uppercase">
                                BrandBook
                            </h1>
                            <div className="flex flex-col w-full items-center justify-center">
                                <a href="#" className="text-gray-500 uppercase font-light mt-2">
                                    Home
                                </a>
                                <a href="#" className="text-gray-500 uppercase font-light mt-2">
                                    About Us
                                </a>
                                <a href="#" className="text-gray-500 uppercase font-light mt-2">
                                    Books
                                </a>
                                <a href="#" className="text-gray-500 uppercase font-light mt-2">
                                    Ebooks
                                </a>
                                <a href="#" className="text-gray-500 uppercase font-light mt-2">
                                    New Relase
                                </a>
                                <a href="#" className="text-gray-500 uppercase font-light mt-2">
                                    Contact us
                                </a>
                                <a href="#" className="text-gray-500 uppercase font-light mt-2">
                                    blog
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <div className="flex flex-col">
                            <h1 className="text-primary-500 md:text-base text-center md:text-left text-2xl font-semibold uppercase">
                                Son Haberler
                            </h1>
                            <div className="md:flex md:flex-col grid grid-cols-2 mt-2 gap-2">
                                <div className="flex md:flex-row flex-col gap-1">
                                    <div className="md:w-1/3 w-full">
                                        <Image src="/images/article.jpg" width="100" className="rounded"
                                               height="100" alt="a"/>
                                    </div>
                                    <div className="md:w-2/3 w-full">
                                        <a href="#"
                                           className="text-gray-500 uppercase font-light mt-2 flex flex-col justify-between h-full">
                                            <h1 className="md:text-xs font-medium text-primary-500">
                                                Lorem ipsum dolor sit amet
                                            </h1>
                                            <p className="text-[10px] mb-2">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-1">
                                    <div className="md:w-1/3 w-full">
                                        <Image src="/images/article.jpg" width="100" className="rounded"
                                               height="100" alt="a"/>
                                    </div>
                                    <div className="md:w-2/3 w-full">
                                        <a href="#"
                                           className="text-gray-500 uppercase font-light mt-2 flex flex-col justify-between h-full">
                                            <h1 className="md:text-xs font-medium text-primary-500">
                                                Lorem ipsum dolor sit amet
                                            </h1>
                                            <p className="text-[10px] mb-2">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

};

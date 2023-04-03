import Image from "next/image";
import Logo from "../Head/Middle/Logo";
import FacebookIcon from "../Icons/FacebookIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import TwitterIcon from "../Icons/TwitterIcon";

export default function Footer() {
    return (
        <footer className="bg-white mx-auto divide-y mb-4 flex justify-center">
            <div className="w-11/12">
                <div className="flex justify-between">
                    <div className="w-1/4">
                        <div className="flex flex-col">
                            <Logo />
                            <p className="mt-2 text-gray-500 font-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea
                            </p>
                            <div className="flex justify-between mt-5">
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
                    <div className="w-auto">
                        <div className="flex flex-col">
                            <h1 className="text-primary-500 font-semibold uppercase">
                                Company
                            </h1>
                            <div className="flex flex-col">
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
                    <div className="w-1/3">
                        <div className="flex flex-col">
                            <h1 className="text-primary-500 font-semibold uppercase">
                                Latest News
                            </h1>
                            <div className="flex flex-col mt-2 gap-2">
                                <div className="flex flex-row gap-1">
                                    <div className="w-1/3">
                                        <Image src="/images/article.jpg" width="100" className="rounded" height="100" alt="a" />
                                    </div>
                                    <div className="w-2/3">
                                        <a href="#" className="text-gray-500 uppercase font-light mt-2 flex flex-col justify-between h-full">
                                            <h1 className="text-xs font-medium text-primary-500">
                                                Lorem ipsum dolor sit amet
                                            </h1>
                                            <p className="text-[10px] mb-2">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <div className="w-1/3">
                                        <Image src="/images/article.jpg" width="100" className="rounded" height="100" alt="a" />
                                    </div>
                                    <div className="w-2/3">
                                        <a href="#" className="text-gray-500 uppercase font-light mt-2 flex flex-col justify-between h-full">
                                            <h1 className="text-xs font-medium text-primary-500">
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

export default function Menu() {
    return(
        <nav
            className="flex flex-row md:divide-x gap-4 md:gap-0 items-center overflow-y-scroll justify-center">
            {/* Only this link active */}
            <a href="" className="md:uppercase md:w-32 w-full font-bold text-red-500 text-center text-base">
                Home
            </a>
            <a href=""
               className="md:uppercase md:w-32 w-full font-normal text-left md:text-center text-xs md:text-base">
                About US
            </a>
            <a href=""
               className="md:uppercase md:w-32 w-full font-normal text-left md:text-center text-xs md:text-base">
                books
            </a>
            <a href=""
               className="md:uppercase md:w-32 w-full font-normal text-left md:text-center text-xs md:text-base">
                new relase
            </a>
            <a href=""
               className="md:uppercase md:w-32 w-full font-normal text-left md:text-center text-xs md:text-base">
                contact us
            </a>
            <a href=""
               className="md:uppercase md:w-32 w-full font-normal text-left md:text-center text-xs md:text-base">
                blog
            </a>
            <a href=""
               className="md:uppercase md:w-32 w-full font-normal text-left md:text-center text-xs md:text-base">
                blog
            </a>
            <a href=""
               className="md:uppercase md:w-32 w-full font-normal text-left md:text-center text-xs md:text-base">
                blog
            </a>
        </nav>
    )
}
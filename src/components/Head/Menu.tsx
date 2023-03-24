export default function Menu() {
    return(
        <nav className="flex divide-x items-center justify-center">
            {/* Only this link active */}
            <a href="" className="uppercase w-32 font-bold text-red-500 text-center text-base">
                Home
            </a>
            <a href="" className="uppercase w-32 font-normal text-center text-base">
                About US
            </a>
            <a href="" className="uppercase w-32 font-normal text-center text-base">
                books
            </a>
            <a href="" className="uppercase w-32 font-normal text-center text-base">
                new relase
            </a>
            <a href="" className="uppercase w-32 font-normal text-center text-base">
                contact us
            </a>
            <a href="" className="uppercase w-32 font-normal text-center text-base">
                blog
            </a>
        </nav>
    )
}
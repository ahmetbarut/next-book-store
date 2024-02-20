import Links from "./Links";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

export default function MiddleHeader() {
    return (
        <div className="flex flex-col md:gap-0 gap-4 md:flex-row md:mx-auto items-center md:justify-between">
           <Logo className="md:flex hidden items-center"/>
           <SearchInput className="md:w-1/2 w-full"/>
           <Links className="md:w-1/3 w-full flex justify-evenly divide-x"/>
        </div>
    );
}
import Links from "./Links";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

export default function MiddleHeader() {
    return (
        <div className="flex mx-auto items-center justify-between">
           <Logo className="flex items-center"/>
           <SearchInput className="w-1/2"/>
           <Links className="w-1/3 flex justify-evenly divide-x"/>
        </div>
    );
}
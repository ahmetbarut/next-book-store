import SearchIcon from "@/components/Icons/SearchIcon";

export default function SearchInput({ className }: { className?: string }) {
    return (
        <div className={className + ' relative'}>
            <input
                type="text"
                placeholder="Search books"
                className="rounded-full w-full pl-5 h-10 bg-gray-100 text-gray-800"
            />
            <SearchIcon className="absolute top-2 right-4 w-5 h-5 z-40 text-black" />
        </div>
    );
}
export default function Logo({ className }: { className?: string }) {
    return (
        <div className={className}>
            <div className="w-16 h-16 rounded-full bg-gray-400"></div>
            {/* <img src="/logo.png" alt="logo" className="h-8 w-8" />
            <h1 className="text-white font-bold text-xl ml-2">Logo</h1> */}
        </div>
    );
}
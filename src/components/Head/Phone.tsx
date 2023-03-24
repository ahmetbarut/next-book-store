import PhoneIcon from "@/components/Icons/PhoneIcon";

export default function Phone() {
    return (
        <div className="flex text-white items-center justiy-between font-semibold text-sm">
            <PhoneIcon className="h-4 w-4 text-white mr-2" />+7 (999) 999-99-99
        </div>
    );
}
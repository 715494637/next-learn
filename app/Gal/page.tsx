
import GalDropdown from "@/components/ui/GalDropdown";
import Galgame from "@/components/ui/Galgame";


export default function page() {
    return (

        <div className="w-full h-full flex flex-row bg-[url(/back.png)] " >
            <div className="grid content-between bg-opacity-75 bg-gray-50/5 hover:bg-opacity-10 py-4 pb-12 border-r border-[#313131] z-10  ">
                <GalDropdown />
            </div>
            <div className="w-[80%] h-full mx-auto p-10">
                <div className="flex items-center justify-center px-2">
                    <Galgame />
                </div>
            </div>


        </div>

    )
}

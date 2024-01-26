

import GalBottonBar from "@/components/ui/GalBottonBar";
import Galgame from "@/components/ui/Galgame";


export default function page() {
    return (
        <div className="w-full  h-full   fixed  bg-[url(/back.png)]  " >
            <div className="flex items-center justify-center px-2 h-[75%]">
                    <Galgame />
            </div>
            <div className=" w-full h-[25%]  grid pt-4 px-12 content-end justify-items-center py-3 " style={{ backgroundImage: 'linear-gradient(to top, #2265b4, transparent)' }}>
                <GalBottonBar />
            </div>
        </div>

    )
}

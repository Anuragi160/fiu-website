import Aside from "./aside";
import Hero from "./hero";

export default function Body(){
    return (
        <>
        <div className="flex w-[80%] mx-auto">
            <div> <Hero/> </div>
            <div> <Aside/> </div>
        </div>
        
        
        </>
    )
}
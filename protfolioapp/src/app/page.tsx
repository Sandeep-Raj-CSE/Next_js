import Featuredcourses from "@/components/Featuredcourses";
import Herosection from "../components/ui/herosection";


export default function Home() {
  return (
  

    <main className="min-h-screen bg-black/[0.93] antialiased bg-grid-white/[0.02]">

  <h1 className="text-2xl text-center text-red-600"> Hello I am Next JS</h1>

  <Herosection/>
  <Featuredcourses/>


    </main>
  
   
  );
}

import { FloatingNavbar } from "@/components/FloatingNavbar"
import { FloatingDock } from "@/components/ui/floating-dock"
import Sidebar from "@/components/ui/Sidebar"
import Image from "next/image"

const HomeLayout = ({children}: {children: React.ReactNode}) => {
    
    return (
      <main className="relative">
        

            <div className="flex">
                
                
                <section className="flex min-h-screen flex-1 flex-col h-full overflow-hidden">
                    <div className="w-full">
                        {children}
                    </div>
                        
                </section>
            </div>
            
        </main>
    )
  }
  export default HomeLayout
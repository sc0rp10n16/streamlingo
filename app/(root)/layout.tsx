import { FloatingNavbar } from "@/components/FloatingNavbar"
import StreamVideoProvider from "@/providers/StreamClientProvider"

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
        {/* <FloatingNavbar/> */}
        </StreamVideoProvider>
        </main>
  )
}
export default RootLayout
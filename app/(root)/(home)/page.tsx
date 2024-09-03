import { FloatingNavbar } from "@/components/FloatingNavbar";
import {Hero} from "@/components/Hero";
import MeetingTypeList from "@/components/MeetingTypeList";


const Home = () => {
  const now =  new Date();
  const time = now.toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'});
  const date = (new Intl.DateTimeFormat('en-US', {dateStyle:'full'})).format(now)
  return (
    <section className="flex size-full flex-col gap-10 text-white items-center justify-center">
      
      <Hero/>
    </section>
  )
}
export default Home
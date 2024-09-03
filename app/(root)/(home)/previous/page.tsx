import CallList from "@/components/CallList"

const Previous = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
      <h1 className="text-3xl font-bold">Meetings History</h1>
      <CallList type="ended"/>
    </section>
  )
}
export default Previous
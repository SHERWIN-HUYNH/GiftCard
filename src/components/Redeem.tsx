
import { Button } from "@/components/ui/button";
export default function Redeem() {
  return (
    <div className="md:hidden flex items-center justify-between gap-x-5 bg-white py-3">
        <div>
        <a className="underline p-3  font-bold rounded-sm hover:bg-[#f7f7f7]">Redeem</a>
        </div>
        <Button variant="outline" className=" text-xl px-4 py-6 rounded-lg">
        Buy gift card
        </Button>
  </div>
  )
}

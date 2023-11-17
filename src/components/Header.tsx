
import logo from "../assets/images/logo2.svg";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <header className="w-full h-20 bg-white">
      <nav className="  flex items-center justify-center md:justify-between">
        {/* IMAGE */}
        <div>
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
        </div>

        {/* BUTTON + REEDEEM */}
        <div className="hidden md:flex items-center justify-between gap-x-5">
            <div>
            <a className="underline p-3  font-bold rounded-sm hover:bg-[#f7f7f7]">Redeem</a>
            </div>
            <Button variant="outline" className=" text-xl px-4 py-6 rounded-lg">
            Buy gift card
            </Button>
  </div>

      </nav>
    </header>
  );
};

export default Header;

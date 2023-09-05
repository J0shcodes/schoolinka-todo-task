import Image from "next/image";

import SettingIcon from "@/public/icons/Setting";
import NotificationIcon from "@/public/icons/notif";
import HamburgerIcon from "@/public/icons/hamburger";

const Header = () => {
  return (
    <header className="px-6 border-b-2 border-solid border-[#eaecf0] md:px-2">
      <div className="flex justify-between px-6 py-4 md:px-2 md:pt-8">
        <div className="text-2xl font-bold text-schoolinka-grey-900">ToDo</div>
        <div className="flex justify-between w-[8.75rem] md:hidden">
          <div>
            <SettingIcon />
          </div>
          <div>
            <NotificationIcon />
          </div>
          <div>
            <Image
              src="/images/Avatar.png"
              alt="Avatar"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="hidden md:block">
            <HamburgerIcon/>
        </div>
      </div>
    </header>
  );
};

export default Header;

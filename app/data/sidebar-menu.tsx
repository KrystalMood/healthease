import { Headset, Info, Users, ClipboardCheck, Book } from "lucide-react";

interface SidebarMenuProps {
  id: number;
  title: string;
  icon: JSX.Element;
}

const SidebarMenu: SidebarMenuProps[] = [
  {
    id: 1,
    title: "Layanan",
    icon: <Headset size={20} />,
  },
  {
    id: 2,
    title: "Informasi Publik",
    icon: <Info size={20} />,
  },
  {
    id: 3,
    title: "Tentang Kami",
    icon: <Users size={20} />,
  },
  {
    id: 4,
    title: "Daftar",
    icon: <ClipboardCheck size={20} />,
  },
  {
    id: 5,
    title: "Reservasi",
    icon: <Book size={20} />,
  },
];

export default SidebarMenu;
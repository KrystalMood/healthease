import SidebarMenuProps from "~/types/sidebar-menu";

export default function SidebarMenu(): SidebarMenuProps[] {
  return [
    {
      id: 1,
      title: "Layanan",
      icon: "fa-solid fa-headset",
    },
    {
      id: 2,
      title: "Informasi Publik",
      icon: "fa-solid fa-circle-info",
    },
    {
      id: 3,
      title: "Tentang Kami",
      icon: "fa-solid fa-users",
    },
    {
      id: 4,
      title: "Daftar",
      icon: "fa-solid fa-clipboard-check",
    },
    {
      id: 5,
      title: "Reservasi",
      icon: "fa-solid fa-book",
    },
  ];
}
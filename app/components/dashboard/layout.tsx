import { Link, useLocation, useParams } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import throttle from "lodash/throttle";
import {
  Bell,
  Calendar,
  FileText,
  Home,
  Menu,
  Settings,
  User,
  X,
  Brain,
  PillBottle,
  Phone,
  LogOut,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState("Beranda");
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Beranda", path: "/dashboard/beranda" },
    { icon: Calendar, label: "Jadwal", path: "/dashboard/jadwal" },
    { icon: FileText, label: "Riwayat", path: "/dashboard/riwayat" },
    {
      icon: PillBottle,
      label: "Pengingat Obat",
      path: "/dashboard/pengingat-obat",
    },
    { icon: Brain, label: "Diagnosis AI", path: "/dashboard/fitur-ai" },
    { icon: Phone, label: "Telemedicine", path: "/dashboard/telemedicine" },
    { icon: Settings, label: "Pengaturan", path: "/dashboard/pengaturan" },
    { icon: LogOut, label: "Keluar", path: "/dashboard/keluar" },
  ];

  const throttleSetActiveIndex = useCallback(
    throttle((pathname: string) => {
      const activeItem = menuItems.find((item) => item.path === pathname);
      if (activeItem) {
        setActiveIndex(activeItem.label);
      }
    }, 1000),
    [],
  );

  useEffect(() => {
    throttleSetActiveIndex(location.pathname);
    return () => throttleSetActiveIndex.cancel();
  }, [location.pathname, throttleSetActiveIndex]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside
        className={`fixed inset-y-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 lg:relative lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Sidebar"
      >
        <div className="flex h-full flex-col">
          <header className="flex h-16 items-center justify-between px-4">
            <Link to="/" className="flex items-center" aria-label="Logo">
              <img src="/icon.png" alt="Logo" className="h-8 w-auto" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden"
              aria-label="Close sidebar"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </header>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.label === "Keluar" ? "/" : item.path}
                className={`group flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600 ${
                  item.label === "Keluar"
                    ? "text-red-500 hover:bg-red-50 hover:text-red-600"
                    : ""
                } ${activeIndex === item.label ? "bg-emerald-50 text-emerald-600" : "text-gray-600"}`}
                aria-label={item.label}
              >
                <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <div className="flex items-center space-x-4">
            <button
              className="rounded-full p-1 text-gray-600 hover:bg-gray-100"
              aria-label="Notifications"
            >
              <Bell className="h-6 w-6" />
            </button>
            <div
              className="flex items-center space-x-2 rounded-full bg-gray-100 p-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-200"
              aria-label="User menu"
            >
              <User className="h-5 w-5" aria-hidden="true" />
              <span>Pramudya</span>
            </div>
          </div>
        </header>
        <main
          id="main-content"
          className="flex-1 overflow-y-auto p-4 lg:p-6"
          tabIndex={-1}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

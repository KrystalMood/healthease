import { Link } from "@remix-run/react";
import { useState } from "react";
import {
  Home,
  Calendar,
  FileText,
  Settings,
  Bell,
  User,
  Menu,
  X,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Beranda", path: "/dashboard" },
    { icon: Calendar, label: "Jadwal", path: "/dashboard/jadwal" },
    { icon: FileText, label: "Riwayat", path: "/dashboard/riwayat" },
    { icon: Settings, label: "Pengaturan", path: "/dashboard/pengaturan" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside
        className={`fixed inset-y-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-4">
            <Link to="/" className="flex items-center">
              <img src="/icon.png" alt="Logo" className="h-8 w-auto" />
            </Link>
            <button onClick={() => setIsOpen(false)} className="lg:hidden">
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-2 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>

          <div className="flex items-center space-x-4">
            <button className="rounded-full p-1 text-gray-600 hover:bg-gray-100">
              <Bell className="h-6 w-6" />
            </button>
            <button className="flex items-center space-x-2 rounded-full bg-gray-100 p-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-200">
              <User className="h-5 w-5" />
              <span>Pramudya</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}

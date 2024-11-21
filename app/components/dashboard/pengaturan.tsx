import { useState } from "react";
import { Bell, Lock, User, Shield, Globe, Moon, Sun } from "lucide-react";
import DashboardLayout from "~/components/dashboard/layout";

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

const SettingsSection = ({ title, children }: SettingsSectionProps) => (
  <div className="rounded-lg border border-gray-200 bg-white p-6">
    <h2 className="mb-4 text-lg font-semibold text-gray-900">{title}</h2>
    {children}
  </div>
);
export default function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState({
      email: true,
      push: true,
      updates: false,
      newsletter: true,
    });
  return (
    <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">Pengaturan</h1>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <SettingsSection title="Profil">
        <div className="flex items-center space-x-6">
          <div className="relative h-20 w-20">
            <img
              src="/template.jpg"
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 rounded-full bg-emerald-500 p-2 text-white hover:bg-emerald-600">
              <User className="h-4 w-4" />
            </button>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Pramudya
            </h3>
            <p className="text-base text-gray-600">pramudya@example.com</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6">
          <div>
            <label className="block text-base font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              defaultValue="Pramudya"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              defaultValue="pramudya@example.com"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Nomor Telepon
            </label>
            <input
              type="tel"
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              defaultValue="+62 812-3456-7890"
            />
          </div>
        </div>
      </SettingsSection>

      <SettingsSection title="Keamanan">
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <Lock className="h-5 w-5 text-gray-500" />
              <div>
                <p className="font-medium text-gray-900">Kata Sandi</p>
                <p className="text-sm text-gray-500">
                  Terakhir diubah 3 bulan yang lalu
                </p>
              </div>
            </div>
            <button className="rounded-lg bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-100">
              Ubah
            </button>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-gray-500" />
              <div>
                <p className="font-medium text-gray-900">
                  Autentikasi Dua Faktor
                </p>
                <p className="text-sm text-gray-500">
                  Tambahan keamanan untuk akun Anda
                </p>
              </div>
            </div>
            <button className="rounded-lg bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-100">
              Aktifkan
            </button>
          </div>
        </div>
      </SettingsSection>

      <SettingsSection title="Notifikasi">
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0"
            >
              <div>
                <p className="font-medium text-gray-900">
                  {key === "email"
                    ? "Notifikasi Email"
                    : key === "push"
                      ? "Notifikasi Push"
                      : key === "updates"
                        ? "Pembaruan Aplikasi"
                        : "Newsletter"}
                </p>
                <p className="text-sm text-gray-500">
                  {key === "email"
                    ? "Terima notifikasi melalui email"
                    : key === "push"
                      ? "Terima notifikasi push"
                      : key === "updates"
                        ? "Dapatkan info pembaruan aplikasi"
                        : "Terima newsletter mingguan"}
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={value}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      [key]: e.target.checked,
                    })
                  }
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-emerald-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300"></div>
              </label>
            </div>
          ))}
        </div>
      </SettingsSection>

      <SettingsSection title="Preferensi">
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-gray-500" />
              <div>
                <p className="font-medium text-gray-900">Bahasa</p>
                <p className="text-sm text-gray-500">
                  Pilih bahasa yang Anda inginkan
                </p>
              </div>
            </div>
            <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
              <option value="id">Bahasa Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              {darkMode ? (
                <Moon className="h-5 w-5 text-gray-500" />
              ) : (
                <Sun className="h-5 w-5 text-gray-500" />
              )}
              <div>
                <p className="font-medium text-gray-900">Mode Gelap</p>
                <p className="text-sm text-gray-500">
                  Sesuaikan tampilan aplikasi
                </p>
              </div>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-emerald-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300"></div>
            </label>
          </div>
        </div>
      </SettingsSection>
    </div>

    <div className="flex justify-end space-x-4">
      <button className="rounded-lg border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
        Batal
      </button>
      <button className="rounded-lg bg-emerald-500 px-6 py-2 text-sm font-medium text-white hover:bg-emerald-600">
        Simpan Perubahan
      </button>
    </div>
  </div>
  )
}

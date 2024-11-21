import { Calendar, Pill, Tablets, Plus, Search, Bell } from "lucide-react";

export default function PengingatObat() {
  const schedules = [
    {
      id: 1,
      medicineName: "Paracetamol",
      time: "08:00",
      dosage: "1 tablet",
      taken: false,
      frequency: "3x sehari",
      notes: "Diminum setelah makan",
    },
    {
      id: 2,
      medicineName: "Amoxicillin",
      time: "13:00",
      dosage: "2 kapsul",
      taken: false,
      frequency: "2x sehari",
      notes: "Hindari susu",
    },
    {
      id: 3,
      medicineName: "Vitamin C",
      time: "20:00",
      dosage: "1 tablet",
      taken: false,
      frequency: "1x sehari",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Pengingat Obat</h1>
        <button className="flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" />
          Tambah Jadwal
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-emerald-100 p-3">
              <Bell className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Jadwal Minum Obat Hari Ini
              </h3>
              <p className="text-2xl font-semibold text-gray-900">
                {schedules.length} Jadwal
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-emerald-100 p-3">
              <Tablets className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Obat Diminum
              </h3>
              <p className="text-2xl font-semibold text-gray-900">
                0 / {schedules.length}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-emerald-100 p-3">
              <Calendar className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Kepatuhan Minum Obat
              </h3>
              <p className="text-2xl font-semibold text-gray-900">0%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Jadwal Minum Obat Hari Ini
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Cari obat..."
              className="rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-emerald-500 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="space-y-4">
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
            >
              <div className="flex w-full items-center justify-between space-x-4">
                <div>
                  <p className="font-medium">{schedule.medicineName}</p>
                  <p className="text-sm text-gray-500">{schedule.time}</p>
                  <p className="text-sm text-gray-500">{schedule.dosage}</p>
                </div>
                <button className="rounded-md bg-emerald-100 px-4 py-2 text-emerald-600 hover:bg-emerald-200">
                  Sudah Diminum
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

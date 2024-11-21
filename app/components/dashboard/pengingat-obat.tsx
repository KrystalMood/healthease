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
    <div className="space-y-4">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Pengingat Obat
        </h1>
        <button className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Tambah Jadwal
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-emerald-100 p-2 sm:p-3">
              <Bell className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6" />
            </div>
            <div className="ml-3 sm:ml-4">
              <h3 className="text-xs font-medium text-gray-500 sm:text-sm">
                Jadwal Minum Obat Hari Ini
              </h3>
              <p className="text-xl font-semibold text-gray-900 sm:text-2xl">
                {schedules.length} Jadwal
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-emerald-100 p-2 sm:p-3">
              <Tablets className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6" />
            </div>
            <div className="ml-3 sm:ml-4">
              <h3 className="text-xs font-medium text-gray-500 sm:text-sm">
                Obat Diminum
              </h3>
              <p className="text-xl font-semibold text-gray-900 sm:text-2xl">
                0 / {schedules.length}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-emerald-100 p-2 sm:p-3">
              <Calendar className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6" />
            </div>
            <div className="ml-3 sm:ml-4">
              <h3 className="text-xs font-medium text-gray-500 sm:text-sm">
                Kepatuhan Minum Obat
              </h3>
              <p className="text-xl font-semibold text-gray-900 sm:text-2xl">
                0%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
        <div className="mb-4 flex flex-col items-center justify-between gap-4 sm:mb-6 sm:flex-row sm:gap-0">
          <h2 className="text-base font-semibold text-gray-900 sm:text-lg">
            Jadwal Minum Obat Hari Ini
          </h2>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Cari obat..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-emerald-500 focus:outline-none sm:w-auto"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="space-y-4">
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="flex flex-col items-start justify-between rounded-lg border border-gray-200 p-4 hover:bg-gray-50 sm:flex-row sm:items-center"
            >
              <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="font-medium">{schedule.medicineName}</p>
                  <p className="text-sm text-gray-500">{schedule.time}</p>
                  <p className="text-sm text-gray-500">{schedule.dosage}</p>
                </div>
                <button className="mt-2 w-full rounded-md bg-emerald-100 px-4 py-2 text-emerald-600 hover:bg-emerald-200 sm:mt-0 sm:w-auto">
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

import { Calendar, Users, Activity, Clock } from "lucide-react";

export const stats = [
  {
    title: "Total Konsultasi",
    value: "24",
    icon: Calendar,
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Dokter Aktif",
    value: "8",
    icon: Users,
  },
  {
    title: "Tingkat Kepuasan",
    value: "92%",
    icon: Activity,
    trend: { value: 3, isPositive: true },
  },
  {
    title: "Waktu Respons",
    value: "< 5 min",
    icon: Clock,
    trend: { value: 10, isPositive: true },
  },
];

export const appointments = [
  {
    id: 1,
    doctor: "Dr. Budi Santoso",
    specialty: "Dokter Jantung",
    date: "2024-03-20",
    time: "09:00",
    status: "akan datang",
  },
  {
    id: 2,
    doctor: "Dr. Siti Rahmawati",
    specialty: "Dokter Anak",
    date: "2024-03-21",
    time: "14:30",
    status: "akan datang",
  },
];
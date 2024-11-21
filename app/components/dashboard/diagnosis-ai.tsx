import React from 'react'
import { Activity, Brain, FileText, Search } from "lucide-react";

export default function DiagnosisAI() {
  return (
    <div className="space-y-6">
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">Diagnosis AI</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Cari gejala..."
          className="w-64 rounded-lg border border-gray-200 py-2 pl-10 pr-4 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      </div>
    </header>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-center">
          <div className="rounded-full bg-emerald-100 p-3">
            <Brain className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">
              Akurasi AI
            </h3>
            <p className="text-2xl font-semibold text-gray-900">98.5%</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-center">
          <div className="rounded-full bg-emerald-100 p-3">
            <Activity className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">
              Diagnosa Hari Ini
            </h3>
            <p className="text-2xl font-semibold text-gray-900">124</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-center">
          <div className="rounded-full bg-emerald-100 p-3">
            <FileText className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">
              Total Analisis
            </h3>
            <p className="text-2xl font-semibold text-gray-900">1,234</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-center">
          <div className="rounded-full bg-emerald-100 p-3">
            <Brain className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">Model AI</h3>
            <p className="text-2xl font-semibold text-gray-900">v2.1</p>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">
        Diagnosis AI
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Keluhan Utama
          </label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="Deskripsikan keluhan Anda..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gejala Tambahan
          </label>
          <div className="mt-2 space-y-2">
            {["Demam", "Batuk", "Sakit Kepala", "Mual"].map((gejala) => (
              <label key={gejala} className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2 text-gray-700">{gejala}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
          Analisis dengan AI
        </button>
      </div>
    </div>

    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">
        Riwayat Analisis AI
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Tanggal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Keluhan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Diagnosis AI
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Akurasi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              {
                date: "2024-03-20",
                complaint: "Sakit kepala dan mual",
                diagnosis: "Migrain",
                accuracy: "95%",
              },
              {
                date: "2024-03-19",
                complaint: "Demam tinggi",
                diagnosis: "Infeksi virus",
                accuracy: "92%",
              },
              {
                date: "2024-03-18",
                complaint: "Batuk kering",
                diagnosis: "Bronkitis",
                accuracy: "89%",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {item.complaint}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {item.diagnosis}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800">
                    {item.accuracy}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

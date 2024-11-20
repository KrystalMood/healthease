import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("layanan", "routes/layanan/index.tsx", () => {
            
          });

          route("dashboard", "routes/dashboard/index.tsx", () => {
            route("beranda", "routes/dashboard/beranda.tsx");
            route("jadwal", "routes/dashboard/jadwal.tsx");
            route("riwayat", "routes/dashboard/riwayat.tsx");
          });
        });
      },
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 4444,
  },
});

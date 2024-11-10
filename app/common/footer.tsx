import { Link } from "@remix-run/react";

export default function Footer(): JSX.Element {
  const footer_menu = (menu: string, index: number) => (
    <li key={index} className="group h-fit w-fit text-slate-50 transition-all duration-300 ease-in-out">
      <span className="lg:bg-gradient-to-r lg:from-slate-50 lg:to-slate-50 lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
        <Link to={`/${menu.replace(/ /g, "-").toLowerCase()}`}>{menu}</Link>
      </span>
    </li>
  );

  return (
    <footer className="mx-auto w-full bg-emerald-600 px-[5%] py-14 text-slate-50">
      <section className="flex flex-col gap-x-10 lg:flex-row">
        <address className="flex flex-col items-center not-italic lg:w-1/3 lg:items-start">
          <img src="/icon.png" alt="Logo Healthease" className="w-64 font-bold italic" loading="lazy" />
          <h3 className="mt-7 cursor-default text-2xl font-semibold">
            HealthEase
          </h3>
          <h5 className="mt-4 cursor-default text-center text-base font-thin lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempore
            reiciendis maxime itaque ab fugiat quod quaerat placeat repellat
            sint!
          </h5>
        </address>
        <nav className="mt-14 grid grid-cols-1 gap-8 lg:mt-0 lg:w-2/3 lg:grid-cols-2" aria-label="Navigasi">
          <h3 className="cursor-default text-xl font-extrabold tracking-wide lg:text-2xl">
            Lorem Ipsum
            <br />
            Dolor Sit Amet
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <ul className="flex flex-col gap-y-3" aria-label="Informasi">
              {["Profil", "Jaminan Kesehatan", "Layanan", "Informasi Publik"].map((menu, index) => footer_menu(menu, index))}
            </ul>
            <ul className="flex flex-col gap-y-3" aria-label="Bantuan">
              {["Tentang Kami", "FAQ", "Pusat Bantuan"].map((menu, index) => footer_menu(menu, index))}
            </ul>
          </div>
        </nav>
      </section>
    </footer>
  );
}
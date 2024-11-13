export default function ApaYangKamiHarapkan(): JSX.Element {
  return (
    <section className="mx-auto w-full cursor-default bg-gradient-to-tr from-slate-50 to-gray-50 px-[5%] py-10 lg:py-14">
      <h2 className="text-4xl font-bold leading-tight tracking-wide text-gray-800 lg:text-5xl">
        Apa yang Kami Harapkan di
        <br />
        10 Tahun Ke Depan
      </h2>
      <div className="mt-7 flex flex-col gap-x-12 lg:mt-10 lg:flex-row">
        <h4 className="text-justify font-light italic leading-relaxed text-gray-600 first-letter:float-left first-letter:text-[5rem] first-letter:font-bold first-letter:leading-[4rem] first-letter:text-black">
          Dalam sepuluh tahun ke depan, HealthEase bercita-cita menjadi solusi
          utama dalam menghubungkan masyarakat dengan layanan kesehatan yang
          lebih efisien, terjangkau, dan mudah diakses. Kami ingin menciptakan
          sistem administrasi yang mempermudah proses pendaftaran, rekam medis,
          hingga layanan konsultasi, sehingga orang-orang yang membutuhkan
          layanan kesehatan tidak lagi merasa terbebani oleh proses administrasi
          yang rumit. Melalui teknologi yang terus berkembang, kami berharap
          untuk selalu memberikan layanan yang ramah, aman, dan dapat diakses
          oleh siapa saja, di mana saja.
        </h4>
        <img
          src="/apa-yang-kami-harapkan.jpg"
          alt="Apa yang Kami Harapkan di 10 Tahun Ke Depan."
          className="mt-7 w-full object-cover lg:mt-0"
        />
      </div>
      <div className="mt-7 flex gap-x-12 lg:mt-12">
        <img
          src="/apa-yang-kami-harapkan-2.jpg"
          alt="Apa yang Kami Harapkan di 10 Tahun Ke Depan."
          className="hidden w-[40em] object-cover lg:mt-0 lg:inline"
        />
        <h4 className="text-justify font-light italic leading-relaxed text-gray-600 first-letter:float-left first-letter:text-[5rem] first-letter:font-bold first-letter:leading-[4rem] first-letter:text-black">
          Selain itu, HealthEase berkomitmen untuk menjadi bagian dari
          transformasi digital dalam dunia kesehatan. Dalam satu dekade
          mendatang, kami ingin berkolaborasi dengan penyedia layanan kesehatan
          dan komunitas untuk memperluas akses, meningkatkan kualitas layanan,
          dan mendukung kesejahteraan masyarakat secara holistik. Dengan fokus
          pada inovasi dan kepedulian terhadap kebutuhan pasien, kami berharap
          HealthEase dapat memberikan dampak positif jangka panjang bagi
          kesehatan masyarakat dan membangun kepercayaan sebagai mitra kesehatan
          pilihan di masa depan.
        </h4>
      </div>
    </section>
  );
}
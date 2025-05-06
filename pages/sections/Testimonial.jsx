import Image from 'next/image'
import { Roll, Slide } from "react-awesome-reveal";

export default function Testimonial() {
	const testimonials = [
		{
			id: 1,
			name: "Budi S.",
			role: "Mahasiswa Teknik Informatika",
			image: "/images/budi-testi.svg",
			testimonial: `"TEMPA KODE berhasil membuat sistem SPK untuk skripsi saya dengan metode AHP yang sempurna. Nilai A dan pujian dari dosen pembimbing! Terima kasih!"`,
		},
		{
			id: 2,
			name: "Rizky Amelia",
			role: "Mahasiswi Teknik Informatika",
			image: "/images/amelia-testi.svg",
			testimonial: `"Awalnya ragu, tapi setelah project website skripsiku selesai sebelum deadline dan lengkap dengan dokumentasi, saya sangat puas! TEMPA KODE benar-benar bisa diandalkan."`
		},
		{
			id: 3,
			name: "Dimas Wahyu",
			role: "Mahasiswa Ilmu Komputer",
			image: "/images/dimas-testi.svg",
			testimonial: `"Pakai jasa TEMPA KODE untuk tugas Machine Learning. Bukan cuma dapet hasil, tapi aku juga jadi ngerti alurnya karena dijelasin dengan sabar. Mantap!"`
		}
	]

	return (
		<section id="testimoni" className="max-w-screen-xl m-auto py-32">
			<Roll direction="up" triggerOnce={true}>
				<div className="flex flex-col items-center justify-center mb-9">
					<p className="font-thin mb-4">TESTIMONIAL</p>
					<h2 className="text-5xl/snug font-semibold text-center">Apa Kata Mereka</h2>
					<h2 className="text-5xl/snug font-semibold text-center">Tentang Tempa Kode?</h2>
				</div>
			</Roll>
			<div className="flex flex-col md:flex-row gap-3 md:flex-wrap justify-center items-center">
				<Slide direction="right" cascade damping={0.2} triggerOnce className="flex flex-col md:flex-row gap-3 md:flex-wrap justify-center items-center">
					{testimonials.map((item, index) => (
						<div key={index} class="lg:w-full md:w-3xl max-w-sm bg-[#F6F6F6] hover:bg-white border border-gray-200 rounded-lg shadow-sm text-center hover:shadow-lg px-2">
							<div class="flex flex-col items-center py-10">
								<Image 
									src={item.image}
									width={96}
									height={96}
									alt="Picture of the author"
								/>
								<h5 class="mb-1 text-xl font-medium text-gray-900  text-center">{item.name}</h5>
								<span class="text-sm text-gray-500 dark:text-gray-400">{item.role}</span>
								<p className="mt-2">{item.testimonial}</p>
							</div>
						</div>
					))}
				</Slide>
			</div>
		</section>
	)
}
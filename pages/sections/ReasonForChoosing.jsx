export default function ReasonForChoosing() {
	const data = [
		{
			id: 1,
			title: "Kualitas Premium",
			description: "Kode bersih, terstruktur, dan didokumentasikan dengan baik. Kami tidak hanya membuat program yang berjalan, tapi juga kode yang mudah dipahami.",
		},
		{
			id: 2,
			title: "Ketepatan Waktu",
			description: "Kami menghargai deadline Anda. Proyek selesai tepat waktu, tanpa kompromi pada kualitas.",
		},
		{
			id: 3,
			title: "Dukungan Penuh",
			description: "Konsultasi gratis sebelum dan sesudah pengerjaan. Kami memastikan Anda memahami setiap baris kode yang kami buat.",
		},
		{
			id: 4,
			title: "Support Revisi",
			description: "Tidak puas? Kami siap merevisi hasil kerja hingga sesuai dengan ekspektasi Anda.",
		}
	];

	return (
		<section className="bg-gradient-to-l from-blue-50/80 to-white">
			<div id="reason" className="max-w-screen-xl mx-6 lg:mx-auto py-16 lg:flex flex-row ">
				<div class="basis-1/3 lg:flex lg:justify-center lg:items-center lg:mr-10">
					<h2 className="text-5xl/snug font-semibold text-center lg:text-left">MENGAPA MEMILIH TEMPA KODE?</h2>
				</div>
				<div class="basis-2/3 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
					{data.map((item, index) => (
						<div className="reason m-5" key={index}>
							<div 
								className="bg-cover bg-center bg-no-repeat w-10 h-10 flex justify-center items-center mb-3" 
								style={{ backgroundImage: "url('/images/reason.svg')" }}
							>
									<p className="text-white">{item.id}</p>
							</div>
							<h4 className="text-3xl font-bold mb-3">{item.title}</h4>
							<p className="text-base/8 text-gray-500 mb-3">{item.description}</p>
							<hr className="md:hidden border opacity-10"/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
import { CardService } from "../../components/Card"
import { Fade, Slide } from "react-awesome-reveal";

export default function Service(){
	const service = [
		{
			icon: "💻",
			title: "Pembuatan Website",
			description: "Website modern, responsif, dan siap online sesuai kebutuhan tugas atau skripsi kamu."
		},
		{
			icon: "📱",
			title: "Pembuatan Aplikasi Mobile",
			description: "Aplikasi kekinian berbasis Flutter, React Native, atau native sesuai permintaan."
		},
		{
			icon: "🧠",
			title: "Sistem Pendukung Keputusan (DSS)",
			description: "Dari metode SAW, TOPSIS hingga AHP — kami bantu rumuskan dan bangun sistemnya."
		},
		{
			icon: "🤖",
			title: "Machine Learning",
			description: "Mulai dari klasifikasi, prediksi, hingga sistem rekomendasi untuk skripsimu."
		}
	]

	return (
		<section id="service" className="bg-[#F4F6FC] py-32">
			<Fade cascade damping={0.2} triggerOnce>
				<h2 className="text-4xl text-center font-semibold">👨‍💻 Apa Yang Kami Tawarkan ?</h2>
			</Fade>
			<div className="max-w-screen-xl lg:mx-auto grid md:grid-flow-col md:grid-rows-2 gap-5 m-5 justify-center">
			<Slide direction="up" cascade damping={0.2} triggerOnce>
				{service.map((item, index) => (
					<CardService key={index} icon={item.icon} title={item.title} description={item.description} />
				))}
				</Slide>
			</div>
		</section>
	)
}
import { PricingCard } from "../components/Card"
import { Fade, Slide } from "react-awesome-reveal"

const priceList = [
    {
        id: 1,
        name: "Web",
        price: "Rp. 1.2xx.xxx",
        desc: "Mulai dari 1,2Jtan",
        badgeColor: "bg-[#E3F8FF] text-[#035388]",
        item : [
            "Penggunaaan Teknologi Terbaru", 
            "Bahasa Pemrograman dapat disesuaikan dengan permintaan", 
            "Desain responsif dan ringan"
        ]
    },
    {
        id: 2,
        name: "Mobile",
        price: "Rp. 1.5xx.xxx",
        desc: "Mulai dari 1,5Jtan",
        badgeColor: "bg-[#FFFBE3] text-[#7F8803]",
        item : [
            "Aplikasi Android/iOS berbasis tugas atau studi kasus skripsi", 
            "API backend, dan integrasi database", 
            "Stack: Flutter, React Native, Firebase, REST API (Dapat disesuiakan)"
        ]
    },
    {
        id: 3,
        name: "SPK/DSS",
        price: "Rp. 1.5xx.xxx",
        desc: "Mulai dari 1,5Jtan",
        badgeColor: "bg-[#FFE3EC] text-[#620042]",
        item : [
            "Berbasis website", "Simple Additive Weighting (SAW)", 
            "AHP (Analytical Hierarchy Process)", 
            "TOPSIS (Technique for Order Preference by Similarity to Ideal Solution)"
        ]
    },
    {
        id: 4,
        name: "ML",
        price: "Rp. 1.7xx.xxx",
        desc: "Mulai dari 1,7 Jtan",
        badgeColor: "bg-[#EFFCF6] text-[#004440]",
        item : [
            "Model ML sederhana (Klasifikasi, Regresi, Clustering)", 
            "Dataset preparation", 
            "Implementasi model dalam aplikasi sederhana", 
            "Visualisasi hasil dasar", 
            "Dokumentasi teknis"
        ]
    },
]

export default function PriceList() {
    return (
        <section id="price" className="max-w-screen-xl mx-auto py-32 px-4">
            <div className="w-full flex flex-col items-center justify-center mb-9">
                <Fade direction="up" duration={1000} triggerOnce>
                    <h2 className="text-4xl sm:text-5xl font-semibold text-center">
                        Harga yang Kompetitif 💰
                    </h2>
                    <p className="font-thin mb-4 max-w-2xl text-center text-base sm:text-lg mt-2.5">
                        Kami menawarkan harga yang sesuai dengan kualitas premium yang Anda
                        dapatkan. Konsultasikan kebutuhan Anda dan dapatkan penawaran terbaik.
                    </p>
                </Fade>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Slide direction="right" cascade damping={0.2} triggerOnce>
                    {priceList.map((item, index) => (
                        <PricingCard
                            key={index}
                            name={item.name}
                            price={item.price}
                            desc={item.desc}
                            badgeColor={item.badgeColor}
                            item={item.item}
                        />
                    ))}
                </Slide>
            </div>
        </section>
    )
}
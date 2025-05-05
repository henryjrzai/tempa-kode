import Image from 'next/image'
import { SolidButton } from '../components/Buttons'

export default function Contact() {
    return (
        <section className="max-w-screen-xl mx-auto bg-[#F6F6F6] py-5 grid md:grid-cols-2 gap-4">
            <div className="w-full flex items-center justify-center">
                <Image
                    src="/images/customer-support.svg"
                    width={350}
                    height={350}
                    alt="contact support"
                />
            </div>
            <div className="w-96 flex flex-col justify-center p-5 space-y-5">
                <h1 className="font-bold text-5xl text-center md:text-left">Yuk, mulai sekarang!</h1>
                <p className="text-center md:text-left">Klik tombol di bawah untuk konsultasi gratis dan dapatkan penawaran terbaik hari ini!</p>
                <SolidButton text="HUBUNGI KAMI"/>
            </div>
        </section>
    )
}
import Image from 'next/image'
import { SolidButton } from '../../components/Buttons'
import { Fade } from 'react-awesome-reveal'

export default function Contact() {
    return (
       
            <section className="max-w-screen-xl mx-auto bg-[#F6F6F6] py-5 grid md:grid-cols-2 gap-4">
                <Fade direction="up" cascade damping={0.2} triggerOnce={true}>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            src="/images/customer-support.svg"
                            width={350}
                            height={350}
                            alt="contact support"
                        />
                    </div>
                </Fade>
                <div className="w-96 flex flex-col justify-center items-center p-5 space-y-5">
                    <Fade direction="up" cascade damping={0.2} triggerOnce={true}>
                        <h1 className="font-bold text-5xl text-center md:text-left">Yuk, mulai sekarang!</h1>
                        <p className="text-center md:text-left">Klik tombol di bawah untuk konsultasi gratis dan dapatkan penawaran terbaik hari ini!</p>
                        <SolidButton text="HUBUNGI KAMI"/>
                    </Fade>
                </div>
            </section>
    )
}
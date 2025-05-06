import Image from 'next/image'
import { SolidButton } from '../../components/Buttons'
import { Fade  } from "react-awesome-reveal";

export default function Hero() {
  return (
	<Fade cascade triggerOnce>
		<section id="hero" className="h-screen bg-gradient-to-b from-blue-50/80 to-white mt-[-18px]">
			<div class="grid max-w-screen-xl h-full px-4 py-8 my-5 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div class="mr-auto place-self-center lg:col-span-7 mt-20 lg:mt-0">
					<h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
						Solusi Cepat & Andal untuk Tugas dan Skripsi Coding Anda!
					</h1>
					<p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
						Kami hadir sebagai partner terpercaya yang siap membantumu Coding sampai tuntas — cepat, rapi, dan tepat sasaran!
					</p>
					<SolidButton text="Start Project" />
				</div>
				<div class="lg:mt-0 lg:col-span-5 flex align-middle justify-center items-center">
					<Image	
						src="/images/hero-image.png"
						width={500}
						height={500}
						alt="hero image"
					/>
				</div>                
			</div>
		</section>
	</Fade>
  )
}

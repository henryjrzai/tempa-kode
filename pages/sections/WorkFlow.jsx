import { useState } from "react";
import { ChevronUp, ChevronDown, X, Plus } from "lucide-react";

export default function WorkFlow() {
    const [openItem, setOpenItem] = useState(0);

    const toggleAccordion = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    const processSteps = [
        {
          number: "01",
          title: "Konsultasi Awal",
          description: "Diskusikan kebutuhan dan ekspektasi Anda dengan tim kami"
        },
        {
          number: "02",
          title: "Perencanaan & Penawaran",
          description: "Kami menyusun rencana pengerjaan dan penawaran harga"
        },
        {
          number: "03",
          title: "Pengembangan",
          description: "Tim ahli kami mulai mengerjakan proyek Anda"
        },
        {
          number: "04",
          title: "Pengujian",
          description: "Memastikan semua fitur berfungsi sesuai kebutuhan"
        },
        {
          number: "05",
          title: "Penyerahan",
          description: "Proyek diserahkan dengan dokumentasi lengkap"
        },
        {
          number: "06",
          title: "Dukungan",
          description: "Kami tetap tersedia untuk membantu jika ada pertanyaan atau kebutuhan revisi"
        }
    ];

	return(
		<section id="workflow" className="bg-[#F4F6FC] py-32">
            <div className="max-w-screen-xl mx-6 lg:mx-auto lg:flex flex-row">
                <div className="basis-1/3 lg:flex lg:flex-col lg:justify-center lg:items-center lg:mr-10">
                    <h2 className="text-4xl/snug font-semibold text-center lg:text-left">Bagaimana Proses Kerja Kami? ⚒️</h2>
                </div>
                <div className="basis-2/3 w-full mt-10">
                {processSteps.map((step, index) => (
                    <div 
                        key={step.number}
                        className="border-b border-gray-200 last:border-0"
                    >
                        <div 
                            className="flex items-center justify-between py-4 cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex items-center">
                                <span className="text-blue-500 font-medium mr-6">{step.number}</span>
                                <span className="font-semibold text-gray-700">{step.title}</span>
                                </div>
                                <button className="text-gray-400">
                                {openItem === index ? 
                                    <X size={20} /> : 
                                    <Plus size={20} />
                                }
                                </button>
                            </div>
                    
                            {openItem === index && (
                                <div className="pl-12 pr-4 pb-4">
                                <p className="text-gray-600">{step.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
	)
}
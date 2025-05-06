export function CardService(props) {
	
	const {icon, title, description} = props;

	return (
		<div className="w-full lg:w-lg flex flex-col justify-center items-center px-6 py-7 hover:bg-white border border-gray-200 rounded-lg shadow-sm text-center hover:shadow-lg transition duration-300 ease-in-out h-full">
			<h5 class="mb-2 text-3xl font-semibold tracking-tight text-gray-900">{icon}</h5>
			<h5 class="mb-2 text-3xl font-semibold tracking-tight text-gray-900">{title}</h5>
			<p class="mb-3 font-normal text-base text-gray-500 dark:text-gray-400">{description}</p>
		</div>
	)
}

export function PricingCard(props) {
	const { name, price, desc, badgeColor, item } = props;
	return (
		<div class="w-full max-w-sm p-4 lg:max-w-2xs bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 ">
			<span class={`${badgeColor} text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm mb-5`}>{name}</span>
			<div class="flex items-baseline text-gray-900 mb-3 mt-2">
				<span class="text-3xl font-extrabold tracking-tight">{price}</span>
			</div>
			<h5 class="mb-5 text-xl font-medium text-gray-500 dark:text-gray-400 ">{desc}</h5>
			<button type="button"
				class="text-white bg-[#127FBF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200  dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
					Pilih
			</button>
			<hr className="border mt-5 opacity-10"/>
			<ul role="list" class="space-y-5 my-7">
				{item.map((item, index) => (
					<li key={index}  class="flex items-center">
						<svg class="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
						</svg>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{item}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

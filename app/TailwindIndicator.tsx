
const TailwindIndicator = () => {
	if(process.env.NODE_ENV === 'production') 
		return null
	return (
		<div>
			<div
				className="
					fixed
					top-1
					left-1
					z-50
					flex
					size-6
					items-center
					justify-center
					rounded-full
					bg-gray-800
					p-3
					font-mono
					text-xs
					text-white
				"
			>
				<div className="block sm:hidden">xs</div>
				<div className="sm:block hidden md:hidden">sm</div>
				<div className="md:block hidden lg:hidden">md</div>
				<div className="lg:block hidden xl:hidden">lg</div>
				<div className="xl:block hidden 2xl:hidden">xl</div>
				<div className="2xl:block hidden">2xl</div>
			</div>
		</div>
	)
}

export default TailwindIndicator

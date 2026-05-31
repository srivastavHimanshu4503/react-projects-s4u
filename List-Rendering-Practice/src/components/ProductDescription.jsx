const ProductDescription = ({ desc }) => {
    return (
		<div className="flex flex-col items-start w-[90vw] py-2">
			<div className="text-white flex justify-start">
				{desc.title}
			</div>
			<p className="text-[0.8rem] text-gray-500">
				⭐{desc.rating} | {desc.reviews}
			</p>
			<div className="text-[0.8rem]">
				{desc.details.map((detail, index) => {
					return (
						<div
							className="flex justify-start"
							key={index}
						>
							{detail}
						</div>
					);
				})}
			</div>
			<p className="text-green-300 text-[0.8rem]">{desc.offers.exchangeOffer}</p>
			<p className="text-green-500 text-[0.8rem]">{desc.offers.bankOffer}</p>
		</div>
	);
}

export default ProductDescription
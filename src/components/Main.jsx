//- React
import React from "react"

export function MenuList({
	option
}) {
	return (
		<p className="inline text-white opacity-60 cursor-pointer hover:opacity-100 transition duration-300 active:opacity-20">
			{option}
		</p>
	)
}

export function MenuOrder({
	category,
	itemCol1 = [],
	itemCol2 = []
}) {
	const formatPrice = (price = 0) => `R$ ${price.toFixed(2).replace(".", ",")}`

	return (
		<details open className="mx-auto w-10/12 bg-gray-900 pt-9 pb-9">
			<summary className="text-white text-lg font-bold mb-4 cursor-pointer">
				{category}
			</summary>

			<table className="mx-auto w-10/12 text-gray-400">
				<tbody>
					{itemCol1.map((item, index) => (
						<tr key={index} className="flex">

							<td className="flex items-start flex-1 p-4 cursor-pointer border-2 border-slate-800 hover:bg-gradient-to-r from-gray-800 via-gray-800 to-transparent">
								<img src={item.image} alt={item.description} className="w-24 h-24 object-cover rounded-xl mr-4" />
								<div>
									<th className="uppercase">
										{item.description}
									</th>
									<p className="text-xs">
										{item.text}
									</p>
									<i className="text-green-400">
										{formatPrice(item.price)}
									</i>
								</div>
							</td>

							<td className="flex items-start flex-1 p-4 cursor-pointer border-2 border-slate-800 hover:bg-gradient-to-r from-gray-800 via-gray-800 to-transparent">
								{itemCol2[index] && (
									<React.Fragment>
										<img src={itemCol2[index].image} alt={itemCol2[index].description} className="w-24 h-24 object-cover rounded-xl mr-4" />
										<div>
											<th className="uppercase">
												{itemCol2[index].description}
											</th>
											<p className="text-xs">
												{itemCol2[index].text}
											</p>
											<i className="text-green-400">
												{formatPrice(itemCol2[index].price)}
											</i>
										</div>
									</React.Fragment>
								)}
							</td>

						</tr>
					))}
				</tbody>
			</table>
		</details >
	)
}

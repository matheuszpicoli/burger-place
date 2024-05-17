//- React
import React, { useState } from "react"
import Modal from "./Modal"

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
	const [selectedItemCol1, setSelectedItemCol1] = useState(null)
	const toggleModalCol1 = item => setSelectedItemCol1(item)

	const [selectedItemCol2, setSelectedItemCol2] = useState(null)
	const toggleModalCol2 = item => setSelectedItemCol2(item)

	const formatPrice = (price = 0) => `R$ ${price.toFixed(2).replace(".", ",")}`

	return (
		<React.Fragment>
			<details open className="mx-auto w-10/12 bg-stone-700 pt-9 pb-9">
				<summary className="text-white text-lg font-bold mb-4 cursor-pointer">
					{category}
				</summary>

				<table className="mx-auto w-10/12 text-gray-400">
					<tbody>
						{itemCol1.map((item, index) => (
							<tr key={index} className="flex">

								<td
									onClick={() => toggleModalCol1(item)}
									className="flex items-start flex-1 p-4 cursor-pointer border-2 border-white/20 hover:bg-gradient-to-r from-white/10 via-white/10 to-transparent"
								>
									<img
										className="w-24 h-24 object-cover rounded-xl mr-4"
										src={item.image}
										alt={item.description}
									/>
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

								<td
									onClick={() => itemCol2[index] && toggleModalCol2(itemCol2[index])}
									className="flex items-start flex-1 p-4 cursor-pointer border-2 border-white/20 hover:bg-gradient-to-r from-white/10 via-white/10 to-transparent"
								>
									{itemCol2[index] && (
										<React.Fragment>
											<img
												className="w-24 h-24 object-cover rounded-xl mr-4"
												src={itemCol2[index].image}
												alt={itemCol2[index].description}
											/>
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

			{selectedItemCol1 && (
				<Modal
					key={selectedItemCol1.id}
					title={selectedItemCol1.description}
					content={selectedItemCol1.text}
					extras={selectedItemCol1.extras}
				/>
			)}
			{selectedItemCol2 && (
				<Modal
					key={selectedItemCol2.id}
					title={selectedItemCol2.description}
					content={selectedItemCol2.text}
					extras={selectedItemCol2.extras}
				/>
			)}
		</React.Fragment>
	)
}

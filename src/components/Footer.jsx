import React from "react"
import { MdLocationPin as Location } from "react-icons/md"
import { MdShoppingCart as Cart } from "react-icons/md"

export default function Footer({
	location
}) {
	return (
		<div className="fixed bottom-0 w-full backdrop-blur text-white/60 flex justify-around items-center h-8 cursor-default">
			<div className="flex items-center">
				<Location className="w-6 h-6 mr-2" />
				<i>
					{location}
				</i>
			</div>
			<a
				href=""
				className="hover:text-white transition duration-300 active:opacity-20"
			>
				<Cart className="w-6 h-6 mr-2 inline" />
				Ver carrinho
				<sup className="rounded-full p-1 m-1 font-bold">
					{/* Valor fictício, alterar depois */}
					1 item
				</sup>
			</a>
		</div>
	)
}

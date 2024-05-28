//- React
import React, { useState, useLayoutEffect } from "react"

//- React Router DOM
import { Link } from "react-router-dom"

//- React Icons
import * as Icon from "../exported/reactIcons"

//- Constants
import * as constant from "../exported/constants"

export default function Footer({
	location
}) {
	const [cartItemsCount, setCartItemsCount] = useState(0)
	const [showPopover, setShowPopover] = useState(true)

	useLayoutEffect(() => {
		const savededInCart = localStorage.getItem("cart")
		const cartItems = savededInCart ? JSON.parse(savededInCart) : []

		setCartItemsCount(cartItems.length)
	}, [])

	useLayoutEffect(() => {
		const popoverTime = setTimeout(() => setShowPopover(false), 5000)

		return () => clearTimeout(popoverTime)
	}, [])

	return (
		<div className="fixed bottom-0 w-full backdrop-blur text-white/60 flex justify-around items-center h-8 cursor-default">
			<div className={`
				${constant.isOpen && cartItemsCount > 0 ? "sm:hidden" : ""}
				flex items-center
			`}>
				<Icon.Location className="w-6 h-6 mr-2 sm:hidden" />
				<i className="sm:text-xs">{location}</i>
			</div>

			{constant.isOpen && cartItemsCount > 0 && (
				<React.Fragment>
					{showPopover && (
						<div className="fixed bottom-10 bg-white right-32 text-black p-3 rounded-l rounded-r bg-opacity-60 animate-fade-in md:hidden sm:hidden">
							Seus pedidos aparecem aqui
						</div>
					)}
					<Link
						to={"/cart"}
						className="hover:text-white transition duration-300 active:opacity-20 animate-shake"
					>
						<Icon.ShoppingCart className="inline w-6 h-6 mr-2" />
						Ver carrinho
						<sup className="p-1 m-1 font-thin">
							{cartItemsCount === 1 ? `${cartItemsCount} item` : `${cartItemsCount} itens`}
						</sup>
					</Link>
				</React.Fragment>
			)}
		</div>
	)
}

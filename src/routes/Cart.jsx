//- React
import React, { useState, useLayoutEffect } from "react"

//- React Router DOM
import { Link } from "react-router-dom"

//- Components
import * as Header from "../components/Header"

//- React Icons
import { MdShoppingCart as ShoppingCart } from "react-icons/md"
import { IoIosCloseCircleOutline as Close } from "react-icons/io"

export default function Cart() {
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem("cart")

		return savedCart ? JSON.parse(savedCart) : []
	})

	const removeFromCart = indexToRemove => setCart(cart.filter((_, index) => index !== indexToRemove))

	useLayoutEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart))
	}, [cart])

	const maskForPrice = (price = 0) => {
		const mask = parseFloat(price).toLocaleString("pt-BR", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		})

		return `R$ ${mask}`
	}

	return (
		<div className="flex flex-col min-h-screen">
			<header className="sticky top-0 h-14 bg-stone-900 text-white flex justify-between items-center">
				<Link to={"/"}>
					<Header.Menu hasBackIcon={true} />
				</Link>
				<h1 className="mr-2 cursor-default">
					<ShoppingCart className="inline mr-2 w-6 h-6 text-red-500" />
					Carrinho
				</h1>
			</header>
			<header className="bg-gradient-to-b from-stone-700/90 to-stone-700 text-white h-16 flex flex-row justify-around items-center">
				<Header.Operation />
			</header>

			<main className="bg-stone-700 flex-grow">
				<h1 className="flex items-center justify-around text-white tracking-wide text-lg font-bold pb-4 pt-4">
					Revise seu pedido
				</h1>

				{cart.map((item, index) => {
					const totalExtras = item.extras.reduce((extraSum, extra) => extraSum + extra.price, 0)
					const totalPrice = item.price + totalExtras

					return (
						<div
							key={index}
							className="bg-white border-y-2 border-x-2 w-2/5 rounded-l rounded-r m-3 p-3 cursor-default hover:bg-gradient-to-r from-black/10 via-black/10 to-transparent animate-fade-in"
						>
							<h2 className="uppercase tracking-wide font-bold flex justify-between">
								{item.description}

								<button
									onClick={() => removeFromCart(index)}
									className="text-red-600 opacity-60 hover:opacity-100 transition duration-300"
								>
									<Close className="inline w-5 h-5" />
									<span className="text-xs ml-1 align-middle italic">
										Remover item
									</span>
								</button>
							</h2>

							<p className="text-green-600">
								{maskForPrice(totalPrice)}
							</p>
							<small>
								{item.extras.map((extra, index) => {
									let displayName = extra.name

									if (index > 0) displayName = displayName.charAt(0).toLowerCase().concat(displayName.slice(1))

									return (
										<span
											key={index}
											className="inline"
										>
											{displayName}{index !== item.extras.length - 1 ? ", " : "."}
										</span>
									)
								})}
							</small>
							<div className="p-px bg-slate-300 mt-1 mb-1 rounded-l rounded-r"></div>
							<small className="block">
								Total de extras: <span className="text-yellow-600">{maskForPrice(totalExtras)}</span>
							</small>
						</div>
					)
				})}
			</main>
		</div>
	)
}

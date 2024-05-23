//- React
import React, { useState, useLayoutEffect } from "react"

//- React Router DOM
import { Link } from "react-router-dom"

//- Components
import * as Header from "../components/Header"
import Form from "../components/Form"

//- React Icons
import { MdShoppingCart as ShoppingCart } from "react-icons/md"
import { IoIosCloseCircleOutline as Close } from "react-icons/io"
import { GoPencil as Pencil } from "react-icons/go"
import { IoIosCheckmarkCircleOutline as Confirm } from "react-icons/io"

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
		<React.Fragment>
			<header className="sticky top-0 h-14 bg-stone-900 text-white flex justify-between items-center z-10">
				<Link to={"/"}>
					<Header.Menu hasBackIcon={true} />
				</Link>
				<h1 className="mr-6 cursor-default">
					<ShoppingCart className="inline mr-2 w-6 h-6 text-red-500" />
					<span className="font-semibold align-middle">
						Carrinho
					</span>
				</h1>
			</header>
			<header className="bg-gradient-to-b from-stone-700/90 to-stone-700 text-white h-16 flex flex-row justify-around items-center z-10">
				<Header.Operation />
			</header>

			<main className="bg-stone-700 flex flex-row min-h-screen flex-grow">

				<div className="flex flex-col w-1/4">
					<h1 className="flex items-center ml-3 w-full text-white tracking-wide text-lg font-bold pb-4 pt-4 cursor-default">
						<Pencil className="inline w-5 h-5" />
						<span className="align-middle ml-1">
							Revise seu pedido
						</span>
					</h1>

					{cart.map((item, index) => {
						const totalExtras = item.extras.reduce((extraSum, extra) => extraSum + extra.price, 0)

						return (
							<div
								key={index}
								className="flex flex-col bg-white border-y-2 border-x-2 rounded-l rounded-r m-3 p-3 cursor-default hover:bg-gradient-to-b from-black/10 via-black/10 to-transparent animate-fade-in"
							>
								<h2 className="uppercase tracking-wide font-medium flex justify-between">
									{item.description}

									<button
										onClick={() => removeFromCart(index)}
										className="text-red-600 opacity-60 hover:opacity-100 active:opacity-60 transition duration-300"
									>
										<Close className="inline w-5 h-5" />
										<span className="text-xs ml-1 align-middle italic">
											Remover
										</span>
									</button>
								</h2>

								<p className="text-green-600 font-semibold">
									{maskForPrice(item.price)}
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
								{totalExtras !== 0 && (
									<small className="block font-medium">
										Complementos: <span className="text-yellow-600 underline">{maskForPrice(totalExtras)}</span>
									</small>
								)}
								{item.observation && (
									<small>
										<span className="font-medium">Observações do pedido: </span>{item.observation}
									</small>
								)}
							</div>
						)
					})}
				</div>

				<div className="flex flex-col w-9/12">
					<h1 className="flex items-center ml-3 text-white tracking-wide text-lg font-bold pb-4 pt-4 cursor-default">
						<Confirm className="inline w-5 h-5" />
						<span className="align-middle ml-1">
							Complete seu pedido
						</span>
					</h1>

					<Form />
				</div>
			</main>
		</React.Fragment>
	)
}

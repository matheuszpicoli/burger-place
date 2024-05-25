//- React
import React, { useState, useLayoutEffect } from "react"

//- React Router DOM
import { Link } from "react-router-dom"

//- Components
import * as Header from "../components/Header"
import Form from "../components/Form"

//- React Icons
import * as Icon from "../exported/reactIcons"

//- Constants
import * as constant from "../exported/constants"

export default function Cart() {
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem("cart")

		return savedCart ? JSON.parse(savedCart) : []
	})

	const removeFromCart = indexToRemove => setCart(cart.filter((_, index) => index !== indexToRemove))

	useLayoutEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart))
	}, [cart])

	return (
		!constant.isOpen ? (
			<React.Fragment>
				<header className="sticky top-0 h-14 bg-stone-900 text-white flex justify-between items-center z-10">
					<Link to={"/"}>
						<Header.Menu hasBackIcon={true} />
					</Link>
					<h1 className="mr-6 cursor-default">
						<Icon.ShoppingCart className="inline mr-2 w-6 h-6 text-red-500" />
						<span className="font-semibold align-middle">
							Carrinho
						</span>
					</h1>
				</header>
				<header className="bg-gradient-to-b from-stone-700/90 to-stone-700 text-white h-16 flex flex-row justify-around items-center z-10">
					<Header.Operation />
				</header>

				<main className="bg-stone-700 flex flex-row min-h-screen flex-grow">

					{cart.length <= 0 ? (
						<div className="flex justify-center w-full animate-fade-in">
							<h1 className="text-white tracking-wide text-2xl font-bold pt-4 cursor-default">
								<Icon.ShoppingCart className="inline w-7 h-7" />
								<span className="align-middle ml-1">
									Seu carrinho está vazio
								</span>
							</h1>
						</div>
					) : (
						<React.Fragment>
							<div className="flex flex-col w-1/4">
								<h1 className="flex items-center ml-3 w-full text-white tracking-wide text-lg font-bold pb-4 pt-4 cursor-default">
									<Icon.Pencil className="inline w-5 h-5" />
									<span className="align-middle ml-1">
										Revise seu pedido
									</span>
								</h1>

								{cart.map((item, index) => {
									const totalExtras = item.extras.reduce((acc, extra) => acc + extra.price, 0)

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
													<Icon.Close className="inline w-5 h-5" />
													<span className="text-xs ml-1 align-middle italic">
														Remover
													</span>
												</button>
											</h2>

											<p className="text-green-600 font-semibold">
												{constant.maskForPrice(item.price)}
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
													Complementos: <span className="text-yellow-600 underline">{constant.maskForPrice(totalExtras)}</span>
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
									<Icon.Confirm className="inline w-5 h-5" />
									<span className="align-middle ml-1">
										Complete seu pedido
									</span>
								</h1>

								<Form
									cart={cart}
									setCart={setCart}
								/>
							</div>
						</React.Fragment>
					)}
				</main>
			</React.Fragment>
		) : (
			<div className="absolute inset-0 flex justify-center items-center text-yellow-500 bg-stone-900 cursor-default">

				<div className="fixed top-3 left-3">
					<Link to={"/"}>
						<button className="hover:text-white transition duration-300">
							<Icon.Back className="inline w-4 h-4 mr-1" />
							<span className="align-middle">
								Clique aqui para voltar
							</span>
						</button>
					</Link>
				</div>

				<Icon.Alert className="inline w-10 h-10 mr-1" />
				<span className="text-2xl">
					Indisponível no momento
					<small className="text-white block text-sm">
						A página estará disponível assim que o estabelecimento abrir, às {constant.openingTime}h.
					</small>
				</span>

			</div>
		)
	)
}

//- React
import React, { useState, useLayoutEffect } from "react"

//- React Icon
import * as Icon from "../exported/reactIcons"

//- Constants
import * as constant from "../exported/constants"

export function Order({
	description,
	text,
	extras,
	price
}) {
	const [modalOpen, setModalOpen] = useState(true)
	const [totalPrice, setTotalPrice] = useState(price)
	const [selectedExtras, setSelectedExtras] = useState([])
	const [observation, setObservation] = useState("")

	const [cart, setCart] = useState(() => {
		const savededInCart = localStorage.getItem("cart")

		return savededInCart ? JSON.parse(savededInCart) : []
	})

	const toggleModalState = () => setModalOpen(!modalOpen)

	useLayoutEffect(() => {
		if (modalOpen) document.body.style.overflow = "hidden"
		else document.body.style.overflow = "unset"
	}, [modalOpen])

	useLayoutEffect(() => {
		const esc = event => {
			if (event.code === "Escape") toggleModalState()
		}

		window.addEventListener("keydown", esc)

		return () => window.removeEventListener("keydown", esc)
	}, [])

	useLayoutEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart))
	}, [cart])

	const handleCheckbox = (event, extraPrice, extraItem) => {
		if (event.target.checked) {
			setTotalPrice(previousPrice => previousPrice + extraPrice)
			setSelectedExtras([...selectedExtras, extraItem])
		} else {
			setTotalPrice(previousPrice => previousPrice - extraPrice)
			setSelectedExtras(selectedExtras.filter(item => item !== extraItem))
		}
	}

	const addToCart = () => {
		const newItem = {
			description,
			text,
			extras: selectedExtras,
			price: totalPrice,
			observation
		}

		setCart([...cart, newItem])
		toggleModalState()
	}

	return (
		modalOpen && (
			<React.Fragment>
				<div className="fixed inset-0 backdrop-blur-sm z-20"></div>
				<dialog open
					className="rounded-xl bg-slate-200 border-y-2 border-x-2 border-black outline-none fixed inset-0 flex items-center justify-center h-3/4 w-1/2 z-30 animate-modal md:w-3/4 sm:w-11/12 sm:h-5/6"
				>
					<div className="bg-transparent m-5 p-5 cursor-default overflow-y-auto h-5/6 border-y-2 border-x-2 border-slate-300 rounded-l rounded-r w-full">
						<h1 className="font-bold text-center uppercase mb-6">{description}</h1>
						<p className="text-left text-sm">{text}</p>

						<div className="p-px bg-slate-300 mt-6 mb-6"></div>

						<h1 className="font-bold uppercase m-4 text-center">Opções / Acréscimos</h1>

						{description.toLowerCase().trim() === "cerveja" && (
							<p className="text-sm text-center mt-4 text-red-500 font-bold">
								Não vendemos bebidas alcoólicas para menores de 18 anos.
								<span className="block mb-4 text-xs text-red-600 italic">
									Decreto – Lei Nº 3688/41.
								</span>
							</p>
						)}

						{extras
							.slice()
							.sort((extraToOrder, extraOrdered) => extraToOrder.name.localeCompare(extraOrdered.name))
							.map((extraItem, index) => (
								<React.Fragment key={index}>
									<div className="flex items-center justify-between">
										<div>
											<input
												type="checkbox"
												id={`extra-${index}`}
												name={`extra-${index}`}
												className="m-2 cursor-pointer w-3.5 h-3.5 accent-stone-400"
												onChange={event => handleCheckbox(event, extraItem.price, extraItem)}
											/>
											<label
												htmlFor={`extra-${index}`}
												className="text-sm italic cursor-pointer"
											>
												{extraItem.name.trim()}
											</label>
										</div>
										{extraItem.price > 0 && (
											<div className="italic text-sm font-medium text-green-400 hover:text-green-600 transition duration-300">
												{constant.maskForPrice(extraItem.price)}
											</div>
										)}
										{extraItem.price === 0 && (
											<div className="italic text-sm font-medium text-gray-400 hover:text-gray-600 transition duration-300">
												Não altera o valor
											</div>
										)}
										{extraItem.price < 0 && (
											<div className="italic text-sm font-medium text-red-400 hover:text-red-600 transition duration-300">
												{constant.maskForPrice(extraItem.price)}
											</div>
										)}
									</div>
									<div className="p-px mb-1 mt-1 bg-slate-300"></div>
								</React.Fragment>
							))}

						<div className="flex items-center mt-5">
							<Icon.Pencil className="text-slate-700 w-6 h-6" />
							<input
								type="text"
								placeholder="Alguma observação?"
								value={observation}
								onChange={event => setObservation(event.target.value)}
								className="ml-2 p-2 border-b-2 border-slate-700 bg-slate-300 rounded-sm w-full text-sm outline-none cursor-pointer hover:opacity-60 active:opacity-100 transition duration-300"
							/>
						</div>

						<div className="flex justify-between mt-5">

							<span className="text-lg font-medium">
								{constant.maskForPrice(totalPrice)}
							</span>

							<div className="flex items-end">
								<button
									onClick={toggleModalState}
									className="text-red-600 opacity-60 hover:opacity-100 transition duration-300"
								>
									<Icon.Close className="inline w-6 h-6" />
									<span className="align-middle italic">
										Cancelar
									</span>
								</button>
								{constant.isOpen && (
									<button
										onClick={() => {
											addToCart()
											window.location.reload()
										}}
										className="ml-6 mr-3 text-green-600 opacity-60 hover:opacity-100 transition duration-300"
									>
										<Icon.Confirm className="inline w-6 h-6" />
										<span className="align-middle italic">
											Adicionar ao carrinho
										</span>
									</button>
								)}
							</div>

						</div>
					</div>
				</dialog>
			</React.Fragment>
		)
	)
}

export function OfficeHour({
	modalOpen,
	setModalOpen
}) {
	const toggleModalState = () => setModalOpen(false)

	useLayoutEffect(() => {
		if (modalOpen) document.body.style.overflow = "hidden"
		else document.body.style.overflow = "unset"
	}, [modalOpen])

	useLayoutEffect(() => {
		const esc = event => {
			if (event.code === "Escape") toggleModalState()
		}

		window.addEventListener("keydown", esc)

		return () => window.removeEventListener("keydown", esc)
	}, [])

	return (
		modalOpen && (
			<React.Fragment>
				<div className="fixed inset-0 backdrop-blur-sm z-20"></div>
				<dialog open
					className="rounded-xl bg-slate-200 border-y-2 border-x-2 border-black outline-none fixed inset-0 flex items-center justify-center h-3/4 w-1/2 z-30 animate-modal sm:w-11/12 sm:h-5/6"
				>
					<div className="bg-transparent m-5 p-5 cursor-default overflow-y-auto h-5/6 border-y-2 border-x-2 border-slate-300 rounded-l rounded-r w-full">
						<section>
							<h1 className="font-bold text-center uppercase mb-6">
								Horário de funcionamento
							</h1>
							<span><b>Todos os dias</b> das {constant.openingTime}h às {constant.closingTime}h</span>
							<div className="p-px mb-4 mt-4 bg-slate-300"></div>
						</section>

						<section>
							<h2 className="font-bold text-center uppercase mb-6">
								Opções de entrega
							</h2>

							<div>
								<Icon.Motorcycle className="inline mr-1 w-5 h-5" />
								<span className="mr-3 align-middle">Delivery</span>

								<Icon.Local className="inline mr-1 w-5 h-5" />
								<span className="mr-3 align-middle">No local</span>
							</div>
							<div className="p-px mb-4 mt-4 bg-slate-300"></div>
						</section>

						<section>
							<h2 className="font-bold text-center uppercase mb-6">
								Formas de pagamento
							</h2>

							<div>
								<Icon.Money className="inline mr-1 w-5 h-5" />
								<span className="mr-3 align-middle">Dinheiro</span>

								<Icon.Card className="inline mr-1 w-5 h-5" />
								<span className="mr-3 align-middle">Cartão</span>

								<Icon.Pix className="inline mr-1 w-5 h-5" />
								<span className="mr-3 align-middle">Pix</span>
							</div>

							<div>
								<small>Pedido mínimo <span className="text-green-700">R$20,00</span></small>
							</div>
							<div className="p-px mb-4 mt-4 bg-slate-300"></div>
						</section>

						<section>
							<h2 className="font-bold text-center uppercase mb-6">
								Estabelecimento
							</h2>

							<p><b>Razão Social:</b> MP Burger</p>
							<p><b>CNPJ:</b> <i>{constant.maskForCNPJ(67492404000110)}</i></p>
							<div className="p-px mb-4 mt-4 bg-slate-300"></div>
						</section>

						<div className="flex justify-center mt-5">
							<button
								onClick={toggleModalState}
								className="text-red-600 opacity-60 hover:opacity-100 transition duration-300"
							>
								<Icon.Close className="w-6 h-6 inline" />
								<span className="align-middle italic">
									Fechar
								</span>
							</button>
						</div>
					</div>
				</dialog>
			</React.Fragment>
		)
	)
}

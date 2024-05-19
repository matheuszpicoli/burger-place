//- React
import React, { useState, useLayoutEffect } from "react"

//- React Icon
import { IoIosCloseCircleOutline as Close } from "react-icons/io";
import { IoIosCheckmarkCircleOutline as Confirm } from "react-icons/io"
import { GoPencil as Pencil } from "react-icons/go"

import { PiMotorcycleFill as Motorcycle } from "react-icons/pi"
import { PiGarage as Local } from "react-icons/pi"
import { MdOutlineAttachMoney as Money } from "react-icons/md"
import { FaCreditCard as Card } from "react-icons/fa"
import { FaPix as Pix } from "react-icons/fa6"

export function Order({
	description,
	text,
	extras,
	price
}) {
	const [modalOpen, setModalOpen] = useState(true)

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

	const date = new Date()
	const hours = date.getHours()

	const openingTime = 18
	const closingTime = 23

	const isOpen = hours >= openingTime && hours < closingTime

	return (
		modalOpen && (
			<React.Fragment>
				<div className="fixed inset-0 backdrop-blur-sm z-10"></div>
				<dialog open
					className="rounded-xl bg-slate-200 border-y-2 border-x-2 border-black outline-none animate-modal fixed inset-0 flex items-center justify-center h-3/4 w-1/2 z-20"
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

						{extras.slice().sort().map((extraItem, index) => (
							<React.Fragment>
								<div key={index} className="flex items-center">
									<input
										type="checkbox"
										id={`extra-${index}`}
										name={`extra-${index}`}
										className="m-2 cursor-pointer w-4 h-4 accent-green-400"
									/>
									<label
										htmlFor={`extra-${index}`}
										className="text-sm italic cursor-pointer"
									>
										{extraItem.trim()}
									</label>
								</div>
								<div className="p-px mb-1 mt-1 bg-slate-300"></div>
							</React.Fragment>
						))}

						<div className="flex items-center mt-5">
							<Pencil className="text-slate-700 w-6 h-6" />
							<input
								type="text"
								placeholder="Alguma observação?"
								className="ml-2 p-2 border-b-2 border-slate-700 bg-slate-300 rounded-sm w-full text-sm outline-none cursor-pointer hover:opacity-60 active:opacity-100 transition duration-300"
							/>
						</div>

						<div className="flex justify-between mt-5">

							<span className="text-lg font-bold">
								{`R$${price.toFixed(2).replace(".", ",")}`}
							</span>

							<div>
								<button
									onClick={toggleModalState}
									className="text-red-600 opacity-60 hover:opacity-100 transition duration-300"
								>
									<Close className="w-6 h-6 inline" />
									<span className="align-middle italic">
										Cancelar
									</span>
								</button>
								{isOpen && (
									<button
										onClick={toggleModalState}
										className="ml-6 mr-3 text-green-600 opacity-60 hover:opacity-100 transition duration-300"
									>
										<Confirm className="w-6 h-6 inline" />
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

	const openingTime = 18
	const closingTime = 23

	const maskForCNPJ = cnpj => {
		const mask = /^([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})([0-9]{2})$/

		return cnpj.replace(mask, "$1.$2.$3/$4-$5")
	}

	const CNPJ = "67492404000110"

	return (
		modalOpen && (
			<React.Fragment>
				<div className="fixed inset-0 backdrop-blur-sm z-10"></div>
				<dialog open
					className="rounded-xl bg-slate-200 border-y-2 border-x-2 border-black outline-none animate-modal fixed inset-0 flex items-center justify-center h-3/4 w-1/2 z-20"
				>
					<div className="bg-transparent m-5 p-5 cursor-default overflow-y-auto h-5/6 border-y-2 border-x-2 border-slate-300 rounded-l rounded-r w-full">
						<section>
							<h1 className="font-bold text-center uppercase mb-6">
								Horário de funcionamento
							</h1>
							<b>DOM, SEG, TER, QUA, QUI, SEX, SAB</b>
							<p>Das {openingTime}h às {closingTime}h</p>
							<div className="p-px mb-4 mt-4 bg-slate-300"></div>
						</section>

						<section>
							<h2 className="font-bold text-center uppercase mb-6">
								Opções de entrega
							</h2>

							<div>
								<Motorcycle className="inline mr-1 w-5 h-5" />
								<span className="mr-3 align-middle">Delivery</span>

								<Local className="inline mr-1 w-5 h-5" />
								<span className="mr-3 align-middle">No local</span>
							</div>
							<div className="p-px mb-4 mt-4 bg-slate-300"></div>
						</section>

						<section>
							<h2 className="font-bold text-center uppercase mb-6">
								Formas de pagamento
							</h2>

							<div>
								<Money className="inline mr-1 w-5 h-5" />
								<span className="mr-3 align-middle">Dinheiro</span>

								<Card className="inline mr-1 w-5 h-5" />
								<span className="mr-3 align-middle">Cartão</span>

								<Pix className="inline mr-1 w-5 h-5" />
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
							<p><b>CNPJ:</b> <i>{maskForCNPJ(CNPJ)}</i></p>
							<div className="p-px mb-4 mt-4 bg-slate-300"></div>
						</section>

						<div className="flex justify-center mt-5">
							<button
								onClick={toggleModalState}
								className="text-red-600 opacity-60 hover:opacity-100 transition duration-300"
							>
								<Close className="w-6 h-6 inline" />
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

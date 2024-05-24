//- React
import React, { useState, useLayoutEffect } from "react"

//- React Icons
import { IoIosCheckmarkCircleOutline as Confirm } from "react-icons/io"
import { LuAsterisk as Required } from "react-icons/lu"

export default function Form({
	cart
}) {
	const [dataForm, setDataForm] = useState({
		name: "",
		address: "",
		local: false,
		zipCode: "",
		neighborhood: "",
		number: "",
		referencePoint: "",
		complement: "",
		formOfPayment: "",
		order: []
	})

	const [error, setError] = useState(false)

	useLayoutEffect(() => {
		const orders = cart.map(item => {
			let order = {
				description: item.description,
				price: item.price
			}

			if (item.extras.length > 0) order.extras = item.extras.map(extra => extra.name)
			if (item.observation) order.observation = item.observation

			return order
		})

		setDataForm(prevForm => ({
			...prevForm, order: orders
		}))
	}, [cart])

	const handleValue = event => {
		const {
			name,
			type,
			value
		} = event.target

		const onlyNumber = new RegExp(/\D/gi)

		const mask = {
			zipCode: new RegExp(/^([0-9]{5})([0-9])/),
			number: new RegExp(/\B(?=([0-9]{3})+(?![0-9]))/g)
		}

		let finalValue = type === "checkbox" ? event.target.checked : value

		switch (name) {
			case "zipCode":
				finalValue = finalValue.replace(onlyNumber, "")
				finalValue = finalValue.replace(mask.zipCode, "$1-$2")
				break
			case "number":
				finalValue = finalValue.replace(onlyNumber, "")
				finalValue = finalValue.replace(mask.number, ".")
				break
		}

		setDataForm(data => ({
			...data, [name]: finalValue
		}))
	}

	const handleSubmit = event => {
		event.preventDefault()

		if (
			(!dataForm.address && !dataForm.local) ||
			(!dataForm.zipCode && !dataForm.local) ||
			(!dataForm.neighborhood && !dataForm.local) ||
			(!dataForm.number && !dataForm.local) ||
			(!dataForm.complement && !dataForm.local) ||
			!dataForm.name ||
			!dataForm.formOfPayment
		) {
			setError(true)

			setTimeout(() => setError(false), 5000)
		}
		else {
			console.log(dataForm)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			{error && (
				<div className="fixed top-16 right-6 bg-red-500 text-white font-bold p-3 rounded-l rounded-r cursor-default animate-fade-in">
					Há campos obrigatórios que não foram preenchidos.
				</div>
			)}
			<div className="p-3 m-3 bg-white border-y-2 border-x-2 rounded-l rounded-r animate-fade-in">
				<section className="flex">

					<div className="items-center flex-grow">
						<label
							htmlFor="name"
							className="font-medium"
						>
							Procuramos por quem?
							<Required className="inline text-red-500 w-3 h-3 align-top" />
						</label>
						<input
							type="text"
							className="mt-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow w-full"
							id="name"
							name="name"
							placeholder="Nome"
							onChange={handleValue}
						/>
					</div>

				</section>
			</div>

			<div className="p-3 m-3 bg-white border-y-2 border-x-2 rounded-l rounded-r animate-fade-in">
				<section className="flex">

					<div className="items-center flex-grow">
						<label
							htmlFor="address"
							className={`${dataForm.local ? "text-transparent pointer-events-none" : ""} font-medium`}
						>
							Endereço para entrega
							<Required className={`${dataForm.local ? "text-transparent" : ""} inline text-red-500 w-3 h-3 align-top`} />
						</label>

						<div className="flex items-center">
							<input
								type="text"
								className="mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent"
								id="address"
								name="address"
								placeholder="Endereço"
								onChange={handleValue}
								disabled={dataForm.local}
							/>
							<input
								type="checkbox"
								className="ml-1 w-4 h-4 accent-stone-400 cursor-pointer"
								id="local"
								name="local"
								onChange={handleValue}
							/>
							<label
								htmlFor="local"
								className="ml-1 cursor-pointer text-sm font-medium transition duration-300 hover:opacity-60 active:opacity-100"
							>
								Vou buscar no local
							</label>
						</div>

						<div className="flex">

							<div className="flex flex-col mr-2">
								<label
									htmlFor="zipCode"
									className={`${dataForm.local ? "text-transparent pointer-events-none" : ""} font-medium`}
								>
									CEP
									<Required className={`${dataForm.local ? "text-transparent" : ""} inline text-red-500 w-3 h-3 align-top`} />
								</label>
								<input
									type="text"
									className="mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow w-24 disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent"
									id="zipCode"
									name="zipCode"
									placeholder="CEP"
									value={dataForm.zipCode}
									onChange={handleValue}
									maxLength={9}
									disabled={dataForm.local}
								/>
							</div>

							<div className="flex flex-col flex-grow ml-2">
								<label
									htmlFor="neighborhood"
									className={`${dataForm.local ? "text-transparent pointer-events-none" : ""} font-medium`}
								>
									Bairro
									<Required className={`${dataForm.local ? "text-transparent" : ""} inline text-red-500 w-3 h-3 align-top`} />
								</label>
								<input
									type="text"
									className="mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 w-full disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent"
									id="neighborhood"
									name="neighborhood"
									placeholder="Bairro"
									onChange={handleValue}
									disabled={dataForm.local}
								/>
							</div>

							<div className="flex flex-col ml-2">
								<label
									htmlFor="number"
									className={`${dataForm.local ? "text-transparent pointer-events-none" : ""} font-medium`}
								>
									Número
									<Required className={`${dataForm.local ? "text-transparent" : ""} inline text-red-500 w-3 h-3 align-top`} />
								</label>
								<input
									type="text"
									className="mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow w-28 disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent"
									id="number"
									name="number"
									value={dataForm.number}
									placeholder="Número"
									onChange={handleValue}
									disabled={dataForm.local}
								/>
							</div>

						</div>

						<div className="flex items-center">
							<div className="flex flex-col flex-grow mr-2">
								<label
									htmlFor="reference-point"
									className={`${dataForm.local ? "text-transparent pointer-events-none" : ""} font-medium`}
								>
									Ponto de Referência
								</label>
								<input
									type="text"
									className="mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 w-full disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent"
									id="reference-point"
									name="referencePoint"
									placeholder="Ex.: Na rua do supermercado Bom Ver Você"
									onChange={handleValue}
									disabled={dataForm.local}
								/>
							</div>

							<div className="flex flex-col mr-2">

								<p className={`${dataForm.local ? "text-transparent pointer-events-none" : ""} cursor-default font-medium`}>
									Complemento
									<Required className={`${dataForm.local ? "text-transparent" : ""} inline text-red-500 w-3 h-3 align-top`} />
								</p>

								<div className="flex flex-row">
									<input
										type="radio"
										className="w-4 accent-stone-400 cursor-pointer disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent"
										id="house"
										value="house"
										name="complement"
										onChange={handleValue}
										disabled={dataForm.local}
									/>
									<label
										htmlFor="house"
										className={`${dataForm.local ? "text-transparent pointer-events-none" : ""} m-2 cursor-pointer text-sm font-medium`}
									>
										Casa
									</label>

									<input
										type="radio"
										className="w-4 accent-stone-400 cursor-pointer disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent"
										id="apartment"
										value="apartment"
										name="complement"
										onChange={handleValue}
										disabled={dataForm.local}
									/>
									<label
										htmlFor="apartment"
										className={`${dataForm.local ? "text-transparent pointer-events-none" : ""} m-2 cursor-pointer text-sm font-medium`}
									>
										Apartamento
									</label>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="p-3 m-3 bg-white border-y-2 border-x-2 rounded-l rounded-r animate-fade-in">
				<section className="flex">
					<div className="flex flex-col mr-2">

						<p className="font-medium">
							Forma de pagamento
							<Required className="inline text-red-500 w-3 h-3 align-top" />
						</p>

						<div className="flex flex-row">
							<input
								type="radio"
								className="w-4 accent-stone-400 cursor-pointer"
								id="money"
								value="money"
								name="formOfPayment"
								onChange={handleValue}
							/>
							<label
								htmlFor="money"
								className="m-2 cursor-pointer text-sm font-medium"
							>
								Dinheiro
							</label>

							<input
								type="radio"
								className="w-4 accent-stone-400 cursor-pointer"
								id="card"
								value="card"
								name="formOfPayment"
								onChange={handleValue}
							/>
							<label
								htmlFor="card"
								className="m-2 cursor-pointer text-sm font-medium"
							>
								Cartão
							</label>

							<input
								type="radio"
								className="w-4 accent-stone-400 cursor-pointer"
								id="pix"
								value="pix"
								name="formOfPayment"
								onChange={handleValue}
							/>
							<label
								htmlFor="pix"
								className="m-2 cursor-pointer text-sm font-medium"
							>
								Pix
							</label>
						</div>
					</div>

					<div className="flex flex-row justify-end w-full items-end">
						<button
							type="submit"
							className="text-green-600 opacity-60 hover:opacity-100 active:opacity-60 transition duration-300"
						>
							<Confirm className="inline w-5 h-5" />
							<span className="text-sm ml-1 align-middle italic">
								Confirmar Pedido
							</span>
						</button>
					</div>
				</section>
			</div>
		</form>
	)
}

//- React
import React, { useState, useLayoutEffect } from "react"

//- React Icons
import * as Icon from "../exported/reactIcons"

//- Constants
import * as constant from "../exported/constants"

export default function Form({
	cart,
	setCart
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

	const [success, setSuccess] = useState(false)
	const [error, setError] = useState("")
	const [orderLowerThanMinimumPrice, setOrderLowerThanMinimumPrice] = useState(false)
	const [buttonIsDisabled, setButtonIsDisabled] = useState(false)
	const [buttonText, setButtonText] = useState("Confirmar pedido")

	const validateForm = () => {
		let errors = []

		const orderPrice = cart.reduce((acc, item) => acc + item.price, 0)

		if (orderPrice < constant.minimumPrice) setOrderLowerThanMinimumPrice(true)

		const validations = [
			{
				condition: orderPrice < 20,
				message: ""
			},
			{
				condition: !dataForm.name,
				message: "Nome"
			},
			{
				condition: !dataForm.formOfPayment,
				message: "Forma de pagamento"
			},
			{
				condition: !dataForm.local && !dataForm.address,
				message: "Endereço"
			},
			{
				condition: !dataForm.local && (!dataForm.zipCode || dataForm.zipCode.length < 9),
				message: "CEP (precisa ter 8 caracteres)"
			},
			{
				condition: !dataForm.local && !dataForm.neighborhood,
				message: "Bairro"
			},
			{
				condition: !dataForm.local && !dataForm.number,
				message: "Número"
			},
			{
				condition: !dataForm.local && !dataForm.complement,
				message: "Complemento"
			},
		]

		validations.forEach(validation => {
			if (validation.condition) errors.push(validation.message)
		})

		return errors
	}

	const clearCart = () => setCart([])

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

		let data = dataForm

		if (dataForm.local === true) {
			data = {
				name: dataForm.name,
				formOfPayment: dataForm.formOfPayment,
				order: dataForm.order
			}
		} else {
			data = {
				name: dataForm.name,
				address: dataForm.address,
				zipCode: dataForm.zipCode,
				neighborhood: dataForm.neighborhood,
				number: dataForm.number,
				referencePoint: dataForm.referencePoint,
				complement: dataForm.complement,
				formOfPayment: dataForm.formOfPayment,
				order: dataForm.order
			}
		}

		let errors = validateForm()

		if (errors.length > 0) {
			setError(errors.join(", ").concat("."))
			setTimeout(() => setError(""), 7000)
		}
		else {
			const serverUrl = "http://localhost:3001"

			data.submittedAt = new Date().toLocaleString("pt-br")

			fetch(`${serverUrl}/orders`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			}).then(response => response.json()).then(() => {
				setSuccess(true)
				setButtonIsDisabled(true)
				setButtonText("Pedido realizado!")
				setTimeout(() => clearCart(), 7500)
			})

			setTimeout(() => setSuccess(false), 7000)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			{error.length > 0 && (
				<div className="fixed top-16 right-6 bg-red-500 text-white font-bold p-3 rounded-l rounded-r cursor-default animate-fade-in sm:right-0 md:right-0">
					<Icon.Alert className="inline w-5 h-5 mr-1" />
					<span className="align-middle">
						{orderLowerThanMinimumPrice ? (
							`O valor mínimo do pedido é de ${constant.maskForPrice(constant.minimumPrice)}`
						) : (
							<React.Fragment>
								Há campos obrigatórios que não foram preenchidos:
								<br />
								<small>
									{error}
								</small>
							</React.Fragment>
						)}
					</span>
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
							<Icon.Required className="inline text-red-500 w-3 h-3 align-top" />
						</label>
						<input
							type="text"
							className={`${dataForm.name.length === 0 ? "border-2 border-red-400" : "border-2 border-green-400"} mt-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow w-full`}
							id="name"
							name="name"
							placeholder="Seu nome ou nome de quem vai receber"
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
							<Icon.Required className={`${dataForm.local ? "text-transparent" : ""} inline text-red-500 w-3 h-3 align-top`} />
						</label>

						<div className="flex items-center">
							<input
								type="text"
								className={`
									${dataForm.address.length === 0 && !dataForm.local ? "border-2 border-red-400" : "border-2 border-green-400"}
									${dataForm.local ? "border-none" : ""}
									mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent
								`}
								id="address"
								name="address"
								placeholder="Av. Jacaré do Rio Claro"
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
									<Icon.Required className={`${dataForm.local ? "text-transparent" : ""} inline text-red-500 w-3 h-3 align-top`} />
								</label>
								<input
									type="text"
									className={`
										${dataForm.zipCode.length < 9 && !dataForm.local ? "border-2 border-red-400" : "border-2 border-green-400"}
										${dataForm.local ? "border-none" : ""}
										mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow w-24 disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent
									`}
									id="zipCode"
									name="zipCode"
									placeholder="CEP da rua"
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
									<Icon.Required className={`${dataForm.local ? "text-transparent" : ""} inline text-red-500 w-3 h-3 align-top`} />
								</label>
								<input
									type="text"
									className={`
										${dataForm.neighborhood.length === 0 && !dataForm.local ? "border-2 border-red-400" : "border-2 border-green-400"}
										${dataForm.local ? "border-none" : ""}
										mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 w-full disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent
									`}
									id="neighborhood"
									name="neighborhood"
									placeholder="Bairro da sua residência"
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
									<Icon.Required className={`${dataForm.local ? "text-transparent" : ""} inline text-red-500 w-3 h-3 align-top`} />
								</label>
								<input
									type="text"
									className={`
										${dataForm.number.length === 0 && !dataForm.local ? "border-2 border-red-400" : "border-2 border-green-400"}
										${dataForm.local ? "border-none" : ""}
										mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow w-28 disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent
									`}
									id="number"
									name="number"
									value={dataForm.number}
									placeholder="N° Casa/Apart."
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
									className={`
										${dataForm.local ? "border-none" : "border-2 border-green-400"}
										mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 w-full disabled:bg-slate-400 disabled:pointer-events-none disabled:text-transparent
									`}
									id="reference-point"
									name="referencePoint"
									placeholder={"Ex.: Na rua do supermercado \"Bom Ver Você\""}
									onChange={handleValue}
									disabled={dataForm.local}
								/>
							</div>

							<div className="flex flex-col mr-2">

								<p className={`${dataForm.local ? "text-transparent pointer-events-none" : ""} cursor-default font-medium`}>
									Complemento
									<Icon.Required className={`${dataForm.local ? "text-transparent" : ""} inline text-red-500 w-3 h-3 align-top`} />
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
							<Icon.Required className="inline text-red-500 w-3 h-3 align-top" />
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
							className="text-green-600 opacity-60 hover:opacity-100 active:opacity-60 transition duration-300 disabled:pointer-events-none"
							disabled={buttonIsDisabled}
						>
							<Icon.Confirm className="inline w-5 h-5" />
							<span className="text-sm ml-1 align-middle italic">
								{buttonText}
							</span>
						</button>
						{success && (
							<div className="fixed top-16 right-6 bg-green-500 text-white font-bold p-3 rounded-l rounded-r cursor-default animate-fade-in">
								<Icon.Confirm className="inline w-5 h-5 mr-1" />
								<span className="align-middle">
									Pedido realizado!
								</span>
							</div>
						)}
					</div>
				</section>
			</div>
		</form>
	)
}

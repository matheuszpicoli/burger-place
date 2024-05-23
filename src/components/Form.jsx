//- React
import React from "react"

//- React Icons
import { IoIosCheckmarkCircleOutline as Confirm } from "react-icons/io"

export default function Form() {
	return (
		<React.Fragment>
			<div className="p-3 m-3 bg-white border-y-2 border-x-2 rounded-l rounded-r animate-fade-in">
				<section className="flex">

					<div className="items-center flex-grow">
						<label
							htmlFor="name"
							className="font-medium"
						>
							Procuramos por quem?
						</label>
						<input
							type="text"
							className="mt-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow w-full"
							id="name"
							placeholder="Nome"
						/>
					</div>

				</section>
			</div>

			<div className="p-3 m-3 bg-white border-y-2 border-x-2 rounded-l rounded-r animate-fade-in">
				<section className="flex">

					<div className="items-center flex-grow">
						<label
							htmlFor="address"
							className="font-medium"
						>
							Endereço para entrega
						</label>

						<div className="flex items-center">
							<input
								type="text"
								className="mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow"
								id="address"
								placeholder="Endereço"
							/>
							<input
								type="checkbox"
								className="ml-1 w-4 h-4 accent-stone-400 cursor-pointer"
								id="local"
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
									htmlFor="cep"
									className="font-medium"
								>
									CEP
								</label>
								<input
									type="number"
									className="mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow w-24"
									id="cep"
									placeholder="CEP"
								/>
							</div>

							<div className="flex flex-col flex-grow ml-2">
								<label
									htmlFor="neighborhood"
									className="font-medium"
								>
									Bairro
								</label>
								<input
									type="text"
									className="mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 w-full"
									id="neighborhood"
									placeholder="Bairro"
								/>
							</div>

							<div className="flex flex-col ml-2">
								<label
									htmlFor="number"
									className="font-medium"
								>
									Número
								</label>
								<input
									type="number"
									className="mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 flex-grow w-28"
									id="number"
									placeholder="Número"
								/>
							</div>

						</div>

						<div className="flex items-center">
							<div className="flex flex-col flex-grow mr-2">
								<label
									htmlFor="reference-point"
									className="font-medium"
								>
									Ponto de Referência
								</label>
								<input
									type="text"
									className="mt-2 mb-2 pt-1 pb-1 pl-2 pr-2 rounded-l rounded-r h-7 text-xs text-black bg-slate-200 outline-none align-middle hover:opacity-80 active:opacity-100 transition duration-300 w-full"
									id="reference-point"
									placeholder="Ponto de Referência"
								/>
							</div>

							<div className="flex flex-col mr-2">

								<p className="font-medium">
									Complemento
								</p>

								<div className="flex flex-row">
									<input
										type="radio"
										className="w-4 accent-stone-400"
										id="house"
										name="complement"
									/>
									<label
										htmlFor="house"
										className="m-2 cursor-pointer text-sm font-medium"
									>
										Casa
									</label>

									<input
										type="radio"
										className="w-4 accent-stone-400"
										id="apartment"
										name="complement"
									/>
									<label
										htmlFor="apartment"
										className="m-2 cursor-pointer text-sm font-medium"
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
						</p>

						<div className="flex flex-row">
							<input
								type="radio"
								className="w-4 accent-stone-400"
								id="money"
								name="form-of-payment"
							/>
							<label
								htmlFor="money"
								className="m-2 cursor-pointer text-sm font-medium"
							>
								Dinheiro
							</label>

							<input
								type="radio"
								className="w-4 accent-stone-400"
								id="card"
								name="form-of-payment"
							/>
							<label
								htmlFor="card"
								className="m-2 cursor-pointer text-sm font-medium"
							>
								Cartão
							</label>

							<input
								type="radio"
								className="w-4 accent-stone-400"
								id="pix"
								name="form-of-payment"
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
						<button className="text-green-600 opacity-60 hover:opacity-100 active:opacity-60 transition duration-300">
							<Confirm className="inline w-5 h-5" />
							<span className="text-sm ml-1 align-middle italic">
								Confirmar Pedido
							</span>
						</button>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}

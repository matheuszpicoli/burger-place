import React, { useState, useLayoutEffect } from "react"
import { MdClose as Close } from "react-icons/md"
import { FaPencilAlt as Pencil } from "react-icons/fa"

export default function Modal({
	title,
	content,
	extras
}) {
	const [isModalOpen, setIsModalOpen] = useState(true)

	const handleClose = () => setIsModalOpen(false)

	useLayoutEffect(() => {
		isModalOpen ?
			document.body.style.overflow = 'hidden' :
			document.body.style.overflow = 'unset'
	}, [isModalOpen])

	useLayoutEffect(() => {
		const handleEsc = event => {
			if (event.code === "Escape") handleClose()
		}

		window.addEventListener('keydown', handleEsc)

		return () => window.removeEventListener('keydown', handleEsc)
	}, [])

	return (
		isModalOpen && (
			<React.Fragment>
				<div className="fixed inset-0 backdrop-blur-sm"></div>
				<dialog open
					className="rounded-xl bg-slate-200 border-y-2 border-x-2 border-black outline-none animate-modal fixed inset-0 flex items-center justify-center h-3/4 w-1/2"
				>
					<button
						onClick={handleClose}
						className="absolute top-1 left-4 text-red-600 opacity-60 hover:opacity-100 transition duration-300">
						<Close
							className="w-6 h-6 inline"
						/>
						<span className="align-middle italic">
							Fechar
						</span>
					</button>

					<div className="bg-transparent m-5 p-5 cursor-default overflow-y-auto h-5/6 border-y-2 border-x-2 border-slate-300 rounded-l rounded-r w-full">
						<h1 className="font-bold text-center uppercase mb-6">{title}</h1>
						<p className="text-left text-sm">{content}</p>

						<div className="p-px bg-slate-300 mt-6 mb-6"></div>

						<h1 className="font-bold uppercase m-4 text-center">Opções / Acréscimos</h1>

						{title.toLowerCase().trim() === "cerveja" && (
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
										className="text-sm italic"
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
								className="ml-2 p-2 border-b-2 border-slate-700 bg-slate-300 rounded-sm w-full text-sm outline-none"
							/>
						</div>
					</div>
				</dialog>
			</React.Fragment>
		)
	)
}

import React, { useState } from "react"
import { MdClose as Close } from "react-icons/md"

export default function Modal({
	title,
	content
}) {
	const [isModalOpen, setIsModalOpen] = useState(true)

	const handleClose = () => setIsModalOpen(false)

	return (
		isModalOpen && (
			<dialog open
				className="border-none outline-none text-center rounded-lg shadow-md w-10/12 fixed top-3 backdrop:bg-black-70"
			>
				<button
					onClick={handleClose}
					className="absolute right-0 text-red-700 rounded-full m-1 p-1 border-red-700 border-y-2 border-x-2">
					<Close />
				</button>

				<div className="bg-transparent m-5 p-5 cursor-default">
					<h1 className="font-bold uppercase mb-6">{title}</h1>

					<p className="text-left">{content}</p>
				</div>
			</dialog>
		)
	)
}

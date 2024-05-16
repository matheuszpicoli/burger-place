//- React
import React from "react"

//- React Icons
// import { MdLocationPin as Location } from "react-icons/md"
import { FaClock as Clock } from "react-icons/fa"

export function Menu() {
	return (
		<h1 className="font-bold text-xl">
			<span className="text-red-500">MP</span> Burger
		</h1>
	)
}

// export function Address({
// 	location
// }) {
// 	return (
// 		<React.Fragment>
// 			<Location className="text-red-500" />{location}
// 		</React.Fragment>
// 	)
// }

export function Operation() {
	const date = new Date()
	const hours = date.getHours()

	const openingTime = 18
	const closingTime = 23

	const isOpen = hours >= openingTime && hours <= closingTime

	let text = String()

	isOpen ? text = "Aberto" : text = "Fechado"

	return (
		<React.Fragment>
			<button className={`${isOpen ? "text-green-400" : "text-red-400"} bg-slate-900 h-11 p-2 rounded-lg hover:bg-opacity-70 transition duration-200 active:opacity-60`}
			//. Fazer uma funçao de modal para colocar em onClick.
			>
				{text}
			</button>
			<p>
				{isOpen && (
					<React.Fragment>
						<Clock className="inline m-2" /> <b>60-100min</b> • Mínimo <span className="text-green-400">R$20,00</span>.
					</React.Fragment>
				)}
				{!isOpen && (
					<React.Fragment>
						Abre às <span className="text-red-400">{openingTime}h</span>, fecha <span className="text-red-400">meia-noite</span>.
					</React.Fragment>
				)}
			</p>
		</React.Fragment>
	)
}

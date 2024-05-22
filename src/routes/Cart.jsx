//- React
import React from "react"

//- React Router DOM
import { Link } from "react-router-dom"

//- Components
import * as Header from "../components/Header"

//- React Icons
import { MdShoppingCart as ShoppingCart } from "react-icons/md"

export default function Cart() {
	return (
		<React.Fragment>
			<header className='sticky top-0 h-14 bg-stone-900 text-white flex justify-between items-center'>
				<Link to={"/"}>
					<Header.Menu hasBackIcon={true} />
				</Link>
				<h1 className="mr-2 cursor-default">
					<ShoppingCart className="inline mr-2 w-6 h-6" />
					Carrinho
				</h1>
			</header>
			<header className='bg-gradient-to-b from-stone-700/90 to-stone-700 text-white h-16 flex flex-row justify-around items-center'>
				<Header.Operation />
			</header>
		</React.Fragment>
	)
}

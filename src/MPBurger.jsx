//- React
import React, { useState } from 'react'

//- Tailwind CSS
import "./index.css"

//- Components
import * as Header from './components/Header'
import * as Main from './components/Main'
import Footer from './components/Footer'

//- Assets
import Orders from './assets/Orders'

function MPBurger() {
	const [foundWord, setFoundWord] = useState("")

	const filterItems = items => items.filter(item => item.description.toLowerCase().includes(foundWord.toLowerCase()))

	const address = [
		"Avenida Tocantins, 567, Vila Jardim Rio Claro, Jataí - GO. 75802-095."
	]

	return (
		<React.Fragment>
			<header className='sticky top-0 h-14 bg-stone-900 text-white flex justify-between items-center'>
				<Header.Menu />
				<Header.Search onSearch={setFoundWord} />
			</header>
			<header className='bg-gradient-to-b from-stone-700/90 to-stone-700 text-white h-16 flex flex-row justify-around items-center'>
				<Header.Operation />
			</header>

			<main className='bg-stone-700'>
				<nav className='h-10 flex justify-around items-center sticky top-14 backdrop-blur'>
					<Main.MenuList option={"Entradas"} />
					<Main.MenuList option={"Padrões"} />
					<Main.MenuList option={"Chicken"} />
					<Main.MenuList option={"Artesanais"} />
					<Main.MenuList option={"Porções"} />
					<Main.MenuList option={"Bebidas"} />
					<Main.MenuList option={"Sobremesas"} />
				</nav>

				<Main.MenuOrder
					category={"Entradas"}
					itemCol1={filterItems(Orders.appetizers.filter((_, index) => index % 2 === 0))}
					itemCol2={filterItems(Orders.appetizers.filter((_, index) => index % 2 !== 0))}
				/>

				<Main.MenuOrder
					category={"Padrões"}
					itemCol1={filterItems(Orders.standards.filter((_, index) => index % 2 === 0))}
					itemCol2={filterItems(Orders.standards.filter((_, index) => index % 2 !== 0))}
				/>
				<Main.MenuOrder
					category={"Chicken"}
					itemCol1={filterItems(Orders.chicken.filter((_, index) => index % 2 === 0))}
					itemCol2={filterItems(Orders.chicken.filter((_, index) => index % 2 !== 0))}
				/>
				<Main.MenuOrder
					category={"Artesanais"}
					itemCol1={filterItems(Orders.handmate.filter((_, index) => index % 2 === 0))}
					itemCol2={filterItems(Orders.handmate.filter((_, index) => index % 2 !== 0))}
				/>
				<Main.MenuOrder
					category={"Porções"}
					itemCol1={filterItems(Orders.portions.filter((_, index) => index % 2 === 0))}
					itemCol2={filterItems(Orders.portions.filter((_, index) => index % 2 !== 0))}
				/>
				<Main.MenuOrder
					category={"Bebidas"}
					itemCol1={filterItems(Orders.drinks.filter((_, index) => index % 2 === 0))}
					itemCol2={filterItems(Orders.drinks.filter((_, index) => index % 2 !== 0))}
				/>
				<Main.MenuOrder
					category={"Sobremesas"}
					itemCol1={filterItems(Orders.desserts.filter((_, index) => index % 2 === 0))}
					itemCol2={filterItems(Orders.desserts.filter((_, index) => index % 2 !== 0))}
				/>
			</main>

			<footer>
				<Footer location={address} />
			</footer>
		</React.Fragment>
	)
}

export default MPBurger

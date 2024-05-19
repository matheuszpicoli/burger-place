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
					items={Orders.appetizers}
					searchTerm={foundWord}
				/>
				<Main.MenuOrder
					category={"Padrões"}
					items={Orders.standards}
					searchTerm={foundWord}
				/>
				<Main.MenuOrder
					category={"Chicken"}
					items={Orders.chicken}
					searchTerm={foundWord}
				/>
				<Main.MenuOrder
					category={"Artesanais"}
					items={Orders.handmate}
					searchTerm={foundWord}
				/>
				<Main.MenuOrder
					category={"Porções"}
					items={Orders.portions}
					searchTerm={foundWord}
				/>
				<Main.MenuOrder
					category={"Bebidas"}
					items={Orders.drinks}
					searchTerm={foundWord}
				/>
				<Main.MenuOrder
					category={"Sobremesas"}
					items={Orders.desserts}
					searchTerm={foundWord}
				/>
			</main>

			<footer>
				<Footer location={address} />
			</footer>
		</React.Fragment>
	)
}

export default MPBurger

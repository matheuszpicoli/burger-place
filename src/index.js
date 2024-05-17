//- React
import React from 'react'
import ReactDOM from 'react-dom/client'

//- Tailwind CSS
import "./index.css"

//- Components
import * as Header from './components/Header'
import * as Main from './components/Main'

//- Assets
import Orders from './assets/Orders'

// const address = [
// 	"Avenida Tocantins, 567, Vila Jardim Rio Claro, Jataí - GO. 75802-095."
// ]
// const formattedAddress = address[0].split(/(\d+)/).map((formatter, index) => /\d+/.test(formatter) ? <i key={index}>{formatter}</i> : formatter)

ReactDOM.createRoot(document.getElementById("root")).render(
	<body className='container mx-auto font-sans'>

		<header className='bg-gray-800 text-white h-16 flex flex-row justify-around items-center'>
			<Header.Menu />
			{/*
				Usar no footer
				<Header.Address location={formattedAddress} />
			*/}
			<Header.Operation />
		</header>

		<main className='bg-gray-900'>
			<nav className='bg-slate-900 h-10 flex justify-around items-center sticky top-0'>
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
				itemCol1={Orders.appetizers.filter((_, index) => index % 2 === 0)}
				itemCol2={Orders.appetizers.filter((_, index) => index % 2 !== 0)}
			/>

			<Main.MenuOrder
				category={"Padrões"}
				itemCol1={Orders.standards.filter((_, index) => index % 2 === 0)}
				itemCol2={Orders.standards.filter((_, index) => index % 2 !== 0)}
			/>
			<Main.MenuOrder
				category={"Chicken"}
				itemCol1={Orders.chicken.filter((_, index) => index % 2 === 0)}
				itemCol2={Orders.chicken.filter((_, index) => index % 2 !== 0)}
			/>
			<Main.MenuOrder
				category={"Artesanais"}
				itemCol1={Orders.handmate.filter((_, index) => index % 2 === 0)}
				itemCol2={Orders.handmate.filter((_, index) => index % 2 !== 0)}
			/>
			<Main.MenuOrder
				category={"Porções"}
				itemCol1={Orders.portions.filter((_, index) => index % 2 === 0)}
				itemCol2={Orders.portions.filter((_, index) => index % 2 !== 0)}
			/>
			<Main.MenuOrder
				category={"Bebidas"}
				itemCol1={Orders.drinks.filter((_, index) => index % 2 === 0)}
				itemCol2={Orders.drinks.filter((_, index) => index % 2 !== 0)}
			/>
			<Main.MenuOrder
				category={"Sobremesas"}
				itemCol1={Orders.desserts.filter((_, index) => index % 2 === 0)}
				itemCol2={Orders.desserts.filter((_, index) => index % 2 !== 0)}
			/>
		</main>

	</body>
)

//- React
import React from 'react'
import ReactDOM from 'react-dom/client'

//- Tailwind CSS
import "./index.css"

//- Components
import * as Header from './components/Header'
import * as Main from './components/Main'

//- Imagens
import SalmonCanape from './images/appetizers/salmonCanape.jpg'
import OctopusStarter from './images/appetizers/octopusStarter.jpg'
import BreadedSausage from './images/appetizers/breadedSausage.jpg'
import sirloinWithSpecialSauce from './images/appetizers/sirloinWithSpecialSauce.jpg'
import SmallPortionOfColdCuts from './images/appetizers/smallPortionOfColdCuts.jpg'
import FriedPastry from './images/appetizers/friedPastry.jpg'

import XSalad from "./images/standards/xSalad.jpg"
import XHam from "./images/standards/xHam.jpg"
import XBacon from "./images/standards/xBacon.jpg"
import XAll from "./images/standards/xAll.jpg"

import GalisSalad from "./images/chicken/galisSalad.jpg"
import GalisHam from "./images/chicken/galisHam.jpg"
import GalisBacon from "./images/chicken/galisBacon.jpg"
import GalisAll from "./images/chicken/galisAll.jpg"

import HomeFashion from "./images/handmate/homeFashion.jpg"
import PigLover from "./images/handmate/pigLover.jpg"
import Wet from "./images/handmate/wet.jpg"
import SuperExotic from "./images/handmate/superExotic.jpg"

import BreadedShrimp from "./images/portions/breadedShrimp.jpg"
import FiletMignonWithFrenchFries from "./images/portions/filetMignonWithFrenchFries.jpg"
import ChefsFashionableFries from "./images/portions/chefsFashionableFries.jpg"
import CompleteFish from "./images/portions/completeFish.jpg"
import FullMeal from "./images/portions/fullMeal.jpg"
import IWantChicken from "./images/portions/iWantChicken.jpg"

import EnergyDrink from "./images/drinks/energyDrink.jpg"
import Soda from "./images/drinks/soda.jpg"
import Juice from "./images/drinks/juice.jpg"
import Water from "./images/drinks/water.jpg"
import Beer from "./images/drinks/beer.jpg"
import Isotonic from "./images/drinks/isotonic.jpg"

import PassionFruitMousse from "./images/desserts/passionFruitMousse.jpg"
import Pudding from "./images/desserts/pudding.jpg"

// const address = [
// 	"Avenida Tocantins, 567, Vila Jardim Rio Claro, Jataí - GO. 75802-095."
// ]
// const formattedAddress = address[0].split(/(\d+)/).map((formatter, index) => /\d+/.test(formatter) ? <i key={index}>{formatter}</i> : formatter)

const orders = {
	appetizers: [
		{ description: "Canapé de Salmão", image: SalmonCanape, text: "Pepino com uma leve camada de cream cheese e salmão.", price: 31 },
		{ description: "Entrada de Polvo", image: OctopusStarter, text: "Tentáculos de polvo rodeados com azeite e um limão siciliano, vem acompanhado de ervilha.", price: 75 },
		{ description: "Linguiça Empanada", image: BreadedSausage, text: "Linguiças empanadas e picles, acompanha batata frita e mostarda.", price: 30 },
		{ description: "Lombo ao Molho Especial", image: sirloinWithSpecialSauce, text: "Lombo suíno com o molho especial da casa, possui grãos de gergelim e uma salada de leve. Acompanha batata frita e um molho de pimenta.", price: 50 },
		{ description: "Porçãozinha de Frios", image: SmallPortionOfColdCuts, text: "Uma porção pequena com diversas variedades de frios: uva, queijo prato, salame, peito de peru, presunto e azeitona.", price: 23 },
		{ description: "Pastel", image: FriedPastry, text: "O famoso pastel frito que todos conhecem, acompanha alface e catchup.", price: 9 },
	],
	standards: [
		{ description: "X Salada", image: XSalad, text: "Para quem é vegano. Ops! Tem carne... Pão com gergelim, carne bovina, alface, tomate, picles e cebola roxa.", price: 18 },
		{ description: "X Presunto", image: XHam, text: "Para ter um gostino a mais. Pão com gergelim, carne bovina, alface, tomate, presunto, cheddar e cebola roxa.", price: 21 },
		{ description: "X Bacon", image: XBacon, text: "Esse é famoso! Pão com gergelim, carne bovina, alface, tomate, bacon, cheddar e cebola roxa.", price: 24 },
		{ description: "X Tudo", image: XAll, text: "E aí? Vai encarar? Pão com gergelim, carne bovina, alface, tomate, picles, presunto, bacon, cheddar, cebola roxa e molho especial.", price: 29 },
	],
	chicken: [
		{ description: "Galis Salada", image: GalisSalad, text: "O mais simples da família Galis... Pão com gergelim, frango, alface, tomate, muçarela, picles e cebola roxa.", price: 24 },
		{ description: "Galis Presunto", image: GalisHam, text: "O queridinho da galera. Pão com gergelim, frango, alface, tomate, picles, presunto e cheddar", price: 27 },
		{ description: "Galis Bacon", image: GalisBacon, text: "Para quem está fora da dieta. Pão com gergelim, frango, alface, tomate, bacon, cheddar, cebola branca e molho especial.", price: 31 },
		{ description: "Galis Tudo", image: GalisAll, text: "Não demos mole nesse aqui. Pão com gergelim, frango, alface, tomate, picles, cebola branca, bacon, presunto, muçarela, cheddar e gorgonzola.", price: 38 },
	],
	handmate: [
		{ description: "Moda da Casa", image: HomeFashion, text: "Nosso hambúrguer, nosso RG. Pão artesanal, carne de churrasco 300g, alface, tomate, cheddar, cebola caramelizada e molho especial", price: 48 },
		{ description: "Porco Lover", image: PigLover, text: "Para os amantes da carne de porco. Pão artesanal, carne suína 250g, alface, tomate, picles, iscas de porco, cheddar, cebola roxa e molho picante.", price: 53 },
		{ description: "Molhado", image: Wet, text: "Um hambúrguer suíno bem molhado, esse é para você que ama molho de verdade. Pão artesanal, carne suína 250g, alface, tomate, bacon, cheddar e muito molho.", price: 50 },
		{ description: "Super Exótico", image: SuperExotic, text: "Provalmente um burguer que você nunca viu. Pão artesanal, carne bovina 250g, tomate, pepino, frango, quiabo, cheddar, cebola roxa e wasabi.", price: 49 },
	],
	portions: [
		{ description: "Camarão Empanado", image: BreadedShrimp, text: "Uma porção média de camarão rosa empanado acompanhado de salada com alface e tomate, vem com limão siciliano.", price: 63 },
		{ description: "Filé Mignon com Fritas", image: FiletMignonWithFrenchFries, text: "Clássica porção de filé mignon com fritas, acompanha salada de pimentão verde e mini tomates.", price: 74 },
		{ description: "Batata Frita na Moda do Chefe", image: ChefsFashionableFries, text: "Uma batata frita caprichada, segue com diversos tipos de molhos e vem banhada com cheddar. Acompanha salada com alface, tomate, brócolis, cebola e limão.", price: 40 },
		{ description: "Peixe Completo", image: CompleteFish, text: "Deliciosa refeição de pescada acompanhada de arroz, feijão e salada.", price: 100 },
		{ description: "Refeição Completa", image: FullMeal, text: "Um verdadeiro banquete! Se você está com fome, com certeza essa é a melhor opção. Diversas variedades de saladas, frangos, pães, massas, lipídios e molhos!", price: 135 },
		{ description: "Quero Frango", image: IWantChicken, text: "Uma porção generosa de filé de frango empanado com salada de maionese do cheff e mix de folhas.", price: 110 },
	],
	drinks: [
		{ description: "Energético", image: EnergyDrink, text: "Para dar aquela acordada... Trabalhamos com TNT, Red Bull, Fusion, Monster e Reign.", price: 9 },
		{ description: "Refrigerante", image: Soda, text: "Super refrescante e sempre gelado. Temos Coca-Cola, Fanta, Guaraná, Pepsi e Sprite.", price: 11 },
		{ description: "Suco", image: Juice, text: "100% natural, fazemos na hora! Temos jarras de 300ml, 500ml e também no copo: abacaxi com hortelã, laranja, caju, graviola e acerola.", price: 11 },
		{ description: "Água", image: Water, text: "Água é sempre bom, zero calorias e tem em todo lugar. Temos água mineral natural, com gás ou tônica.", price: 3.5 },
		{ description: "Cerveja", image: Beer, text: "Que tal aquela gelada com os amigos? Se beber não dirija, tenha sempre uma carona. Temos Stella Artois, Heineken, Spaten, Original e Devassa.", price: 13 },
		{ description: "Isotônico", image: Isotonic, text: "Só temos Gatorade e Powerade, mas temos todos os sabores! É só pedir para a gente.", price: 8 },
	],
	desserts: [
		{ description: "Mousse de Maracujá", image: PassionFruitMousse, text: "Cremosa sobremesa de maracujá, todos amam! Possui blueberrys e framboesa.", price: 12 },
		{ description: "Pudim", image: Pudding, text: "Delicioso pudim de leite condensado com calda de caramelo e coco ralado por cima.", price: 10 },
	]
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<body className='container mx-auto'>
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
				itemCol1={orders.appetizers.filter((_, index) => index % 2 === 0)}
				itemCol2={orders.appetizers.filter((_, index) => index % 2 !== 0)}
			/>
			<Main.MenuOrder
				category={"Padrões"}
				itemCol1={orders.standards.filter((_, index) => index % 2 === 0)}
				itemCol2={orders.standards.filter((_, index) => index % 2 !== 0)}
			/>
			<Main.MenuOrder
				category={"Chicken"}
				itemCol1={orders.chicken.filter((_, index) => index % 2 === 0)}
				itemCol2={orders.chicken.filter((_, index) => index % 2 !== 0)}
			/>
			<Main.MenuOrder
				category={"Artesanais"}
				itemCol1={orders.handmate.filter((_, index) => index % 2 === 0)}
				itemCol2={orders.handmate.filter((_, index) => index % 2 !== 0)}
			/>
			<Main.MenuOrder
				category={"Porções"}
				itemCol1={orders.portions.filter((_, index) => index % 2 === 0)}
				itemCol2={orders.portions.filter((_, index) => index % 2 !== 0)}
			/>
			<Main.MenuOrder
				category={"Bebidas"}
				itemCol1={orders.drinks.filter((_, index) => index % 2 === 0)}
				itemCol2={orders.drinks.filter((_, index) => index % 2 !== 0)}
			/>
			<Main.MenuOrder
				category={"Sobremesas"}
				itemCol1={orders.desserts.filter((_, index) => index % 2 === 0)}
				itemCol2={orders.desserts.filter((_, index) => index % 2 !== 0)}
			/>
		</main>

	</body>
)

//- Imagens
import * as Image from "../images/Images"

const Orders = {
	appetizers: [
		{
			id: 1,
			description: "Canapé de Salmão",
			image: Image.SalmonCanape,
			text: "Pepino com uma leve camada de cream cheese e salmão.",
			price: 31,
			extras: [
				"Substituir o pepino por pão",
				"Orégano",
				"Maionese",
				"Azeite"
			]
		},
		{
			id: 2,
			description: "Entrada de Polvo",
			image: Image.OctopusStarter,
			text: "Tentáculos de polvo rodeados com azeite e um limão siciliano, vem acompanhado de ervilha.",
			price: 75,
			extras: [
				"Molho inglês",
				"Anéis de cebola",
				"Sem ervilha",
				"Sem azeite",
				"Pimenta do reino"
			]
		},
		{
			id: 3,
			description: "Linguiça Empanada",
			image: Image.BreadedSausage,
			text: "Linguiças empanadas e picles, acompanha batata frita e mostarda.",
			price: 30,
			extras: [
				"Linguiça calabresa",
				"Sem picles",
				"Substituir mostarda por catchup",
				"Batata sem óleo",
				"Substituir batata frita por mandioca"
			]
		},
		{
			id: 4,
			description: "Lombo ao Molho Especial",
			image: Image.SirloinWithSpecialSauce,
			text: "Lombo suíno com o molho especial da casa, possui grãos de gergelim e uma salada de leve. Acompanha batata frita e um molho de pimenta.",
			price: 50,
			extras: [
				"Mal passada",
				"Ao ponto",
				"Sem gergelim",
				"Sem salada",
				"Sem molho de pimenta"
			]
		},
		{
			id: 5,
			description: "Porçãozinha de Frios",
			image: Image.SmallPortionOfColdCuts,
			text: "Uma porção pequena com diversas variedades de frios: uva, queijo prato, salame, peito de peru, presunto e azeitona.",
			price: 23,
			extras: [
				"Substituir por azeitona sem caroço",
				"Substituir por uva verde",
				"Mortadela",
				"Azeitona preta",
				"Substituir por queijo provolone",
				"Palmito",
				"Ovo de codorna em conserva"
			]
		},
		{
			id: 6,
			description: "Pastel",
			image: Image.FriedPastry,
			text: "O famoso pastel frito que todos conhecem, acompanha alface e catchup. Sabores: carne, frango, presunto, queijo e camarão.",
			price: 9,
			extras: [
				"Pastel de carne",
				"Pastel de frango",
				"Pastel de presunto",
				"Pastel de queijo",
				"Pastel de camarão",
				"Sem óleo",
				"Maionese",
				"Mostarda",
				"Barbecue",
				"Molho rosé",
				"Anéis de lula",
				"Sem salada"
			]
		},
	],

	standards: [
		{
			id: 7,
			description: "X Salada",
			image: Image.XSalad,
			text: "Para quem é vegano. Ops! Tem carne... Pão com gergelim, carne bovina, alface, tomate, picles e cebola roxa.",
			price: 18,
			extras: [
				"Sem gergelim",
				"Sem picles",
				"Sem cebola",
				"Substituir por cebola branca",
				"Queijo cheddar",
				"Ovo",
				"Molho especial",
				"Banana frita"
			]
		},
		{
			id: 8,
			description: "X Presunto",
			image: Image.XHam,
			text: "Para ter um gostino a mais. Pão com gergelim, carne bovina, alface, tomate, presunto, cheddar e cebola roxa.",
			price: 21,
			extras: [
				"Sem gergelim",
				"Sem salada",
				"Substituir por cebola branca",
				"Ovo",
				"Molho especial",
				"Banana frita"
			]
		},
		{
			id: 9,
			description: "X Bacon",
			image: Image.XBacon,
			text: "Esse é famoso! Pão com gergelim, carne bovina, alface, tomate, bacon, cheddar e cebola roxa.",
			price: 24,
			extras: [
				"Sem gergelim",
				"Sem salada",
				"Substituir por cebola branca",
				"Ovo",
				"Molho especial",
				"Banana frita"
			]
		},
		{
			id: 10,
			description: "X Tudo",
			image: Image.XAll,
			text: "E aí? Vai encarar? Pão com gergelim, carne bovina, alface, tomate, picles, bacon, cheddar, cebola roxa e molho especial.",
			price: 29,
			extras: [
				"Sem gergelim",
				"Sem salada",
				"Sem molho especial",
				"Substituir por cebola branca",
				"Mais um bife",
				"Mais dois bifes",
				"Dobro de tudo",
				"Presunto",
				"Peito de peru",
				"Ovo",
				"Banana frita"
			]
		},
	],

	chicken: [
		{
			id: 11,
			description: "Galis Salada",
			image: Image.GalisSalad,
			text: "O mais simples da família Galis... Pão com gergelim, frango, alface, tomate, muçarela, picles e cebola roxa.",
			price: 24,
			extras: [
				"Sem gergelim",
				"Sem salada",
				"Substituir por cebola branca",
				"Ovo",
				"Molho especial",
				"Banana frita"
			]
		},
		{
			id: 12,
			description: "Galis Presunto",
			image: Image.GalisHam,
			text: "O queridinho da galera. Pão com gergelim, frango, alface, tomate, picles, presunto e cheddar",
			price: 27,
			extras: [
				"Sem gergelim",
				"Sem salada",
				"Acrescentar cebola",
				"Ovo",
				"Molho especial",
				"Banana frita"
			]
		},
		{
			id: 13,
			description: "Galis Bacon",
			image: Image.GalisBacon,
			text: "Para quem está fora da dieta. Pão com gergelim, frango, alface, tomate, bacon, cheddar, cebola branca e molho especial.",
			price: 31,
			extras: [
				"Sem gergelim",
				"Sem salada",
				"Sem molho especial",
				"Substituir por cebola roxa",
				"Ovo",
				"Banana frita"
			]
		},
		{
			id: 14,
			description: "Galis Tudo",
			image: Image.GalisAll,
			text: "Não demos mole nesse aqui. Pão com gergelim, frango, alface, tomate, picles, cebola branca, bacon, presunto, muçarela, cheddar e gorgonzola.",
			price: 38,
			extras: [
				"Sem gergelim",
				"Sem salada",
				"Sem muçarela",
				"Sem gorgonzola",
				"Molho especial",
				"Substituir por cebola roxa",
				"Mais um frango",
				"Mais dois frangos",
				"Dobro de tudo",
				"Peito de peru",
				"Ovo",
				"Banana frita"
			]
		},
	],

	handmate: [
		{
			id: 15,
			description: "Moda da Casa",
			image: Image.HomeFashion,
			text: "Nosso hambúrguer, nosso RG. Pão artesanal, carne de churrasco 300g, alface, tomate, cheddar, cebola caramelizada e molho especial",
			price: 48,
			extras: [
				"Pão australiano",
				"Sem salada",
				"Sem molho especial",
				"Substituir por cebola tradicional",
				"Mais um bife",
				"Mais dois bifes",
				"Bacon",
				"Ovo",
				"Banana frita"
			]
		},
		{
			id: 16,
			description: "Porco Lover",
			image: Image.PigLover,
			text: "Para os amantes da carne de porco. Pão artesanal, carne suína 250g, alface, tomate, picles, iscas de porco, cheddar, cebola roxa e molho picante.",
			price: 53,
			extras: [
				"Pão australiano",
				"Sem salada",
				"Sem molho picante",
				"Substituir por cebola caramelizada",
				"Mais um bife suíno",
				"Mais dois bifes suínos",
				"Bacon",
				"Molho especial",
				"Ovo",
				"Banana frita"
			]
		},
		{
			id: 17,
			description: "Molhado",
			image: Image.Wet,
			text: "Um hambúrguer suíno bem molhado, esse é para você que ama molho de verdade. Pão artesanal, carne suína 250g, alface, tomate, bacon, cheddar e muito molho.",
			price: 50,
			extras: [
				"Pão australiano",
				"Sem salada",
				"Sem bacon",
				"Menos molho",
				"Mais um bife suíno",
				"Mais dois bifes suínos",
				"Cebola tradicional",
				"Cebola caramelizada",
				"Ovo",
				"Banana frita"
			]
		},
		{
			id: 18,
			description: "Super Exótico",
			image: Image.SuperExotic,
			text: "Provalmente um burguer que você nunca viu na vida. Pão artesanal, carne bovina 250g, tomate, pepino, frango, quiabo, cheddar, cebola roxa e wasabi.",
			price: 49,
			extras: [
				"Pão australiano",
				"Sem salada",
				"Sem frango",
				"Sem quiabo",
				"Sem wasabi",
				"Mais um bife",
				"Mais dois bifes",
				"Mais frango",
				"Substituir por cebola tradicional",
				"Bacon",
				"Pimenta"
			]
		},
	],

	portions: [
		{
			id: 19,
			description: "Camarão Empanado",
			image: Image.BreadedShrimp,
			text: "Uma porção média de camarão rosa empanado acompanhado de salada com alface e tomate, vem com limão siciliano.",
			price: 63,
			extras: [
				"Porção grande",
				"Batata frita",
				"Mandioca",
				"Sem salada",
				"Salpicão",
				"Salada de maionese",
				"Arroz",
				"Arroz integral",
				"Feijão em calda",
				"Feijão tropeiro",
				"Postas de tilápia",
				"Vinagrete"
			]
		},
		{
			id: 20,
			description: "Filé Mignon com fritas",
			image: Image.FiletMignonWithFrenchFries,
			text: "Clássica porção de filé mignon com fritas, acompanha salada de pimentão verde e mini tomates.",
			price: 74,
			extras: [
				"Porção maior",
				"Sem salada",
				"Substituir batata frita por mandioca",
				"Substituir filé mignon por picanha",
				"Arroz",
				"Arroz integral",
				"Feijão em calda",
				"Feijão tropeiro",
				"Vinagrete",
				"Farofa",
				"Barbecue",
				"Salpicão",
				"Salada de maionese"
			]
		},
		{
			id: 21,
			description: "Batata frita na Moda do Chefe",
			image: Image.ChefsFashionableFries,
			text: "Uma batata frita caprichada, segue com diversos tipos de molhos e vem banhada com cheddar. Acompanha salada com alface, tomate, brócolis, cebola e limão.",
			price: 40,
			extras: [
				"Acrescentar queijo ralado",
				"Sem salada",
				"Sem molho",
				"Substituir cebola branca por cebola roxa",
				"Torre de batata frita",
				"Sem óleo",
				"Torresmo"
			]
		},
		{
			id: 22,
			description: "Peixe Completo",
			image: Image.CompleteFish,
			text: "Deliciosa refeição de pescada acompanhada de arroz, feijão, salada e mix de frutas com mandioca.",
			price: 100,
			extras: [
				"Mais peixe",
				"Sem arroz",
				"Sem feijão",
				"Feijão tropeiro",
				"Sem salada",
				"Sem fruta",
				"Substituir mandioca por batata frita",
				"Mais mandioca ou batata frita",
				"Sem salpicão",
				"Salada de maionese"
			]
		},
		{
			id: 23,
			description: "Refeição Completa",
			image: Image.FullMeal,
			text: "Um verdadeiro banquete! Se você está com fome, com certeza essa é a melhor opção. Diversas variedades de saladas, frangos, pães, massas, frutas e molhos!",
			price: 135,
			extras: [
				"Sem salada",
				"Mais salada",
				"Sem frango",
				"Mais frango",
				"Sem pão",
				"Mais pão",
				"Sem massa",
				"Mais massa",
				"Sem molho",
				"Mais molho",
				"Sem fruta",
				"Mais fruta"
			]
		},
		{
			id: 24,
			description: "Quero Frango",
			image: Image.IWantChicken,
			text: "Uma porção generosa de filé de frango empanado com salada de maionese do cheff e mix de folhas.",
			price: 110,
			extras: [
				"Salada de maionese tradicional",
				"Sem salada de maionese",
				"Sem salada",
				"Batata sem óleo",
				"Substituir batata frita por mandioca",
				"Porção menor",
				"Molho"
			]
		},
	],

	drinks: [
		{
			id: 25,
			description: "Energético",
			image: Image.EnergyDrink,
			text: "Para dar aquela acordada... Trabalhamos com TNT, Red Bull, Fusion, Monster e Reign.",
			price: 9,
			extras: [
				"TNT",
				"Red Bull",
				"Fusion",
				"Monster",
				"Reign"
			]
		},
		{
			id: 26,
			description: "Refrigerante",
			image: Image.Soda,
			text: "Super refrescante e sempre gelado. Temos Coca-Cola, Fanta, Guaraná, Pepsi e Sprite.",
			price: 11,
			extras: [
				"Coca-Cola",
				"Fanta",
				"Guaraná",
				"Pepsi",
				"Sprite"
			]
		},
		{
			id: 27,
			description: "Suco",
			image: Image.Juice,
			text: "100% natural, fazemos na hora! Temos jarras de 300ml, 500ml e também no copo: abacaxi com hortelã, laranja, caju, graviola e acerola.",
			price: 11,
			extras: [
				"300ml",
				"500ml",
				"Abacaxi com hortelã",
				"Laranja",
				"Caju",
				"Graviola",
				"Acerola"
			]
		},
		{
			id: 28,
			description: "Água",
			image: Image.Water,
			text: "Água é sempre bom, zero calorias e tem em todo lugar. Temos água mineral natural, com gás ou tônica.",
			price: 3.5,
			extras: [
				"Água mineral natural",
				"Água com gás",
				"Água tônica"
			]
		},
		{
			id: 29,
			description: "Cerveja",
			image: Image.Beer,
			text: "Que tal aquela gelada com os amigos? Se beber não dirija, tenha sempre uma carona. Temos Stella Artois, Heineken, Spaten, Original e Devassa.",
			price: 13,
			extras: [
				"Stella Artois",
				"Heineken",
				"Spaten",
				"Original",
				"Devassa"
			]
		},
		{
			id: 30,
			description: "Isotônico",
			image: Image.Isotonic,
			text: "Só temos Gatorade e Powerade, mas temos todos os sabores! É só pedir para a gente.",
			price: 8,
			extras: []
		},
	],

	desserts: [
		{
			id: 31,
			description: "Mousse de Maracujá",
			image: Image.PassionFruitMousse,
			text: "Cremosa sobremesa de maracujá, todos amam! Possui blueberrys e framboesa.",
			price: 12,
			extras: [
				"Sem blueberrys",
				"Sem framboesa",
				"Sem lactose"
			]
		},
		{
			id: 32,
			description: "Pudim",
			image: Image.Pudding,
			text: "Delicioso pudim de leite condensado com calda de caramelo e coco ralado por cima.",
			price: 10,
			extras: [
				"Sem coco ralado",
				"Sem calda de caramelo",
				"Sem lactose"
			]
		},
	]
}

export default Orders

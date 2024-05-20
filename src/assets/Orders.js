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
				{
					name: "Substituir o pepino por pão",
					price: -2
				},
				{
					name: "Orégano",
					price: 2.5
				},
				{
					name: "Maionese",
					price: 4
				},
				{
					name: "Azeite",
					price: 4
				}
			]
		},
		{
			id: 2,
			description: "Entrada de Polvo",
			image: Image.OctopusStarter,
			text: "Tentáculos de polvo rodeados com azeite e um limão siciliano, vem acompanhado de ervilha.",
			price: 75,
			extras: [
				{
					name: "Molho inglês",
					price: 3
				},
				{
					name: "Anéis de cebola",
					price: 4.5
				},
				{
					name: "Sem ervilha",
					price: -2
				},
				{
					name: "Sem azeite",
					price: -4
				},
				{
					name: "Pimenta do reino",
					price: 7
				}
			]
		},
		{
			id: 3,
			description: "Salsicha Empanada",
			image: Image.BreadedSausage,
			text: "Salsichas empanadas e picles, acompanha batata frita e mostarda.",
			price: 30,
			extras: [
				{
					name: "Substituir salsicha por linguiça calabresa",
					price: 4
				},
				{
					name: "Sem picles",
					price: -2.5
				},
				{
					name: "Substituir mostarda por catchup",
					price: 0
				},
				{
					name: "Batata sem óleo",
					price: 0
				},
				{
					name: "Substituir batata frita por mandioca",
					price: 3
				}
			]
		},
		{
			id: 4,
			description: "Lombo ao Molho Especial",
			image: Image.SirloinWithSpecialSauce,
			text: "Lombo suíno com o molho especial da casa, possui grãos de gergelim e uma salada de leve. Acompanha batata frita e um molho de pimenta.",
			price: 50,
			extras: [
				{
					name: "Mal passada",
					price: 0
				},
				{
					name: "Ao ponto",
					price: 0
				},
				{
					name: "Sem gergelim",
					price: -0.5
				},
				{
					name: "Sem salada",
					price: -10
				},
				{
					name: "Sem molho de pimenta",
					price: -4
				}
			]
		},
		{
			id: 5,
			description: "Porçãozinha de Frios",
			image: Image.SmallPortionOfColdCuts,
			text: "Uma porção pequena com diversas variedades de frios: uva, queijo prato, salame, peito de peru, presunto e azeitona.",
			price: 23,
			extras: [
				{
					name: "Substituir por azeitona sem caroço",
					price: 5
				},
				{
					name: "Substituir por uva verde",
					price: 2
				},
				{
					name: "Mortadela",
					price: 4
				},
				{
					name: "Azeitona preta",
					price: 8
				},
				{
					name: "Substituir por queijo provolone",
					price: 12
				},
				{
					name: "Palmito",
					price: 4
				},
				{
					name: "Ovo de codorna em conserva",
					price: 9
				}
			]
		},
		{
			id: 6,
			description: "Pastel",
			image: Image.FriedPastry,
			text: "O famoso pastel frito que todos conhecem, acompanha alface e catchup. Sabores: carne, frango, presunto, queijo e camarão.",
			price: 9,
			extras: [
				{
					name: "Pastel de carne",
					price: 0
				},
				{
					name: "Pastel de frango",
					price: 0
				},
				{
					name: "Pastel de presunto",
					price: 0
				},
				{
					name: "Pastel de queijo",
					price: 0
				},
				{
					name: "Pastel de camarão",
					price: 5.5
				},
				{
					name: "Sem óleo",
					price: 0
				},
				{
					name: "Maionese",
					price: 4
				},
				{
					name: "Mostarda",
					price: 1
				},
				{
					name: "Barbecue",
					price: 2
				},
				{
					name: "Molho rosé",
					price: 2.5
				},
				{
					name: "Anéis de lula",
					price: 17
				},
				{
					name: "Sem salada",
					price: -10
				}
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
				{
					name: "Sem gergelim",
					price: -0.5
				},
				{
					name: "Sem picles",
					price: -2.5
				},
				{
					name: "Sem cebola",
					price: -3
				},
				{
					name: "Substituir por cebola branca",
					price: -2
				},
				{
					name: "Queijo cheddar",
					price: 7
				},
				{
					name: "Ovo",
					price: 3
				},
				{
					name: "Molho especial",
					price: 1.5
				},
				{
					name: "Banana frita",
					price: 5
				}
			]
		},
		{
			id: 8,
			description: "X Presunto",
			image: Image.XHam,
			text: "Para ter um gostino a mais. Pão com gergelim, carne bovina, alface, tomate, presunto, cheddar e cebola roxa.",
			price: 21,
			extras: [
				{
					name: "Sem gergelim",
					price: -0.5
				},
				{
					name: "Sem salada",
					price: -6
				},
				{
					name: "Substituir por cebola branca",
					price: -2
				},
				{
					name: "Ovo",
					price: 3
				},
				{
					name: "Molho especial",
					price: 1.5
				},
				{
					name: "Banana frita",
					price: 5
				}
			]
		},
		{
			id: 9,
			description: "X Bacon",
			image: Image.XBacon,
			text: "Esse é famoso! Pão com gergelim, carne bovina, alface, tomate, bacon, cheddar e cebola roxa.",
			price: 24,
			extras: [
				{
					name: "Sem gergelim",
					price: -0.5
				},
				{
					name: "Sem salada",
					price: -6
				},
				{
					name: "Substituir por cebola branca",
					price: -2
				},
				{
					name: "Ovo",
					price: 3
				},
				{
					name: "Molho especial",
					price: 1.5
				},
				{
					name: "Banana frita",
					price: 5
				}
			]
		},
		{
			id: 10,
			description: "X Tudo",
			image: Image.XAll,
			text: "E aí? Vai encarar? Pão com gergelim, carne bovina, alface, tomate, picles, bacon, cheddar, cebola roxa e molho especial.",
			price: 29,
			extras: [
				{
					name: "Sem gergelim",
					price: -0.5
				},
				{
					name: "Sem salada",
					price: -6
				},
				{
					name: "Sem molho especial",
					price: -1.5
				},
				{
					name: "Substituir por cebola branca",
					price: -2
				},
				{
					name: "Mais um bife",
					price: 6
				},
				{
					name: "Mais dois bifes",
					price: 12
				},
				{
					name: "Dobro de tudo",
					price: 20
				},
				{
					name: "Presunto",
					price: 3
				},
				{
					name: "Peito de peru",
					price: 3.5
				},
				{
					name: "Ovo",
					price: 3
				},
				{
					name: "Banana frita",
					price: 5
				}
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
				{
					name: "Sem gergelim",
					price: -0.5
				},
				{
					name: "Substituir por cebola branca",
					price: -2
				},
				{
					name: "Ovo",
					price: 3
				},
				{
					name: "Molho especial",
					price: 1.5
				},
				{
					name: "Banana frita",
					price: 5
				}
			]
		},
		{
			id: 12,
			description: "Galis Presunto",
			image: Image.GalisHam,
			text: "O queridinho da galera. Pão com gergelim, frango, alface, tomate, picles, presunto e cheddar",
			price: 27,
			extras: [
				{
					name: "Sem gergelim",
					price: -0.5
				},
				{
					name: "Sem salada",
					price: -6
				},
				{
					name: "Acrescentar cebola",
					price: 4
				},
				{
					name: "Ovo",
					price: 3
				},
				{
					name: "Molho especial",
					price: 1.5
				},
				{
					name: "Banana frita",
					price: 5
				}
			]
		},
		{
			id: 13,
			description: "Galis Bacon",
			image: Image.GalisBacon,
			text: "Para quem está fora da dieta. Pão com gergelim, frango, alface, tomate, bacon, cheddar, cebola branca e molho especial.",
			price: 31,
			extras: [
				{
					name: "Sem gergelim",
					price: -0.5
				},
				{
					name: "Sem salada",
					price: -6
				},
				{
					name: "Sem molho especial",
					price: -1.5
				},
				{
					name: "Substituir por cebola roxa",
					price: 2
				},
				{
					name: "Ovo",
					price: 3
				},
				{
					name: "Banana frita",
					price: 5
				}
			]
		},
		{
			id: 14,
			description: "Galis Tudo",
			image: Image.GalisAll,
			text: "Não demos mole nesse aqui. Pão com gergelim, frango, alface, tomate, picles, cebola branca, bacon, presunto, muçarela, cheddar e gorgonzola.",
			price: 38,
			extras: [
				{
					name: "Sem gergelim",
					price: -0.5
				},
				{
					name: "Sem salada",
					price: -6
				},
				{
					name: "Sem muçarela",
					price: -2
				},
				{
					name: "Sem gorgonzola",
					price: -12
				},
				{
					name: "Molho especial",
					price: 1.5
				},
				{
					name: "Substituir por cebola roxa",
					price: 2
				},
				{
					name: "Mais um frango",
					price: 5
				},
				{
					name: "Mais dois frangos",
					price: 10
				},
				{
					name: "Dobro de tudo",
					price: 20
				},
				{
					name: "Peito de peru",
					price: 3.5
				},
				{
					name: "Ovo",
					price: 3
				},
				{
					name: "Banana frita",
					price: 5
				}
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
				{
					name: "Pão australiano",
					price: 3
				},
				{
					name: "Sem salada",
					price: -7
				},
				{
					name: "Sem molho especial",
					price: -1.5
				},
				{
					name: "Substituir por cebola tradicional",
					price: -2
				},
				{
					name: "Mais um bife",
					price: 8
				},
				{
					name: "Mais dois bifes",
					price: 16
				},
				{
					name: "Bacon",
					price: 5
				},
				{
					name: "Ovo",
					price: 3
				},
				{
					name: "Banana frita",
					price: 5
				}
			]
		},
		{
			id: 16,
			description: "Porco Lover",
			image: Image.PigLover,
			text: "Para os amantes da carne de porco. Pão artesanal, carne suína 250g, alface, tomate, picles, iscas de porco, cheddar, cebola roxa e molho picante.",
			price: 53,
			extras: [
				{
					name: "Pão australiano",
					price: 3
				},
				{
					name: "Sem salada",
					price: -7
				},
				{
					name: "Sem molho picante",
					price: -2
				},
				{
					name: "Substituir por cebola caramelizada",
					price: 0.5
				},
				{
					name: "Mais um bife suíno",
					price: 8.5
				},
				{
					name: "Mais dois bifes suínos",
					price: 17
				},
				{
					name: "Bacon",
					price: 5
				},
				{
					name: "Molho especial",
					price: 1.5
				},
				{
					name: "Ovo",
					price: 3
				},
				{
					name: "Banana frita",
					price: 5
				}
			]
		},
		{
			id: 17,
			description: "Molhado",
			image: Image.Wet,
			text: "Um hambúrguer suíno bem molhado, esse é para você que ama molho de verdade. Pão artesanal, carne suína 250g, alface, tomate, bacon, cheddar e muito molho.",
			price: 50,
			extras: [
				{
					name: "Pão australiano",
					price: 3
				},
				{
					name: "Sem salada",
					price: -7
				},
				{
					name: "Sem bacon",
					price: -5
				},
				{
					name: "Menos molho",
					price: -2
				},
				{
					name: "Mais um bife suíno",
					price: 8.5
				},
				{
					name: "Mais dois bifes suínos",
					price: 17
				},
				{
					name: "Cebola tradicional",
					price: 3
				},
				{
					name: "Cebola caramelizada",
					price: 3.5
				},
				{
					name: "Ovo",
					price: 3
				},
				{
					name: "Banana frita",
					price: 5
				}
			]
		},
		{
			id: 18,
			description: "Super Exótico",
			image: Image.SuperExotic,
			text: "Provalmente um burguer que você nunca viu na vida. Pão artesanal, carne bovina 250g, tomate, pepino, frango, quiabo, cheddar, cebola roxa e wasabi.",
			price: 49,
			extras: [
				{
					name: "Pão australiano",
					price: 3
				},
				{
					name: "Sem salada",
					price: -7
				},
				{
					name: "Sem frango",
					price: -5
				},
				{
					name: "Sem quiabo",
					price: -4
				},
				{
					name: "Sem wasabi",
					price: -8
				},
				{
					name: "Mais um bife",
					price: 8
				},
				{
					name: "Mais dois bifes",
					price: 16
				},
				{
					name: "Mais frango",
					price: 5
				},
				{
					name: "Substituir por cebola tradicional",
					price: -2
				},
				{
					name: "Bacon",
					price: 5
				},
				{
					name: "Pimenta",
					price: 2.5
				}
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
				{
					name: "Porção grande",
					price: 27
				},
				{
					name: "Batata frita",
					price: 4
				},
				{
					name: "Mandioca",
					price: 4
				},
				{
					name: "Sem salada",
					price: -10
				},
				{
					name: "Salpicão",
					price: 6
				},
				{
					name: "Salada de maionese",
					price: 5
				},
				{
					name: "Arroz",
					price: 9
				},
				{
					name: "Arroz integral",
					price: 12
				},
				{
					name: "Feijão em calda",
					price: 18
				},
				{
					name: "Feijão tropeiro",
					price: 20
				},
				{
					name: "Postas de tilápia",
					price: 18.5
				},
				{
					name: "Vinagrete",
					price: 11
				}
			]
		},
		{
			id: 20,
			description: "Filé Mignon com fritas",
			image: Image.FiletMignonWithFrenchFries,
			text: "Clássica porção de filé mignon com fritas, acompanha salada de pimentão verde e mini tomates.",
			price: 74,
			extras: [
				{
					name: "Porção maior",
					price: 26
				},
				{
					name: "Sem salada",
					price: -10
				},
				{
					name: "Substituir batata frita por mandioca",
					price: 0
				},
				{
					name: "Substituir filé mignon por picanha",
					price: 4
				},
				{
					name: "Arroz",
					price: 9
				},
				{
					name: "Arroz integral",
					price: 12
				},
				{
					name: "Feijão em calda",
					price: 18
				},
				{
					name: "Feijão tropeiro",
					price: 20
				},
				{
					name: "Vinagrete",
					price: 11
				},
				{
					name: "Farofa",
					price: 1
				},
				{
					name: "Barbecue",
					price: 2
				},
				{
					name: "Salpicão",
					price: 6
				},
				{
					name: "Salada de maionese",
					price: 5
				}
			]
		},
		{
			id: 21,
			description: "Batata frita na Moda do Chefe",
			image: Image.ChefsFashionableFries,
			text: "Uma batata frita caprichada, segue com diversos tipos de molhos e vem banhada com cheddar. Acompanha salada com alface, tomate, brócolis, cebola e limão.",
			price: 40,
			extras: [
				{
					name: "Queijo ralado",
					price: 1
				},
				{
					name: "Sem salada",
					price: -10
				},
				{
					name: "Sem molho",
					price: -3
				},
				{
					name: "Sem óleo",
					price: 0
				},
				{
					name: "Carne",
					price: 12
				},
				{
					name: "Substituir cebola branca por cebola roxa",
					price: 2
				},
				{
					name: "Torre de batata frita",
					price: 20
				},
				{
					name: "Torresmo",
					price: 0.5
				}
			]
		},
		{
			id: 22,
			description: "Peixe Completo",
			image: Image.CompleteFish,
			text: "Deliciosa refeição de pescada acompanhada de arroz, feijão, salada e mix de frutas com mandioca.",
			price: 100,
			extras: [
				{
					name: "Mais peixe",
					price: 18
				},
				{
					name: "Sem arroz",
					price: -9
				},
				{
					name: "Sem feijão",
					price: -18
				},
				{
					name: "Feijão tropeiro",
					price: 20
				},
				{
					name: "Sem salada",
					price: -10
				},
				{
					name: "Sem fruta",
					price: -3.5
				},
				{
					name: "Substituir mandioca por batata frita",
					price: 0
				},
				{
					name: "Mais mandioca ou batata frita",
					price: 4
				},
				{
					name: "Sem salpicão",
					price: -6
				},
				{
					name: "Salada de maionese",
					price: 5
				}
			]
		},
		{
			id: 23,
			description: "Refeição Completa",
			image: Image.FullMeal,
			text: "Um verdadeiro banquete! Se você está com fome, com certeza essa é a melhor opção. Diversas variedades de saladas, frangos, pães, massas, frutas e molhos!",
			price: 135,
			extras: [
				{
					name: "Sem salada",
					price: -10
				},
				{
					name: "Mais salada",
					price: 10
				},
				{
					name: "Sem frango",
					price: -5
				},
				{
					name: "Mais frango",
					price: 5
				},
				{
					name: "Sem pão",
					price: -2
				},
				{
					name: "Mais pão",
					price: 2
				},
				{
					name: "Sem massa",
					price: -14
				},
				{
					name: "Mais massa",
					price: 14
				},
				{
					name: "Sem molho",
					price: -4
				},
				{
					name: "Mais molho",
					price: 4
				},
				{
					name: "Sem fruta",
					price: -4
				},
				{
					name: "Mais fruta",
					price: 4
				}
			]
		},
		{
			id: 24,
			description: "Quero Frango",
			image: Image.IWantChicken,
			text: "Uma porção generosa de filé de frango empanado com salada de maionese do cheff e mix de folhas.",
			price: 110,
			extras: [
				{
					name: "Salada de maionese tradicional",
					price: -1
				},
				{
					name: "Sem salada de maionese",
					price: -6
				},
				{
					name: "Sem salada",
					price: -10
				},
				{
					name: "Batata sem óleo",
					price: 0
				},
				{
					name: "Substituir batata frita por mandioca",
					price: 0
				},
				{
					name: "Porção menor",
					price: -24
				},
				{
					name: "Molho",
					price: 3
				}
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
				{
					name: "TNT",
					price: 0
				},
				{
					name: "Red Bull",
					price: 0
				},
				{
					name: "Fusion",
					price: 0
				},
				{
					name: "Monster",
					price: 0
				},
				{
					name: "Reign",
					price: 0
				}
			]
		},
		{
			id: 26,
			description: "Refrigerante",
			image: Image.Soda,
			text: "Super refrescante e sempre gelado. Temos Coca-Cola, Fanta, Guaraná, Pepsi e Sprite.",
			price: 11,
			extras: [
				{
					name: "Coca-Cola",
					price: 0
				},
				{
					name: "Fanta",
					price: 0
				},
				{
					name: "Guaraná",
					price: 0
				},
				{
					name: "Pepsi",
					price: 0
				},
				{
					name: "Sprite",
					price: 0
				}
			]
		},
		{
			id: 27,
			description: "Suco",
			image: Image.Juice,
			text: "100% natural, fazemos na hora! Temos jarras de 300ml, 500ml e também no copo. Temos suco de abacaxi com hortelã, laranja, caju, graviola e acerola.",
			price: 11,
			extras: [
				{
					name: "Abacaxi com hortelã (300ml)",
					price: 1
				},
				{
					name: "Abacaxi com hortelã (500ml)",
					price: 2
				},
				{
					name: "Abacaxi com hortelã (Copo)",
					price: 0
				},
				{
					name: "Laranja (300ml)",
					price: 1
				},
				{
					name: "Laranja (500ml)",
					price: 2
				},
				{
					name: "Laranja (Copo)",
					price: 0
				},
				{
					name: "Caju (300ml)",
					price: 1
				},
				{
					name: "Caju (500ml)",
					price: 2
				},
				{
					name: "Caju (Copo)",
					price: 0
				},
				{
					name: "Graviola (300ml)",
					price: 1
				},
				{
					name: "Graviola (500ml)",
					price: 2
				},
				{
					name: "Graviola (Copo)",
					price: 0
				},
				{
					name: "Acerola (300ml)",
					price: 1
				},
				{
					name: "Acerola (500ml)",
					price: 2
				},
				{
					name: "Acerola (Copo)",
					price: 0
				},
				{
					name: "Sem açúcar",
					price: 0
				}
			]
		},
		{
			id: 28,
			description: "Água",
			image: Image.Water,
			text: "Água é sempre bom, zero calorias e tem em todo lugar. Temos água mineral natural, com gás ou tônica.",
			price: 3.5,
			extras: [
				{
					name: "Água mineral natural",
					price: 0
				},
				{
					name: "Água com gás",
					price: 0.5
				},
				{
					name: "Água tônica",
					price: 0.5
				}
			]
		},
		{
			id: 29,
			description: "Cerveja",
			image: Image.Beer,
			text: "Que tal aquela gelada com os amigos? Se beber não dirija, tenha sempre uma carona. Temos Stella Artois, Heineken, Spaten, Corona e Budweiser.",
			price: 13,
			extras: [
				{
					name: "Stella Artois",
					price: 0
				},
				{
					name: "Heineken",
					price: 0
				},
				{
					name: "Spaten",
					price: 0
				},
				{
					name: "Corona",
					price: 0
				},
				{
					name: "Budweiser",
					price: 0
				}
			]
		},
		{
			id: 30,
			description: "Isotônico",
			image: Image.Isotonic,
			text: "Só temos Gatorade e Powerade, mas temos todos os sabores! É só pedir para a gente.",
			price: 8,
			extras: [
				{
					name: "Gatorade de uva",
					price: 0
				},
				{
					name: "Gatorade de laranja",
					price: 0
				},
				{
					name: "Gatorade de limão",
					price: 0
				},
				{
					name: "Gatorade de tangerina",
					price: 0
				},
				{
					name: "Gatorade de morango com maracujá",
					price: 0
				},
				{
					name: "Gatorade de maracujá",
					price: 0
				},
				{
					name: "Gatorade de frutas cítricas",
					price: 0
				},
				{
					name: "Powerade de mix de frutas",
					price: 0
				},
				{
					name: "Powerade de limão",
					price: 0
				},
				{
					name: "Powerade de laranja",
					price: 0
				},
				{
					name: "Powerade de uva",
					price: 0
				},
				{
					name: "Powerade de frutas tropicais",
					price: 0
				}
			]
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
				{
					name: "Sem blueberrys",
					price: -4
				},
				{
					name: "Sem framboesa",
					price: -3
				},
				{
					name: "Sem lactose",
					price: 0
				}
			]
		},
		{
			id: 32,
			description: "Pudim",
			image: Image.Pudding,
			text: "Delicioso pudim de leite condensado com calda de caramelo e coco ralado por cima.",
			price: 10,
			extras: [
				{
					name: "Sem coco ralado",
					price: -3
				},
				{
					name: "Sem calda de caramelo",
					price: -4
				},
				{
					name: "Sem lactose",
					price: 0
				}
			]
		},
	]
}

export default Orders

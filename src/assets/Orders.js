//- React
import React from "react"

//- Imagens
import * as Image from "../images/Images"

const Orders = {
	appetizers: [
		{
			id: 1,
			description: "Canapé de Salmão",
			image: Image.SalmonCanape,
			text: "Pepino com uma leve camada de cream cheese e salmão.",
			price: 31
		},
		{
			id: 2,
			description: "Entrada de Polvo",
			image: Image.OctopusStarter,
			text: "Tentáculos de polvo rodeados com azeite e um limão siciliano, vem acompanhado de ervilha.",
			price: 75
		},
		{
			id: 3,
			description: "Linguiça Empanada",
			image: Image.BreadedSausage,
			text: "Linguiças empanadas e picles, acompanha batata frita e mostarda.",
			price: 30
		},
		{
			id: 4,
			description: "Lombo ao Molho Especial",
			image: Image.SirloinWithSpecialSauce,
			text: "Lombo suíno com o molho especial da casa, possui grãos de gergelim e uma salada de leve. Acompanha batata frita e um molho de pimenta.",
			price: 50
		},
		{
			id: 5,
			description: "Porçãozinha de Frios",
			image: Image.SmallPortionOfColdCuts,
			text: "Uma porção pequena com diversas variedades de frios: uva, queijo prato, salame, peito de peru, presunto e azeitona.",
			price: 23
		},
		{
			id: 6,
			description: "Pastel",
			image: Image.FriedPastry,
			text: "O famoso pastel frito que todos conhecem, acompanha alface e catchup.",
			price: 9
		},
	],

	standards: [
		{
			id: 7,
			description: "X Salada",
			image: Image.XSalad,
			text: "Para quem é vegano. Ops! Tem carne... Pão com gergelim, carne bovina, alface, tomate, picles e cebola roxa.",
			price: 18
		},
		{
			id: 8,
			description: "X Presunto",
			image: Image.XHam,
			text: "Para ter um gostino a mais. Pão com gergelim, carne bovina, alface, tomate, presunto, cheddar e cebola roxa.",
			price: 21
		},
		{
			id: 9,
			description: "X Bacon",
			image: Image.XBacon,
			text: "Esse é famoso! Pão com gergelim, carne bovina, alface, tomate, bacon, cheddar e cebola roxa.",
			price: 24
		},
		{
			id: 10,
			description: "X Tudo",
			image: Image.XAll,
			text: "E aí? Vai encarar? Pão com gergelim, carne bovina, alface, tomate, picles, presunto, bacon, cheddar, cebola roxa e molho especial.",
			price: 29
		},
	],

	chicken: [
		{
			id: 11,
			description: "Galis Salada",
			image: Image.GalisSalad,
			text: "O mais simples da família Galis... Pão com gergelim, frango, alface, tomate, muçarela, picles e cebola roxa.",
			price: 24
		},
		{
			id: 12,
			description: "Galis Presunto",
			image: Image.GalisHam,
			text: "O queridinho da galera. Pão com gergelim, frango, alface, tomate, picles, presunto e cheddar",
			price: 27
		},
		{
			id: 13,
			description: "Galis Bacon",
			image: Image.GalisBacon,
			text: "Para quem está fora da dieta. Pão com gergelim, frango, alface, tomate, bacon, cheddar, cebola branca e molho especial.",
			price: 31
		},
		{
			id: 14,
			description: "Galis Tudo",
			image: Image.GalisAll,
			text: "Não demos mole nesse aqui. Pão com gergelim, frango, alface, tomate, picles, cebola branca, bacon, presunto, muçarela, cheddar e gorgonzola.",
			price: 38
		},
	],

	handmate: [
		{
			id: 15,
			description: "Moda da Casa",
			image: Image.HomeFashion,
			text: "Nosso hambúrguer, nosso RG. Pão artesanal, carne de churrasco 300g, alface, tomate, cheddar, cebola caramelizada e molho especial",
			price: 48
		},
		{
			id: 16,
			description: "Porco Lover",
			image: Image.PigLover,
			text: "Para os amantes da carne de porco. Pão artesanal, carne suína 250g, alface, tomate, picles, iscas de porco, cheddar, cebola roxa e molho picante.",
			price: 53
		},
		{
			id: 17,
			description: "Molhado",
			image: Image.Wet,
			text: "Um hambúrguer suíno bem molhado, esse é para você que ama molho de verdade. Pão artesanal, carne suína 250g, alface, tomate, bacon, cheddar e muito molho.",
			price: 50
		},
		{
			id: 18,
			description: "Super Exótico",
			image: Image.SuperExotic,
			text: "Provalmente um burguer que você nunca viu. Pão artesanal, carne bovina 250g, tomate, pepino, frango, quiabo, cheddar, cebola roxa e wasabi.",
			price: 49
		},
	],

	portions: [
		{
			id: 19,
			description: "Camarão Empanado",
			image: Image.BreadedShrimp,
			text: "Uma porção média de camarão rosa empanado acompanhado de salada com alface e tomate, vem com limão siciliano.",
			price: 63
		},
		{
			id: 20,
			description: "Filé Mignon com Fritas",
			image: Image.FiletMignonWithFrenchFries,
			text: "Clássica porção de filé mignon com fritas, acompanha salada de pimentão verde e mini tomates.",
			price: 74
		},
		{
			id: 21,
			description: "Batata Frita na Moda do Chefe",
			image: Image.ChefsFashionableFries,
			text: "Uma batata frita caprichada, segue com diversos tipos de molhos e vem banhada com cheddar. Acompanha salada com alface, tomate, brócolis, cebola e limão.",
			price: 40
		},
		{
			id: 22,
			description: "Peixe Completo",
			image: Image.CompleteFish,
			text: "Deliciosa refeição de pescada acompanhada de arroz, feijão e salada.",
			price: 100
		},
		{
			id: 23,
			description: "Refeição Completa",
			image: Image.FullMeal,
			text: "Um verdadeiro banquete! Se você está com fome, com certeza essa é a melhor opção. Diversas variedades de saladas, frangos, pães, massas, lipídios e molhos!",
			price: 135
		},
		{
			id: 24,
			description: "Quero Frango",
			image: Image.IWantChicken,
			text: "Uma porção generosa de filé de frango empanado com salada de maionese do cheff e mix de folhas.",
			price: 110
		},
	],

	drinks: [
		{
			id: 25,
			description: "Energético",
			image: Image.EnergyDrink,
			text: "Para dar aquela acordada... Trabalhamos com TNT, Red Bull, Fusion, Monster e Reign.",
			price: 9
		},
		{
			id: 26,
			description: "Refrigerante",
			image: Image.Soda,
			text: "Super refrescante e sempre gelado. Temos Coca-Cola, Fanta, Guaraná, Pepsi e Sprite.",
			price: 11
		},
		{
			id: 27,
			description: "Suco",
			image: Image.Juice,
			text: "100% natural, fazemos na hora! Temos jarras de 300ml, 500ml e também no copo: abacaxi com hortelã, laranja, caju, graviola e acerola.",
			price: 11
		},
		{
			id: 28,
			description: "Água",
			image: Image.Water,
			text: "Água é sempre bom, zero calorias e tem em todo lugar. Temos água mineral natural, com gás ou tônica.",
			price: 3.5
		},
		{
			id: 29,
			description: "Cerveja",
			image: Image.Beer,
			text: "Que tal aquela gelada com os amigos? Se beber não dirija, tenha sempre uma carona. Temos Stella Artois, Heineken, Spaten, Original e Devassa.",
			price: 13
		},
		{
			id: 30,
			description: "Isotônico",
			image: Image.Isotonic,
			text: "Só temos Gatorade e Powerade, mas temos todos os sabores! É só pedir para a gente.",
			price: 8
		},
	],

	desserts: [
		{
			id: 31,
			description: "Mousse de Maracujá",
			image: Image.PassionFruitMousse,
			text: "Cremosa sobremesa de maracujá, todos amam! Possui blueberrys e framboesa.",
			price: 12
		},
		{
			id: 32,
			description: "Pudim",
			image: Image.Pudding,
			text: "Delicioso pudim de leite condensado com calda de caramelo e coco ralado por cima.",
			price: 10
		},
	]
}

export default Orders

//# Opening hours
export const date = new Date()
export const hours = date.getHours()

export const openingTime = 18
export const closingTime = 23

export const isOpen = hours >= openingTime && hours < closingTime

//# Masks
export const maskForPrice = (price = 0) => {
	const mask = parseFloat(price).toLocaleString("pt-BR", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})

	return `R$ ${mask}`
}

export const maskForCNPJ = (cnpj = 0) => {
	const mask = new RegExp(/^([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})([0-9]{2})$/)

	return cnpj.toString().replace(mask, "$1.$2.$3/$4-$5")
}

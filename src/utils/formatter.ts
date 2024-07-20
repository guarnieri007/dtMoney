export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export const priceFormatter = new Intl.NumberFormat("put-BR", {
    style: "currency",
    currency: "BRL",
})
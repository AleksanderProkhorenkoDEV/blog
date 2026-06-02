const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export const formatDatePost = (date: Date) => {
    return `${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}`
}
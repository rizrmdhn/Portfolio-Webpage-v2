const showFormattedDate = (date) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric"
    }
    return new Date(date).toLocaleDateString("en-EN", options)
}

export { showFormattedDate };
export const getCarsFromState = (state) => {
    return state.cars.cars;
}

export const getCarByModelAndYear = (state, model, year) => {
    return state.cars.cars.find((car) => car.model === model && car.year === year);
}

export const getBookmarks = (state) => {
    return state.bookmarks.items;
}

export const isBookmarked = (state, id) => {
    return state.bookmarks.items.some(car => car.id === id);
}

export const getCarsToCompare = (state) => {
    return state.comparedCars.items;
}

export const isCarInCompare = (state, id) => {
    return state.comparedCars.items.some(car => car.id === id);
}

export const showModal = (state) => {
    return state.comparedCars.showModal;
}
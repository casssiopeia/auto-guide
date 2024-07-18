export const getCarsFromState = (state) => {
    return state.cars.cars;
}

export const getBookmarks = (state) => {
    return state.bookmarks.items;
}

export const isBookmarked = (state, id) => {
    return state.bookmarks.items.some(car => car.id === id);
}
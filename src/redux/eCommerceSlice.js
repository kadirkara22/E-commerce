import { createSlice } from "@reduxjs/toolkit";

export const eCommerceSlice = createSlice({
    name: "ecommerce",
    initialState: {
        items: [],
        detail: [],
        cart: [],
        favoriCart: [],
        totalPriceCart: 0


    },
    reducers: {
        showProduct: (state, action) => {
            const data = action.payload
            state.items = data

        },
        showDetail: (state, action) => {
            const data = [action.payload]
            state.detail = data
        },
        added: (state, action) => {
            const product = action.payload
            state.cart.push(product)

            state.totalPriceCart = state.cart.reduce((total, item) => (total += Number((item.price - (item.price * 20) / 100))), 0)
        },
        selectFavori: (state, action) => {
            const product = action.payload
            state.favoriCart.push(product)
            state.favoriCart = state.favoriCart.find(item => item.id === product.id)
                ? state.favoriCart.map(item => item.id === product.id ? item.favori === false ? { ...item, favori: true } : { ...item, favori: false }
                    : item)
                : [...state.favoriCart]
            state.favoriCart = state.favoriCart.filter(item => item.favori !== false)

            state.items = state.items.find(item => item.id === product.id)
                ? state.items.map(item => item.id === product.id ? item.favori === false ? { ...item, favori: true } : { ...item, favori: false }
                    : item)
                : [...state.items]

            state.detail = state.detail.find(item => item.id === product.id)
                ? state.detail.map(item => item.id === product.id ? item.favori === false ? { ...item, favori: true } : { ...item, favori: false }
                    : item)
                : [...state.detail]


        },

        deleteCart: (state, action) => {
            const product = action.payload
            state.totalPriceCart -= Number((product.price - (product.price * 20) / 100))
            state.cart = state.cart.filter(item => item.id !== product.id)

        }
    }

})

export const { added, selectFavori, showProduct, showDetail, totalPrice, deleteCart } = eCommerceSlice.actions;
export default eCommerceSlice.reducer;
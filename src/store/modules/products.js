import { MockData } from '../../data'

const state = () => ({
  products: JSON.parse(localStorage.getItem('products')) || MockData
})

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
    localStorage.setItem('products', JSON.stringify(products))
  }
}

const actions = {
  setProduct({ commit, state }, product) {
    const updatedList = [...state.products].filter((item) => item.id !== product.id)
    const newData = [...updatedList, ...[product]].sort((a, b) => a.id - b.id)
    commit('SET_PRODUCTS', newData)
  }
}

const getters = {
  getProducts: (state) => () => {
    return state.products
  },
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.carId === id)
  },
  getProductsColor: (state) => () => {
    return [...new Set(state.products.map((product) => product.color))]
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}

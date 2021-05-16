const state = {
    products: [{
        id: 1,
        name: 'Guitar',
        price: 800.00
    }],
    product: {}
};

const getters = {
    allProducts: (state) => state.products,
    getProduct: (state) => state.product
};

const actions = {
    async addProduct({commit}, product){
        commit('newProduct', product);
    },
    async deleteProduct({commit}, id){
        commit('removeProduct', id);
    },
    async updateProduct({commit}, product){
        commit('updateProduct', product);
    },
    async filterProduct({commit}, id){
        commit('findProduct', id);
    }
};

const mutations = {
    newProduct: (state, product) => state.products.unshift(product),
    removeProduct: (state, id) => state.products = state.products.filter(e => e.id !== id),
    updateProduct: (state, product) => {
        const id = state.products.findIndex(e => e.id === product.id);
        if(id != -1){
            state.products.splice(id, 1, product);
        }
    },
    findProduct: (state, id) => state.product = state.products.find(e => e.id === id)
};

export default{
    state,
    getters,
    actions,
    mutations,
};
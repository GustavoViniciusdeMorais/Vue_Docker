<template>
  <div>
      <h3>Vuex Products</h3>
      <addform @add="saveProduct" @edit="editProduct" :productedit="this.product"></addform>
      <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
            <th scope="row">{{product.id}}</th>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td>
                <button @click.prevent="remove(product.id)">
                    <span class="glyphicon glyphicon-trash"></span>
                </button>
                <button @click.prevent="getProduct(product.id)">
                    Edit
                </button>
            </td>
            </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import addform from './addform'

export default {
    data(){
        return {
            product: {}
        }
    },
    computed: {
        products(){
            return this.$store.getters.allProducts;
        }
    },
    components: {
        addform,
    },
    methods: {
        saveProduct(product){
            this.$store.dispatch('addProduct', product);
        },
        remove(id){
            this.$store.dispatch('deleteProduct', id);
        },
        editProduct(product){
            this.$store.dispatch('updateProduct', product);
        },
        getProduct(id){
            this.$store.dispatch('filterProduct', id);
            this.product = this.$store.getters.getProduct;
        }
    }
}
</script>

<style>

</style>
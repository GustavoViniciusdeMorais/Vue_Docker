<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-sm">
                  <input type="text" v-model="product.name" class="form-control">
              </div>
              <div class="col-sm">
                  <input type="number" v-model="product.price" class="form-control">
              </div>
              <div class="col-sm">
                  <button @click.prevent="send" class="btn btn-primary btn-block">Add</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['productedit'],
    data(){
        return {
            product: {
                id: 0,
                name: '',
                price: 0
            }
        }
    },
    methods: {
        send(){
            if (this.product.price == 0 && this.product.name == '') return false;
            if(typeof this.productedit.id != 'undefined'){
                console.log('editing', this.product.name);
                this.$emit('edit',{
                    id: this.product.id,
                    name: this.product.name,
                    price: this.product.price
                });
                this.clearFields();
            }else{
                this.$emit('add',{
                    id: Date.now(),
                    name: this.product.name,
                    price: this.product.price
                });
                this.clearFields();
            }
        },
        clearFields(){
            this.product.id = 0;
            this.product.name = '';
            this.product.price = 0;
        }
    },
    watch: {
        productedit: function(val){
            //console.log('watch', val.name)
            if(typeof val.name != 'undefined'){
                this.product.id = val.id
                this.product.name = val.name
                this.product.price = val.price
            }
        }
    }
}
</script>

<style>

</style>
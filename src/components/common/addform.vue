<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md3">
                    <input type="text" class="form-control" v-model="name">
                    <button class="btn btn-primary btn-block" @click.prevent="send">
                        Add Item
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: ''
        }
    },
    methods:{
        send(){
            this.$emit('add',{
                id: Date.now(),
                name: this.name
            })
            this.name = ''
        }
    }
}
</script>

<style>

</style>
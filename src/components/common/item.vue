<template>
    <div>
        <div>
            <h3>{{this.name}}</h3>
            <button class="btn btn-danger btn-sm" @click.prevent="popitem">x</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id", "name"],
    methods:{
        popitem(){
            this.$emit('popitem', this.id)
        }
    }
}
</script>

<style>

</style>
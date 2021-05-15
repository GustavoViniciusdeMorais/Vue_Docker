<template>
    <div>
        <h1>Gustavo Vue</h1>
        <addform @add="additem"></addform>
        <div v-for="el in list" :key="el.id">
            <item :name="el.name" :id="el.id" @popitem="remove"></item>
        </div>
    </div>
</template>

<script>
import item from './item'
import addform from './addform'

export default {
    data(){
        return{ 
            list:[
                {
                    id: 1,
                    name: 'Lili'
                },
                {
                    id: 2,
                    name: 'Meggi'
                }
            ]
        }
    },
    components:{
        item,
        addform
    },
    methods:{
        additem(event){
            this.list.push(event)
        },
        remove(id){
            this.list = this.list.filter(e => e.id != id)
        }
    }
}
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
</style>
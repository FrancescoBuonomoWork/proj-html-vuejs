<script>
import Card from './Card.vue';

export default{
    components: { Card },
    data(){
        return{
            cardsInfo:[
                {
                    imgSRC:'/src/assets/image (14).svg',
                    title: 'Array of equipment',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum.'
                },
                {
                    imgSRC:'/src/assets/image (16).svg',
                    title: 'New Technologies',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum.'
                },
                {
                    imgSRC:'/src/assets/image (18).svg',
                    title: 'Versitile Actors',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum.'
                },
                {
                    imgSRC:'/src/assets/image (15).svg',
                    title: 'Top Directors',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum.'
                },
                {
                    imgSRC:'/src/assets/image (17).svg',
                    title: 'Minute Editing',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum.'
                },
                {
                    imgSRC:'/src/assets/image (19).svg',
                    title: 'Versatile Actor',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum.'
                },
            ]
        }
    }
}
</script>

<template>
    <section class="info section-pad-100">
        <div class="container">
            <div class="row">
                <div class="col-12 text-al-center">
                    <p class="subtitle">Pelicula studio</p>
                    <h2 class="title">This is what we do</h2>
                </div>
                <div v-for="elem in cardsInfo" class="col-4">
                    <Card :elem="elem"/>
                </div>
            </div>
        </div>
    </section>
 
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.info{
    color: $black;
    background-color: $white;
   
}


</style>
<script>
import Card from './Card.vue';
export default {
    components: { Card },
    data() {
        return {
            watchlistInfo:[
                {
                    imgSRC:'src/assets/Gallery-01.jpg',
                    title: 'Seventeenth summer',
                    text: 'Commercial, Music Video'
                },
                {
                    imgSRC:'src/assets/Gallery-02.jpg',
                    title: 'A message to space',
                    text: 'Short Film'
                },
                {
                    imgSRC:'src/assets/Gallery-03.jpg',
                    title: 'The most beautiful thing',
                    text: 'Music Video'
                },
                {
                    imgSRC:'src/assets/Gallery-04.jpg',
                    title: 'Permission To Speak',
                    text: 'Documentary'
                },
                {
                    imgSRC:'src/assets/Gallery-05.jpg',
                    title: 'Explore our space',
                    text: 'Film noir'
                },
                {
                    imgSRC:'src/assets/Gallery-06.jpg',
                    title: 'Film production',
                    text: 'Blaxplaitation'
                },
            ]
        }
    }

}
</script>

<template>
    <section class="watchlist-section">
        <div class="container">
            <div class="row">
                <div class="col-12 intro">
                    <p class="subtitle">Your watchlist</p>
                    <h2 class="title">Best hits movie</h2>
                </div>
                <!-- <div class="col-4" v-for="element in watchlistInfo">
                    <div class="card">
                        <div class="card-img">
                            <img :src="element.imgSRC">
                           
                        </div>
                        <div class="card-text">
                            <h4 class="card-text__title">{{element.title}}</h4>
                            <p class="card-text__description">{{element.text}}</p>
                        </div>
                    </div>
                </div> -->
                <div class="col-4" v-for="element in watchlistInfo">
                    <Card :elem="element"/>
                </div>
            </div>
        </div>    
    </section>
</template>

<style scoped lang="scss">

.watchlist-section{
    padding: 100px 0;
    text-align: center;

    .intro{
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
  
}
</style>
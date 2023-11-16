<script>
import Card from './Card.vue';
export default{
    components:{ Card},
    data(){
        return{
            cardDataList :[
                {
                    imgSRC: 'src/assets/Blog07.jpg',
                    title: 'Recap your latest company event',
                    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus similique recusandae molestias.',
                    date:'November 06,2021 By Admin'
                },
                {
                    imgSRC: 'src/assets/Blog01.jpg',
                    title: 'How to edit a film core to serve',
                    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus similique recusandae molestias.',
                    date:'May 27,2022 By Admin'
                },
                {
                    imgSRC: 'src/assets/Blog02.jpg',
                    title: 'Are you ready to make it awesome',
                    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus similique recusandae molestias.',
                    date:'May 07,2022 By Admin'
                },
            ]
        }
    }
}
</script>

<template>
    <section class="section-pad-100 latest-news">
        <div class="container">
            <div class="row">
                <div class="col-12 intro">
                    <p class="subtitle">Latest News</p>
                    <h2 class="title">Articles updated daily</h2>
                </div>
                <div class="col-4" v-for="element in cardDataList">
                    <Card :elem="element"/>
                </div> 
            </div>
         
        </div>
    </section>
 
</template>

<style scoped lang="scss">
.latest-news{
    .card.card-text{
        text-align: start;
    }
}

</style>
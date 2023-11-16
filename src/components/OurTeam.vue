<script>
import Card from './Card.vue';
export default {
    components: { Card },
    data() {
        return{
            cardDataList :[
                {
                    imgSRC: 'src/assets/Team-01.jpg',
                    title: 'Fabricio Guerra',
                    text: 'Main Director'
                },
                {
                    imgSRC: 'src/assets/Team-02.jpg',
                    title: 'Umberto Pagoda',
                    text: 'Main Writer'
                },
                {
                    imgSRC: 'src/assets/Team-03.jpg',
                    title: 'Gloria Ricasso',
                    text: 'Main Producer'
                },
                {
                    imgSRC: 'src/assets/Team-04.jpg',
                    title: 'Lio Napoin',
                    text: 'Cameraman'
                },
            ]

        }
    }

}
</script>

<template>
    <section class="section-pad-100">
        <div class="container">
            <div class="row">
                <div class="col-12 intro">
                    <p class="subtitle">The Pericuros</p>
                    <h2 class="title">Meet the Team</h2>
                </div>
                <div class="col-3" v-for="element in cardDataList">
                    <Card :elem="element"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>
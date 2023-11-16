<script>

export default{
    props:{
        elem:Object,
    }
    
}
</script>

<!-- questa card servira per avere immagine e testo (titolo e descrione) -->
<template>
    <div class="card">
        <div class="card-img">
            <img  :src="elem.imgSRC">
        </div>
        <div class="card-text">
            <p class="card-date" v-show="elem.date">{{ elem.date }}</p>
            <h4 class="card-text__title">{{elem.title}}</h4>
            <p class="card-text__description">{{elem.text}}</p>
        </div>
    </div>
 
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.latest-news .card .card-text{
        text-align: start;
    }

.watchlist-section .card-text__description{
    color: $gray;
}
.info .card img{
    width: 100px;
    
}
.info .card-img{
    height: 170px;

}

.card{
    margin: 20px 20px;
    height: 100%;

   
    .card-img{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-text{
      text-align: center;
      line-height: 1.5em;
      .card-date{
        color: $gray;
        margin-bottom: 5px;
      }
    }
    .card-img, .card-text__title{
        margin-bottom: 10px;
    }
    .card-text__title{
        text-transform: uppercase;
    }
    .card-text__description{
        color: $gray;
    }
}

</style>
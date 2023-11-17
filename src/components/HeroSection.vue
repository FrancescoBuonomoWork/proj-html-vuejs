<script>
export default{
    data(){
        return{
            currentIndex : 0,
            slides:[
                {
                   imgSRC:'src/assets/bredcum-img.jpg',
                   active: true
                },
                {
                   imgSRC:'src/assets/Parallax-01.jpg',
                   active: false
                },
                {
                   imgSRC:'src/assets/Parallax-02.jpg',
                   active: false
                },
                {
                   imgSRC:'src/assets/Parallax-03.jpg',
                   active: false
                }
            ]
        }
    },
    methods:{
        nextSlide(){
            // let currentSlide = this.slides[0];
            // let currentIndex = this.slides[0].id;
            // console.log(currentSlide)
            // currentSlide.active = false;
            
            // currentIndex=  currentIndex + 1;
            // currentIndex.active = true;
            console.log('next');
            this.slides[this.currentIndex].active = false;

            if(this.currentIndex === this.slides.length - 1){
                
                this.currentIndex = 0
            } else{
                this.currentIndex++
            }
            this.slides[this.currentIndex].active = true
            // this.slides[1].active = false
            // this.slides[2].active = true
        },
        prevSlide(){
            console.log('prev');
            this.slides[this.currentIndex].active = false;
            if(this.currentIndex === 0){
                
                this.currentIndex = this.slides.length - 1
            } else{
                this.currentIndex--
            }
            this.slides[this.currentIndex].active = true
        }
    },
   
    
}
</script>

<template>
    <section class="hero" >
        <div class="container-fuild ">
            <div class="hero-carousel-wrapper">
                <img v-for="(slide,i) in slides" :class="slide.active === true ? 'active': ''" class="hero-img" :src="slide.imgSRC">
                <!-- <img class="hero-img " src="../assets/bredcum-img.jpg">
                <img class="hero-img " src="../assets/bredcum-img.jpg"> -->
                <!-- <img src="../assets/Parallax-01.jpg"> -->
                
                <span class="arrow-wrapper">
                    <span @click="prevSlide()" class="arrow arrow-left" >
                        <img class="w10"  src="../assets/left-arrow.svg">
                    </span>
                    <span class="arrow arrow-right" @click="nextSlide()" >
                        <img class="w10"  src="../assets/right-arrow.svg">
                    </span>
                </span>
             
            </div>
        </div>



        <div class="container hero-text">
            <div class="row">
                <div class="col hero-text-wrapper">
                    <p class="subtitle">Cinemato studio</p>
                    <h2 class="title-maxi">Action and <br> inspire people</h2>
                    <a href="#" class="button">Read more</a>
                </div>
            </div>
        </div>
    </section>
    
 
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.hero{
    position: relative;
}
.w10{
    width: 10px;
}
.hero-img{
    height: 700px;
    object-fit: cover;
    display: none;
    width: 100%;
    &.active{
        display: block;
    }
}
.hero-carousel-wrapper{
    position: relative;
}
.arrow{
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.618);
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    filter: invert(100%);
}
.arrow-right{
    right: 20px;
    
}
.arrow-left{
    left: 20px;
}
.hero-text{
    z-index: 50;
    color: $white;
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translateY(-50%);
}
.hero-text-wrapper{
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: start;
}
</style>
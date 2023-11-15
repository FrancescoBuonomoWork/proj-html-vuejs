<script>
export default{
    
}
</script>

<template>
    <section class="hero" >
        <div class="container-fuild ">
            <div class="hero-carousel-wrapper">
                <img class="hero-img" src="../assets/bredcum-img.jpg">
                
                <span class="arrow-wrapper">
                    <span class="arrow arrow-left" >
                        <img class="w10"  src="../assets/left-arrow.svg">
                    </span>
                    <span class="arrow arrow-right" >
                        <img class="w10"  src="../assets/right-arrow.svg">
                    </span>
                </span>
             
            </div>
        </div>



        <div class="container hero-text">
            <div class="row">
                <div class="col hero-text-wrapper">
                    <p class="subtitle">Cinemato studio</p>
                    <h2 class="title">Action and <br> inspire people</h2>
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
    height: 600px;
    object-fit: cover;
}
.hero-carousel-wrapper{
    position: relative;
}
.arrow{
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.618);
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
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
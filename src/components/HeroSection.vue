<script>
export default{
    
}
</script>

<template>
    <section >
        <div class="container-fuild ">
            <div class="hero-carousel-wrapper">
                <img class="hero-img" src="../assets/bredcum-img.jpg">
               
                    <span class="arrow arrow-left" >
                        <img class="w10"  src="../assets/left-arrow.svg">
                    </span>
                    <span class="arrow arrow-right" >
                        <img class="w10"  src="../assets/right-arrow.svg">
                    </span>
             
            </div>
        </div>



        <div class="container">
            <div class="row">
                <div class="col">
                    <p>Cinema studio</p>
                    <h2>Action and inspire people</h2>
                    <button>Read more</button>
                </div>
            </div>
        </div>
    </section>
    
 
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.w10{
    width: 10px;
}
.hero-img{
    height: 400px;
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

</style>
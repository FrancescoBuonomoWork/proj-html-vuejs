<script>
export default{
    
}
</script>

<template>
    <section class="grafic-section">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="img-wrapper">
                        <figure class="img-wrapper-item">
                            <img src="../assets/03.png">
                        </figure>
                        <figure class="img-wrapper">
                            <img src="../assets/04.png">
                        </figure>
                        <figure class="img-wrapper-item">
                            <img src="../assets/05.png">
                        </figure>
                        <figure class="img-wrapper-item">
                            <img src="../assets/01.png">
                        </figure>
                        <figure class="img-wrapper-item">
                            <img src="../assets/02.png">
                        </figure>

                    </div>

                </div>
            </div>
        </div>
    </section>
 
</template>

<style scoped lang="scss">
.grafic-section{
    background-image: url(../assets/Parallax-03.jpg);
    height: 300px;
    background-position: 0 -90px;
    background-size: cover;
    .container{
        height: 100%;
    }
    .row{
        height: 100%;
        align-items: center;
    }
    .col{
        flex-grow: 1;
    }
    .img-wrapper{
        display: flex;
        justify-content: space-around;
    }
}

</style>
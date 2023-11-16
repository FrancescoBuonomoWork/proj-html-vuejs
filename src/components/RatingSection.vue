<script>
export default {

}
</script>

<template>
    <section class="rating-section">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="rating-wrapper">
                        <span class="rating-number">158</span>
                        <span class="rating-desc">Satisfield clients</span>
                    </div>
                </div>
                <div class="col-3">
                    <div class="rating-wrapper">
                        <span class="rating-number">3+</span>
                        <span class="rating-desc">Our Projects</span>
                    </div>
                </div>
                <div class="col-3">
                    <div class="rating-wrapper">
                        <span class="rating-number">1,906</span>
                        <span class="rating-desc">Cup of Coffee</span>
                    </div>
                </div>
                <div class="col-3">
                    <div class="rating-wrapper">
                        <span class="rating-number">2</span>
                        <span class="rating-desc">Our Awards</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.rating-section {
    color: $white;
    background-image: url(../assets/Parallax-01.jpg);
    background-position: 50% 80%;
    
    height: 250px;
    .container,.row{
        height: 100%;
    }
    .row{
        align-items: center;
    }
    .rating-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 700;
        .rating-number{
            font-size: 48px;
        }
        .rating-desc{
            margin-top: 5px;
            text-transform: uppercase;
            font-size: 12px;
        }
    }
}
</style>
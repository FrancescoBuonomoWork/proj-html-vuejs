<script>
export default {

}
</script>

<template>
    <section class="quotes-section section-pad-100">
        <div class="container-small">
            <div class="row">
                <div class="col">
                    <div class="quotes-wrapper">
                        <img class="quotes-img" src="../assets/image (20).svg">
                        <div class="quotes-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore ipsam ratione, facere,
                                adipisci nisi commodi nulla unde dolores enim assumenda esse alias sint hic veniam nobis.
                                Adipisci, quo voluptas esse, quae omnis tempore ducimus, facilis animi harum sint vero.</p>
                        </div>
                        <div class="author">
                            <figure class="author-img">
                                <img src="../assets/01.jpg">
                            </figure>
                            <figcaption class="author-info">
                                <p>John Doe</p>
                                <p>Designer</p>
                            </figcaption>
                        </div>
                        <div class="dots">
                            <font-awesome-icon class="dot active" :icon="['fas', 'circle']" />
                            <font-awesome-icon class="dot" :icon="['fas', 'circle']" />
                            <font-awesome-icon class="dot" :icon="['fas', 'circle']" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.quotes-section {
    color: $white;
    background-image: url(../assets/Parallax-02.jpg);
    height: 550px;
    background-position: 0 150px;

    .quotes-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }

    .quotes-img {
        filter: invert(100%);
        width: 40px;
    }

    .quotes-text {
        text-align: center;
        line-height: 1.5em;
    }

    .author {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .author-img {
        width: 50px;


        img {
            border-radius: 50%;
        }

    }
    .dots{
        display: flex;
        gap: 5px;
        // ho preso questo tag dal ispector ,dovrebbe essere un tag di fontawesome
        .svg-inline--fa{
            width: 8px;
        }
        .dot{
            color: $gray;
            &.active{
                color: $white;
            }
        }
         
    }
}
</style>
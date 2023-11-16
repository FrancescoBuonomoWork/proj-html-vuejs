<script>
export default{
    
}
</script>

<template>
    <section class="collaborate-section section-pad-100">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="wrapper">

                        <p class="subtitle">Collaborate</p>
                        <h2 class="title">Want to work with us?</h2>
                        <h2 class="title">Leave us a message</h2>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur a et totam error nesciunt unde cumque sequi dolorum illo voluptatum temporibus repellendus repudiandae ab molestias odio reiciendis accusantium fugiat nihil impedit itaque, sapiente eaque nam saepe? Pariatur, ut asperiores?</p>
                    </div>
                </div>
                <div class="col-6"></div>
            </div>
        </div>
    </section>
 
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.collaborate-section{
    .wrapper{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .text{
        color: $gray;
        line-height: 1.5em;
    }
}

</style>
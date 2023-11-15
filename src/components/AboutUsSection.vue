<script>
export default{
    
}
</script>

<template>
    <section class="about-us">
        <div class="container">
            <div class="row flex-end">
                <div class="col-6">
                    <div class="text-wrapper">
                        <p class="subtitle">About Us</p>
                        <h2 class="title">High quality cinematic</h2>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque animi explicabo delectus consequuntur, repudiandae facilis exercitationem voluptates tenetur quo, in autem architecto dolorum, odit quos temporibus suscipit natus officia? Laborum.</p>
                        <a href="#" class="button">Read more</a>

                    </div>
                </div>
            </div>
        </div>
    </section>
 
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.about-us{
    color: $white;
    height: 550px;
   
    background-image: url(../assets/About-Us.jpg);
    .text-wrapper{
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 40px;
       
    }
    .text{
        line-height: 1.5em;
    }
}
</style>
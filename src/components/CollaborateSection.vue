<script>
export default {

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
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur a et totam
                            error nesciunt unde cumque sequi dolorum illo voluptatum temporibus repellendus repudiandae ab
                            molestias odio reiciendis accusantium fugiat nihil impedit itaque, sapiente eaque nam saepe?
                            Pariatur, ut asperiores?</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-wrapper">
                        <form>
                            <div class="flex-between input-container">
                                <input class="input-style" type="text" placeholder="Your Name">
                                <input class="input-style" type="text" placeholder="Your Email">
                            </div>
                            <div class="flex-between input-container">
                                <input class="input-style" type="text" placeholder="Mobile Number">
                                <input class="input-style" type="text" placeholder="Your Pincode">
                            </div>
                            <div class="input-container">
                                <textarea rows="8" cols="10" class="input-style textarea" placeholder="Enter Your Message"></textarea>
                            </div>
                            <div class="input-container">
                                <!-- <input  type="submit"> -->
                                <a href="#" class="button button-black">Submit Now</a>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.collaborate-section {
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .text {
        color: $gray;
        line-height: 1.5em;
    }

    .input-container {
        margin-bottom: 20px;
    }

    .form-wrapper {
        padding-top: 50px;
        padding-left: 50px;

        .input-style {
            background-color: $light-gray;
            border: none;
            padding: 15px 20px;
        }

        .textarea {
            width: 100%;
        }

        .button {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
    }
}</style>
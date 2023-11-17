<script>
export default{
    props:{
        navItem:Array,
        socials:Array,
    },
    data(){
        return{

        }
    }

}
</script>

<template>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 header">
                    <a href="#"><img class="logo" src="../assets/logo.svg"></a>
                    <nav >
                        <ul class="nav-link text-style">
                            <li v-for="elem in navItem"><a href="#">{{ elem.toUpperCase() }}</a></li>
                        </ul>
                    </nav>

                    <div class="icon-wrapper">
                            <a  href="#">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </a>
                
                        <ul class="nav-link nav-social">
                            <li v-for="social in socials">
                                <a :href=social.link>
                                <font-awesome-icon :icon="social.icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
 
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.header{
    background-color: $white;
    color: $black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px ;

    .logo{
        width: 200px;
    }
    .nav-link{
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
    }
    .text-style{
        font-weight: 700;
        font-size: 12px;

    }

    .icon-wrapper{
        display: flex;
        gap: 10px;
    }
    .nav-social::before{
        content: '';
        width: 1px;
        height: 100%;
        background-color: $light-gray;
        display: block;

    }
}
</style>
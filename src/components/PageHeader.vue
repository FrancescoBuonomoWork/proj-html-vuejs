<script>
export default{
    props:{
        navItem:Array,
        socials:Array,
    },
    data(){
        return{
            isOpenDropdown:false,
            

        }
    },
    methods:{
        toggleDropDown(){
            console.log('dropdown')
            if (this.isOpenDropdown ===false){
                this.isOpenDropdown = true;

            } else{
                this.isOpenDropdown = false;
            }
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
                    <nav>
                        <ul class="nav-link text-style">
                            <li class="nav-item" v-for="elem in navItem">
                                <a href="#">
                                    {{ elem.title.toUpperCase() }}
                                </a>
                                <img v-if="elem.chevon" @click="toggleDropDown()" class="chevon" src="../assets/image (7).svg">
                                <ul v-show="isOpenDropdown === true" v-if="elem.chevon" class="dropdown">
                                    <li class="dropdown-item"><a href="#">Services</a></li>
                                    <li class="dropdown-item"><a href="#">Our Work Flow</a></li>
                                    <li class="dropdown-item"><a href="#">Video Thumbnail Type</a></li>
                                </ul>

                            </li>
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
.nav-item{
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    .chevon{
        width: 12px;
        cursor: pointer;
    }
}
.dropdown{
    background-color: $black;
    color: $white;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    position: absolute;
    top: 20px;
    right: 0;
    left: 0;
    z-index: 50;
    width: 230px;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .dropdown-item::after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: $light-gray;
    }
}
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
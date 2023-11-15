<script>
export default{
    props:{
        navItem:Array,
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
                    <p>Logo</p>
                    <nav >
                        <ul class="nav-link">
                            <li v-for="elem in navItem"><a href="#">{{ elem.toUpperCase() }}</a></li>
                        </ul>
                    </nav>

                    <div class="icon-wrapper">
                        <p>cerca </p>
                        <ul class="nav-link">
                            <li v-for="n in 4"><a href="#">Social</a></li>
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

    .nav-link{
        display: flex;
        gap: 18px;
    }
    .icon-wrapper{
        display: flex;
        gap: 10px;
    }
}
</style>
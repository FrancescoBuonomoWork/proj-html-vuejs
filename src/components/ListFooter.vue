<script>
export default{
    props:{
        footerMenuItem:Object
    },
    data(){
        return{
        //     listDataContacts:[
        //     {
        //         icon:'location-dot',
        //         text:'2/45 Tower Street,New York USA'
        //     },{
        //         icon:'phone',
        //         text:' Call Us On 0800 840 1010'
        //     },{
        //         icon:'envelope',
        //         text:' Demo@Example.com'
        //     }
        // ]
        }
    }
    
}
</script>

<template>
    <h6 class="subtitle">{{ footerMenuItem.title }}</h6>
    <ul class="list">
        <li class="gap-10 list-item " v-for="element in footerMenuItem.listItems">
            <span v-if="element.icon">
                <font-awesome-icon  :icon="['fas', element.icon ? element.icon : '' ]" />
            </span>
            <span v-if="element.text" >
            {{element.text ? element.text : ''}}
            </span>
            <input class="input" v-if="element.placeholder" type="text" placeholder="Enter Your Email">
            <a v-if="element.button" class="button" href="#">{{ element.button }}</a>
        </li>
    </ul>
 
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
    .gap-10{
        display: flex;
        gap: 10px;
    }
.subtitle{
    padding-bottom: 50px;
}
.list{
    display: flex;
    flex-direction: column;
    gap: 25px;
    .list-item{
        color: $gray;
        &:hover{
            color: $white;
        }

    }

}
.input{
    background-color: #1C1C1C;
    border: none;
    padding: 15px 0px;
}

</style>
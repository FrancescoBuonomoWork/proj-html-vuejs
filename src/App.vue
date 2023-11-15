<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';


export default{
  components:{
    PageHeader,
    PageMain,
    PageFooter,
  },
  data(){
        return{
          navItem:['home','blog','pages','about','contacts','gallery','shop']
        }
    }
}
</script>

<template>

  <PageHeader :navItem="navItem"/>
 
</template>

<style lang="scss">
@use './styles/general.scss';

</style>

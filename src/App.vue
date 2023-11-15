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
          navItem:['home','blog','pages','about','contacts','gallery','shop'],
          iconListLink: [
                {
                    link: '#',
                    icon: ['fab', 'facebook']
                },
                {
                    link: '#',
                    icon: ['fab', 'twitter']
                },
                {
                    link: '#',
                    icon: ['fab', 'youtube']
                },
                {
                    link: '#',
                    icon: ['fab','instagram' ]
                }
            ]
        }
    }
}
</script>

<template>

  <PageHeader :navItem="navItem" :socials="iconListLink"/>
  <PageMain/>
 
</template>

<style lang="scss">
@use './styles/general.scss';

</style>

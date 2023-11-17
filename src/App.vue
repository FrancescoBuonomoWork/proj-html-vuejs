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
          navItem:[{title:'home'},{title:'blog'},{title:'pages',chevon: 'chevon'},{title:'about'},{title:'contacts'},{title:'gallery'},{title:'shop',chevon:'chevon'}],
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
  <PageFooter/>
 
</template>

<style lang="scss">
@use './styles/general.scss';

</style>

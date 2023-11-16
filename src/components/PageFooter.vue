<script>
import ListFooter from './ListFooter.vue';
export default {
    components: {
        ListFooter
    },
    data() {
        return {
            footerMenuItems: [
                {
                    title: 'Contact Info',
                    listItems: [
                        {
                            icon: 'location-dot',
                            text: '2/45 Tower Street,New York USA'
                        }, {
                            icon: 'phone',
                            text: ' Call Us On 0800 840 1010'
                        }, {
                            icon: 'envelope',
                            text: ' Demo@Example.com'
                        }
                    ]
                },
                {
                    title: 'Information',
                    listItems: [
                        {
                            text: 'Product Support'
                        }, {
                            text: 'Checkout'
                        }, {
                            text: 'Report Abuse'
                        },
                        {
                            text: 'Redeem Voucher'
                        },
                        {
                            text: 'Order Status'
                        }
                    ]
                },
                {
                    title: 'Useful Links',
                    listItems: [
                        {
                            text: 'Policies & Rules'
                        }, {
                            text: 'Privacy Policy'
                        }, {
                            text: 'License Policy'
                        },
                        {
                            text: 'My Account'
                        },
                        {
                            text: 'Locality'
                        }
                    ]
                },
                {
                    title: 'Newsletter',
                    listItems: [
                        {
                            text: 'Subscrive To Receive Inspiration'
                        }, {
                            text: 'Ideas & News In Your Inbox'
                        },
                        {
                            placeholder:'Enter Your Email'
                        },
                        {
                            button:'Subscribe'
                        }
                    ]
                },
            ],
            listDataContacts: [
                {
                    icon: 'location-dot',
                    text: '2/45 Tower Street,New York USA'
                }, {
                    icon: 'phone',
                    text: ' Call Us On 0800 840 1010'
                }, {
                    icon: 'envelope',
                    text: ' Demo@Example.com'
                }
            ]
        }
    }

}
</script>

<template>
    <footer class="footer section-pad-100">
        <div class="container">
            <div class="row">
                <!-- <div class="col-3">
                    <h6 class="subtitle">Contact Info</h6>
                    <ul>
                        <li class="gap-10" v-for="element in listDataContacts">
                            <span>
                                <font-awesome-icon :icon="['fas', element.icon]" />
                            </span>
                            <span>
                            {{element.text}}
                            </span>
                        </li>
                    </ul>       
                </div> -->
                <div class="col-3" v-for="element in footerMenuItems">
                    <ListFooter :footerMenuItem="element" />

                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.footer {
    color: $white;
    background-color: $black;

    .gap-10 {
        display: flex;
        gap: 10px;
    }
}
</style>
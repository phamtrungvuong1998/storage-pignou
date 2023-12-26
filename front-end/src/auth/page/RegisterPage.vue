<script>
import HeaderComp from "@/auth/components/HeaderComp.vue";
import FooterComp from "@/auth/components/FooterComp.vue";
import BaseButton from "@/auth/components/BaseButton.vue";
import UrlComp from "@/auth/components/UrlComp.vue";
import CardTitle from "@/auth/components/CardTitle.vue";
import axios from "axios";
import config from "@/config.js";

export default {
    name: "RegisterPage",
    components: {
        CardTitle,
        HeaderComp,
        FooterComp,
        BaseButton,
        UrlComp,
    },
    data() {
        return {
            nameBtn: "Register",
            dataRegister: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            },
        }
    },
    methods: {
        register() {
            axios.post(`${config.baseURL}/api/register`, this.dataRegister)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                    this.error = error;
                });
        }
    }
}
</script>

<template>
    <div class="my-login-page">
        <section class="h-100">
            <div class="container h-100">
                <div class="row justify-content-md-center h-100">
                    <div class="card-wrapper">
                        <HeaderComp></HeaderComp>
                        <div class="card fat">
                            <div class="card-body">
                                <CardTitle :name="`Register`"></CardTitle>
                                <form method="POST" @submit.prevent="register">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input id="name" type="text" class="form-control" name="name" v-model="dataRegister.name" autofocus>
<!--                                        <span class="error" v-if="dataError !== null">{{ dataError.name }}</span>-->
                                    </div>

                                    <div class="form-group">
                                        <label for="email">E-Mail Address</label>
                                        <input id="email" type="email" class="form-control" name="email" v-model="dataRegister.email">
<!--                                        <span class="error" v-if="dataError.email">{{ dataError.email }}</span>-->
                                    </div>

                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input id="password" type="password" class="form-control" name="password" v-model="dataRegister.password" data-eye>
<!--                                        <span class="error" v-if="dataError.password">{{ dataError.password }}</span>-->
                                    </div>

                                    <div class="form-group">
                                        <label for="password">Confirm Password</label>
                                        <input id="password" type="password" class="form-control" name="password" v-model="dataRegister.password_confirmation" data-eye>
<!--                                        <span class="error" v-if="dataError.password_confirmation">{{ dataError.password_confirmation }}</span>-->
                                    </div>

                                    <BaseButton :nameBtn="nameBtn"></BaseButton>
                                    <UrlComp :text-question="`Already have an account?`" :url-redirect="`/login`" :text-confirm="`Login`"></UrlComp>
                                </form>
                            </div>
                        </div>
                        <FooterComp></FooterComp>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
@import url("@/css/auth.css");
</style>

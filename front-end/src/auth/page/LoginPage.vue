<template>
    <div class="my-login-page">
        <section class="h-100">
            <div class="container h-100">
                <div class="row justify-content-md-center h-100">
                    <div class="card-wrapper">
                        <HeaderComp></HeaderComp>
                        <div class="card fat">
                            <div class="card-body">
                                <CardTitle :name="`Login`"></CardTitle>
                                <form method="POST">

                                    <div class="form-group">
                                        <label for="email">E-Mail Address</label>

                                        <input id="email" type="email" class="form-control" name="email" value=""
                                               required autofocus>
                                    </div>

                                    <div class="form-group">
                                        <label for="password">Password
                                            <router-link to="/forgot-password" class="float-right">Forgot Password?</router-link>
                                        </label>
                                        <input id="password" type="password" class="form-control" name="password"
                                               required data-eye>
                                    </div>

                                    <BaseButton :nameBtn="nameBtn"></BaseButton>
                                    <UrlComp :textQuestion="`Don't have an account?`" :textConfirm="`Sign up`" :urlRedirect="`/register`"></UrlComp>
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

<script>
import HeaderComp from "@/auth/components/HeaderComp.vue";
import FooterComp from "@/auth/components/FooterComp.vue";
import BaseButton from "@/auth/components/BaseButton.vue";
import UrlComp from "@/auth/components/UrlComp.vue";
import CardTitle from "@/auth/components/CardTitle.vue";

export default {
    name: "LoginPage",
    components: {
        HeaderComp,
        FooterComp,
        BaseButton,
        UrlComp,
        CardTitle,
    },
    data() {
        return {
            nameBtn: "Login",
        }
    },
}
</script>

<style>
@import url("@/css/auth.css");
</style>

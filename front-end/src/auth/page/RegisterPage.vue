<script>
import HeaderComp from "@/auth/components/HeaderComp.vue";
import FooterComp from "@/auth/components/FooterComp.vue";
import BaseButton from "@/auth/components/BaseButton.vue";
import UrlComp from "@/auth/components/UrlComp.vue";

export default {
    name: "RegisterPage",
    components: {
        HeaderComp,
        FooterComp,
        BaseButton,
        UrlComp,
    },
    data() {
        return {
            nameBtn: "Register",
        }
    },
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
                                <h4 class="card-title">Register</h4>
                                <form method="POST">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input id="name" type="text" class="form-control" name="name" required autofocus>
                                    </div>

                                    <div class="form-group">
                                        <label for="email">E-Mail Address</label>
                                        <input id="email" type="email" class="form-control" name="email" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input id="password" type="password" class="form-control" name="password" required data-eye>
                                    </div>

                                    <div class="form-group">
                                        <label>
                                            <input type="checkbox" name="aggree" value="1"> I agree to the Terms and Conditions
                                        </label>
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

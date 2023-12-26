<script>
import FooterComp from "@/auth/components/FooterComp.vue";
import HeaderComp from "@/auth/components/HeaderComp.vue";
import BaseButton from "@/auth/components/BaseButton.vue";

export default {
    name: "ForGotPassword",
    components: {BaseButton, HeaderComp, FooterComp}
}
</script>

<template>
    <div class="my-login-page">
        <section class="h-100">
            <div class="container h-100">
                <div class="row justify-content-md-center align-items-center h-100">
                    <div class="card-wrapper">
                        <HeaderComp></HeaderComp>
                        <div class="card fat">
                            <div class="card-body">
                                <h4 class="card-title">Forgot Password</h4>
                                <form method="POST">

                                    <div class="form-group">
                                        <label for="email">E-Mail Address</label>
                                        <input id="email" type="email" class="form-control" name="email" value="" required autofocus>
                                        <div class="form-text text-muted">
                                            By clicking "Reset Password" we will send a password reset link
                                        </div>
                                    </div>

                                    <BaseButton :name-btn="`Send Mail`"></BaseButton>
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

<style scoped>

</style>

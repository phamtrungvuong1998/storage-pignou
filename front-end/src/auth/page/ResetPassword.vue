<script>
import HeaderComp from "@/auth/components/HeaderComp.vue";
import FooterComp from "@/auth/components/FooterComp.vue";
import BaseButton from "@/auth/components/BaseButton.vue";
import CardTitle from "@/auth/components/CardTitle.vue";

export default {
    name: "ResetPassword",
    components: {
        CardTitle,
        HeaderComp,
        FooterComp,
        BaseButton,
    },
    data() {
        return {
            nameBtn: "Login",
        }
    },
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
                                <CardTitle :name="`Reset Password`"></CardTitle>
                                <form method="POST">

                                    <div class="form-group">
                                        <label for="new-password">New Password</label>
                                        <input id="new-password" type="password" class="form-control" name="password" required autofocus data-eye>
                                    </div>

                                    <BaseButton :nameBtn="`Reset Password`"></BaseButton>
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

</style>

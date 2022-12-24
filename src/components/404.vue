<script lang="ts">
    export default {
        name: "404",
        methods: {
            homePage() {
                location.href = "/";
            },
        }
    }
</script>
<template>
    <div class="page-error">
        <h1>404</h1>
        <p>
            <strong>Page not found :(</strong>
        </p>
        <p>The requested page could not be found.</p>
        <button @click="homePage"><img src="./icons/left-arrow-circle.svg" alt="goBackIcon" width="20" height="20"> Home Page</button>
    </div>
</template>
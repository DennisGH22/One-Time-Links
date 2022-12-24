<script lang="ts">
    export default {
        name: "204",
        methods: {
            homePage() {
                location.href = "/";
            },
        }
    }
</script>
<template>
    <div class="page-error">
        <h1>204</h1>
        <p>
            <strong>No Content :(</strong>
        </p>
        <p>Your one-time link has been accessed already and has been deleted.</p>
        <p>If this is your first time using the one-time link you should report it to the sender</p>
        <p>as the shared information may have been accessed by someone else.</p>
        <button @click="homePage"><img src="./icons/left-arrow-circle.svg" alt="goBackIcon" width="20" height="20"> Home Page</button>
    </div>
</template>
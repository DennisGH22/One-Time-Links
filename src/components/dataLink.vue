<script lang="ts">
    export default {
        name: "dataLink",
        props: {
            dataURL: String,
            disabled: String,
            visibility: Boolean,
        },
        emits: ['update:dataURL','update:disabled','update:visibility','copyURL']
    }
</script>
<template>
    <div class="data-link">
        <div class="link-btn">
            <label for="link">Your Link</label>
            <button @click="$emit('copyURL')" :disabled="disabled === '1'">Copy Link</button>
        </div>
        <div class="link-input">
            <input type="text" :value="dataURL" id="link" :disabled="disabled === '1'" />
            <div class="toast" :class="{'visibility': visibility}">
                <img src="./icons/info_icon.svg" alt="info_icon" width="15" height="15" />
                <p>Link copied...</p>
            </div>
        </div>
    </div>
</template>
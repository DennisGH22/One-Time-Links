<script lang="ts">
import axios from "axios";

export default {
    name: "contentData",
    data() {
        return {
            sensitive: "This is confidential. Do not share",
            info: true,
            readonly: true,
            show: true,
            copy: false,
            copyIcon: true,
            copiedIcon: false,
        }
    },
    methods: {
        viewInfo(info: boolean, show: boolean, copy: boolean) {
            this.fetchData();
            this.info = info;
            this.show = show;
            this.copy = copy;
        },
        async fetchData() {
            try {
                const pathname = location.pathname.replace("/", "");
                const response = await axios.get("http://localhost:3000/fetch", {
                    params: {
                        uniqueID: pathname,
                    }
                });
                const data = await response.data;
                this.sensitive = data.data;
                // data.forEach((obj: any) => {
                //     this.sensitive = obj.data;
                // });
                await axios.delete("http://localhost:3000/delete", {
                    params: {
                        uniqueID: pathname,
                    }
                });
            } catch(error) {
                console.log(error);
            }
        },
        copyInfo(copy: boolean, copied: boolean) {
            navigator.clipboard.writeText(this.sensitive);
            this.copyIcon = copy;
            this.copiedIcon = copied;
        }
    }
}
</script>
<template>
    <div class="data-wrapper">    
        <div class="secret-data">
            <textarea :class="{'blur': info}" :disabled="readonly">{{ sensitive }}</textarea>
            <button v-if="show" @click="viewInfo(false, false, true)">View Info</button>
            <button v-if="copy" @click="copyInfo(false, true)">Copy Info
                <img v-if="copyIcon" src="./icons/clipboard_icon.svg" alt="clipboardIcon" width="20" height="20" id="clipboard" />
                <img v-if="copiedIcon" src="./icons/check.svg" alt="clipboardIcon" width="20" height="20" id="check" />
            </button>
        </div>
        <div class="warning">
            <h1>Warning!</h1>
            <p>The data linked to this URL(link) is <b>only available for one-time use</b>.</p>
            <p>Once you viewed the data. Make sure to <b>copy and store it safely</b> where you'll be able to access it later as <b>it will be cleared</b> and won't be accessible through this link again.</p>
        </div>
    </div>
</template>
<script lang="ts">
import axios from 'axios';
import navBar from "@/components/nav.vue";
import shareComp from "@/components/contentShare.vue";
import contentData from '@/components/contentData.vue';
import error204 from '@/components/204.vue';
import error404 from '@/components/404.vue';
import skeleton from '@/components/skeleton.vue';

export default {
  name: "App",
  data() {
    return {
        render: "",
    }
  },
  components: {
    navBar,
    shareComp,
    contentData,
    error204,
    error404,
    skeleton,
  },
  methods: {
      async contentControl() {
          let pathname = location.pathname.replace('/', '');
          if (pathname !== '') {

            this.render = 'skeleton';

            const validateUrl = await axios.get("http://localhost:3000/path", {
            params: {
                indentifier: pathname,
            }
            });
            
            const data = await validateUrl.data;

            let dataLink = /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;

            if (data.count >= 1) this.render = 'contentData';
            if (data.count < 1 && dataLink.test(pathname)) this.render = 'error204';
            if (!dataLink.test(pathname)) this.render = 'error404';

          } else {
            this.render = 'shareComp';
          }
      }
  },
  mounted() {
    this.contentControl();
  }
}
</script>
<template>
  <navBar />
  <main>
    <component :is="render" />
  </main>
</template>

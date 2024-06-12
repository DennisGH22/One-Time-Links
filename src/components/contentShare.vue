<script lang="ts">
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Editor from "@tinymce/tinymce-vue";
import DOMPurify from 'dompurify';
import dataLink from "../components/dataLink.vue";

export default {
  name: "content",
  data() {
    return {
      secretData: "",
      uniqueLink: "",
      generateURL: "",
      disabled: "1",
      visibility: true,
    }
  },
  components: {
    editor: Editor,
    dataLink,
  },
  methods: {
    async generateLink() {
      if (this.secretData === '') return;
      try {
        this.disabled = "disabled";
        this.uniqueLink = (uuidv4());
        const post = await axios.post("http://localhost:3000/share", {
          data: DOMPurify().sanitize(this.secretData, { USE_PROFILES: { html: false } }),
          data_permalink: this.uniqueLink
        });
        const status = post.status;
        this.generateURL = this.uniqueLink;
        if (this.generateURL !== '' && status === 200) {
          let protocol = location.protocol;
          let domain = location.hostname;
          this.generateURL = `${protocol}//${domain}/${this.generateURL}`;
          this.disabled = "0";
        }
      } catch(error) {
        throw error;
      }
    },
    copyURL(visibility: boolean) {
      navigator.clipboard.writeText(this.generateURL); 
      this.visibility = visibility;
      setTimeout(() => {
        this.visibility = true;
      }, 3000);
    },
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="steps">
      <h1>How to use it...</h1>
      <div class="step">
        <div class="num">
          <h2>1</h2>
        </div>
        <p>Type the information you wish to share secretely in the input field.</p>
      </div>
      <div class="step">
        <div class="num">
          <h2>2</h2>
        </div>
        <p>Click on Generate Link to generate a unique link for the data you wish to share.</p>
      </div>
      <div class="step">
        <div class="num">
          <h2>3</h2>
        </div>
        <p>Copy the generated link and send it to the intended personnel. The link is only available for one-time use.</p>
      </div>
    </div>
    <div class="info">
        <editor
          v-model="secretData"
		  api-key=VITE_TINYMCE_KEY
          :init="{
              height: '280',
              menubar: false,
              resize: false,
              outputFormat: 'text',
              plugins: 'lists image paste wordcount',
              toolbar: 'undo redo  bold italic  forecolor backcolor  template codesample alignleft aligncenter alignright alignjustify | bullist numlist | link image',
          }"
        />
        <button type="submit" @click="generateLink" :disabled="disabled === 'disabled'">Generate Link</button>
        <dataLink v-model:dataURL="generateURL" v-model:disabled="disabled" v-model:visibility="visibility" @copyURL="copyURL(false)" />
    </div>
  </div>
</template>

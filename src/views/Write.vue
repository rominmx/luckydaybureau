<template>
  <banner>
    <div>
      Пишем и проектируем в стол.<br /> Хочешь стать частью команды — напиши нам:
    </div>
    <form
      name="contact-us"
      method="post"
      data-netlify="true"
      action="/write"
      data-netlify-honeypot="bot-field"
      enctype="application/x-www-form-urlencoded"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contact-us" />
      <div>
        <input
          type="text"
          name="name"
          v-model="formData.name"
          placeholder="Ваше имя *"
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          v-model="formData.email"
          placeholder="Электронная почта *"
        >
      </div>
      <div>
        <textarea
          name="message"
          v-model="formData.message"
          placeholder="Сообщение"
        />
      </div>
      <input
        type="submit"
        :disabled="disabled"
        value="Отправить"
      />
      <div v-if="success">Сообщение отправлено!</div>
    </form>
  </banner>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
  name: 'Write',
  components: {
    Banner,
  },
  data() {
    return {
      formData: {
        message: '',
        email: '',
        name: '',
      },
      loading: false,
      success: false,
    };
  },
  computed: {
    disabled() {
      return this.formData.name.trim() === '' || this.formData.email.trim() === '';
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    sendData() {
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: this.encode({
          'form-name': 'contact-us',
          ...this.formData,
        }),
      });
    },
    async handleSubmit() {
      this.loading = true;

      try {
        await this.sendData();
        this.success = true;
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style module>
.container {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
</style>

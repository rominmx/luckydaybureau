<template>
  <banner>
    <div>
      Пишем и проектируем в стол.<br /> Хочешь стать частью команды — напиши нам:
    </div>
    <form
      name="contacts"
      method="post"
      data-netlify="true"
      action="/write"
      data-netlify-honeypot="bot-field"
      enctype="application/x-www-form-urlencoded"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contacts" />
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
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    handleSubmit() {
      this.loading = true;
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: this.encode({
          'form-name': 'contact-us',
          ...this.formData,
        }),
      })
        .then(() => {
          this.success = true;
        })
        .catch((error) => { console.log(error); })
        .finally(() => {
          this.loading = false;
        });
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

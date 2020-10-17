<template>
  <div>
    <form
      name="my-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      enctype="application/x-www-form-urlencoded"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="my-form" />
      <div>
        <div>
          <label>Сообщение</label>
        </div>
        <input
          type="text"
          name="message"
          v-model="formData.message"
        />
      </div>
      <input type="submit" value="Написать" />
    </form>
    <banner>
      Пишем и проектируем в стол.<br /> Хочешь стать частью команды —
      <a href="mailto:buroschastlivogodnya@gmail.com">пиши</a>
    </banner>
  </div>
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
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    handleSubmit() {
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: this.encode(this.formData),
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

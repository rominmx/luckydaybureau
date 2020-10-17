<template>
  <div>
    <form
      name="my-form"
      method="post"
      data-netlify
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="my-form" />
      <div>
        <input
          type="text"
          name="message"
          v-model="message"
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
      message: '',
    };
  },
};
</script>

<style module>
.container {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
</style>

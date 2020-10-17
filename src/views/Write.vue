<template>
  <banner>
    <div>
      Пишем и проектируем в стол.<br /> Хочешь стать частью команды — напиши нам:
    </div>
    <form
      name="contacts"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      enctype="application/x-www-form-urlencoded"
      :class="$style.form"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contacts" />
      <div>
        <input
          type="text"
          name="name"
          v-model="formData.name"
          placeholder="Ваше имя *"
          :class="$style.input"
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          v-model="formData.email"
          placeholder="Электронная почта *"
          :class="$style.input"
        >
      </div>
      <div>
        <textarea
          name="message"
          v-model="formData.message"
          placeholder="Сообщение"
          :class="[$style.input, $style.textarea]"
        />
      </div>
      <input
        type="submit"
        value="Отправить"
        :class="$style.button"
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
    sendData() {
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: this.encode({
          'form-name': 'contacts',
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

<style lang="scss" module>
@import '../stylesheets/mixins';

.form {
  margin-top: 1em;
}

.input {
  background-color: transparent;
  color: #fff;
  font-family: var(--font-custom);
  font-weight: 400;
  font-size: 18px;
  border: 1px solid #fff;
  border-radius: 0;
  outline: none;
  padding: 1em;
  width: 50%;
  display: block;
  margin-bottom: 2em;
  box-sizing: border-box;

  @include mobile {
    width: 100%;
    font-size: 16px;
  }
}

.textarea {
  resize: none;
  min-height: 4em;
}

.button {
  font-family: var(--font-custom);
  font-weight: 600;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: .8em 1em;
  background-color: var(--color-green);
  box-sizing: border-box;
  cursor: pointer;

  @include mobile {
    width: 100%;
    font-size: 16px;
  }
}
</style>

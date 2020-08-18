<template>
  <banner>
    Пишем и проектируем в стол.<br /> Хочешь стать частью команды —
    <a href="mailto:buroschastlivogodnya@gmail.com">пиши</a>
  </banner>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
  name: 'Write',
  components: {
    Banner,
  },
};
</script>

<style module>
.container {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
</style>

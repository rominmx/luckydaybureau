<template>
  <div :class="$style.container">
    Пишем и проектируем в стол. Хочешь стать частью команды - пиши
    <a href="mailto:buroschastlivogodnya@gmail.com">buroschastlivogodnya@gmail.com</a>
  </div>
</template>

<script>
export default {
  name: 'Write',
};
</script>

<style module>
.container {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
</style>

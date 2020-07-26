<template>
  <div :class="$style.container">
    <img src="@/assets/zine/01.jpg" alt="Зин для Уральской биеннале" />
  </div>
</template>

<script>
export default {
  name: 'Look',
};
</script>

<style module>
.container {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
</style>

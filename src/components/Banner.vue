<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="scss" module>
@import '../stylesheets/mixins';

.container {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.content {
  flex-basis: 66%;
  padding-left: var(--padding);
  margin-top: 0;
  margin-bottom: 0;
  color: #fff;
  font-size: 48px;
  line-height: 1.5;
  font-weight: 300;

  @include mobile {
    flex-basis: 100%;
    padding-left: var(--padding-mobile);
    padding-right: var(--padding-mobile);
    font-size: 18px;
  }
}

.content {
  a {
    color: #fff;
  }
}
</style>

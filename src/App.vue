<template>
  <div
    :class="[$style.container, {
      [$style.pageMain]: $route.name === 'Main',
      [$style.pageWrite]: $route.name === 'Write',
      [$style.pageLook]: $route.name === 'Look',
    }]"
  >
    <header :class="$style.header">
      <h1 :class="$style.title">Бюро счастливого дня</h1>
      <h2 :class="$style.description">Нас интересует игра слов и городская
        симфония взглядов</h2>
    </header>
    <nav :class="$style.nav">
      <router-link to="/" :class="$style.navItem">Главная</router-link>
      <router-link to="/look" :class="$style.navItem">Смотреть</router-link>
      <router-link to="/write" :class="$style.navItem">Написать</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onPageMain: true,
      onPageWrite: false,
    };
  },
};
</script>

<style lang="scss" module>
@import './stylesheets/mixins';

.container {
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  min-height: 100%;

  &.pageLook {
    .header {
      color: #000;
    }

    .navItem {
      color: #000;
    }
  }
}

.pageMain {
  background-image: url('./assets/luckyday.jpg');
}

.pageWrite {
  background-image: url('./assets/we.jpg');
}

.header {
  padding-left: var(--padding);
  padding-right: var(--padding);
  margin-top: 16px;
  margin-bottom: 28px;
  color: #fff;

  @include mobile {
    padding-left: var(--padding-mobile);
    padding-right: var(--padding-mobile);
  }
}

.title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 96px;

  @include mobile {
    font-size: 28px;
  }
}

.description {
  font-size: 64px;
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 12px;

  @include mobile {
    font-size: 18px;
  }
}

.nav {
  padding-left: var(--padding);
  padding-right: var(--padding);
  font-size: 36px;

  @include mobile {
    padding-left: var(--padding-mobile);
    padding-right: var(--padding-mobile);
    font-size: 18px;
    display: flex;
    justify-content: space-between;
  }
}

.navItem {
  color: #fff;
  font-weight: 700;
  margin-right: 1.5em;

  @include mobile {
    margin-right: 0;
  }
}
</style>

<style scoped>
.router-link-exact-active {
  text-decoration: none;
  cursor: default;
}
</style>

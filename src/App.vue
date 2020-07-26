<template>
  <div>
    <header :class="$style.header">
      <h1 :class="$style.title">Бюро счастливого дня</h1>
      <div :class="$style.description">Нас интересует игра слов и городская симфония взглядов</div>
    </header>
    <nav :class="$style.nav">
      <router-link to="/" :class="$style.navItem">Главная</router-link> |
      <router-link to="/look" :class="$style.navItem">Смотреть</router-link> |
      <router-link to="/write" :class="$style.navItem">Написать</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style module>
.header {
  padding-left: var(--padding);
  padding-right: var(--padding);
  margin-bottom: 48px;
}

.title {
  margin-top: 48px;
  margin-bottom: 16px;
  font-size: 48px;
}

.description {
  font-size: 24px;
}

.nav {
  margin-top: 2em;
  margin-bottom: 2em;
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.navItem {
  color: #000;
  font-weight: 700;
}
</style>

<style scoped>
.router-link-exact-active {
  color: var(--color-green);
}
</style>

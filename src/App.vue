<template>
  <div :class="$style.container">
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

<style module>
.container {
  background-image: url("./assets/luckyday.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  min-height: 100%;
}

.header {
  padding-left: var(--padding);
  padding-right: var(--padding);
  margin-top: 16px;
  margin-bottom: 28px;
  color: #fff;
}

.title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 96px;
}

.description {
  font-size: 64px;
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 12px;
}

.nav {
  padding-left: var(--padding);
  padding-right: var(--padding);
  font-size: 36px;
}

.navItem {
  color: #fff;
  font-weight: 700;
  margin-right: 1.5em;
}
</style>

<style scoped>
.router-link-exact-active {
  text-decoration: none;
  cursor: default;
}
</style>

<template>
  <div>
    <div>
      <header :class="$style.header">
        <h1 :class="$style.title">Бюро счастливого дня</h1>
        <div :class="$style.description">Нас интересует игра слов и городская
          симфония взглядов</div>
      </header>
      <nav :class="$style.nav">
        <router-link to="/" :class="$style.navItem">Главная</router-link>
        <router-link to="/look" :class="$style.navItem">Смотреть</router-link>
        <router-link to="/write" :class="$style.navItem">Написать</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style module>
.header {
  padding-left: var(--padding);
  padding-right: var(--padding);
  margin-top: 16px;
  margin-bottom: 28px;
}

.title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 96px;
}

.description {
  font-size: 64px;
}

.nav {
  padding-left: var(--padding);
  padding-right: var(--padding);
  font-size: 36px;
  margin-bottom: 48px;
}

.navItem {
  color: #000;
  font-weight: 700;
  margin-right: 1.5em;
}
</style>

<style scoped>
.router-link-exact-active {
  color: var(--color-green);
}
</style>

<template>
  <div>
    <header>
      <h1>Бюро счастливого дня</h1>
      <div>Нас интересует игра слов и городская симфония взглядов</div>
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
.nav {
  margin-top: 1em;
  margin-bottom: 1em;
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

<template>
  <div>
    <header>
      <h1>Бюро счастливого дня</h1>
      <div>Нас интересует игра слов и городская симфония взглядов</div>
    </header>
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/look">Смотреть</router-link> |
      <router-link to="/write">Написать</router-link>
    </nav>
    <router-view/>
  </div>
</template>

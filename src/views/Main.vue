<template>
  <div :class="$style.container">
    <div :class="$style.caption">
      <p :class="$style.text">Из всевозможных творческих кредо самым убедительным является
        лишь Мистер Кредо, который
        на протяжении 30 лет радует своим творчеством поклонников евроденса.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style module>
.container {
  height: 600px;
  background-image: url("../assets/luckyday.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  align-items: stretch;
}

.caption {
  background-color: rgba(0,0,0,.5);
  display: flex;
  align-items: center;
}

.text {
  flex-basis: 66%;
  padding-left: var(--padding);
  margin-top: 0;
  margin-bottom: 0;
  color: #fff;
  font-size: 48px;
  line-height: 1.5;
}
</style>

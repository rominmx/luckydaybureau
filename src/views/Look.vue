<template>
  <div :class="$style.container">
    <img src="@/assets/zine/01.jpg" alt="Зин для Уральской биеннале" />
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur corporis eum
      ex magnam possimus quasi quis reiciendis voluptas, voluptatum. Eum modi nam necessitatibus
      quibusdam vel? Cum dolores exercitationem impedit nesciunt pariatur qui quo voluptates!
      Corporis ducimus eius ipsum, necessitatibus possimus quae quis quo sequi sit soluta?
      Accusamus accusantium alias animi assumenda at atque autem consectetur cum deleniti ducimus
      eaque eligendi enim est ex excepturi facere fuga incidunt labore minus, molestiae mollitia
      nam natus nemo nesciunt non omnis quibusdam quidem ratione, repellat saepe sapiente sed sequi
      sit sunt totam velit veniam! Exercitationem illum iusto maxime veniam. Aliquam asperiores
      delectus ducimus ea error eveniet facere ipsum itaque maiores mollitia neque, obcaecati qui
      quia ratione repellat saepe sunt tempora! Alias aliquam animi at cumque est exercitationem hic
      illum in magni minima modi mollitia necessitatibus placeat provident quae, quisquam
      reprehenderit sit unde veniam vitae! Ab accusantium animi aperiam architecto commodi
      consequuntur cumque deserunt dicta doloribus itaque nam necessitatibus nulla odio, quam
      reiciendis repudiandae veritatis voluptatum? Architecto aspernatur consequatur cumque delectus
      ea, earum esse est fuga provident quidem reprehenderit, tempore. Cumque ducimus eius excepturi
      expedita pariatur quasi quia repudiandae vel voluptates! Delectus dicta enim hic iure nostrum
      quis ratione tempore. Aliquam deleniti dolorum ducimus eveniet ex fuga neque nobis non
      obcaecati officia officiis perferendis perspiciatis placeat porro praesentium repellendus
      rerum saepe sed tempora, temporibus tenetur ut voluptates voluptatum. Consequatur eius
      eligendi enim, eos est excepturi exercitationem hic illum ipsum minus modi non quos repellat
      rerum ullam! Labore, ratione, veritatis! A adipisci animi architecto aspernatur delectus
      deleniti dignissimos doloribus, eaque esse est ex expedita id laborum maiores non quibusdam
      quos repellat tempora tempore voluptatibus! Deserunt ducimus earum fugiat possimus provident?
      At dolorem dolorum itaque quod quos. Aliquam consequatur eaque eum nesciunt nobis nostrum
      officia quis, quo reprehenderit veritatis! Accusantium adipisci
      architecto delectus dolor esse est harum, iure laborum laudantium libero magnam neque,
      nesciunt nisi quam repellat repellendus sunt totam. Adipisci asperiores culpa dolorem earum,
      ipsam nihil officiis quae ratione rem sapiente sit sunt tempore veniam. Accusantium, adipisci
      animi asperiores blanditiis commodi consequuntur debitis dicta dignissimos est ex fuga hic
    </div>
  </div>
</template>

<script>
export default {
  name: 'Look',
};
</script>

<style lang="scss" module>
@import '../stylesheets/mixins.scss';

.container {
  padding-left: var(--padding);
  padding-right: var(--padding);
  margin-top: 48px;
  color: #000;
  line-height: 1.5;

  @include mobile {
    margin-top: 32px;
    padding-left: var(--padding-mobile);
    padding-right: var(--padding-mobile);
    font-size: 16px;

    img {
      display: block;
      width: 100%;
      margin-bottom: 1em;
    }
  }
}
</style>

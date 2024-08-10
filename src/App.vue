<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Destinos from './components/Destinos.vue';
</script>

<template>
 
  <img style="">
  
  <div>
      <div class="container">
        <h1>Espaço</h1>
        <div class="item">
          <img style="width: 600px; height: 350px" src="/src/assets/s1.jpeg" />
          <h2>1. Aventura nas Montanhas</h2>
          "Suba ao topo do mundo e descubra a serenidade que só a natureza pode
          oferecer. As montanhas guardam mistérios e vistas deslumbrantes para
          quem se atreve a explorá-las. Prepare-se para uma jornada inesquecível
          entre picos e vales."
        </div>
        <div class="item">
          <img
            style="width: 600px; height: 350px"
            src="/src/assets/s2.jpg"
            alt="Descrição da Imagem 2"
          />
          <h2>2. Escapada Romântica</h2>
          "Descubra o encanto das cidades históricas, onde cada esquina conta
          uma história de amor. Passeie de mãos dadas por ruas de
          paralelepípedos, saboreie a gastronomia local e deixe-se envolver pelo
          romantismo do destino. Uma escapada para lembrar para sempre."
        </div>
        <div class="item">
          <img
            style="width: 600px; height: 350px"
            src="/src/assets/s3.jpg"
            alt="Descrição da Imagem 3"
          />
          <h2>3. Paraíso Tropical</h2>
          "Deite-se em praias de areia branca e mergulhe em águas cristalinas. O
          paraíso tropical é o lugar perfeito para relaxar e se reconectar com a
          natureza. Aproveite o sol, as paisagens deslumbrantes e a rica cultura
          local para uma experiência verdadeiramente única."
        </div>
      </div>
    </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
body,
      html {
        justify-content: center;
        align-items: center;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .imgtop {
        width: 100px        
      }

      .img {
        width: 100px;
        
      }
      .item {
        margin: 10px 0;
        padding: 20px;
        width: 600px;
        text-align: center;
      }
</style>

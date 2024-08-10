<template>
    <div>
      <div class="container">
        <h1>Espaço</h1>
        <div class="item">
          <img
            :src="require('@/assets/s1.jpeg')"
            class="img"
            alt="Aventura nas Montanhas"
          />
          <h2>1. Aventura nas Montanhas</h2>
          <p>
            "Suba ao topo do mundo e descubra a serenidade que só a natureza pode
            oferecer. As montanhas guardam mistérios e vistas deslumbrantes para
            quem se atreve a explorá-las. Prepare-se para uma jornada inesquecível
            entre picos e vales."
          </p>
        </div>
        <div class="item">
          <img
            :src="require('@/assets/s2.jpg')"
            class="img"
            alt="Descrição da Imagem 2"
          />
          <h2>2. Escapada Romântica</h2>
          <p>
            "Descubra o encanto das cidades históricas, onde cada esquina conta
            uma história de amor. Passeie de mãos dadas por ruas de
            paralelepípedos, saboreie a gastronomia local e deixe-se envolver pelo
            romantismo do destino. Uma escapada para lembrar para sempre."
          </p>
        </div>
        <div class="item">
          <img
            :src="require('@/assets/s3.jpg')"
            class="img"
            alt="Descrição da Imagem 3"
          />
          <h2>3. Paraíso Tropical</h2>
          <p>
            "Deite-se em praias de areia branca e mergulhe em águas cristalinas. O
            paraíso tropical é o lugar perfeito para relaxar e se reconectar com a
            natureza. Aproveite o sol, as paisagens deslumbrantes e a rica cultura
            local para uma experiência verdadeiramente única."
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Destinos',
  };
  </script>
  
  <style scoped>
  body,
  html {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
  }
  
  .img {
    width: 600px;
    height: 350px;
    object-fit: cover;
  }
  
  .item {
    margin: 10px 0;
    padding: 20px;
    width: 600px;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  h2 {
    margin-top: 10px;
    color: #333;
  }
  
  p {
    font-size: 16px;
    color: #666;
  }
  </style>  
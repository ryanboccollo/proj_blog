<script>

</script>

<template>
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
  </template>
  
  <style scoped>
  
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
  
  h2 {
    margin-top: 10px;
    color: #333;
  }
  
  p {
    font-size: 16px;
    color: #666;
  }
  </style>  
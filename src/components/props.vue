<template>
  <div class="card">
    <a :href="link" class="card-link">
      <img :src="image" :alt="altText" class="card-image" />
      <p class="card-text">{{ text }}</p>
      <Botao textDoBotao="Acessar agora" link="http://www.youtube.com"/>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    // Prop para a URL da imagem
    image: {
      type: String,
      required: true
    },
    // Prop para o link clicável
    link: {
      type: String,
      required: true
    },
    // Prop para o texto
    text: {
      type: String,
      required: true
    },
    // Prop opcional para o texto alternativo da imagem
    altText: {
      type: String,
      default: 'Imagem'
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  text-align: center;
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-text {
  padding: 10px;
}
</style>

<script>
    export default{
        props: {
            link: String,
            textoDoBotao: String
        }
    }
</script>

<template>
<div style="width: 550px;" class="welcome-container">
    <h1>Bem-vindo!</h1>
    <p style=" display: flex;justify-content: center;"> Explore nosso site e aproveite!</p>
    <div class="gif-container">
        <img src="/src/assets/parabens.gif" alt="GIF de boas-vindas">
    </div>
</div>

</template>
  
<style>
  body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            text-align: center;
        }
        .welcome-container {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        h1 {
            color: #4CAF50;
            margin-bottom: 20px;
        }
        p {
            color: #555;
            margin-bottom: 20px;
        }
        .gif-container {
            margin: 20px 0;
        }
        .gif-container img {
            max-width: 100%;
            border-radius: 8px;
        }
</style>  
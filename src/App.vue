<template>
  <div id="app">
    <link href="//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <!------ Include the above in your HEAD tag ---------->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <transition name="moveInUp">
      <router-view/> <!-- the area where routing is working (Add, Edit, Delete, Home) -->
    </transition>
  </div>
</template>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,900,700,600,500,300,200,100,800);

  @font-face {
    font-family: Blangkon;
    src: url("assets/fonts/BlangkonScript400.ttf");
  }
  @font-face {
    font-family: WesttgoniaBarneh;
    src: url("assets/fonts/WesttgoniaBarneh.ttf");
  }
  html {
    min-height: 100%;
    background-color: #f6f6f6;
  }
  #app {
    background-color: #f6f6f6;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
  }
</style>

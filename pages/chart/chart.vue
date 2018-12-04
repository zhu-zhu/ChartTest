<template>
    <div class="section">
        <canvas id="myChart" width="400" height="400"></canvas>
        <div class="main">
            <h1>{{val}}</h1>
            <input type="range" v-model=val />
        </div>
    </div>
</template>

<script src="./chart.js"></script>

<style>
@import url('./chart.scss');
</style>

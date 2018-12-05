<template>
    <div class="section">
        <div class="canvasmain">
            <canvas id="myChart"></canvas>
        </div>
        <div class="main">
            <h1>{{val}}</h1>
            <input type="range" v-model="val" />
            <el-button id="btn" type="primary" :loading="isloding" @click="prompt">主要按钮</el-button>
        </div>
    </div>
</template>

<script src="./chart.js"></script>

<style>
@import url('./chart.scss');
</style>

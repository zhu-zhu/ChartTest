<template>
    <div class="section">
        <div class="canvasmain">
            <canvas id="myChart"></canvas>
        </div>
        <div class="main">
            <h1>{{reversedMessage}}</h1>
            <el-slider v-model="val"></el-slider>
            <el-button id="btn" type="primary" :loading="isloding" @click="prompt">主要按钮</el-button>
        </div>
        <div id="example">
            <el-input type="number" v-model="val" placeholder="请输入内容"></el-input>
        </div>
    </div>
</template>

<script src="./chart.js"></script>

<style>
@import url('./chart.scss');
</style>

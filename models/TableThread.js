const mongoose = require("mongoose");

const TableThreadSchema = new mongoose.Schema({
    // 日付
    date: {
        type: String,
    },
    // 時刻
    time: {
        type: String,
    },
    // 腹痛の状態
    state: {
        type: String,
    },
    // 排便時間(時:分)
    outputTime: {
        type: String,
    },
    // 形状
    detail: {
        type: String,
    },
    // 排便後の状態
    outputState: {
        type: String,
    },
});

module.exports = mongoose.model("TableThreads", TableThreadSchema);
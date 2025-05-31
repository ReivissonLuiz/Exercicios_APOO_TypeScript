"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timer = timer;
function timer(callback) {
    setTimeout(() => {
        callback();
    }, 10000);
}

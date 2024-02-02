"use strict";
exports.__esModule = true;
exports.createTx = void 0;
var crypto_1 = require("crypto");
// Tx を作る
function createTx() {
    // 取引 ID
    var txId = (0, crypto_1.randomUUID)();
    // 現在時刻
    var now = new Date().toISOString();
    // インプット
    var inputs = [
        {
            time: now,
            from: "TaroWallet",
            signature: "私は太郎です。コインを花子さんにあげることに同意します"
        },
    ];
    // アウトプット
    var outputs = [
        {
            to: "HanakoWallet",
            amount: 20,
            fee: 3
        },
    ];
    // Tx を組み立てる
    var tx = {
        id: txId,
        inputs: inputs,
        outputs: outputs
    };
    return tx;
}
exports.createTx = createTx;

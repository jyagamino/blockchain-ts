"use strict";
exports.__esModule = true;
exports.pickWinner = void 0;
// バリデーターを一人くじで選ぶ
function pickWinner() {
    // 山田さん
    var v1 = {
        address: "YamadaWallet",
        signature: "私は責任を持って取引をチェックします",
        token: 1
    };
    // 田中さん
    var v2 = {
        address: "TanakaWallet",
        signature: "私は責任を持って取引をチェックします",
        token: 2
    };
    // 斉藤さん
    var v3 = {
        address: "SaitoWallet",
        signature: "私は責任を持って取引をチェックします",
        token: 3
    };
    // 渡辺さん
    var v4 = {
        address: "WatanabeWallet",
        signature: "私は責任を持って取引をチェックします",
        token: 4
    };
    // くじの中身
    var candidates = [v1, v2, v2, v3, v3, v3, v4, v4, v4, v4];
    // くじをランダムに1つ取り出す
    var randomIndex = Math.floor(Math.random() * candidates.length);
    var winner = candidates[randomIndex];
    console.log("".concat(winner.address, " \u304C\u30D0\u30EA\u30C7\u30FC\u30BF\u30FC\u306B\u9078\u3070\u308C\u307E\u3057\u305F"));
    return winner;
}
exports.pickWinner = pickWinner;

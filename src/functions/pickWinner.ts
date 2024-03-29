import { Validator } from "../types/validator";

// バリデーターを一人くじで選ぶ
export function pickWinner(): Validator {
  // 山田さん
  const v1: Validator = {
    address: "YamadaWallet",
    signature: "私は責任を持って取引をチェックします",
    token: 1,
  };
  // 田中さん
  const v2: Validator = {
    address: "TanakaWallet",
    signature: "私は責任を持って取引をチェックします",
    token: 2,
  };
  // 斉藤さん
  const v3: Validator = {
    address: "SaitoWallet",
    signature: "私は責任を持って取引をチェックします",
    token: 3,
  };
  // 渡辺さん
  const v4: Validator = {
    address: "WatanabeWallet",
    signature: "私は責任を持って取引をチェックします",
    token: 4,
  };

  // くじの中身
  const candidates = [v1, v2, v2, v3, v3, v3, v4, v4, v4, v4];

  // くじをランダムに1つ取り出す
  const randomIndex = Math.floor(Math.random() * candidates.length);
  const winner = candidates[randomIndex];

  console.log(`${winner.address} がバリデーターに選ばれました`);
  return winner;
}

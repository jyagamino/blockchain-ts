import { createTx } from "./functions/createTx";
import { pickWinner } from "./functions/pickWinner";
import { Block } from "./types/block";
import { createBlock } from "./functions/createBlock";
import { promises as fs } from "fs";
import * as path from "path";

// メイン関数を実行
main();

async function main() {
  // tx を用意する
  const tx = createTx();

  // くじ引きでバリデーターを選ぶ
  const validator = pickWinner();

  // blockchain.jsonへの絶対パスを取得
  const file = path.join(__dirname, 'db', 'blockchain.json');

  try {
    let text = await fs.readFile(file, "utf8");
    const blocks: Block[] = JSON.parse(text);
    const prevBlock = blocks[blocks.length - 1];

    // 新しいブロックを作成する
    const newBlock = await createBlock(
      prevBlock,
      tx,
      validator,
    );

    // ブロックチェーンに追加
    blocks.push(newBlock);
    text = JSON.stringify(blocks, null, 2);
    await fs.writeFile(file, text);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

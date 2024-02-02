import { Tx } from "../types/tx";
import { Validator } from "../types/validator";
import * as crypto from "crypto";

export async function hash(str: string): Promise<string> {
  // SHA-256 ハッシュ関数を使用してハッシュを生成
  const hash = crypto.createHash("sha256").update(str).digest();

  // ハッシュを16進数の文字列に変換
  return hash.toString("hex");
}

export async function calcBlockHash(
  index: number,
  time: string,
  prev_hash: string,
  tx: Tx,
  validator: Validator
): Promise<string> {
  // ブロックの中身を文字にして繋げる
  const str =
    index.toString() +
    time +
    prev_hash +
    JSON.stringify(tx) +
    JSON.stringify(validator);

  return await hash(str);
}

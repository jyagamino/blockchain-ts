import { Tx } from './tx';
import { Validator } from './validator';

export type Block = {
  index: number;
  time: string;
  prev_hash: string;
  hash: string;
  tx: Tx; // トランザクション（ブロックの中に閉じ込めておくデータ）
  validator: Validator; // ブロックを保証してくれるバリデーター
}
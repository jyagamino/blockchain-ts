import { Input } from "./input";
import { Output } from "./output";

// トランザクション 取引の記録
export type Tx = {
  id: string;
  inputs: Input[];
  outputs: Output[];
};
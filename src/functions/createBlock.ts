import { Block } from "../types/block";
import { Tx } from "../types/tx";
import { Validator } from "../types/validator";
import { calcBlockHash } from "./calcBlockHash";

export async function createBlock(
  prevBlock: Block,
  tx: Tx,
  validator: Validator
): Promise<Block> {
  const time = new Date().toISOString();
  const index = prevBlock.index + 1;
  const hash = await calcBlockHash(index, time, prevBlock.hash, tx, validator);

  const newBlock: Block = {
    index: 0,
    time: time,
    prev_hash: prevBlock.hash,
    hash: hash,
    tx: tx,
    validator: validator,
  };

  return newBlock;
}
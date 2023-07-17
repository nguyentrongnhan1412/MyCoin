import crypto from "crypto";
import Transaction from "./Transaction";

export default class Block {
  static copy(obj) {
    if (obj) {
      return Object.assign(new Block(), obj);
    }
  }

  static calculateHash(block) {
    return block.calculateHash();
  }

  static hasValidTransactions(block, chain) {
    return block.transactions.every(transaction =>
      Transaction.isValid(transaction, chain),
    );
  }

  constructor(timestamp, transactions, previousHash = "") {
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto
      .createHash("sha256")
      .update(
        this.previousHash +
          this.timestamp +
          JSON.stringify(this.transactions) +
          this.nonce,
      )
      .digest("hex");
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
  }

  hasValidTransactions() {
    for (const tx of this.transactions) {
      if (!tx.isValid()) {
        return false;
      }
    }

    return true;
  }
}
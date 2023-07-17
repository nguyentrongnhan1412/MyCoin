import EC from "elliptic";
import crypto from "crypto";

export default class Transaction {
    constructor(fromAddress, toAddress, amount) {
      this.fromAddress = fromAddress;
      this.toAddress = toAddress;
      this.amount = amount;
      this.timestamp = Date.now();
      this.hash = this.calculateHash();
    }
  
    calculateHash() {
      return crypto
        .createHash("sha256")
        .update(this.fromAddress + this.toAddress + this.amount + this.timestamp)
        .digest("hex");
    }
  
    signTransaction(signingKey) {
      if (signingKey.getPublic("hex") !== this.fromAddress) {
        throw new Error("You cannot sign transactions for other wallets!");
      }
  
      const sig = signingKey.sign(this.hash, "base64");
  
      this.signature = sig.toDER("hex");
    }
  
    /**
     * @returns {boolean}
     */
    isValid() {
      // If the transaction doesn't have a from address we assume it's a mining reward and that it's valid.
      if (this.fromAddress === null) return true;
  
      if (!this.signature || this.signature.length === 0) {
        throw new Error("No signature in this transaction");
      }
      
      const ec = new EC.ec("secp256k1");
      
      const publicKey = ec.keyFromPublic(this.fromAddress, "hex");
      return publicKey.verify(this.hash, this.signature);
    }
  }
import Blockchain from "../classes/Blockchain";

export class BlockchainService {
  blockchainInstance = new Blockchain();
  wallet = null;

  constructor(wallet) {
    this.blockchainInstance.difficulty = 1;
    this.wallet = wallet;
  }

  getBalanceOfAddress(address) {
    return this.blockchainInstance.getBalanceOfAddress(address);
  }

  getBlocks() {
    return this.blockchainInstance.chain;
  }

  addTransaction(tx) {
    this.blockchainInstance.addTransaction(tx);
  }

  addBlock(block) {
    this.blockchainInstance.addBlock(block);
  }

  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(
      this.wallet.signingKeyObj.getPublic("hex"),
    );
  }
  
  getLaterBlock() {
    return this.blockchainInstance.getLaterBlock();
  }

  getLatestBlock() {
    return this.blockchainInstance.getLatestBlock();
  }

  getLatestBlockPosition() {
    return this.blockchainInstance.getLatestBlockPosition();
  }

  getDifficulty() {
    return this.blockchainInstance.difficulty;
  }

  getWalletAddress() {
    return this.wallet.signingKeyObj.getPublic("hex");
  }
  
}
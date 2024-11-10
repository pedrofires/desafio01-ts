import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (!this.validateStatus()) return;

    const newBalance = this.getBalance() + amount;
    this.deposit(newBalance + amount);
    console.log('Voce pegou um empréstimo')
  }
}

import { DioAccount } from "./DioAccount";

export class TurboAccount extends DioAccount {

   constructor(name: string, accountNumber: number) {
      super(name, accountNumber)
   }

   turboDeposit = (amount: number): void => {
      const newBalance = amount + this.getBalance() + 10;
      this.deposit(newBalance);
      return;
   }
}
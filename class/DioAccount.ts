export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if (!this.validateStatus()) return;

    this.balance = this.balance + amount;
    console.log('Voce depositou');
    return;
  }

  withdraw = (amount: number): void => {
    if (!this.validateStatus()) return;

    if (amount > this.balance) {
      console.log('Saldo indisponível');
      return;
    }

    this.balance = this.balance - amount;
    console.log('Voce sacou');
  }

  getBalance = (): number => {
    return this.balance;
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

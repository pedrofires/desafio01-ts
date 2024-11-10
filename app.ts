import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { TurboAccount } from './class/TurboAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.getName());
peopleAccount.deposit(200);
peopleAccount.withdraw(1);
peopleAccount.withdraw(200);
console.log(peopleAccount.getBalance());
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.getName());
companyAccount.deposit(500);
companyAccount.getLoan(4000);
companyAccount.withdraw(4000);
console.log(companyAccount.getBalance());
companyAccount.withdraw(6000);
console.log(companyAccount);

const turboAccount: TurboAccount = new TurboAccount('Peter Turbo', 145);
turboAccount.turboDeposit(500);
console.log(turboAccount.getBalance());
console.log(turboAccount);
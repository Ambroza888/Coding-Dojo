class BankAccount:
  def __init__(self, int_rat=0, balan=0):
    self.int_rate = int_rat
    self.balance = balan

  def deposit(self, amount):
    self.balance = self.balance + amount
    return self

  def withdraw(self, amount):
    if amount > 0:
      self.balance = self.balance - amount
      return self
    else:
      self.balance = self.balance - 5
      return print("insufficient funds:Charging a $5 fee")

  def display_account_info(self):
    return print(f"Balance: ${self.balance}")

  def yield_interest(self):
    if self.balance > 0:
      self.balance = self.balance + (self.balance*self.int_rate)
      return self


veso = BankAccount(0.1,800)
staz = BankAccount(0.1,1100)
veso.deposit(100).deposit(30).deposit(30).deposit(15).withdraw(70)
# print(veso.balance)
# print(staz.balance)
staz.deposit(100).deposit(100).withdraw(100).withdraw(100).withdraw(400).withdraw(10).yield_interest().display_account_info()
print(staz.balance)
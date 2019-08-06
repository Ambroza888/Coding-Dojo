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

class user:
  def __init__(self,nam):
    self.name = nam
    self.account = BankAccount(int_rat= 0.02, balan=0)
  def make_deposit(self,amount):
    # self.account = self.account + amount
    self.account.deposit(amount)
    return self

  def make_withdrawal(self,amount):
    self.account.withdraw(amount)
    # self.account = self.account-amount
    return self

  def display_user_balance(self):
    self.account.display_account_info()
    return self

  def example_funk(self):
    self.account.yield_interest()
    return self
veso = user("Veso")
veso.make_deposit(50).example_funk()
# print(veso.account.balance)
veso.account.withdraw(10)
print(veso.account.balance)
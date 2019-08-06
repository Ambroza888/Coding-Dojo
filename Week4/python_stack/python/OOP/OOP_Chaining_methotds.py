class user:
  def __init__(self,nam):
    self.name = nam
    self.account_balance = 0
  def make_deposit(self,amount):
    self.account_balance = self.account_balance + amount
    return self

  def make_withdrawal(self,amount):
    self.account_balance = self.account_balance-amount
    return self

  def display_user_balance(self):
    return print(f"User: {self.name} and the Balance is ${self.account_balance}")

veso = user("Veso")
print(veso.make_deposit(100).make_deposit(200).make_deposit(300).make_withdrawal(50).display_user_balance())

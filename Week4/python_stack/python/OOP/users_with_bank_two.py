class Users:
  def __init__(self,Nam):
    self.name = Nam
    self.account = BankAccount(b=0,irs=2)
    self.info = ""
    self.twoacc = {"saving": self.account, "checking": self.account}


  def make_deposit(self,amount):
    self.account= self.account + amount
    return self
  
  def user_withdrawal(self,amount):
    self.account = self.account - amount
    return self
  
  def display_user_balance(self):
    self.account = self.account.display_account_info()
    return self

  def tranfer_to_other_user(self,other_user,amount):
    self.account = self.account - amount
    other_user = other_user.make_deposit(amount)
    return self



class BankAccount:
  def __init__(self,b=0,irs=0):
    self.balance = b
    self.int_rate = irs/100
    self.info = ""

  def deposit(self,amount):
    self.balance = self.balance + amount
    return self

  def withdraw(self,amount):
    if self.balance >= 0:
      self.balance = self.balance - amount
      return self
    else:
      self.balance = self.balance -5
      print(f"Insufishion funds: You are charged 5$")
      return self
  def display_account_info(self):
    self.info = print(f"your Balance is : ${self.balance}")
    return self
  def yeld_rate(self):
    if self.balance > 0:
      self.balance = self.balance + (self.balance*self.int_rate)
      return self
veso = Users("veso")
veso.account.deposit(10).yeld_rate().display_account_info()
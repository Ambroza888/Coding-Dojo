# class User:
#   def __init__(self, imeto, emaila, qwe):
#     self.name = imeto
#     self.email = emaila
#     self.account_balance = qwe

# # veso = User("Veselin", "Ambroza@abv.bg", 123)
# # print(veso.email)

# vasko = User("VASIL","vasilpicha@gmail.com", 1110)
# print(vasko.account_balance)


# class User:
#     def __init__(self, username, email_address):# now our method has 2 parameters!
#         self.name = username			# and we use the values passed in to set the name attribute
#         self.email = email_address		# and the email attribute
#         self.account_balance = 0		# the account balance is set to $0, so no need for a third parameter
#     def make_deposit(self, amount):
#       self.account_balance = self.account_balance + amount
#       return self.account_balance
# Veso = User("Veselin","ambroza@abv.bg")
# Veso.make_deposit(11000)
# print(Veso.account_balance)

# bobi = User("Boyan","tryToBreakMe@gmail.com")
# bobi.make_deposit(365)
# print(bobi.name)
# print(bobi.email)
# print(bobi.account_balance)

class user:
  def __init__(self,nam):
    self.name = nam
    self.account_balance = 0
  def make_deposit(self,amount):
    self.account_balance = self.account_balance + amount
    return self.account_balance

  def make_withdrawal(self,amount):
    self.account_balance = self.account_balance-amount
    return self.account_balance

  def display_user_balance(self):
    return print(f"User: {self.name} and the Balance is ${self.account_balance}")

veso = user("Veselin")
veso.make_deposit(320)
veso.make_withdrawal(20)
# print(veso.account_balance)
# print(veso.display_user_balance())
bobi = user("Boyan")
bobi.make_deposit(300)
# print(bobi.account_balance)
bobi.make_withdrawal(125)
# print(f"Bobi ima ${bobi.account_balance} v bankata")
veso.make_deposit(1100)
veso.make_withdrawal(400)
print(veso.account_balance)
veso.make_withdrawal(999)
print(f"veso ima ostanl ${veso.account_balance}")
print(f"bobi ima balans ot {bobi.account_balance}", f" i bobi ostana s ${bobi.make_withdrawal(174)}")
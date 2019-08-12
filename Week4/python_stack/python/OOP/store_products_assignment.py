class Store:
  def __init__(self, name):
    self.name = name
    self.list1 = []


  def add_product(self,product_name):
    self.list1 = self.list1.push(product_name)
    return self

  def sell_product(self,id):
    popped_product = self.list1.pop(id)
    print(popped_product)
    return self


class Product:
  def __init__ (self,nam,pr,categ):
    self.name = nam
    self.price = pr
    self.category = categ
    self.updated_price = 0
    
  def update_price(self,percent_change,is_increased):
    pass

  def print_info(self):
    return print(f"The name is {self.name} and his category is {self.category}and his price is {self.price}")


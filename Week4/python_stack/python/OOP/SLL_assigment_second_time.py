class SLnode:
  def __init__(self,val):
    self.value = val
    self.next = None

class SLlist:
  def __init__(self):
    self.head = None

  def AddtoTheFront(self,val):
    new_node = SLnode(val)
    new_node.next = self.head
    self.head = new_node
    return self
  
  def print_my_list(self):
    runner = self.head
    while (runner != None):
      print(runner.value)
      runner = runner.next
    return self

  def add_to_back(self, val):
    if self.head == None:
      self.AddtoTheFront(val)
      return self

    new_new = SLnode(val)
    runner = self.head
    while (runner.next != None):
      runner = runner.next
    runner.next = new_new
    return self

  def remove_from_the_front(self):
    self.head = self.head.next
    return self.head






shopping_basket = SLlist()
shopping_basket.add_to_back("apple").add_to_back("bananas").add_to_back("strawberries").add_to_back("kiwi").remove_from_the_front()
shopping_basket.print_my_list()
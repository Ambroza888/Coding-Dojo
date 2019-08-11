class SLlist:
  def __init__(self):
    self.head = None

  def add_to_front(self,val):
    new_node = SLNode(val)
    new_node.next = self.head
    self.head = new_node
    return self

  def add_to_back(self,val):
    if self.head == None:
      self.add_to_front(val)
      return self
    new_note = SLNode(val)
    qwe = self.head
    while qwe.next != None:
      qwe = qwe.next
    qwe.next = new_note
    return self

  def print_values(self):
    runner = self.head
    while (runner != None):
      print(runner.value)
      runner = runner.next
    return self





class SLNode:
  def __init__(self,val):
    self.value = val
    self.next = None

   
# my_list = SLlist()
# my_list.add_to_front("josh")
# my_list.add_to_front("stas")
# my_list.add_to_back("myian")
# my_list.print_values()

# my_otherlist = SLlist()
# my_otherlist.add_to_front("are").add_to_front("Linket lists").add_to_back("Fun !!!!").print_values()
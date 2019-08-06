import random
def randInt(min=0, max=10):
  num = int(random.random() * (max - min)  + min)
  return num

print(randInt(500,50))
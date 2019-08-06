mylist = [9,8,7,6,5,4,3,2,1]

def Bubble_sort(qwe):
  for j in range(len(qwe)-1):
    for i in range(len(qwe)-1-j):
      # print(qwe[i])
      if qwe[i] > qwe[i+1]:
        qwe[i], qwe[i+1] = qwe[i+1], qwe[i]
      print(qwe)



print(Bubble_sort(mylist))
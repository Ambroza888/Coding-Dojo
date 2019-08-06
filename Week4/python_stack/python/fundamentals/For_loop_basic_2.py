# def Bigge_size(list1):
#   for x in range(len(list1)):
#     if list1[x] > 0:
#       list1[x] = "big"
#   return list1
# print(Bigge_size([-1,3,5,-5]))

# def count_positives(list0):
#   count = 0
#   for x in range(len(list0)):
#     if list0[x] > 0:
#       count = count + 1
#   list0.pop()
#   list0.append(count)
#   return list0

# print(count_positives([-1,-2,1,1,1]))

# def sum_total(list1):
#   sum = 0
#   for x in range(len(list1)):
#     sum = sum + list1[x]
#   return sum

# print(sum_total([1,2,3,4])) # >> 1+2+3+4 = 10

# def Average(list1):
#   sum = 0
#   for x in list1:
#     sum = sum + x
#   avg = sum / len(list1)
#   return avg

# print(Average([1,2,3,4])) # >>> 2.5

# def length(list1):
#   return (len(list1))
# print(length([]))

# def Minimum(list1):
#   if len(list1) > 0:
#     min = list1[0]
#     for x in list1:
#       if min > x:
#         min = x
#     return min
#   else:
#     return False

# print(Minimum([-10,10,20,-100]))

# def maxi(list1):
#   if len(list1) > 0:
#     max = list1[0]
#     for x in range(1,len(list1),1):
#       if max < list1[x]:
#         max = list1[x]
#     return max
#   else:
#     return False

# print(maxi([1000,30,100,10]))

# def Ultimate_analysis(list1):
#   sumTotal = 0
#   mini = list1[0]
#   maxi = list1[0]
#   for x in list1:
#     sumTotal = sumTotal + x
#     if mini > x:
#       mini = x
#     elif maxi > x:
#       maxi = x
#   avg = sumTotal / len(list1)
#   length = len(list1)
#   dik = {}
#   dik["sumTotal"] = sumTotal
#   dik["avg"] = avg
#   dik["minimum"] = mini
#   dik["maximum"] = maxi
#   dik["length"] = length
#   return dik

# print(Ultimate_analysis([37,2,1,-9])) #>>> {sumTotal: 31, "AVG"}

# def reverse_list(list1):
#   list1 = list1[::-1]
#   return list1
# print(reverse_list([37,2,1,-9]))


# def reverse_list(list1):
#   for x in range(int(len(list1)/2)):
#     temp = list1[x]
#     list1[x] = list1[len(list1)-1 - x]
#     list1[len(list1)-1 - x] = temp
#   return list1

# print(reverse_list([37,2,1,-9]))


# def reverse_list(list1):
#   for x in range(int(len(list1)/2)):
#     temp = list1[x]
#     list1[x] = list1[len(list1)-1 - x]
#     list1[len(list1)-1 -x] = temp
#   return list1

# print(reverse_list([37,2,1,-9]))
# def beCheerfull(name="" , repeat=5):
#   print(f"Hello {name} " * repeat)
# beCheerfull("veso"9)




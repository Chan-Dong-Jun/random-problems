
import re
'''
res = 0 
with open("day1.txt", 'r') as file:
    for line in file:
        num_list = re.findall(r"\d", line)
        num = int(num_list[0]+num_list[-1]) if len(num_list)>1 else int(num_list[-1]+num_list[-1])
        res += num
'''

res = 0
hashmap = {"one":"1", "two":"2", "three": "3", "four": "4", "five":"5", "six": "6", "seven":"7", "eight": "8", "nine": "9"}
with open("day1.txt", 'r') as file:
    for line in file:
        num_list = re.findall("(?=(one|two|three|four|five|six|seven|eight|nine|\d))", line)
        for index, num in enumerate(num_list):
            if not num.isnumeric():
                num_list[index] = hashmap[num]
        num = int(num_list[0]+num_list[-1]) if len(num_list)>1 else int(num_list[-1]+num_list[-1])
        print(num_list)
        res += num
print(res)
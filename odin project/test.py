

def pyramid(string):
    if not string:
        return 
    print(string)
    pyramid(string[:-1])
    
    print(string)
  

pyramid("happy")
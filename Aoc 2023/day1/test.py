n = "one two three four five six seven eight nine".split()
import re

p = "(?=("+"|".join(n)+"|\\d))"

print(p)
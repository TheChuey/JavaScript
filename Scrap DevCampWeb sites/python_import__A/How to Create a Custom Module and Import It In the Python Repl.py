"""
TERMINAL COMMANDS AND CALLING COMMANDS FROM PYTHON REPL
mport math

math.sqrt(4)


# Place in file helper.py
def greeting(first, last):
  return f'Hi {first} {last}!'

# Call from repl
import helper

helper.greeting('Kristine', 'Hudgens')
"""


def greeting(first, last):
    return f'Hi {first} {last}'

print(greeting('jesus', 'rodriguez'))

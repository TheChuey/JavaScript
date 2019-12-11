import sys
sys.path.insert(0, './libs') #insert takes the first spot insert the new path, second argument is path itself
import helper

def render():
    print(helper.greeting('Tiff', 'hudg'))

render()

# alias you use 'as' -h for example-now when you reference to the library or module it makes it more clear to call

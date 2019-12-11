import sys
sys.path.insert(0, './libs')
import helper as h

def render():
    print(h.greeting("Tiff", "Hudgen"))

# alias you use 'as' -h for example-now when you reference to the library or module it makes it more clear to call

render()

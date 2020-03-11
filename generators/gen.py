# Python 2+

def cc():
    num = 0
    while 1:
        num += 1
        yield num

gen_cc = cc();

print(next(gen_cc));
print(next(gen_cc));
print(next(gen_cc));
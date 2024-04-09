# Write a python3 fn: `def solution(A, Y)`
# that accepts as arguments a list of integers and an integer run length. It must find in that list all runs of run length consecutive numbers that increase or decrease by 1. It should return the list indices of the first element of each run. If there are not consecutive runs it should return an empty list.
# E.g. values=[1,2,3,5,10,9,8,9,10,11,7,8,7], run_length=3 returns [0,4,6,7]
# Add comments on the code’s runtime and space complexity

def map_values_to_indices(values):
    mapped_values = []
    for index, _ in enumerate(values):
        mapped_values.append(index)
    return mapped_values

# O(values) time complexity and O(values) space complexity
def solution(values, run_length):
    if run_length == 1:
        return map_values_to_indices(values)
    
    current_run_index = 0
    current_run_length = 1
    result_indices = []
    last_iteration_diff = None
    for index, val in enumerate(values):
        if index == 0:
            continue

        last_val_diff = val - values[index - 1]
        valid_diff = abs(last_val_diff) == 1

        if valid_diff:
            if last_val_diff == last_iteration_diff or current_run_length == 1:
                current_run_length += 1
            # toggled from increment to decrement or visa-versa
            else:
                current_run_length = 2
                current_run_index = index - 1

            if current_run_length == run_length:
                result_indices.append(current_run_index)
                current_run_index += 1
                current_run_length -= 1
        else:
            current_run_index = index
            current_run_length = 1

        last_iteration_diff = last_val_diff

    return result_indices

def test(values, run_length, expected):
    actual = solution(values, run_length)
    result = actual == expected
    print('%s, %s; %s == %s: %s' %(values, run_length, expected, actual, result))

test([1,2,3,5,10,9,8,9,10,11,7,8,7], 3, [0,4,6,7])
# sample walkthrough: [1,2,3,5,10,9,8,9,10,11,7,8,7]
# 1 (index 0): skip
# 2 (index 1): crl = 2, cri = 0
# 3 (index 2): crl = 3, PUSH; cri = 1, crl = 2
# 5 (index 3): crl = 2, BUST; cri = 3, crl = 1
# 10 (index 4): crl = 1, BUST; cri = 4, crl = 1
# 9 (index 5): crl = 2
# 8 (index 6): crl = 3, PUSH; cri = 5, crl = 2
# 9 (index 7): crl = 2, INVERT; cri = 6, crl = 2
# 10 (index 8): crl = 2, PUSH; cri = 7, crl = 2
# 11 (index 9): crl = 3, PUSH; cri = 8, crl = 2
# 7 (index 10): crl = 2, BUST; cri = 10, crl = 1
# 8 (index 11): crl = 2
# 7 (index 12): crl = 3, INVERT; cri = 11, crl = 2
test([1,5,7], 1, [0,1,2])
test([4,5,4,5,4], 2, [0,1,2,3])
test([4,3,2,1], 2, [0,1,2])
test([3,2,1], 2, [0,1])

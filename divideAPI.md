## **divide**

Returns the result of divisions a/b.Numbers are passed to the function as parameters.

- if parameter is missing,throws an exception: `'parameter missing'`
- if parameters are not numbers,throws an exception: `'only numbers are allowed'`

problems:


## Test cases

### common cases
[1,2,0.5],
[4,2,2],
[-4,2,-2],
[4,-2,-2],
[-4,-2,2],
[3,3,1],
[2.5,3.5,2.5/3.5],
[2.5,3,0.83]

### common cases
[0,0, Number.NaN],
[2,0,Number.POSITIVE_INFINITY],
[-2,0,Number.NEGATIVE_INFINITY],
[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NaN]
[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NaN]
[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NaN]
[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NaN]


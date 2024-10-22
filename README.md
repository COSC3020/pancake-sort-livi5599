# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

The asymptotic runtime of pancake sort both in terms of the number of comparisons and the number of flips is $\Theta(n^2)$.  This is true for the number of comparisons since the main operation for comparisons is the for loop that finds the greatest element in the unsorted part of the array, which has a runtime of $\Theta(n^2)$.  The runtime for the number of flips is also $\Theta(n^2)$ since at most 2 calls of the flip function are made during each iteration of the while loop (1 call to move the element to the beginning of the array, and another call to move it to its correct position).  The runtime for the while loop is $\Theta(n)$, and the runtime for the flip function is also $\Theta(n)$, and when those are put together, the total runtime for the number of flips is $\Theta(n^2)$.

I worked on this assignment with Cole (Nathanael), Ashlyn, and Megan.  I also recieved help from ChatGPT.  ChatGPT told me I could remove a redundant while loop, and it also guided me to the answers for the runtime analysis.  It also gave me the idea of writing code that moves the greatest unsorted element to the beginning of the array using the flip function and then using flip again to move it to its correct position.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models.  All of the work is my own, except where stated otherwise.  I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

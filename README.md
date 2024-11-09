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

The asymptotic runtime of pancake sort in terms of the number of comparisons is $\Theta(n^2)$.  This is true since the main operation for comparisons is the for loop that finds the greatest element in the unsorted part of the array, which has a runtime of $\Theta(n^2)$.  The runtime for the number of flips is $\Theta(n)$ since that is the runtime for the flip function that is called in the pancakeSort function.

I worked on this assignment with Cole (Nathanael), Ashlyn, and Megan.  We talked through the logic of the flip function but wrote the actual code for it ourselves based off of the logic we discussed.  I also recieved help from ChatGPT.  It gave me the idea of writing code that moves the greatest unsorted element to the beginning of the array using the flip function and then using flip again to move it to its correct position.  This means that from the idea ChatGPT gave me (no code, just the idea of moving the greatest unsorted element to the beginning of the array), I wrote the code for the pancake sort function.  I did this by writing the logic out on paper, which I then translated into the pancakeSort function.  Regarding determining the runtime analysis, I added comments to lines of my code that stated the runtime of that line.  After doing that, I gave my code with the comments to ChatGPT to check if I was on the right track with the runtime analysis, as I am still learning how to determine an algorithm's runtime.  ChatGPT then adjusted some of my comments, as the runtime for the while loop in pancakeSort was incorrect.  ChatGPT also noted that there was a redundant while loop, which iterated through the array until g8El index was found, which I wrote to find the value of n to give when calling the flip function.  ChatGPT said that I could remove that while loop and instead use indexOf(g8El), so I adjusted my code accordingly, which resulted in the code I submitted.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models.  All of the work is my own, except where stated otherwise.  I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

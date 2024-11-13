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

----------

Here is my proof on why the contents of this assignment is my work and should be counted toward my grade.  I understand that this is a long explanation, but this seems necessary to prove that the work is my own.  If needed, I will provide long explanations for future assignments as well.

I worked on this assignment with Cole (Nathanael), Ashlyn, and Megan.  When first starting the assignment, we met up and discussed the logic of the flip function.  After discussing the logic, we all wrote the code for the flip function on our own.

When I started to think through the logic of the pancakeSort function, I first came up with a method that moved certain elements to a different array, but then realized that this was not fulfilling the requirements for the assignment.  I then asked ChatGPT for guidance on how I could implement this, and it gave me the idea of moving the greatest unsorted element to the beginning of the array using flip, and then flipping the entire unsorted part of the array, moving the element to its correct position.  I asked ChatGPT this question and made it clear that I didn’t want any code, just guidance on the logic of the algorithm.

From ChatGPTs logic guidance, I wrote this outline of what my code should look like:
1. Find the greatest unsorted element
2. Move that element to the beginning of the array
3. Let n = value necessary to flip the unsorted part of the array so that the element is moved to the correct position
4. Call flip
5. Repeat until the array is sorted

I then wrote the code for the pancakeSort function, which is the code in the 1st Update code.js file.  After determining that it worked by writing out what every line should do and what values should be returned at certain parts of the code, I began working on the runtime analysis by adding comments to each line of my code, noting what the runtime for each part of the code was.  My comments added to my code can be found in the code in the 2nd Update code.js file.  I asked ChatGPT to check if my runtime was correct so far, and the only parts it added was the comment for the while loop (O(n) since after every iteration, one element is moved to its correct position) and the comment for the for loop (runs O(n), O(n-1), O(n-2)...O(n^2) because it is the sum of the first n ints).  In addition to adding those two runtime analysis comments, it also noted that the use of n and the while loop on lines 33-36 of my code in the 1st Update code.js file were not necessary, as I could replace those lines with flip(array, array.indexOf(g8El) + 1), which does the same thing.

I was a bit confused on how to determine the runtime in terms of the number of comparisons as opposed to the runtime of the entire algorithm, so I asked ChatGPT for guidance on that.  It told me to look at the section of code that is the primary source of comparisons.  So, I looked at the for loop which is the primary source of comparisons, and determined that the runtime in terms of the number of comparisons is $\Theta(n^2)$.  And as you can see from my previous attempt, I did not determine the correct runtime in terms of the number of flips.  I asked Ali for help, and he said I only need to take into account the flip function, and not the calls of flip in the pancakeSort function.  This brought me to the runtime in terms of the number of flips as being $\Theta(n)$.

I believe this proves that I wrote the code for this assignment myself and used a minimal amount of outside resources, which, if I am correct, is allowed.  This was mentioned during the first class and is also mentioned in the slides.  I also believe the answers I got from ChatGPT would be similar to those I would get if I asked Ali the same ones, as I was not given code, just basic guidance on how the logic works.  The only code provided by ChatGPT was stated above as being the comment for the runtime of the while loop and the comment for the runtime of the for loop, and it also gave me the idea of removing lines 33-36 and replacing them with flip(array, array.indexOf(g8El) + 1) to make the code simpler.

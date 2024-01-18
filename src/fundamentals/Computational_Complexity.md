# Computational Complexity - Big O

Computational Complexity is the measurement of the complexity of an algorithm, 
specifically, the resources required to run it, measured in both time and space. 
Generally, when speaking about Computational Complexity- you are focused on the
upper bounds, or worst-case scenario, more so than the lower bounds, or 
best-case scenario, and the average. These are expressed in Big O Notation, 
which means the order of approximation and is used in the classification of
algorithms according to how they scale with input size. Big O has a few related 
notations, including Big Omega ("Ω") Notation, for lower bounds, or best-case 
scenario, and Big Theta ("Θ") Notation, for the average of the upper and lower.
The classification of an algorithm's run time and memory space gives you the 
ability to allocate the necessary resources to run and scale a program.


## Orders of Common Functions

| Representation | Name                     | Example                                                   | Notes                                                                                                                                                                                                                                     |
|----------------|--------------------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ο(1)           | Constant Time            | Key or Index lookup                                       | A single operation at worst case, remains the same regardless of size and scale                                                                                                                                                           |
| Ο(log(n))      | Logrithmic Time          | Binary search of sorted data                              | Usually includes a single loop that does not run the entire length of the inoput. Starts off slower than Linear Time, but over scale it becomes more optimal (best for large data).                                                       |
| Ο(n)           | Linear Time              | Searching unsorted list                                   | Usually includes a single loop that runs through the entire length of the input. Always takes n operations in the worst case, and possibly take one additional step as input grows by one. Faster than Logrithmic Time for smaller scale. |
| Ο(n log(n))    | Multiple Logrithmic Time | Mergesort                                                 | Starts off even faster than Linear and Logrithmic Time, but does not do well at scale (best for small data).                                                                                                                              |
| Ο(n^2)         | Quadtratic Time          | Quicksort, Bubblesort, Insertionsort, Selectionsort       | Usually includes 2 nested loops. Starts off even faster than Multiple Logrithmic, Linear and Logrithmic Time, but does not do well at scale (best for small data).                                                                        |
| Ο(n^c)         | Polynomial Time          | ...                                                       | Usually include at least 3 nested loops.                                                                                                                                                                                                  |
| Ο(n!)          | Factorial Time           | [Fibonacci Index](../problems/fibonacciIndexFactorial.ts) | ...                                                                                                                                                                                                                                       |
| Ο(∞)           | Infinite Time            | [Bogosort](../dataStructuresAlgorithms/bogoSort.ts)       | With infinite time the solution will eventually find the solution without any certainty as to when                                                                                                                                        |


## Common Sorting Algorithms

| Algorithm                                                      | Best Time   | Avg Time       | Worst Time     | Space     |
|----------------------------------------------------------------|-------------|----------------|----------------|-----------|
| [Quick Sort](../dataStructuresAlgorithms/quickSort.ts)         | Ω(n log(n)) | Θ(n log(n))    | Ο(n^2)         | Ο(log(n)) |
| [Merge Sort](../dataStructuresAlgorithms/mergeSort.ts)         | Ω(n log(n)) | Θ(n log(n))    | Ο(n log(n))    | Ο(n)      |
| [Tim Sort](../dataStructuresAlgorithms/timSort.ts)             | Ω(n)        | Θ(n log(n))    | Ο(n log(n))    | Ο(n)      |
| [Heap Sort](../dataStructuresAlgorithms/heapSort.ts)           | Ω(n log(n)) | Θ(n log(n))    | Ο(n log(n))    | Ο(1)      |
| [Bubble Sort](../dataStructuresAlgorithms/bubbleSort.ts)       | Ω(n)        | Θ(n^2)         | Ο(n^2)         | Ο(1)      |
| [Insertion Sort](../dataStructuresAlgorithms/insertionSort.ts) | Ω(n)        | Θ(n^2)         | Ο(n^2)         | Ο(1)      |
| [Selection Sort](../dataStructuresAlgorithms/selectionSort.ts) | Ω(n^2)      | Θ(n^2)         | Ο(n^2)         | Ο(1)      |
| Tree Sort                                                      | Ω(n log(n)) | Θ(n log(n))    | Ο(n^2)         | Ο(n)      |
| [Shell Sort](../dataStructuresAlgorithms/shellSort.ts)         | Ω(n log(n)) | Θ(n(log(n))^2) | Ο(n(log(n))^2) | Ο(1)      |
| Bucket Sort                                                    | Ω(n + k)    | Θ(n + k)       | Ο(n^2)         | Ο(n)      |
| [Radix Sort](../dataStructuresAlgorithms//radixSort.ts)        | Ω(nk)       | Θ(nk)          | Ο(nk)          | Ο(n + k)  |
| [Counting Sort](../dataStructuresAlgorithms/countingSort.ts)   | Ω(n + k)    | Θ(n + k)       | Ο(n + k)       | Ο(k)      |

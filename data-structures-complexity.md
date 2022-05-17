- Big O: Notation to measure time and space complexity of an algorithm
  - O(1): constants
  - O(n) Loops
  - O(n^2) Nested Loops
  - O(n!) A loop for each element
- O(n!) > O(2n) > O(n^2) > O(n log n) > O(n) > O(log n) > O(1)

- Array: Worst case scenarios

  - Search: O(n)
  - Lookup: O(1)
  - Push: O(1)
  - Insert: O(n)
  - Delete: O(n)

- Examples of JS Array methods complexity

  - reduce: Has a worst case complexity of O(n^2)
  - find: Has a worst case complexity of O(n)
  - sort: n log n
  - find: O(n)
  - shift: O(n)
  - unshift: O(n)
  - push: O(1)
  - pop: O(1)

- Objects:

  - Search: O(1)
  - Insert: O(1)
  - Lookip: O(1)
  - Delete: O(1)

- Sorting Algorithms

  - Bogo Sort: O(n!)
  - Bubble Sort: O(n^2)
  - Selection Sort: O(n^2)
  - Insertion Sort: O(n^2)
  - Merge Sort: n log n
  - Quick Sort: n log n

- Which algorithm is better?
  - Insertion: Only a few times when data is almost sorted and data length is small
  - Bubble: Never
  - Selection: Never
  - Bogo: Never
  - Mergesort: When space is a problem O(n) for space
  - Quicksort: When space is not a problem, if pivot is picked wrong can become O(n^2)

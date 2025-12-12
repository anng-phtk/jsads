# Sliding Window vs. Rolling Window vs. 

## Two Pointers 
The two-pointer technique is a general strategy where two pointers (indices) traverse a data structure (commonly an array or linked list) to efficiently solve problems that would otherwise require nested loops. 
    
    **Window Size:** 
    1. Highly variable and often not conceptualized as a "window" at all. 
    2. The space between the two pointers changes size dynamically to solve a search problem.Pointer 
    
    **Movement:** 
    1. Pointers can move: Oppositely (Converging): One from the start, one from the end (e.g., finding a target sum in a sorted array, where the distance between them narrows).
    2. Synchronously (Slow/Fast): Both move in the same direction, but at different speeds (e.g., detecting a cycle in a linked list using Floyd's Tortoise and Hare algorithm).
    
    **Goal:** Efficient search, array manipulation, or cycle detection. 
    
## Sliding Window 
The sliding window technique is a more specific application of two pointers used almost exclusively on arrays or strings. The **goal** is often to find a maximal or minimal valid subarray/substring. 

    **Window Size:** 
    1. Dynamic/Variable. The window grows (outer pointer advances) until a certain condition is met (e.g., "contains K unique characters"). Then, it contracts (inner pointer advances) to maintain validity or try to find a smaller valid window.
    
    **Pointer Movement:** 
    Both pointers move in the same direction (left and right), but the window size changes in every iteration until the optimal size is found.
    
    **Goal:** 
    Finding the longest or shortest sequence that satisfies a specific condition (e.g., "length of the longest substring without repeating characters"). 
    
## Rolling Window (or Fixed-Size Sliding Window) 
This is a specific, simplified case of the sliding window technique where the size of the window does not change once the initial window is established. It "rolls" or slides by exactly one element at a time. 
    
    **Window Size:** 
    1. Fixed/Static. The size is constant (e.g., K=3).
    
    **Pointer Movement:** 
    The right pointer advances by one element, and the left pointer advances by one element immediately after, maintaining a constant gap (right - left + 1 == K).
    
    **Optimization:** 
    It often uses a running total or running calculation, where you subtract the element leaving the window and add the element entering the window in \(O(1)\) time, making the overall operation \(O(N)\).
    
    **Goal:** 
    Calculating statistics across every possible subsegment of a specific size (e.g., "maximum subarray sum of length K", or a "moving average").
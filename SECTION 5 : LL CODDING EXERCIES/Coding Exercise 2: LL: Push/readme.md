LL: Push
Implement the push method for the LinkedList class.

Your push method should take an integer as an input, create a new Node object with that input as its value, and add it to the end of the linked list.
Your push method should perform the following tasks:
Accept an integer value as an argument.
Create a new Node object newNode with the given value.
If the list is empty (head is null), set both the head and tail pointers of the list to the newNode.
If the list is not empty, set the next attribute of the current tail node to point to the newNode, then update the tail pointer to point to newNode.
Increase the length attribute by one.

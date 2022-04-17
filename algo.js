// jshint esversion:6

// Source : https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem?isFullScreen=true




function insertNodeAtTail(head, data) {
   
    let pointerToHead = head;
    
    const newNode = {
        data : data,
        next : null
    }
    
    if(!head){
        return newNode;
    }
    
    let previousNode = head;
    let currentNode = previousNode.next;
    
    while(currentNode && previousNode){
        previousNode = previousNode.next;
        currentNode = currentNode.next;
    }
    previousNode.next = newNode;
    return pointerToHead;    
}


/* Iterative and recursive implementations for printing values in a linked list
Question from: https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem?isFullScreen=true
*/

// Recursive


function printLinkedListData(head){
    if(!head){
          return;
      }
      
      if(!head.next){
          console.log(head.data);
          return;
      }else{
          console.log(head.data);
      } 
      head = head.next;
      return printLinkedListData(head);
  }


  //Iterative

  function printLinkedListData(head){
    if(!head){
      return;
    }
  
    let currentNode = head;
  
    while(currentNode){
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  
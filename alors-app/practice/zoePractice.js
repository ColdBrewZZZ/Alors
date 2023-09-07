
// function main () {
//   console.log("start");
//   rec(1);
//   console.log('finish');
// }

// function rec (n) {
//   if (n==4) {
//     console.log("stop");
//   }else{
//     console.log(n);
//     rec(n+1);
//     console.log(n);
//   }
// }

// main()


// function main (){
//   sod (5);
// }

// function what (n){
//   const arr = []
//   for (let i=0;i<n;i++){
//     arr.push(n);
//   }
//   console.log(arr.join(''));
// }

// function sod(n){
//   if (n==1)console.log(n);
//   else{
//     what(n);
//     sod(n-1);
//     what(n);
//   }
// }

// main()


// 1 = x + 2 
// -1 = x 

// a1 = 1 
// a0 = -1 

// function main(){
//   rec(1);
//   console.log('finish')
// }

// function rec(n){
//   if (n==3){
//     console.log('stop');
//   } else {
//     console.log(n)
//     rec(n with weird math)
//   }
// }

// function F(n){
//   if (n==1){
//     return 1;
//   } else {
//     return F(n-1)*F(n-1) - F(n-1) - 1;
//   }
// }

// console.log(F(10))



// function Multiply(a,b){
//   if (b==0){
//     return 0;
//   } else {
//     return a + Multiply(a,b-1)
//   }
// }

//console.log(Multiply(3,5))

// 1. gets a number and returns the sum of its digits 
      
// function sumOfDigits(n)
// {
//    if(n == 0){
//      return 0 ;
//    }

//    return (n % 10) + sumOfDigits(parseInt(n/10)) ;
//  }

// console.log(sumOfDigits(1202))

// 2. gets a number and returns how many digits it has 

// function numberOfDigits(n){
//     if(n == 0){
//       return 0;
//     }
//     return 1 + numberOfDigits(parseInt(n/10));
// }

// console.log(numberOfDigits(1244));

//3. gets a number and returns the number of odd digits it has.


// function numberOfOddDigits(n){
//   let i = 0;
//   {
//     if(n == 0){
//       return 0;
//     }

//     if(n%2!=0){
//       i=i+1
//     }
  
//     return (i) + numberOfOddDigits(parseInt(n/10));
    

//   }
// }

// console.log(numberOfOddDigits(123456789));

// //4. gets a string and prints it backwards 

function main(str){
    const array = str.split('');
    flipArray(array)
    return array;
  }
  
  function flipArray(array){
    let temp = '';
    i=1;
  
    if (i == array.length/2){
      return 0;
    }
    
    temp = array[i-1];
    array[i-1] = array[array.length-i];
    array[array.length-i] = temp;
    i = i+1;
  
    temp = array[i-1];
    array[i-1] = array[array.length-i];
    array[array.length-i] = temp;
    
  
    return array
  }
  
  
  
  //console.log(main('abcdefghijklmnopqrstuvwxyz'));
  
  // 
  
  const arr = [1, 50, 200, 63, -5, 0.5, 9];
  
  function getMax(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
  
    if (arr[0] > arr[1]) {
      arr.splice(1, 1);
    } else {
      arr.splice(0, 1);
    }
  
    return getMax(arr);
  }
  
  //console.log(getMax(arr))
  
  function getMin(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
  
    if (arr[0] < arr[1]) {
      arr.splice(1, 1);
    } else {
      arr.splice(0, 1);
    }
  
    return getMin(arr);
  }
  
  //console.log(getMin(arr))
  
  function sumEvens(arr){
    if (arr.length === 1) {
      return arr[0];
    }
    
    if(arr[0]%2==0){
      if(arr[1]%2==0){
        arr[0]=arr[0]+arr[1];
      } else {
        arr.splice(1, 1);
      } 
    } else {
      arr.splice(0, 1);
    }
  
    arr.splice(1, 1);
    return sumEvens(arr)
  }
  
  //console.log(sumEvens([2,4,2,12]))
  
  function multiplyItems(arr){
  
    if(arr.length==1){
      return arr[0];
    }
    arr[0] = arr[0]*arr[1];
    arr.splice(1, 1);
    return multiplyItems(arr)
    
      
  }
  
  //console.log(multiplyItems([2,4,2,12]))
  
  
  function averageItems(arr){
  
    if(arr.length==1){
      return arr[0];
    }
    arr[0]=arr[0]+arr[1];
    arr[0]=arr[0]/2;
    arr.splice(1, 1);
    return averageItems(arr)
      
  }
  
  //console.log(averageItems([0,100,50,20,70,48,48,51]));
  
  function Bottle(char, n) {
    console.log(n)
    if (n <= 0) return;
    
    if (n === 1) {
      console.log([char]);
    } else {
      let array = [];
      for (let i = 0; i < n; i++) {
        array.push(char);
      }
      console.log(array);
      
      Bottle(char, n - 2);
  
      console.log(array);
    }
  }
  
  //Bottle('*', 5);
  
  function bottle(char, n) {
    function bottleHelper(currentN) {
  
  
      const spaces = Math.floor((n - currentN) / 2);
      const line = ' '.repeat(spaces) + char.repeat(currentN);
      console.log(line);
      
      if (currentN == 1){
        return;
      } 
      
        bottleHelper(currentN - 2);
        console.log(line);
    }
  
    bottleHelper(n);
  }
  
  //bottle('#', 9);

  // node 
class Node {
    constructor(x, next) {
      this.info = x;
      this.next = next;
    }
  
    getInfo() {
      return this.info;
    }
  
    next() {
      return this.next;
    }
  
    toString() {
      if (this.info === null) {
        return '// ';
      } else {
        return `${this.info.toString()} -> `;
      }
    }

    // 3
  
    // static countNodes(head) {
    //   let currentNode = head;
    //   let count = 0;
  
    //   while (currentNode) {
    //     count++;
    //     currentNode = currentNode.next;
    //   }
  
    //   return count;
    // }



    // static countNodes(head, count = 0){
    //     if (head == null){
    //         return count
    //     } else {
    //         return this.countNodes(head.next, count + 1)
    //     }
    // }

    //1->2->6->0->//
    //head = 1 // 1 + 3
    //               head = 2  // 1 + 2
    //                               head - 6 //  1 + 1
    //                                                head - 0  // 1 + 0
    //                                                                  head - null // return 0
    static countNodes(head){
        if(head){
            return 1 + this.countNodes(head.next)
        }
        return 0
    }

  
    // static getMax(head) {
    //   let currentNode = head;
    //   let max = 0;
  
    //   while (currentNode) {
    //     if (currentNode.info > max) {
    //       max = currentNode.info;
    //     }
    //     currentNode = currentNode.next;
    //   }
    //   return max;
    // }

    static getMax(head) {
        if(head.next){
            if (head.info > head.next.info){
                head.next = head.next.next;
                return this.getMax(head)
            } else {
                return this.getMax(head.next)
            }
        }
        return head.info
    }

  }
  
  
  function printLinkedList(head) {
    let currentNode = head;
    let listString = '';
    while (currentNode) {
      listString += currentNode.toString();
      currentNode = currentNode.next;
    }
    console.log(listString);
  }

  // 4
  
//   function getListSum(list) {
//     let currentNode = list;
//     let sum = 0;
  
//     while (currentNode) {
//       sum += currentNode.getInfo();
//       currentNode = currentNode.next;
//     }
  
//     return sum;
//   }

function getListSum(list) {
    if(list){
        return list.info + getListSum(list.next)
    }
    return 0
}

  // 6
 
  function insertIntoSortedList(list, value) {
    const newNode = new Node(value, null);

    if (!list || value <= list.info) {
        newNode.next = list;
        return newNode;
    }
    let current = list;
    while (current.next && current.next.info < value) {
        current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;

    return list;
}

function insertIntoSortedList1(list, value) {
    const newNode = new Node(value, null);

    if (!list || value <= list.info) {
      newNode.next = list;
      return newNode;
    }

    if (!list.next || list.next.info >= value) {
      newNode.next = list.next;
      list.next = newNode;
    } else {
      list.next = insertIntoSortedList1(list.next, value);
    }

    return list;
  }

 // 7 

function createSortedLists(...arrs){
    let sortedLinkedLists = [];

    for (let arr of arrs){
        let list = null;
        for (i=0; i<arr.length; i++){
            list = insertIntoSortedList(list,arr[i])
        }
        sortedLinkedLists.push(list);
    }
    

    return sortedLinkedLists;
}
  
// 8-

function mergeSortedLists(...lists) {
    if (lists.length <= 1) {
      return lists[0] || null;
    }
    for (i = 1; i < lists.length; i++) {
        let List1 = lists[0];
        let List2 = lists[i];
        temp = new Node(null);
        current = temp;
    
        while (List1 && List2){
            if (List1.info < List2.info){
                current.next = List1; 
                List1 = List1.next 
            } else {
                current.next = List2; 
                List2 = List2.next 
            }
            current = current.next;
        }
    
        if (List1){
            current.next = List1;
        }
        if (List2){
            current.next = List2;
        }  
        
        lists[0] = temp.next
    }
  
    return lists[0];
  }
  
  const node5 = new Node(3, null);
  const node4 = new Node(2, node5);
  const node3 = new Node(3, node4);
  //const node2 = new Node(5, null);
  const node1 = new Node(7, node3);
  const head = new Node(4, node1);
  
  
  //const newNode = new Node(56, head.next);
  
  
  //head.setNext(newNode);
  
  
  //printLinkedList(head); 
  
  const numberOfNodes = Node.countNodes(head);
  //console.log(`How many nodes: ${numberOfNodes}`);
  
  const list = head;
  const totalSum = getListSum(list);
  //console.log(`sum of the values:${totalSum}`)
  
  const max = Node.getMax(head);
  //console.log(`max: ${max}`);

  let list2 = null;
  list2 = insertIntoSortedList1(list2,4);

  list2 = insertIntoSortedList1(list2,7);

  list2 = insertIntoSortedList1(list2,9);
 
  list2 = insertIntoSortedList1(list2,2);

  list2 = insertIntoSortedList1(list2,5);

  list2 = insertIntoSortedList1(list2,10);

  list2 = insertIntoSortedList1(list2,-1);
 
  list2 = insertIntoSortedList1(list2,3);
  printLinkedList(list2);


  let array1 = [4,2,8,10];
  let array2 = [6,3,9];
  let array3 = [5,7,1]

  //let sortedLists = createSortedLists(array1,array2,array3);

  //printLinkedList(sortedLists[0]); // 2 -> 4 -> 8 -> 10 ->
  //printLinkedList(sortedLists[1]); // 3 -> 6 -> 9 ->
  //printLinkedList(sortedLists[2]); // 1 -> 5 -> 7 ->

 // mergedSortedList = mergeSortedLists(sortedLists[0],sortedLists[1],sortedLists[2]);
  //printLinkedList(mergedSortedList);

  

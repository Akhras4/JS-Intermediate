// fibonacci 
let x=[0,1]
for (var i=2;i<=100;i++){
  x[i]=x[i-1]+x[i-2]
}
console.log(x)
/*
 1.define arr with two starting val
 2. for loop from the item 2 to 100
 3.value assignment the two last item to item integer
 ** tdiagram**
i=2   x[2]=1+0    [0,1,1]
i=3   x[3]=1+1    [0,1,1,2]
*/


// remove the negative num
// Addition
let z=[];
for (let m=200;m<=300;m++){
  if (m%3==0 || m%5==0){
    z.push(m)
  }else if (m%3==0 && m%5==0){
    z.splice(m,1);
  }else{
    z.splice(m,1);
  }
}

console.log(z)
/*
 1.define empty arr 
 2. for loop from the item 200 to 300
 3. condition if the number is  divisible by 3 or 5  assign to arr
 3. condition if the number is  divisible by 3 and 5 and else  remove the num to arr
 ** tdiagram**
i=200  true  z[0]=200    [200] etc
*/


// Shift the Values
let c=[2,3,6,5,88,4,-7];
var q=0;
for (let p=0,a=c.length; p<=c.length/2 && a>=c.length/2; p++,a--){ 
    q=c[p]; 
    console.log(q);
    c.splice(p,1,c[a]);
    c.splice(a,1,q);
}
console.log(c);
/*
 1.define arr ,var q=0
 2. for loop for 2 initializ 
 3. assign q to item of frist loop
 4. then replace value of p to c
5. then replace value of c to q
 ** tdiagram**
p=0 a=6 q=2 c[p]=2 c[a]=-7    c=[-7,3,6,5,88,4,2] ..etc
*/

// FizzBuzz
let arr=[];
for(let int=1;int<=135;int++){
  if(int%3==0){
    arr[int]="fizz";
  }else if(int%5==0){
    arr[int]="buzz";
  }else{
    arr[int]=int;
  }
}
console.log(arr)
/*
 1.define arr 
 2. for loop from 1 to 135 
 3. check if the number divisible by 3 assign fizz 
 4. check if the number divisible by 5 assign buzz 
5. else assign the number
 ** tdiagram**
int=1 false false true  arr=[1,]
int=3 true false false  arr=[1,2,"fizz"]
*/


//Remove the Negative
let y=[1,-2,4,1]
for(l=0;l<=y.length;l++){
  if(y[l]<0){
    y.splice(l,1)
  }
}
console.log(y)


//Communist Censorship
let arrst=['Man', 'I','Love','The','Matrix','Program']
for(let k=0;k<=arrst.length;k++){
  if(arrst[k]=='Program'){
    var word=arrst[k]
    console.log(word)
    for(var v of word){
        v='*'
    }
    arrst.splice(k,1,v)
  }
}
console.log(arrst)
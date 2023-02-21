// String rotating chnage given counter
let str="nimap";
let count=3
let revcount=-count;
// str.substring(0, str.length-count) cut string from given count
let string = str.substring(0, str.length+revcount);
console.log(string);
//str.sustr(-count) give last characters
let last=str.substr(revcount);
console.log(last)
let newstring=last.concat(string)
console.log(newstring)

// =================
let str="nimap";
count=3;
var str1="";
var str2='';
var newstr;
for(let i=0;i<str.length;i++){
    if(i<str.length-count){
      str1+=str[i]
        console.log("====> "+str1)
  
    }else{
      str2+=str[i]
        console.log("hshsh  "+str2) 
   
    }

    }
console.log(str2.concat(str1))

// ==============================
//   print number those even index and even number
let a=[3,1,6,7,5,11,8,9,10,2];
for(let i=0;i<a.length;i++){
if((a[i]%2==0 && i%2==0) || (a[i]%2!=0 && i%2!=0)){
    console.log(a[i])
    // console.log(i)
}
  
}


let a=[3,1,6,7,5,11,8,9,10,2];
for(let i=0;i<a.length;i++){
if(a[i]%2 === i%2){
    console.log(a[i])
    // console.log(i)
}
  
}

// ======================
// Reverse number without split join revers

 function reverseFun(num){
let n=num.toString();
const number=[];
let str="";
for(let i=n.length-1,k=0;i>=0;i--,k++)
{
    number[k]=n[i];
    str=str+number[k];
}
return str;
 }

 console.log(reverseFun(1234));

//  ==================================
// reverse number without using string methods
let num=12345;
let reverse=0;
while(num!=0)
{
 reverse=reverse*10+num%10;
 num=parseInt(num/10)
}
 console.log(reverse)
// =======================
var object_name=new Object; //object constructor
var fees=new Object; //object constructor
var fees={};

var fees=new Object();
fees['Rahul']=100;
fees['Sumit']=200;
fees['Rohan']=300;
console.log(fees['Rohan'])
console.log(fees.Rahul)
fees['total']=function(){
    return(100+200)
}

console.log(fees.total)

// =============================
// Primitives copid by their values and Object are copied by their reference

let x={value:10};
let y=x;

x.value=20;

// ===============================

let number=10;

function increase(number){
    number++;
    return number;
}
let k=increase(number);

console.log(k)
// =============================

let obj={value:10};

function increase(obj){
obj.value++;
}

increase(obj);
console.log(obj)

// ======================

const circle={
    radius:1,
    draw(){
        console.log('draw');
    }
};

for(let key in circle)
console.log(key,circle[key])

for(let key of circle) //Uncaught TypeError: circle is not iterable
console.log(key)


for(let key of Object.keys(circle))
console.log(key)

for(let entry of Object.entries(circle))
console.log(entry)

if('radius' in circle) console.log('yes')

// =======================================
// Cloning of object

const another={};
for(let key in circle)

another[key]=circle[key];
console.log(another)

// -------------------------
another way

const another=Object.assign({},circle);

console.log(another)

// -----------------------------
const another={...circle};
console.log(another)

// =====================================
* pattern
for(i=0;i<5;i++){
    for(j=0;j<5-i;j++){
        document.write("*")
    }
    document.write("<br/>")

}

// =======================
// garbage collector runs in the background then it automaticalliy deallocate memory when never used.
// ================================

console.log(Math.round(4.6)) => 7
console.log(Math.floor(12.8333))

console.log(Math.round(1.9))
console.log(Math.floor(1.9))

console.log(Math.floor(Math.random()*10))

string primitive
const message="This is my first message";
console.log(message.indexOf('my'))
console.log(message.length)

console.log(message[0])
console.log(message[1])
string object
const another=new String('hi')
// ====================================
split()=>It converts string into array
const message="This is my first message";
let a=message.split(" ");
console.log(a)

const message='This is--------- my \n'+'\'first\' message';
console.log(message)

const another=`This is my 'first' message`;
let a=1;
let avg=0;
let sum=0;
let count=1;
while(a<=100){
  if(a%2==0){
    sum=sum+a;
  count++;
  }
  a++;
}
avg=sum/count;
console.log(avg);
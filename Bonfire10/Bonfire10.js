function sumAll(arr) {


if (arr[0] == arr[1]){
  return arr[0] + arr[1];
  }else{
var  largerNum = Math.max(arr[0], arr[1]);
var  smallerNum = Math.min(arr[0], arr[1]);
}

var result=smallerNum;
var diff = largerNum-smallerNum;
var i=1;

while (i < diff+1){
  result += smallerNum + i;
  i++;
}

return result;

}


let str = 'hello world!'
let arr = str.split("")
function charMax(){
  let obj={}
  arr.forEach((e)=>{
    obj[e]=obj[e]?obj[e]+1:1;
    // i is key and obj[i] is value
  })
  let max  = 1;
  let char;
  for(let i in obj){
    if(obj[i]>max){
      max = obj[i];
      char = i
      // i is key and obj[i] is value
    }
  }
    console.log(char)

}

charMax()
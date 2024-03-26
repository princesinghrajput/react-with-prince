//function to generate n random number between 0 to 9

function genRandomNum(n){
    let arr = new Array(n);

    for(let i=0; i<n;i++){
        arr[i] = Math.floor(Math.random() * 10);
    }

    return arr;
}

  //to find some of the array
  function sum(arr){
    return arr.reduce((sum, curr)=>sum+curr, 0 )
  }

export {genRandomNum, sum}
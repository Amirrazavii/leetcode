var maxArea = function(height) {
  let left=0;
  let right=height.length -1;
  let area=0;
  while(left<right){
    area=Math.max(area,Math.min(height[left],height[right])*(right-left))
    if(height[left]<height[right]){
    //   area=Math.max(area,height[left]*(right-left))
      left++
  }  else{
     right--
  }
    
  }
  return area
}

const a=maxArea([1,8,6,2,5,4,8,3,7]);
console.log(a);

var nums = [2, 5, 4,5];
var target = 10;
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
             
        }
    }
    return [];
};
console.log(twoSum(nums,target));
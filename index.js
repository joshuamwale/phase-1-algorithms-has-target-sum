//runtime 0(n)
function hasTargetSum(array, target) {
  const seenNumbers = {};

  for (const number of array) {
    // n steps
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }

  return false;
}


//0(n) runtime
function getSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

//0(1) runtime
function getSock(object) {
  if (object.sock) return "sock";
}

if (require.main === module) {

  /*
  My Big 0 time complexity of my function
  Runtime: 0(n^2)
  Space: 0(n)

  hasTargetSum([1,2,3,4], 6)
  seenNumbers= {
    1: true;
    2: true;
    3; true
  }
*/
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

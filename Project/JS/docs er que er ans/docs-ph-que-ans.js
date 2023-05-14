// 1. এমন  একটা  লুপ  লেখো  যে  তোমার  হয়ে  ১০ বার  sorry  লেখা  টা  প্রিন্ট  করবে 

for (var i = 0; i < 10; i++) {
    console.log("sorry");
  }

// 2. এমন  একটা  ফাঙ্কশন  লিখতে  হবে  যাকে ডাক  দিলেই  সে sorry লেখা টাকে ১০ বার  কনসোল লগ  করবে

function saySorry() {
    for (let i = 0; i < 10; i++) {
      console.log("sorry");
    }
  }
  
// 3. ধরো  তুমি  হটাৎ  একদিন  দোকান এ গিয়ে  চাল,ডাল ,তেল   কিনলা  এখন  এমন  একটা  ফাঙ্কশন  লিখতে  হবে  যাকে এই  তিনটা জিনিসের  ক্রয়  মূল্য  বলে  দিলেই  টোটাল  কত  টাকা কিনছো এইটা  বলে  দিবে ।

function calculateTotalAmount(rice, pulses, oil) {
    const totalAmount = rice + pulses + oil;
    console.log(`Total amount spent on rice, pulses and oil is: ${totalAmount}`);
    return totalAmount;
  }
  calculateTotalAmount(50, 40, 70);

// 4. এমন  একটা  ফাঙ্কশন  লিখবে  যাকে  তুমি কিলোমিটার  দিলে  সে  তোমাকে এ মাইল এ কনভার্ট  করে  দিবে

function convertToMiles(kilometers) {
    const miles = kilometers * 0.621371;
    console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
    return miles;
  }
  convertToMiles(10);

//  5. এখন  একটা  রি-ইউজেবল  ফাঙ্কশন  লিখো   যাকে  তুমি  শুধু  (চেস্ট ,বাইসেপ ,ট্রাইসেপ ) এইগুলা  দিয়ে  ডাক  দিলে  সে  তোমাকে  ডিটেলস  ওয়ার্কআউট দিয়ে  দিবে 

function getWorkoutSummary(chest, biceps, triceps) {
    return `Today's workout summary:
    Chest exercises: ${chest}
    Biceps exercises: ${biceps}
    Triceps exercises: ${triceps}`;
  }
  const workout = getWorkoutSummary(3, 2, 4);
console.log(workout);

// Object for que 6, 7, 8

let myFriends = {
    friends : {
        maleFriends: ["Sowad", "Safi" , "Jamee", "Nafis", "Mahmud" ],
        femaleFriends: ["Sadia", "Sumona", "Bushra"]
    }
} 


// 6. উপরের  এই  অবজেক্ট  থেকে  তোমার  প্রিয় মানুষটির ফ্রিয়ান্ডলিস্ট চেক  করে  দেখো । কত  জন ফ্রেন্ড  আছে ?

let totalFriends = myFriends.friends.maleFriends.length + myFriends.friends.femaleFriends.length;
console.log("Total friends: " + totalFriends);

// 7. উপরের  এই  অবজেক্ট এখন  দেখো ফ্রিয়ান্ডলিস্ট এ   কতজন ছেলে  ফ্রেন্ড  আছে ?

let maleFriendsCount = myFriends.friends.maleFriends.length;
console.log("Male friends count: " + maleFriendsCount);

// 8. উপরের  এই  অবজেক্টতোমার  ফ্রিয়ান্ডলিস্ট  এর  মধ্যে  সবথেকে বড় নামওয়ালা ফ্রেন্ড কে  খুঁজে  বের  করো ?
let biggestName = "";
let allFriends = myFriends.friends.maleFriends.concat(myFriends.friends.femaleFriends);

for (let i = 0; i < allFriends.length; i++) {
    if (allFriends[i].length > biggestName.length) {
        biggestName = allFriends[i];
    }
}
console.log("Friend with biggest name: " + biggestName);

//  9. ধরো  তুমি  থাইল্যান্ড  বা  অন্য  কোথাও  একটা  হোটেল এ থাকতে  গেলা এখন  হোটেল  কর্তৃপক্ষ  কে  ভাড়া  জানতে  চাইলে  সে  বললো 

// যদি  আমাদের  হোটেল এ আপনি ১-১০ দিন  থাকেন  তাহলে  ভাড়া ৫০০ টাকা/ডে 

// যদি ২০ দিন  থাকেন তাহলে ১০ দিনের পরে দিন  থেকে ২০ দিন  পর্যন্ত ৩০০ টাকা/ডে 

// আপনি  যদি  এক  মাস  থাকেন  তাহলে  ২০ দিনের  পরের যত দিন  থাকবেন  ভাড়া ১০০টাকা /ডে 

// এখন  তুমি  যদি ২৫ দিন  থাকো  তাহলে  ভাড়া  কত  টাকা  আসবে ?

function calculateRent(daysStayed) {
    let totalRent = 0;
    if (daysStayed <= 10) {
      totalRent = daysStayed * 500;
    }
    else if (daysStayed <= 20) {
      totalRent = 10 * 500 + (daysStayed - 10) * 300;
    }
    else if (daysStayed <= 30) {
      totalRent = 10 * 500 + 10 * 300 + (daysStayed - 20) * 100;
    }
    else {
      totalRent = 10 * 500 + 10 * 300 + 10 * 100;
    }
    console.log(`The total rent for staying ${daysStayed} days is: ${totalRent} Taka`);
    return totalRent;
  }
  calculateRent(25);
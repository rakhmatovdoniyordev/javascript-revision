{
    //51-masala
    function findSmall(arr){
        let index = arr.length / 2
        let result = null
        if(arr.length % 2 != 0){
            result = arr[Math.floor(index)]
        }else{
            result = (arr[index] + arr[index -1]) / 2
        }
        return result
    }
    console.log(findSmall([1,2,3,4,5]));
}

{
    //52-masala
    let products = [
    {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
    {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
    {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
    {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
    ];
    let result = products.filter(value => value.id != 4)
    console.log(result);
}

{
    //53-masala
    let str = "Hello My name is John. Im 23 years old."
    let splt = str.split(" ")
    let result = `String faqat harflardan iborat`
    for(let i = 0; i < splt.length; i++){
        if (!isNaN(splt[i])) {
            result = `Stringda sonlar ham ishtrok etgan`
        }
    }
    console.log(result);
}

{
    //54-masala
    const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
    let obj = {}
    for(let i = 0; i < animals.length; i++){
        if(obj[animals[i]]){
            obj[animals[i]] += 1
        }else{
            obj[animals[i]] = 1
        }
    }
    console.log(obj);
}

{
    //55-masala
    let str = "Uzbekistan is beautiful country"
    let result = str.split(" ").map(value => value.length)
    console.log(result);
}

{
    //56-masala
    let str = "Salom Dunyo"
    let result = str.split("").some(value => value === ` `)
    console.log(result);
}

{
    //57-masala
    let obj = {a: 2, b: 5, c: 7}
    let result = Object.entries(obj).map(value => value.join(""))
    console.log(result);
}

{
    //58-masala
    const pupils = [
        {name: "Elbek", protcent: 95,},
        {name: "Zafar", protcent: 78,},
        {name: "Aziz", protcent: 83,},
        {name: "Jasur", protcent: 88,},
        {name: "Bobur", protcent: 66,},
        {name: "Kamron", protcent: 75,},
        ];
    let result = pupils.reduce((acc, item) => {
        if(item.protcent >= 80){
            acc.passed++
        }else{
            acc.failed++
        }
        return acc
    }, {passed: 0, failed: 0})
    console.log(`Imtihondan ${result.passed} kishi o'tdi. ${result.failed} kishi o'ta olmadi`);
}

{
    //59-masala
    var findMedianSortedArrays = function(nums1, nums2) {
        let arr = [...nums1, ...nums2]
        let index = arr.length / 2
        let result  = 0
        if(arr.length % 2 === 0){
            result = (arr[index] + arr[index - 1]) / 2
        }
        else{
            result = arr[Math.floor(index)]
        }
        return result
    }
    console.log(findMedianSortedArrays([1,2], [3,4]));
}

{
    //60-masala
    var searchMatrix = function(matrix, target) {
        let result = matrix.flat(1).includes(target)
        return result
    }
    console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
}

{
    // Yechimni to'ldiring, shunda u satrni ikkita belgidan iborat juftlarga ajratadi. Agar satr toq sonli belgilarni o'z ichiga olsa, u oxirgi juftlikning etishmayotgan ikkinchi belgisini pastki chiziq ('_') bilan almashtirishi kerak.
    //Misollar:
    // 'abc' =>  ['ab', 'c_']
    // 'abcdef' => ['ab', 'cd', 'ef']
    function solution(str){
        let result = []
        if(str.length % 2 != 0 ){
            str += "_"
        }
        for(let i = 0; i < str.length; i+=2){
            result.push(str.slice(i, i+2))
        }
        return result
     }
     console.log(solution("abcdefg"));
}

{
    //Usul/funksiyani bajaring, shunda u chiziqcha/pastki chiziq bilan ajratilgan so'zlarni tuya korpusiga aylantiradi . Chiqarishdagi birinchi so'z, agar asl so'z bosh harf bilan yozilgan bo'lsa, bosh harf bilan yozilishi kerak ( Upper Camel Case deb nomlanadi, ko'pincha Paskal ishi deb ham ataladi). Keyingi so'zlar har doim katta harf bilan yozilishi kerak
    //Misollar
    // "the-stealth-warrior"ga aylanadi"theStealthWarrior"
    // "The_Stealth_Warrior"ga aylanadi"TheStealthWarrior"
    // "The_Stealth-Warrior"ga aylanadi"TheStealthWarrior"
    function toCamelCase(str){
        let words = str.split(/[-_]/)
        return words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
      }
      console.log(toCamelCase("thes-tealth_warrior"));
}

{
    // Sizga raqamlar qatori beriladi. Siz toq raqamlarni o'sish tartibida tartiblashingiz kerak, shu bilan birga juft raqamlarni asl joyida qoldirishingiz kerak.
    //Misollar
    // [7, 1]  =>  [1, 7]
    // [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
    function sortArray(array) {
        let odd = array.filter(value => value % 2 !== 0).sort((a, b) => a - b)
        return array.map(value => value % 2 === 0 ? value : odd.shift())
    }
    console.log(sortArray([5, 3, 2, 8, 1, 4]));
}

{
    // Berilgan stringdagi unlilar sonini (hisobini) qaytaring.
    // Bu Kata uchun a, e, i, o, unlilari sifatida qaraymiz (u va y kirmaydi).
    // Kirish qatori faqat kichik harflar va/yoki bo'shliqlardan iborat bo'ladi.
    function getCount(str) {
        let vowels = "aeiou"
        let arr = str.split("")
        let count = 0
        for(let i = 0; i < arr.length; i++){
          if(vowels.includes(arr[i].toLowerCase())){
            count++
          }
        }
        return count
    }
    console.log(getCount("Hello Baxa"));
}

{
    // Sizning vazifangiz har qanday manfiy bo'lmagan butun sonni argument sifatida qabul qiladigan va uni raqamlari bilan kamayish tartibida qaytara oladigan funktsiyani yaratishdir. Asosan, mumkin bo'lgan eng yuqori raqamni yaratish uchun raqamlarni o'zgartiring.
    // Masalan
    // Kirish: 42145 Chiqish:54421
    // Kirish: 145263 Chiqish:654321
    // Kirish: 123456789 Chiqish:987654321
    function descendingOrder(n){
        let splt = +n.toString().split("").sort((a, b) => b -a).join("")
        return splt
    }
    console.log(descendingOrder(123456789));
}

{
    // Berilgan matnda katta va kichik harflarning sonini toping
    function countCase(str) {
        let arr = str.split("")
        let lowercase = 0
        let uppercase = 0
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= 'A' && arr[i] <= 'Z'){
                uppercase++
            }
            if(arr[i] >= 'a' && arr[i] <= 'z'){
                lowercase++
            }
        }
        return `uppercase: ${uppercase}, lowercase: ${lowercase}`
    }
    console.log(countCase("Hello World!"));
}

{
    // Berilgan massivdagi juft va toq indekslardagi elementlarning yig'indisini alohida-alohida hisoblang.
    function evenOddIndexSums(arr) {
        let evenIndexSum = 0
        let oddIndexSum = 0
        for(let i = 0; i < arr.length; i++){
            if(i % 2 === 0){
                evenIndexSum += arr[i]
            }else{
                oddIndexSum += arr[i]
            }
        }
        return `evenIndexSum: ${evenIndexSum}, oddIndexSum: ${oddIndexSum}`
    }
    console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6])); // {evenIndexSum: 9, oddIndexSum: 12}
}

{
    // Berilgan qator ichidagi barcha bo'shliqlarni olib tashlang.
    function removeSpaces(str) {
        let arr = str.split("").filter(value => value != " ").join("")
        return arr
    }

    console.log(removeSpaces("Hello World! How are you?")); // "HelloWorld!Howareyou?"
}

{
    // Berilgan foydalanuvchi ismlari massividan eng uzun ismni toping.
    function longestName(arr) {
        let min = arr[0]
        let result = null
        for(let i = 0; i < arr.length; i++){
            if(min.length < arr[i].length){
                result = arr[i]
            }
        }
        return result
   }

   console.log(longestName(["Alice", "Bob", "Christina", "David"])); // "Christina"
}

{
    // Berilgan ikki o'lchamli massivni bitta tekis qatorga aylantiring.
    function flattenArray(arr) {
        return arr.flat(1)
    }

    console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
}

{
    // Berilgan massiv ichidagi musbat va manfiy sonlarni alohida massivlarga ajratib, natijani obyekt sifatida qaytaring.
    function separatePositivesAndNegatives(arr) {
        let obj = {positives: [], negatives: []}
        for(let i in arr){
            if(arr[i] > 0){
                obj.positives.push(arr[i])
            }else{
                obj.negatives.push(arr[i])
            }
        }
        return obj
     }

     console.log(separatePositivesAndNegatives([1, -2, 3, -4, 5]));
     // { positives: [1, 3, 5], negatives: [-2, -4] }
}

{
    // Berilgan massiv ichidagi juft indeksdagi elementlar yig'indisini toping.
    function sumEvenIndexedElements(arr) {
        let sum = 0
        for(let i in arr){
            if(i % 2 === 0){
                sum += arr[i]
            }
        }
        return sum
    }

    console.log(sumEvenIndexedElements([1, 2, 3, 4, 5, 6])); // 9 (1 + 3 + 5)
}

{
    // Berilgan massiv ichidagi barcha qatorlarni teskarisiga o'giring.
    function reverseStringsInArray(arr) {
        return arr.map(str => str.split('').reverse().join(''));
    }

    console.log(reverseStringsInArray(['abc', 'def', 'ghi'])); // ['cba', 'fed', 'ihg']
}
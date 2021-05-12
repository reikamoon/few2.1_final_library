/// reikamoon's library

function removeVowels(str) {
    var strWithoutVowels =  [];
            lower = str.toLowerCase()
            str = lower.split('');
            var vowels = ['a', 'e', 'i', 'o', 'u'];
            for (var i = 0; i < str.length; i++) {
                if (vowels.indexOf(str[i]) < 0) {
                    strWithoutVowels.push(str[i])
                }
            }
            strWithoutVowels = strWithoutVowels.join('');
            return strWithoutVowels;
        }

String.prototype.removeVowels = function () {
  return removevowels(this);
};

console.log('1 - No Vowels:  ' + removeVowels("I've been waiting for this!"))


function mirror(str) {
  const split = str.split("")
  const reverseArray = split.reverse();
  const joinArray = reverseArray.join("");
  return joinArray 
}

String.prototype.mirror = function () {
    return mirror(this);
};

console.log('2 - Mirror Words: ' + mirror('hello hello hello'))

function babyTalk(str) {
    const lower = str.toLowerCase()
    const search = "l"
    const baby = "w"
    const result = lower.replaceAll(search, baby)
    const no = "no"
    const noes = "noes"
    const noesie = result.replaceAll(no, noes)
    const r = "r"
    const babyr = "w"
    const babiedr = noesie.replaceAll(r, babyr)
    const mistake = "mistake"
    const oopsie = "oopsie-whoopsie"
    const replacemistake = babiedr.replaceAll(mistake, oopsie)
    const error = "bugs"
    const oopsie2 = "bugsie-wugsie"
    const replaceError = replacemistake.replaceAll(error, oopsie2)
    const owo = replaceError + " " + "owo"
    return owo
}

String.prototype.babyTalk = function () {
  return babyTalk(this);
};

console.log('3 - Baby Talk: ' + babyTalk("This library was a mistake."))

function oldEnglish(str) {
  const lower = str.toLowerCase()
  const you = "you"
  const thou = "thou"
  const result = lower.replaceAll(you, thou)
  const your = "your"
  const thy = "thy"
  const result2 = result.replaceAll(your, thy)
  const are = "are"
  const art = "art"
  const result3 = result2.replaceAll(are, art)
  const shall = "shall"
  const shalt = "shalt"
  const result4 = result3.replaceAll(shall, shalt)
  return result4.toLowerCase()

}

String.prototype.oldEnglish = function () {
  return oldEnglish(this);
};

console.log("3 - Old English: " + oldEnglish("You shall not pass!"));


module.exports = {
  removeVowels,
  mirror,
  babyTalk,
  oldEnglish
}
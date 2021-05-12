/// reikamoon's library
function mirror(str) {
    var split = str.split("");
    var reverseArray = split.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
function babyTalk(str) {
    var lower = str.toLowerCase();
    var search = "l";
    var baby = "w";
    var result = lower.replace(search, baby);
    var no = "no";
    var noes = "noes";
    var noesie = result.replace(no, noes);
    var r = "r";
    var babyr = "w";
    var babiedr = noesie.replace(r, babyr);
    var mistake = "mistake";
    var oopsie = "oopsie-whoopsie";
    var replacemistake = babiedr.replace(mistake, oopsie);
    var error = "bugs";
    var oopsie2 = "bugsie-wugsie";
    var replaceError = replacemistake.replace(error, oopsie2);
    var owo = replaceError + " " + "owo";
    return owo;
}
function oldEnglish(str) {
    var lower = str.toLowerCase();
    var you = "you";
    var thou = "thou";
    var result = lower.replace(you, thou);
    var your = "your";
    var thy = "thy";
    var result2 = result.replace(your, thy);
    var are = "are";
    var art = "art";
    var result3 = result2.replace(are, art);
    var shall = "shall";
    var shalt = "shalt";
    var result4 = result3.replace(shall, shalt);
    return result4.toLowerCase();
}
module.exports = {
    mirror: mirror,
    babyTalk: babyTalk,
    oldEnglish: oldEnglish
};

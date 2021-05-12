/// reikamoon's library

function mirror(str: string) {
  const split = str.split("")
  const reverseArray = split.reverse();
  const joinArray = reverseArray.join("");
  return joinArray 
}

function babyTalk(str: string) {
    const lower = str.toLowerCase()
    const search = "l"
    const baby = "w"
    const result = lower.replace(search, baby)
    const no = "no"
    const noes = "noes"
    const noesie = result.replace(no, noes)
    const r = "r"
    const babyr = "w"
    const babiedr = noesie.replace(r, babyr)
    const mistake = "mistake"
    const oopsie = "oopsie-whoopsie"
    const replacemistake = babiedr.replace(mistake, oopsie)
    const error = "bugs"
    const oopsie2 = "bugsie-wugsie"
    const replaceError = replacemistake.replace(error, oopsie2)
    const owo = replaceError + " " + "owo"
    return owo
}

function oldEnglish(str:string) {
  const lower = str.toLowerCase()
  const you = "you"
  const thou = "thou"
  const result = lower.replace(you, thou)
  const your = "your"
  const thy = "thy"
  const result2 = result.replace(your, thy)
  const are = "are"
  const art = "art"
  const result3 = result2.replace(are, art)
  const shall = "shall"
  const shalt = "shalt"
  const result4 = result3.replace(shall, shalt)
  return result4.toLowerCase()

}

module.exports = {
  mirror,
  babyTalk,
  oldEnglish
}
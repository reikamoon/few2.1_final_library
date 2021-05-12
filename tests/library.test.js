const rm = require('../src/index')

test('removeVowels', () => {
  expect(rm.removeVowels("apple")).toBe("ppl");
  expect(rm.removeVowels("orange")).toBe("rng");
});

test('mirror', () => {
    expect(rm.mirror('hello')).toBe("olleh");
    expect(rm.mirror('rorrim')).toBe('mirror');
})

test('babyTalk', () => {
    expect(rm.babyTalk('Bugs and mistake')).toBe("bugsie-wugsie and oopsie-whoopsie owo")
    expect(rm.babyTalk('Hello, how are you?')).toBe("hewwo, how awe you? owo")
})

test('oldEnglish', () => {
  expect(rm.oldEnglish('You shall not pass!')).toBe('thou shalt not pass!')
  expect(rm.oldEnglish('You are beautiful.')).toBe('thou art beautiful.')
})
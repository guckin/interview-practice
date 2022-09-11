
/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false


Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
*/

const wordPattern = (patternString: string, wordString: string): boolean => {
    const pattern = patternFromString(patternString);
    const words = wordsFromString(wordString);
    const mapping = createWordPatternMapping(pattern, words);
    const uniqueLetterCount = getUniqueCount(pattern);
    const mappedItemCount = getObjectLength(mapping) ;
    return mappedItemCount === uniqueLetterCount;
};

const patternFromString = (string: string): string[] => [...string];

const wordsFromString = (string: string): string[] => string.split(' ');

const createWordPatternMapping = (
    words: string[],
    pattern: string[]
): Record<string, string> => pattern.reduce((mapping, value, index) => ({...mapping, [value]: words[index]}), {});

const getUniqueCount = (array: string[]): number => [...new Set(array)].length;

const getObjectLength = (object: object): number => Object.values(object).length;

describe('Word Pattern', () => {
    it('Example 1', () => {
        const pattern = 'abba';
        const words = 'dog cat cat dog';

        const output = wordPattern(pattern, words);

        expect(output).toEqual(true);
    });

    it('Example 2', () => {
        const pattern = 'abba';
        const words = 'dog cat cat fish';

        const output = wordPattern(pattern, words);

        expect(output).toEqual(false);
    });

    it('Example 3', () => {
        const pattern = 'aaaa';
        const words = 'dog cat cat dog';

        const output = wordPattern(pattern, words);

        expect(output).toEqual(false);
    });
});

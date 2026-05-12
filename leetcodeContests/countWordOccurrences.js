function countWordOccurrences(chunks, queries) {
  const str = chunks.join("");
  // use regex
  const wordRegex = /[a-z]+(-[a-z]+)*/g;
  const matches = str.match(wordRegex) || [];

  const frequencyMap = new Map();
  for (const word of matches) {
    frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
  }

  return queries.map((q) => frequencyMap.get(q) || 0);
}

let chunks = ["a--b a-", "-c"];
let queries = ["a", "b", "c"];
console.log(countWordOccurrences(["a--b a-", "-c"], ["a", "b", "c"]));
chunks = ["hello wor", "ld hello"];
queries = ["hello", "world", "wor"];
console.log(countWordOccurrences(chunks, queries));
((chunks = ["hello"]), (queries = ["hello", "ell"]));
console.log(countWordOccurrences(chunks, queries));

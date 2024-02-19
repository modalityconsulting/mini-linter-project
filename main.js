// PROJECT: Mini Linter

var story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

var overusedWords = ['really', 'very', 'basically'];

var unnecessaryWords = ['extremely', 'literally', 'actually' ];

var storyWords = story.split(' ');

// console.log(storyWords.length);

var betterWords = storyWords.filter(function(word){
    return !unnecessaryWords.includes(word);
});

// console.log(betterWords.length);

overusedWords.forEach(word => {
    var count = storyWords.filter(storyWords => storyWords === word).length;
    // console.log(`${word}: ${count}`);
});

function logStoryDetails(wordCount, sentenceCount, overusedWordsCount) {
    console.log(`Word count: ${wordCount}`);
    console.log(`Sentence count: ${sentenceCount}`);
    console.log('Overused words count:');
    for (const [word, count] of Object.entries(overusedWordsCount)) {
      console.log(`- ${word}: ${count}`);
    }
  }
  
  var wordCount = storyWords.length;
  var sentenceCount = 0;
  storyWords.forEach(word => {
    if (word.endsWith('.') || word.endsWith('!') || word.endsWith('?')) {
      sentenceCount += 1;
    }
  });
  
  var overusedWordsCount = { 'really': 0, 'very': 0, 'basically': 0 };
  storyWords.forEach(word => {
    if (overusedWords.includes(word)) {
      overusedWordsCount[word] += 1;
    }
  });
  
  // Log the stats
  logStoryDetails(wordCount, sentenceCount, overusedWordsCount);
  console.log(betterWords.join(' '));

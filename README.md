# latest-tweets made by: https://github.com/hackergrrl/

[Credit Repo](https://github.com/hackergrrl/latest-tweets)

> This is a modified version of hackergrrls latest tweet nodejs module.
> Modified for easier use, and will be maintained.

# Installing

```npm i latest-tweets-modern ```

# Example In House

```js
(async () => {
  const latestTweets = new (require('../latest-tweet.js'))({
    skipPinnedTweets: true,
  });
  latestTweets.getTweets('elonmusk', 5, async (err, tweets) => {
    console.log(tweets);
  });
})();
```

# Example NPM

```js
(async () => {
  const latestTweets = new (require('latest-tweets-modern'))({
    skipPinnedTweets: true,
  });
  latestTweets.getTweets('elonmusk', 5, async (err, tweets) => {
    console.log(tweets);
  });
})();
```

# Current Options

> {
> skippedPinnedTweets: boolean
> }

# License

> MIT

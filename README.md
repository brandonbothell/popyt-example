# Popyt
Want to access data from the YouTube Data v3 API? Want a Node.js YouTube API wrapper with typings, promises, and caching? No problem!

# Examples
## See the [5-minute tutorial](https://brandonbothell.github.io/popyt/docs/tutorial/intro).
Here are some basic methods ([try it on CodeSandbox](https://codesandbox.io/p/sandbox/fetch-videos-from-youtube-jmqlfq)):

Instantiate the object:

```js
const { YouTube } = require('popyt')
const youtube = new YouTube(apiKey)
```

Instantiate the object without caching:

```js
const { YouTube } = require('popyt')
const youtube = new YouTube(apiKey, undefined, { cache: false })
```

Get a video by ID:

```js
const video = await youtube.getVideo('dQw4w9WgXcQ')
console.log(video)
```

You can do the same thing with playlists, channels, and comments by replacing `Video` with any of them.  

Get a video by URL:

```js
const video = await youtube.getVideo('https://youtube.com/watch?v=dQw4w9WgXcQ')
console.log(video)
```

Get a video by title (or similar title):

```js
const video = await youtube.getVideo('never gonna give you up')
console.log(video)
```

Search videos:

```js
const search = await youtube.searchVideos('never gonna give you up')
console.log(search.items.map(v => v.title).join('\n')) // titles of 50 beautiful videos
```

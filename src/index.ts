import { Video, YouTube } from 'popyt'
import chalk from 'chalk'
import 'dotenv/config'

checkForKey();

const youtube = new YouTube(process.env.YOUTUBE_API_KEY);

run();

async function run() {
  let video;
  let search;

  const title = "Carl Wheezer - Never Gonna Give You Up";

  logQuery(`Fetching title "${title}"`);
  video = await youtube.getVideo(title);
  logResult(videoToString(video)); // search results have no views

  const url = "https://youtube.com/watch?v=AyOqGRjVtls";

  logQuery(`Fetching URL [${url}]`);
  video = await youtube.getVideo(url);
  logResult(videoToString(video));

  const id = "dQw4w9WgXcQ";

  logQuery(`Fetching ID ${id}`);
  video = await youtube.getVideo(id);
  logResult(videoToString(video));

  const searchTerm = "never gonna give you up parody";

  logQuery(`Searching for "${searchTerm}"`);
  search = await youtube.searchVideos(searchTerm, {
    pageOptions: { maxPerPage: 10 },
  });
  logResult(search.items.map((v) => `- ${v.title}`).join("\n"));

  process.exit(0);
}

function videoToString(video: Video) {
  return `${chalk.bold.greenBright("Title:")} ${video.title}
${chalk.bold.greenBright("Description:")} ${video.description.slice(0, 64)}...
${chalk.bold.greenBright("Views:")} ${video.views}`;
}

function logResult(result: string) {
  console.log(`Result:\n${chalk.bgBlue(result)}`);
}

function logQuery(query: string) {
  process.stdout.write(`\n${chalk.bgBlackBright(`${query}...`)} `);
}

function checkForKey() {
  if (process.env.YOUTUBE_API_KEY === undefined ||
      process.env.YOUTUBE_API_KEY === 'EXAMPLE_API_KEY') {
    console.error(
      chalk.bgRed(
        `\nYou are missing a YouTube API key.
Learn how to generate a key [here](https://developers.google.com/youtube/v3/getting-started).
Then return here, add the key to .envfile and rename the file to .env.
Finally, restart the instance.`
      )
    );
    process.exit(1);
  }
}

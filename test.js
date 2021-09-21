const slugify = require('slugify');
const ytdl = require('ytdl-core');

const YT_VIDEO = "https://www.youtube.com/watch?v=bKDdT_nyP54";

(async () => {
    try {
        var url = YT_VIDEO;
        if (!ytdl.validateURL(url)) {
            return res.sendStatus(400);
        }
        let info = await ytdl.getInfo(url);
        const title = slugify(info.videoDetails.title, {
            replacement: '-',
            remove: /[*+~.()'"!:@]/g,
            lower: true,
            strict: false
        });
        console.log(title);

    } catch (err) {
        console.error(err);
    }
})();

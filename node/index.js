const globby = require('globby');
const exif = require("jpeg-exif");

(async () => {
    const paths = await globby(['img/*']);
    console.log(paths);
    file = paths[0];
    exif.parse(file, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
    //=> ['unicorn', 'rainbow']
})();

// let file = "./img/2.jpeg";

import fs from 'fs';
import { guides } from './src/data'

const dataFilename = './public/data.json'

console.log('Updating data file');

for (const name in guides) {
    const guide = guides[name];

    guide.link = `${guide.link ? guide.link : 'https://mlpds.art/guides/' + name}`;
    if (!guide.tags) {
        guide.tags = [];
    }
}

fs.writeFile(dataFilename, JSON.stringify({
    'guides': guides,
}), function (err) {
    if (err) return console.log(err);
    console.log('Data file updated');
});
This folder contains the source data for MLP characters, locations, and more.

These source files are processed by the scripts here, and turned into the source files the app reads.

## Character steps

1. Go to the [only ponies](https://mlp.fandom.com/wiki/List_of_ponies/full) or [only non-ponies](https://mlp.fandom.com/wiki/List_of_non-pony_characters) list.
2. Sort the list alphabetically, by character name, A to Z. This ensures that the result is sorted in the same way it is in these existing files.
3. Open up the console and run the script in `bookmarklet.js`
4. Right-click on the final object and click Copy Object.
5. Paste it into the relevant data file, and prettify the json in VS Code.
6. Run the `process_characters.py` script to create the final characters data file and grab any missing images.

## Attribution

The characters and character images are collected from the MLP FiM Fandom Wiki and G5 MLP Fandom Wiki and their contributors, and used under CC-BY-SA. Please feel free to use the json files and collection of associated images of these characters under CC-BY-SA as well!!

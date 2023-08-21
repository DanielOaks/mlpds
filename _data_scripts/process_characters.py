#!/bin/env python3
import json
import requests
import os

# change to dir of script
abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)

def download(url, file_name):
    with open(file_name, 'wb') as file:
        response = requests.get(url)
        file.write(response.content)

characters = {}

# start with ponies
with open('sources/characters_ponies.json', 'r') as f:
    new_chars = json.loads(f.read())

for k, v in new_chars.items():
    if k.strip():
        characters[k] = v

# then non-ponies
with open('sources/characters_non_ponies.json', 'r') as f:
    new_chars = json.loads(f.read())

for k, v in new_chars.items():
    if characters.get(k, None) is not None:
        print('character conflict, ignoring non-pony', k, ':', v.get('name'))
    elif k.strip():
        characters[k] = v

# now we can grab images
for k, v in characters.items():
    image_url = v.get('imageURL', None)
    if image_url is not None:
        if '.png' in image_url:
            ext = 'png'
        elif '.jpg' in image_url:
            ext = 'jpg'
        else:
            # skip, probably svg or mangled
            continue
        final_filename = '../public/characters/{}.{}'.format(k, ext)
        characters[k]['imageName'] = '{}.{}'.format(k, ext)

        if not os.path.exists(final_filename):
            print('Downloading image for', v.get('name', k))
            download(image_url, final_filename)

# remove image urls now that we're done with them
for k, v in characters.items():
    try:
        del v['imageURL']
        characters[k] = v
    except KeyError:
        # no image on this character, this is okay
        ...

# write final json file
with open('../src/assets/characters.json', 'w') as f:
    f.write(json.dumps(characters))

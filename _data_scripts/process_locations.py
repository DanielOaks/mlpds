#!/bin/env python3
from slugify import slugify
import json
import yaml
import os

# change to dir of script
abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)

def download(url, file_name):
    with open(file_name, 'wb') as file:
        response = requests.get(url)
        file.write(response.content)

locations = {}

# load the files
with open('sources/locations.yaml', 'r') as f:
    raw_locations = yaml.safe_load(f.read())

# load the locations
for series, info in raw_locations['locations'].items():
    for place, sub_places in info.items():
        for sub_place in sub_places:
            slug = slugify('-'.join([series, place, sub_place]))

            while locations.get(slug, None) is not None:
                slug += '-1'

            locations[slug] = {
                'series': series,
                'place': place,
                'subPlace': sub_place,
            }

            # todo: add imageName if it exists

# write final json file
with open('../src/assets/locations.json', 'w') as f:
    f.write(json.dumps(locations, indent=2))

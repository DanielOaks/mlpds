(function() {
    // parts of names to remove, done before checking the onlyAllow list
    const removeParts = [
        'Determined Shopper',
        'specify',
        'dubious',
    ]

    // if a name appears here, only allow one version of this pony
    const onlyAllow = {
        'Sunny Starscout': {
            kind: 'earth',
        },
        'Cloud Chaser': {
            group: 'mare',
        },
        'Amethyst Star': {
            kind: 'unicorn',
        },
        'Apple Bloom': {
            group: 'filly',
        },
        'Applejack': {
            group: 'mare',
            firstSeason: '1',
        },
        'Diamond Tiara': {
            group: 'filly',
        },
        'Fluttershy': {
            group: 'mare',
            firstSeason: '1',
        },
        'Granny Smith': {
            firstSeason: '1',
        },
        'Lemon Hearts': {
            kind: 'unicorn',
        },
        'Lyra Heartstrings': {
            kind: 'unicorn',
            firstSeason: '1',
        },
        'Minuette': {
            kind: 'unicorn',
            firstSeason: '1',
        },
        'Pinkie Pie': {
            group: 'mare',
            firstSeason: '1',
        },
        'Rainbow Dash': {
            group: 'mare',
            firstSeason: '1',
        },
        'Rarity': {
            group: 'mare',
            firstSeason: '1',
        },
        'Scootaloo': {
            group: 'filly',
        },
        'Silver Spoon': {
            group: 'filly',
        },
        'Starlight Glimmer': {
            kind: 'unicorn',
            group: 'mare',
            firstSeason: '5',
        },
        'Twilight Sparkle': {
            kind: 'unicorn',
            group: 'mare',
            firstSeason: '1',
        },
        'Bulk Biceps': {
            kind: 'pegasus',
        },
        'Flash Sentry': {
            kind: 'pegasus',
            firstSeason: 'M1',
        },
        'Cloud Kicker': {
            kind: 'pegasus',
            firstSeason: 'M1',
        },
        'Discord': {
            kind: 'draconequus',
        },
    }

    // https://dev.to/martinkr/1-line-of-code-how-to-create-an-url-slug-from-a-string-17gf
    const toURLSlug = str => str.trim().toLowerCase().replace(/[\[\]?.,\/#!$%\^&\*;:{}=\"\-_~()…–—·'’\s]/g, "-").replace(/[\-]{2,}/g, "-").replace(/^[\-]/g, "").replace(/[\-]$/g, "");

    var ponies = {};
    $('.listofponies tbody tr').each(function () {
        var newPony = {
            name: this.children[0].innerText,
            kind: this.children[1]?.children[1]?.attributes.title?.textContent,
            group: this.children[2]?.children[1]?.attributes.title?.textContent,
            coatColour: this.children[3]?.style['background-color'],
            maneColour: this.children[4]?.style['background-color'],
            eyeColour: this.children[5]?.style['background-color'],
            firstSeason: this.children[6].innerText.split('\n')[0],
            imageURL: this.children[8]?.children[0]?.attributes.href?.textContent,
        }

        if (newPony.kind === undefined) {
            newPony.kind = this.children[1].innerText.toLowerCase()
        }
        if (newPony.group === undefined) {
            newPony.group = this.children[2].innerText.toLowerCase()
        }

        // console.log(newPony.name, newPony.kind, newPony.group, newPony.firstSeason)

        if (newPony.name === "​[​specify​]​") {
            return
        }

        if (newPony.name === 'Twilight Sparkle' && newPony.kind === 'alicorn' && newPony.group === 'mare') {
            newPony.name = 'Princess Twilight Sparkle'
        }
        if (newPony.name === 'Yona' && newPony.kind === 'earth') {
            newPony.name = 'Pony Yona'
        }

        const newNameParts = []
        newPony.name.split('\n').forEach((namePart) => {
            var keep = true
            removeParts.forEach((restrictedPart) => {
                if (namePart.includes(restrictedPart)) {
                    keep = false
                }
            })
            if (keep) {
                newNameParts.push(namePart)
            }
        })
        newPony.name = newNameParts.join('\n')

        if (onlyAllow[newPony.name]) {
            if (onlyAllow[newPony.name].kind && newPony.kind != onlyAllow[newPony.name].kind) {
                return
            }
            if (onlyAllow[newPony.name].group && newPony.group != onlyAllow[newPony.name].group) {
                return
            }
            if (onlyAllow[newPony.name].firstSeason && newPony.firstSeason != onlyAllow[newPony.name].firstSeason) {
                return
            }
        }

        const slug = toURLSlug(newPony.name)

        if (ponies[slug] && ponies[slug].firstSeason < newPony.firstSeason) {
            console.log('newer character already exists:', newPony.name, newPony.kind, newPony.group, newPony.firstSeason)
            return
        }

        ponies[slug] = newPony;
    });
    console.log(ponies);
})();

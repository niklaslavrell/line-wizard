# Line Wizard

[![Netlify Status](https://api.netlify.com/api/v1/badges/0e497dd0-fcf7-41b0-b3a6-4221c8de4c17/deploy-status)](https://app.netlify.com/sites/linewizard/deploys)

🧙‍♂️ **[https://www.linewizard.club](https://www.linewizard.club)**

> Clean Line Breaks on Your Instagram Posts with the Line Wizard

### Mentions

- [teknifik.se: Instagram: alla dolda funktioner och hacks du borde känna till](https://teknifik.se/2017/03/instagram-stories-dolda-funktioner-och-hacks/)
- [quantummarketer.com: How to Add Spaces & Line Breaks to Your Instagram Bio & Captions](https://quantummarketer.com/add-spaces-line-breaks-bio-captions-instagram/)
- [ghostfire.io: Having Trouble Making Line Breaks on Instagram in 2020?](https://ghostfire.io/having-trouble-making-line-breaks-on-instagram-in-2020/)
- [lenadahlin.se: Smarta digitala verktyg](https://www.lenadahlin.se/smarta-digitala-verktyg/)
- [everway.se: Radbyte i inläggstexten på Instagram](https://www.everway.se/2020/06/30/radbyte-i-texten-pa-instagram/)

## Development

1. Install the node dependencies

   ```bash
   # install the node dependencies
   yarn
   ```

2. Run in development mode

   ```bash
   # run in development mode
   yarn start
   ```

3. Run tests
   ```bash
   # run the tests
   yarn test
   ```

## Deploy

Push to `master` and Netlify automatically deploys the latest changes to production

## Solution

_Currently in use_

1. **Invisible Separator**

   Put a _Invisible Separator_ in front of any line break, like `string.replace(/(?:\r\n|\r|\n)/g, '\u2063\n')`

   Used by:

   - http://apps4lifehost.com/Instagram/CaptionMaker.html

   Reference:

   - Decimal Code: 8291
   - Hex Code: 2063
   - http://www.codetable.net/decimal/8291

2. **Braille Pattern Blank**

   Put a bunch of _Braille Pattern Blank_ in the empty lines to fill them up with invinsible characters

   Used by:

   - http://instablank.com/ (17 characters)
   - Used by Krista (9 characters)

   Reference:

   - Decimal Code: 10240
   - Hex Code: 2800
   - http://www.codetable.net/decimal/10240

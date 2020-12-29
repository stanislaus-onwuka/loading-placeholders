# Simple Loading Placeholders
Simple loading placeholders are here to provide better user experience while a page is in its loading state.

## Installation
Using NPM

```bash
npm install loading-placeholders
```

## Usage
   ```
    import React from 'react';
    import Placeholders from 'loading-placeholder';
    //This will make it more custom

    function App() {
        const loadingState = 0; //Can be network status

        return (
            {
                loadingState !== 200 
                ?
                    <Placeholders height="100px" width="80px" br="15px" n=10 margin="0.8rem" />
                :
                    <Component/>
                    //Whatever is supposed to show
            }
            
        );
    }

    export default App;
   ```
### The props required are :
    height =The desired height in any unit
    width = The desired width in any unit
    br = The desired border radius
    n = Number of desired placeholders (in whole numbers)
    margin = The desired margin for each placeholder





## Features 
- Built with plain React and CSS
    > No need to install extra dependencies 
- Lightweight and slightly responsive
    > Since it is built with CSS, the loading time is next to zero 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://github.com/stanislaus-onwuka/loading-placeholders/blob/master/LICENSE)



import React from 'react';

import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//export default IconButtonExampleSimple;

class App extends React.Component {
    render() {
        const IconButtonExampleSimple = () => (
            <div>
              <IconButton iconClassName="muidocs-icon-custom-github" />
              <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
            </div>
        );
        return (
            <div>
            Hello World!!!
             <MuiThemeProvider>
     <IconButtonExampleSimple />
  </MuiThemeProvider>
         
         </div>
        );
    }
}

export default App;

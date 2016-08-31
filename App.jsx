import React from 'react';

import IconButton from 'material-ui/IconButton';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
const customTheme = {
  palette: { 
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.grey400
  }
};

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const theme = getMuiTheme(baseTheme);


//export default IconButtonExampleSimple;

class App extends React.Component {
    render() {
        const IconButtonExampleSimple = () => (
            <div>
            <IconButton> <i className="material-icons" style={{color: 'red'}}>exit_to_app</i></IconButton>
<IconButton iconClassName="material-icons" style={{color: 'red', backgroundColor:'transparent'}} />
<IconButton iconClassName="muidocs-icon-custom-github" style={{color: 'red', backgroundColor:'transparent'}} />
              <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
            </div>
        );
        return (
             <MuiThemeProvider muiTheme={theme} >
             <div>
             this is a test for IconButton in material-ui<br/>
     <IconButtonExampleSimple />
     </div>
  </MuiThemeProvider>
         
        );
    }
}

export default App;

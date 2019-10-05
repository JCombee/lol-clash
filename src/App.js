import React from 'react';
import Summoner from './Summoner'
class App extends React.Component {
  render() {
    return (
      <div className="container m-auto my-4 p-2">
        <Summoner
          ref={(ref) => this.summoner1 = ref}
          onReturn={() => this.summoner2.focus()}
        />
        <Summoner
          ref={(ref) => this.summoner2 = ref}
          onReturn={() => this.summoner3.focus()}
        />
        <Summoner
          ref={(ref) => this.summoner3 = ref}
          onReturn={() => this.summoner4.focus()}
        />
        <Summoner
          ref={(ref) => this.summoner4 = ref}
          onReturn={() => this.summoner5.focus()}
        />
        <Summoner
          ref={(ref) => this.summoner5 = ref}
          onReturn={() => this.summoner1.focus()}
        />
      </div>
    );
  }
}

export default App;

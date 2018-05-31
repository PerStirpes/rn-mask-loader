import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Util } from 'expo';

import Loader from './Loader';

export default class App extends React.Component {
  state = {
    appReady: false,
    rootKey: Math.random(),
  };

  constructor() {
    super();

    this._image = require('./images/white-bg.png');
  }

  componentDidMount() {
    this.resetAnimation();
  }

  resetAnimation() {
    this.setState({
      appReady: false,
      rootKey: Math.random(),
    });

    setTimeout(() => {
      this.setState({
        appReady: true,
      });
    }, 2000);
  }

  render() {
    return (
      <View key={this.state.rootKey} style={styles.root}>
        <Loader
          isLoaded={this.state.appReady}
          imageSource={this._image}
          backgroundStyle={styles.loadingBackgroundStyle}
        >
          <View style={styles.container}>
            <Button
              onPress={() => {
                this.resetAnimation();
              }}
              title="See it again"
            />
          </View>
        </Loader>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 2,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingBackgroundStyle: {
    backgroundColor: 'black',
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AdMobRewarded, AdMobInterstitial } from 'react-native-admob';

export default class App extends Component {
  componentDidMount() {
    AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
    AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/8691691433');

    AdMobInterstitial.addEventListener('adClosed', () => {
      console.log('AdModInterstitial => adClosed');
      AdMobInterstitial.requestAd().catch(error => console.warn(error));
    });
    AdMobInterstitial.addEventListener('adOpened', () =>
      console.log('AdMobInterstitial => adOpened')
    );
    AdMobInterstitial.addEventListener('adLoaded', () =>
      console.log('AdMobInterstitial => adloaded')
    );

    AdMobRewarded.addEventListener('rewarded', reward =>
      console.log('AdMobRewarded => rewarded', reward)
    );
    AdMobRewarded.addEventListener('adLoaded', () => {
      console.log('AdMobRewarded => adLoaded');
    });
    AdMobRewarded.addEventListener('adOpened', () => {
      console.log('AdMobRewarded => adOpened');
    });
    AdMobRewarded.addEventListener('adClosed', () => {
      console.log('AdMobRewarded => adClosed');
      AdMobRewarded.requestAd().catch(error => console.warn(error));
    });

    AdMobInterstitial.requestAd()
      .then(result => console.log(result))
      .catch(error => console.log(error));

    AdMobRewarded.requestAd()
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  showInter() {
    AdMobInterstitial.showAd().catch(error => console.warn(error));
  }

  showRewarded() {
    AdMobRewarded.showAd().catch(error => console.warn(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.showRewarded()}>
          <Text style={styles.welcome}>Show Rewarded Ad</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showInter()}>
          <Text style={styles.welcome}>Show InterStitial Ad</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

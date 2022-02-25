import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function ArticleScreen ({route}) {
  const {article} = route.params;
  console.log(article.url);
  return (
    <SafeAreaView style={styles.container}>
      <WebView
      source={{uri: article.url}}
      />
    </SafeAreaView>
  );
}
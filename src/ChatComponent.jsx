import React from 'react';
import ReactWebChat, {createDirectLine, createCognitiveServicesSpeechServicesPonyfillFactory, createBrowserWebSpeechPonyfillFactory} from 'botframework-webchat';

export const ChatComponent =  () => {
  const directLine = createDirectLine({ token: '8ByhIxvb2YU.oGdQFPcRSfP_f3Zq74860AS0FWAm4vpAEgSUDeTEkdo' });
  /* const webSpeechPonyfillFactory = createCognitiveServicesSpeechServicesPonyfillFactory( {
    subscriptionKey: 'o3eqTJWTggU.ewKbYHlfj4SYu1nGCJYrZlbpbgiYXIlzN3n_USNd198', region: 'westus', textNormalization: 'lexical' }) */
  const webSpeechPonyfillFactory=createBrowserWebSpeechPonyfillFactory();
  return (
    <ReactWebChat directLine={ directLine } userID='' webSpeechPonyfillFactory={webSpeechPonyfillFactory}/>
  );
  
} 
import React from 'react';
import EmojiPicker from 'rn-emoji-keyboard';
import {KeyboardProps} from 'rn-emoji-keyboard/lib/typescript/contexts/KeyboardContext';

const EmojiKeyboard = ({open, onClose, onEmojiSelected}: KeyboardProps) => {
  return (
    <EmojiPicker
      open={open}
      onClose={onClose}
      onEmojiSelected={onEmojiSelected}
      allowMultipleSelections
      expandable={false}
      theme={{backdrop: 'transparent'}}
    />
  );
};

export default EmojiKeyboard;

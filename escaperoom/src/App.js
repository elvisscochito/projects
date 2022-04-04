import React from 'react';

import Avatar from './components/Avatar';
import Button from './components/Button';
import ImageButton from './components/ImageButton';
import Input from './components/Input';
import Link from './components/Link';
import Table from './components/Table';
import Text from './components/Text';

function App() {
  return (
    <div className="App">

      <Input inputType={"email"} labelText={"Email"} placeholderText={"example@email.com"} />

      <Input inputType={"password"} labelText={"Password"} placeholderText={"type your password"} />

      <Link reference={"google.com"} text={"Sign Up"} />

      <Link reference={"google.com"} text={"Log In"} />

      <Text textCaption={"HELP"} />
      
      <Table />

      <Avatar id={2} username={"username"} />

      <Button classStyle={"button"} buttonText="Button"/>
      <Button classStyle={"button success"} buttonText="Success"/>
      <Button classStyle={"button danger"} buttonText="Danger"/>

      <ImageButton pictureName={"avatar"} caption={"Profile"} />
      <ImageButton pictureName={"leaderboard"} caption={"Leaderboard"} />
      <ImageButton pictureName={"help"} caption={"Help"} />

      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

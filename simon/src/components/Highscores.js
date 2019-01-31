import React from 'react';

import {Label, Form, Divider} from 'semantic-ui-react';

const Highscores = _ => (
    <div>
        <h1>Highscores</h1>
        <div>
        <Label as='a' image>
            <img src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
            Joe
        </Label>
        <Label as='a' image>
            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            Elliot
        </Label>
        <Label as='a' image>
            <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
            Stevie
        </Label>
        </div>
        <div>
            <h1>Enter Highscore</h1>
        <Form>
            <Form.Field>
            <input type='text' placeholder='First name' />
            <Label pointing>Please enter a value</Label>
            </Form.Field>
            <Divider />

            <Form.Field>
            <Label pointing='below'>Please enter a value</Label>
            <input type='text' placeholder='Last Name' />
            </Form.Field>
            <Divider />

        </Form>
        </div>
    </div>
  )

export default Highscores
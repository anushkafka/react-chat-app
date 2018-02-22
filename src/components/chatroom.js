import React, { Component } from "react";
import { Input, Button, Message, Image } from "semantic-ui-react";
import { db } from "./../utility/db";

export default class ChatRoom extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      message: "",
      messages: []
    };
  }
  componentDidMount = () => {
    debugger;
    db
      .database()
      .ref("messages/")
      .on("value", snapshot => {
        const currentMsgs = snapshot.val();
        if (currentMsgs != null) {
          this.setState({
            messages: currentMsgs
          });
        }
      });
  };
  updateMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  submitMessage = () => {
    var nextMsg = {
      id: this.state.messages.length,
      text: this.state.message
    };
    this.setState({
      messages: this.state.messages.concat(nextMsg)
    });

    db
      .database()
      .ref("messages")
      .push(this.inputEl.value);
  };
  render() {
    const currentMsg = this.state.messages.map((msg, i) => {
      return <Message color="teal" content={msg.text} />;
    });

    return (
      <div className="msg-container">
        <div className="display-msg">{currentMsg}</div>
        <div className="submit-msg">
          <Input
            onChange={this.updateMessage}
            icon="comment"
            iconPosition="left"
            placeholder="Type message here..."
          />
          <Button onClick={this.submitMessage} basic color="teal">
            Send
          </Button>
        </div>
      </div>
    );
  }
}

import React from "react";
import ContactCard from "./ContactCard";
import list from "../resources/list"

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
    this._randomContact = this._randomContact.bind(this);
  }
  componentDidMount(){
      this.setState({contacts : list.slice(0,5)}
      )}




  render() {
    // console.log(this.state.contacts.slice(0, 5));
    const mappedContacts = this.state.contacts
      .map((contacts, index) => (
        <ContactCard
          name={contacts.name}
          img={contacts.pictureUrl}
          popularity={contacts.popularity}
          index={index}
          key={index}
        />
      ));

    return (
      <div>
        <h1>Iron Contacts by Dalina & Jason</h1>
        <button onClick={this._randomContact}>Add Random Contact</button>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {mappedContacts}
        </table>

      </div>
    );


  }
  _randomContact() {
      this.state.contacts.push(list[this._generateRandomInt()])
      console.log(this.state.contacts);
    this.setState({
      contacts: this.state.contacts
    })  
    }
    _generateRandomInt() {
        return Math.floor(Math.random() * Math.floor(list.length-5)) + 5
    }
}

export default Application;

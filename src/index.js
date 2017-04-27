import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let contacts =[{name:'Tim Adams',phone:'404-555-1212', email: 'tim.adams@gmail.com',type:'Architect'},{name:'Barney Rubble',phone:'14', email: 'barney_rub@rubble.com',type:'Neighbor'},
              {name:'Great Gazoo',phone:'17', email: 'the-great-one@gmail.com',type:'Zetox'}];

class ContactList extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      phone: '',
      email: '',
      type: '',
      contacts: contacts
    }
  }

  submit(event){
    event.preventDefault();
    if (this.state.name != ''){
      console.log('submiting new contact');
      this.state.contacts.push({
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        type: this.state.type
      });
      this.setState({
        name: '',
        phone: '',
        email: '',
        type: '',
        contacts: this.state.contacts
      })
    }

  class Contact extends React.Component {
    constructor(){
      super();

    }
  }

  }
  sumthangChanged(item,event){
    console.log('changing: ' + item + ' to: ' + event.target.value);
    this.setState({
      [item]:event.target.value
    })

  }

  deleteContact(idx){
    console.log("deleting contact");
    console.log("contacts: " + this.state.contacts);
    console.log('before size: ' + this.state.contacts.length);
    let contactstmp =  this.state.contacts;
    contactstmp.splice(idx,1);
    console.log('after size: ' + contactstmp.length);
    console.log("contacts: " + contactstmp);
    this.setState({
      contacts: contactstmp
    })
  }

  render(){

    return (
      <div className="outerContainer">
        <div className="formContainer">
          <form className="theForm form-group" onSubmit={(event)=>this.submit(event)} method="post">
            <label for="name">Name</label>
            <input className="form-control" type="text" onChange={(event) => this.sumthangChanged('name',event)} name="name" value={this.state.name}/>
            <label for="phone">Phone</label>
            <input className="form-control" type="text" onChange={(event) => this.sumthangChanged('phone',event)} name="phone" value={this.state.phone}/>
            <label for="email">Email</label>
            <input className="form-control"  type="text" onChange={(event) => this.sumthangChanged('email',event)} name="email" value={this.state.email}/>
            <label for="type">Type</label>
            <select className="form-control" onChange={(event) => this.sumthangChanged('type',event)} name="type" value={this.state.type}>
              <option value="friend">Friend</option>
              <option value="coworker">Co-worker</option>
              <option value="daughter">Daughter</option>
              <option value="son">Son</option>
              <option value="neighbor">Neighbor</option>
            </select>
            <input className="addButton" type="submit"/>
          </form>
        </div>
        <div>Contacts</div>
        <div className="contacts">
            {this.state.contacts.map((contact,idx) => <div className="contactBox"><div className="details"><ul> <li>{contact['name']} - {contact['type']}</li>
            <li>{contact['phone']}</li>
            <li>{contact['email']}</li></ul></div><div onClick={() => this.deleteContact(idx)} className="deleteButton">X</div></div>)}

        </div>
      </div>
    )
  }

}

ReactDOM.render(
  <ContactList contacts={contacts} />,
  document.getElementById('root')
);

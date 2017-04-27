import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TransitionGroup from 'react-transition-group/CSSTransitionGroup';

let contacts =[{name:'Tim Adams',phone:'404-555-1212', email: 'tim.adams@gmail.com',type:'Friend'},{name:'Barney Rubble',phone:'14', email: 'barney_rub@rubble.com',type:'Neighbor'},
              {name:'Great Gazoo',phone:'17', email: 'the-great-one@gmail.com',type:'Alien'}];

class ContactList extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      phone: '',
      email: '',
      type: '',
      contacts: contacts,
      mode: 'input',
      contactIndex: ''
    }
  }

  submit(event){
    event.preventDefault();
    if (this.state.name !== ''){
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
    if (idx !== this.state.contactIndex) {
      let contactstmp =  this.state.contacts;
      contactstmp.splice(idx,1);
      this.setState({
        contacts: contactstmp
      });
    } else {
      let contactstmp =  this.state.contacts;
      contactstmp.splice(idx,1);
      this.setState({
        contacts: contactstmp,
        name: '',
        phone: '',
        email: '',
        mode: 'input',
        contactIndex: ''
      });
    }

  }

  saveEdit(){
    console.log("saving Edit");
    let contactstmp = this.state.contacts;
    let idx = this.state.contactIndex;
    contactstmp[idx]['name']=this.state.name;
    contactstmp[idx]['phone']=this.state.phone;
    contactstmp[idx]['email']=this.state.email;
    contactstmp[idx]['type']=this.state.type;
    this.setState({
      contacts: contactstmp,
      name: '',
      phone: '',
      email: '',
      mode: 'input'
    })

  }

  cancelEdit(){
    console.log("cancelling Edit");
    this.setState({
      name: '',
      phone:  '',
      email:  '',
      type: '',
      mode: 'input',
      contactIndex: ''
    })
  }

  editContact(idx){
    console.log("in edit");
    let contacttmp =  this.state.contacts[idx];
    this.setState({
      name: contacttmp['name'],
      phone: contacttmp['phone'],
      email: contacttmp['email'],
      type: contacttmp['type'],
      mode: 'edit',
      contactIndex: idx
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
              <option value="Friend">Friend</option>
              <option value="Co-worker">Co-worker</option>
              <option value="Daughter">Daughter</option>
              <option value="Son">Son</option>
              <option value="Neighbor">Neighbor</option>
              <option value="Parent">Parent</option>
              <option value="Alien">Alien</option>
            </select>
            {this.state.mode ==='input' ? <button className="addButton" type="submit">Submit</button>: null}
            {this.state.mode ==='edit' ? <button onClick={()=>this.saveEdit()} className="saveEditButton" type="button">Save</button>:null}
            {this.state.mode ==='edit' ? <button onClick={()=>this.cancelEdit()} className="cancelEditButton" type="button">Cancel</button>: null}
          </form>
        </div>
        <div>Contacts</div>
        <div className="contacts">
            {this.state.contacts.map((contact,idx) => <div className="contactBox">
              <div className='edit'>
                <img className="editIcon" onClick={()=>this.editContact(idx)} src="/images/Edit.png"/>
              </div>
              <div className="details">
                <ul>
                  <li>{contact['name']} - {contact['type']}</li>
                  <li>{contact['phone']}</li>
                  <li>{contact['email']}</li>
                </ul>
              </div>
              <div onClick={() => this.deleteContact(idx)} className="deleteButton">X</div>
            </div>)}

        </div>
      </div>
    )
  }

}

ReactDOM.render(
  <ContactList contacts={contacts} />,
  document.getElementById('root')
);

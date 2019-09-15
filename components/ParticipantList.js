import React from "react";
import {ListView} from "react-native";
import {ParticipantCard} from "./ParticipantCard";
import {AsyncStorage} from 'react-native';

export class ParticipantList extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([]),
      selectedUsers: []
    }
  };

  componentDidMount() {  
    AsyncStorage.getItem("Contacts").then((val)=>{
      var contacts =[];
      if(val!=undefined||val!=null)
      {
        console.log(val);
        var contactStr = val.split(";");
        contactStr.forEach(contact => {
          contacts.push({name:contact.split(":")[0], address:contact.split(":")[1]})
        });
      }
      this.setState({dataSource:ds.cloneWithRows(contacts)});
    });
    
    //var values = await AsyncStorage.getItem();
}

  changeParticipantSelection = (id, isSelected) => {
    let newUsers = this.state.selectedUsers ? this.state.selectedUsers  : [];
    if (isSelected) {
      newUsers.push({id: id, isSelected: isSelected, name: testUsers[id]});
    } else {
      newUsers = newUsers.filter(user => id !== user.id)
    }
    console.log(newUsers.length);
    this.setState({selectedUsers: newUsers});
    this.props.updateParentData(newUsers);
  };


  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={
          (rowData, _, rowId) =>
            <ParticipantCard name={rowData.name} id={rowId.address} updateParent={this.changeParticipantSelection} />}
      />
    )
  }
}

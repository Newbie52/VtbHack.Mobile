import React from "react";
import {ListView} from "react-native";
import {ParticipantCard} from "./ParticipantCard";

const testUsers = ['Джсон стетхем', 'Иксмэль сталоне','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем','Джсон стетхем'];

export class ParticipantList extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(testUsers),
      selectedUsers: []
    }
  };

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
            <ParticipantCard name={rowData} id={rowId} updateParent={this.changeParticipantSelection} />}
      />
    )
  }
}

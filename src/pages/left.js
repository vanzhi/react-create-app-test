import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

class Left extends Component {
    render() {
        this.state = {
            open: true,
        };

        this.handleToggle = () => {
            this.setState({
                open: !this.state.open,
            });
        };

        this.handleNestedListToggle = (item) => {
            this.setState({
                open: item.state.open,
            });
        };


        return (
            <List className="sidebar">
                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} className="menu-active" />
                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                <ListItem
                primaryText     ="Inbox"
                leftIcon        ={<ContentInbox />}
                initiallyOpen   ={true}
                primaryTogglesNestedList={true}
                nestedItems     ={[
                    <ListItem
                    key         ={1}
                    primaryText ="Starred"
                    leftIcon    ={<ActionGrade />}
                    />,
                    <ListItem
                    key         ={2}
                    primaryText ="Sent Mail"
                    leftIcon    ={<ContentSend />}
                    disabled    ={false}
                    primaryTogglesNestedList={true}
                    nestedItems ={[
                        <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                    ]}
                    />,
                    <ListItem
                    key         ={3}
                    primaryText ="Inbox"
                    leftIcon    ={<ContentInbox />}
                    primaryTogglesNestedList={true}
                    nestedItems ={[
                        <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                    ]}
                    />,
                ]}
                />
            </List>
        )
    }
}
export default Left;
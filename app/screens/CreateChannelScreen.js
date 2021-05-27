import React from 'react';

import ChannelContactChooser from 'components/ChannelContactChooser';
import { ChannelInfo } from 'components/ChannelInfo';

export default class CreateChannelScreen extends React.Component {
	state = {
		selectedContacts: [],
		isBroadCast: false,
		page: 'contact',
	};

	render() {
		const { page, selectedContacts, isBroadCast } = this.state;
		if (page === 'contact') {
			return (
				<ChannelContactChooser
					navigation={this.props.navigation}
					onBack={this._onBack}
					onSubmit={this._onSelect}
				/>
			);
		}
		return (
			<ChannelInfo
				contacts={selectedContacts}
				isBroadCast={isBroadCast}
				navigation={this.props.navigation}
				onBack={() => this.setState({ page: 'contact' })}
			/>
		);
	}

	_onBack = () => {
		this.props.navigation.goBack();
	};
	_onSelect = (contacts, isBroadCast) => {
		this.setState({
			selectedContacts: contacts,
			isBroadCast: isBroadCast,
			page: 'info',
		});
	};
}

import React, { useCallback, useEffect } from 'react';
import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { state } from 'reactive.macro';
import css from 'css-to-rn.macro';
import ImagePicker from 'react-native-image-picker';

import * as Qiscus from 'qiscus';
import toast from 'utils/toast';
import Toolbar from 'components/Toolbar';
import ContactItem from 'components/ContactItem';

function _Toolbar(props) {
	return (
		<Toolbar
			title="Channel Info"
			renderLeftButton={() => (
				<TouchableOpacity style={styles.toolbarBtn} onPress={props.onBack}>
					<Image style={styles.icon} source={require('assets/ic_back.png')} />
				</TouchableOpacity>
			)}
			renderRightButton={() => (
				<TouchableOpacity
					style={styles.toolbarBtn}
					onPress={props.onCreateGroup}>
					<Image style={styles.icon} source={require('assets/ic_check.png')} />
				</TouchableOpacity>
			)}
		/>
	);
}

export default function _ChannelInfo(props) {
	const name = state(null);
	const avatarUrl = state('https://via.placeholder.com/200x200');
	const createGroup = useCallback(() => {
		const userIds = props.contacts.map((it) => it.email);
		const isBroadCastGroup = props.isBroadCast;
		const adminGroup = Qiscus.qiscus?.userData?.email;
		Qiscus.qiscus
			.createGroupRoom(userIds, name, {
				avatarURL: avatarUrl,
				isBroadCast: isBroadCastGroup ? 'broadcast' : 'not-broadcast',
				admin: adminGroup,
			})
			.then((room) => {
				props.navigation.replace('Chat', {
					roomId: room.id,
				});
				console.log('callback', room);
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, [avatarUrl, name, props.contacts, props.isBroadCast, props.navigation]);
	const onSelectImage = useCallback(() => {
		ImagePicker.showImagePicker(
			{
				title: 'Select image',
				storageOptions: {
					skipBackup: true,
					path: 'images',
				},
			},
			(resp) => {
				if (resp.didCancel || resp.error) {
					return console.log('canceled', resp.error);
				}

				toast('Uploading image...');
				const opts = { uri: resp.uri, name: resp.fileName, type: resp.type };
				Qiscus.qiscus.upload(opts, (error, progress, fileUrl) => {
					if (error != null) {
						return console.log('error while upload', error);
					}
					if (fileUrl != null) {
						avatarUrl = fileUrl;
					}
				});
			}
		);
	});
	const onBack = useCallback(() => {
		props.navigation.goBack();
	});

	useEffect(() => console.log(avatarUrl), [avatarUrl]);

	return (
		<View style={styles.container}>
			<_Toolbar onCreateGroup={createGroup} onBack={onBack} />
			<View style={styles.groupInfoContainer}>
				<View style={styles.avatarContainer}>
					<Image style={styles.avatarPreview} source={{ uri: avatarUrl }} />
					<TouchableWithoutFeedback
						style={styles.avatarPickerBtn}
						onPress={onSelectImage}>
						<Image
							style={[styles.icon, styles.iconAvatarPicker]}
							source={require('assets/ic_image_attachment.png')}
						/>
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.groupNameContainer}>
					<Text style={styles.groupNameLabel}>Broadcast Name</Text>
					<TextInput
						style={styles.groupNameInput}
						placeholder="Broadcast name"
						onChangeText={(text) => (name = text)}
					/>
				</View>
			</View>
			<View style={styles.participantListContainer}>
				<View style={styles.participantsHeader}>
					<Text style={styles.participantsHeaderText}>Participants</Text>
				</View>
				<FlatList
					style={styles.participantList}
					initialNumToRender={10}
					keyExtractor={(item) => `${item.id}`}
					data={props.contacts}
					renderItem={(data) => (
						<ContactItem
							contact={data.item}
							renderButton={() => (
								<TouchableWithoutFeedback
									style={styles.removeBtn}
									onPress={() => props.onRemove(data.item)}>
									<Image
										style={[styles.icon, styles.selected]}
										source={require('assets/delete.png')}
									/>
								</TouchableWithoutFeedback>
							)}
						/>
					)}
				/>
			</View>
		</View>
	);
}

export class ChannelInfo extends React.Component {
	state = {
		avatarURL: null,
		name: null,
	};

	get selectedContacts() {
		return this.props.contacts;
	}

	get isGroupBroadCast() {
		return this.props.isBroadCast;
	}

	render() {
		return (
			<View style={styles.container}>
				<Toolbar
					title="Broadcast Info"
					renderLeftButton={() => (
						<TouchableOpacity
							style={styles.toolbarBtn}
							onPress={() => this.props.onBack()}>
							<Image
								style={styles.icon}
								source={require('assets/ic_back.png')}
							/>
						</TouchableOpacity>
					)}
					renderRightButton={() => (
						<TouchableOpacity
							style={styles.toolbarBtn}
							onPress={this._createGroup}>
							<Image
								style={styles.icon}
								source={require('assets/ic_check.png')}
							/>
						</TouchableOpacity>
					)}
				/>

				<View style={styles.groupInfoContainer}>
					<View style={styles.avatarContainer}>
						<Image
							style={styles.avatarPreview}
							source={{ uri: 'https://via.placeholder.com/200x200' }}
						/>
						<TouchableWithoutFeedback
							style={styles.avatarPickerBtn}
							onPress={this._onSelectImage}>
							<Image
								style={[styles.icon, styles.iconAvatarPicker]}
								source={require('assets/ic_image_attachment.png')}
							/>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.groupNameContainer}>
						<Text style={styles.groupNameLabel}>Broadcast Name</Text>
						<TextInput
							style={styles.groupNameInput}
							placeholder="Broadcast name"
							onChangeText={(text) => this.setState({ name: text })}
						/>
					</View>
				</View>
				<View style={styles.participantListContainer}>
					<View style={styles.participantsHeader}>
						<Text style={styles.participantsHeaderText}>Participants</Text>
					</View>
					<FlatList
						style={styles.participantList}
						initialNumToRender={10}
						keyExtractor={(item) => `${item.id}`}
						data={this.selectedContacts}
						renderItem={(data) => (
							<ContactItem
								contact={data.item}
								renderButton={() => (
									<TouchableWithoutFeedback
										style={styles.removeBtn}
										onPress={() => this._onRemoveContact(data.item)}>
										<Image
											style={[styles.icon, styles.selected]}
											source={require('assets/delete.png')}
										/>
									</TouchableWithoutFeedback>
								)}
							/>
						)}
					/>
				</View>
			</View>
		);
	}

	_onSelectImage = () => {};

	_onRemoveContact = (contact) => {
		this.props.onRemove(contact);
	};
	_createGroup = () => {
		const name = this.state.name;
		const userIds = this.props.contacts.map((it) => it.email);
		const isBroadCast = this.props.isBroadCast;
		const adminGroup = Qiscus.qiscus?.userData?.email;
		Qiscus.qiscus
			.createGroupRoom(name, userIds, {
				isBroadCast: isBroadCast,
				admin: adminGroup,
			})
			.then((room) => {
				this.props.navigation.replace('Chat', {
					roomId: room.id,
				});
				console.log('not call', room);
			})
			.catch((error) => {
				console.log('error', error);
			});
	};
}

const styles = StyleSheet.create(css`
	.groupInfoContainer {
		flex: 0 0 100px;
		display: flex;
		flex-direction: row;
	}
	.avatarContainer {
		flex: 0 0 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.avatarPreview {
		height: 64px;
		width: 64px;
		border-radius: 50px;
		position: absolute;
	}
	.avatarPickerBtn {
		position: absolute;
		height: 64px;
		width: 64px;
		border-radius: 50px;
		/* background-color: rgba(0,0,0,0.3); */
		background-color: #333;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.groupNameContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
		margin-right: 15px;
	}
	.groupNameLabel {
		font-weight: 600;
		font-size: 10px;
		text-transform: uppercase;
		color: #979797;
	}
	.groupNameInput {
		padding: 10px 5px;
		border-bottom-width: 1px;
		border-bottom-color: #666;
	}

	.container {
		position: absolute;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.participantListContainer {
		flex: 1;
		display: flex;
		background: white;
		overflow: hidden;
	}
	.participantsHeader {
		flex: 0;
		flex-basis: 45px;
		flex-direction: row;
		height: 45px;
		background: #fafafa;
		align-items: flex-end;
		display: flex;
		padding: 10px;
	}
	.participantsHeaderText {
		font-weight: 600;
		font-size: 10px;
		text-transform: uppercase;
		color: #666;
	}
	.participantList {
		padding: 10px;
	}
	.removeBtn {
		flex: 0;
		flex-basis: 30px;
		width: 30px;
		height: 30px;
		padding: 10px;
		background-color: #333;
	}
`);

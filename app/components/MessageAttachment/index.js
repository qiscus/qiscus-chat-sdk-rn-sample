import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from "./style";
import {isImageFile, isVideoFile} from "../../qiscus";

const MessageAttachment = (props) => {
    const {item, onDownload, hideDownloadButton} = props;
    const {url, file_name} = item.payload.content;
    if (isImageFile(url) || isVideoFile(url)) return null;
    return (
        <>
            <View style={[styles.content, (hideDownloadButton) && {
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 5,
                paddingBottom: 5
            }]}>
                <Image
                    source={require('../../../assets/ic_file_attachment.png')}
                    style={[styles.icon, (hideDownloadButton) && {width: 10, height: 13, marginRight: 5}]}
                />
                <Text numberOfLines={1} style={{width: 150, fontSize: 12, color: '#7d7d7d'}}>{file_name}</Text>
                {(!hideDownloadButton) && <TouchableOpacity onPress={() => {
                    if (onDownload) onDownload(url, file_name);
                }}>
                    <Image
                        source={require('../../../assets/ic_download.png')}
                        style={[styles.download, (hideDownloadButton) && {width: 15, height: 15}]}
                    />
                </TouchableOpacity>}
            </View>
        </>
    );
};

export default MessageAttachment;

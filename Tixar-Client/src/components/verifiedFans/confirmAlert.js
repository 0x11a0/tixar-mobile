import {React} from 'react';
import {Alert} from 'react-native';

export default ConfirmAlert = ({title, message, positiveFunction}) => {
	Alert.alert(
		title,
		message,
		[
			{
				text: 'Confirm',
				onPress: () => {
					positiveFunction();
				},
				style: 'default',	
			},
			{
				text: 'Cancel',
			onPress: () => {
				console.log('cancelled request');
				},
				style: 'cancel',	
			},
		],
	{
		cancelable: true
	});
}

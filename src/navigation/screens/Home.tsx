import { useNavigation } from '@react-navigation/native'
import CommText from 'components/atoms/CommText'
import { TouchableOpacity, View } from 'react-native'

export function Home() {
	const navigation = useNavigation()
	return (
		<View className="flex-1 items-center justify-center">
			<TouchableOpacity
				className="rounded-full bg-blue-500 py-2 px-4"
				onPress={() => navigation.navigate('Profile', { user: 'jane' })}
			>
				<CommText className="text-white">Go to jane's profile</CommText>
			</TouchableOpacity>
		</View>
	)
}

import { View, TouchableOpacity } from 'react-native'
import CommText from 'components/atoms/CommText'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from 'libs/types/navigation'
import { memo } from 'react'

/**
 * @description
 * 홈 화면
 */
const Home = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>()
	return (
		<View className="flex-1 items-center justify-center">
			<TouchableOpacity
				className="rounded-full bg-blue-500 py-2 px-4"
				onPress={() => navigation.navigate('Settings')}
			>
				<CommText className="text-white">Go to jane's profile</CommText>
			</TouchableOpacity>
		</View>
	)
}

export default memo(Home)

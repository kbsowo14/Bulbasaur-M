import { View, useWindowDimensions, Image } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from 'libs/types/navigation'
import { memo } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import BulbBlock from 'components/organisms/BulbBlock'

/**
 * @description
 * 홈 화면
 */
const Home = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>()
	const { width, height } = useWindowDimensions()

	return (
		<View className="flex-1 items-center justify-center">
			<View
				className="justify-center items-center bg-[#4FADF5]"
				style={{ width: width, height: height }}
			>
				<BulbBlock />
			</View>
		</View>
	)
}

export default memo(Home)

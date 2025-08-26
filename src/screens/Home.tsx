import { View, useWindowDimensions, Image } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from 'libs/types/navigation'
import { memo } from 'react'

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
				<View className="absolute top-0 justify-center items-center w-full">
					<Image
						source={require('assets/images/cloude.png')}
						className="absolute left-8 top-16 w-[77px] h-[22px]"
					/>
				</View>
			</View>
		</View>
	)
}

export default memo(Home)

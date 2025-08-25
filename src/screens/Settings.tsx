import CommText from 'components/atoms/CommText'
import { memo } from 'react'
import { View } from 'react-native'

/**
 * @description
 * 설정 화면
 */
const Settings = () => {
	return (
		<View className="flex-1 items-center justify-center">
			<CommText>Settings Screen</CommText>
		</View>
	)
}
export default memo(Settings)

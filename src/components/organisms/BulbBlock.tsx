import { Image, useWindowDimensions, View } from 'react-native'
import { memo } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const BulbBlock = () => {
	const { width, height } = useWindowDimensions()

	const CENTER_Y = height / 2

	return (
		<View
			className="absolute items-center"
			style={{
				bottom: 160,
			}}
		>
			{/* Land Bottom Area Gradient */}
			<LinearGradient
				colors={['#97532e', '#5f3127']}
				start={{ x: 1, y: 0 }}
				end={{ x: 1, y: 1 }}
				className="absolute top-[24px] border-x-[1px] border-[#5f3127]"
				style={{
					width: 67,
					height: CENTER_Y || 0,
				}}
			/>

			{/* Land Block */}
			<Image source={require('assets/images/land-block-01.png')} />

			{/* Center Line */}
			<View
				className="absolute top-[32px] border-r-[1px] border-[#5f3127]"
				style={{
					width: 1,
					height: CENTER_Y || 0,
				}}
			/>

			{/* Bulbmon */}
			<Image
				source={require('assets/images/bulbmon-01-stand.gif')}
				className="absolute bottom-[16px]"
			/>
		</View>
	)
}

export default memo(BulbBlock)

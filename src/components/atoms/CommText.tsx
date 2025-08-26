import { Text, TextProps } from 'react-native'
import { memo, ReactNode } from 'react'

interface CommTextProps extends TextProps {
	children: ReactNode
	minFontSize?: number
	maxFontSize?: number
}

const CommText = ({
	children,
	minFontSize = 1,
	maxFontSize = 1.2, // 사용자 설정 폰트사이즈에 레이아웃 깨짐 영향이 심한 경우, 0 사용
	...args
}: CommTextProps) => {
	return (
		<Text
			allowFontScaling={false}
			minimumFontScale={minFontSize}
			maxFontSizeMultiplier={maxFontSize}
			className="text-gray-800 text-base font-dunggeunmo"
			{...args}
		>
			{children}
		</Text>
	)
}

export default memo(CommText)

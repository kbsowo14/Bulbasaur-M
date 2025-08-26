import { memo } from 'react'
import { Image, ImageProps } from 'react-native'

/**
 * @description
 * 공통 이미지 컴포넌트
 */
interface CommImageProps extends ImageProps {
	source: ImageProps['source']
}

const CommImage = ({ source, ...args }: CommImageProps) => {
	return <Image source={source} {...args} />
}

export default memo(CommImage)

import { Assets as NavigationAssets } from '@react-navigation/elements'
import { NavigationContainer } from '@react-navigation/native'
import { Asset } from 'expo-asset'
import * as SplashScreen from 'expo-splash-screen'
import MainNavigator from 'navigation/MainNavigator'
import { useCallback, useEffect, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

Asset.loadAsync([
	...NavigationAssets,
	require('./assets/newspaper.png'),
	require('./assets/bell.png'),
])

SplashScreen.preventAutoHideAsync()

/**
 * @description
 * 앱 진입점
 */
export function App() {
	const [isReady, setIsReady] = useState(false)

	/**
	 * @description
	 * 레이아웃 루트 뷰 준비 완료 후 스플래시 화면 숨기기
	 */
	const onLayoutRootView = useCallback(async () => {
		if (isReady) {
			await SplashScreen.hideAsync()
		}
	}, [isReady])

	/**
	 * @description
	 * 앱 준비 작업
	 */
	const prepare = async () => {
		try {
			// 여기서 필요한 초기화 작업들 수행
			// 예: 폰트 로딩, API 호출, AsyncStorage 읽기 등
		} catch (e) {
			console.warn(e)
		} finally {
			setIsReady(true)
		}
	}

	/**
	 * @description
	 * 앱 준비 작업 실행
	 */
	useEffect(() => {
		prepare()
	}, [])

	if (!isReady) return null
	return (
		<GestureHandlerRootView className="flex-1">
			<NavigationContainer onReady={onLayoutRootView}>
				<MainNavigator />
			</NavigationContainer>
		</GestureHandlerRootView>
	)
}

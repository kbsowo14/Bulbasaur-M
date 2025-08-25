import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { memo } from 'react'
import Home from 'screens/Home'

const Tab = createBottomTabNavigator()

/**
 * @description
 * 메인 탭
 */
const MainTabs = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Home" component={Home} />
		</Tab.Navigator>
	)
}

export default memo(MainTabs)

# Migration Guide: React (Vite) to React Native (Expo Go)

This guide provides an exact, conflict-free path to recreate your current app as a React Native mobile app that runs in Expo Go for iOS and Android. Follow it step-by-step to avoid errors.

IMPORTANT
- You cannot reuse Vite/React code directly in React Native. RN has a different runtime and component set.
- Radix UI and shadcn/ui are web-only. We replace them with native-safe alternatives.
- Supabase works in Expo with supabase-js and a small polyfill.

1) Create a fresh Expo app
- Prerequisites: Node 18+, Git, iOS Simulator (Xcode) and/or Android Studio (optional for local emulators).
- Install Expo CLI runner (optional): npm i -g expo-cli
- Create app:
  npx create-expo-app@latest shop-reel-connect-rn --template
  Choose: "Blank (TypeScript)"
- Enter project:
  cd shop-reel-connect-rn

2) Install minimal, non-conflicting dependencies
We pick stable, well-supported libraries only.
- Navigation
  npm i @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
  npx expo install react-native-screens react-native-safe-area-context
- Styling (Tailwind-like, RN-safe)
  npm i nativewind
  npx expo install tailwindcss react-native-svg
  npx tailwindcss init
- Icons
  npx expo install @expo/vector-icons
  npm i lucide-react-native
- Gestures/Animations (for carousels/interactions)
  npx expo install react-native-gesture-handler react-native-reanimated
  Add at top of babel.config.js: plugins: ['react-native-reanimated/plugin'] (see step 5)
- Toasts
  npm i react-native-toast-message
- Networking polyfills (for Supabase)
  npm i react-native-url-polyfill react-native-get-random-values
- Supabase
  npm i @supabase/supabase-js
- Charts (replace recharts)
  npm i victory-native
  npx expo install react-native-svg

3) Configure Tailwind (NativeWind)
- tailwind.config.js:
  module.exports = {
    content: [
      './App.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './screens/**/*.{ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          background: '#000000',
          foreground: '#FFFFFF',
          primary: '#FFFFFF',
          muted: '#9CA3AF',
          border: '#1F2937',
        },
      },
    },
    plugins: [],
  }
- Create globals.css (optional) and import in App, or use utility classes inline as shown in examples.

4) Project structure (mirrors your current app)
- app/
  - navigation/
    - RootNavigator.tsx (stack)
    - Tabs.tsx (bottom tabs: Home, Search, Create, Activity, Profile)
  - screens/
    - HomeScreen.tsx (maps to MainFeed)
    - SearchScreen.tsx
    - CreateScreen.tsx
    - ActivityScreen.tsx
    - ProfileScreen.tsx
    - RoleSelectionScreen.tsx
    - VendorDashboardScreen.tsx
    - InfluencerDashboardScreen.tsx
    - AdminPanelScreen.tsx (analytics inside)
    - ChatScreen.tsx
  - components/
    - BottomNav.tsx
    - ReelCard.tsx
    - TrendingCarousel.tsx
    - AIRecommendations.tsx
    - UI primitives you need (Badge, Button wrappers)
  - lib/
    - supabase.ts

5) Configure Reanimated + Expo
- babel.config.js
  module.exports = {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  }
- Add at top of App.tsx (first line):
  import 'react-native-gesture-handler';
  import 'react-native-url-polyfill/auto';
  import 'react-native-get-random-values';

6) Supabase setup (Expo-safe)
- app/lib/supabase.ts
  import 'react-native-url-polyfill/auto'
  import { createClient } from '@supabase/supabase-js'

  const supabaseUrl = '<YOUR_SUPABASE_URL>'
  const supabaseAnonKey = '<YOUR_SUPABASE_ANON_KEY>'
  export const supabase = createClient(supabaseUrl, supabaseAnonKey)

- Secrets: For production, use Expo config (app.json/app.config.ts) + EAS secrets. For local dev, hardcode anon key (publishable) is acceptable, or use process.env via app.config.ts extra.

7) Navigation scaffolding
- app/navigation/RootNavigator.tsx
  import { NavigationContainer } from '@react-navigation/native'
  import { createNativeStackNavigator } from '@react-navigation/native-stack'
  import Tabs from './Tabs'
  import RoleSelectionScreen from '../screens/RoleSelectionScreen'
  const Stack = createNativeStackNavigator()
  export default function RootNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
          {/* Add other modal/stack screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

- app/navigation/Tabs.tsx
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
  import { Home, Search as SearchIcon, Plus, Heart, User } from 'lucide-react-native'
  import HomeScreen from '../screens/HomeScreen'
  import SearchScreen from '../screens/SearchScreen'
  import CreateScreen from '../screens/CreateScreen'
  import ActivityScreen from '../screens/ActivityScreen'
  import ProfileScreen from '../screens/ProfileScreen'

  const Tab = createBottomTabNavigator()
  export default function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000', borderTopColor: '#1F2937' },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#9CA3AF',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => <Home color={color} size={size} /> }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarIcon: ({ color, size }) => <SearchIcon color={color} size={size} /> }} />
        <Tab.Screen name="Create" component={CreateScreen} options={{ tabBarIcon: ({ color, size }) => <Plus color={color} size={size} /> }} />
        <Tab.Screen name="Activity" component={ActivityScreen} options={{ tabBarIcon: ({ color, size }) => <Heart color={color} size={size} /> }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => <User color={color} size={size} /> }} />
      </Tab.Navigator>
    )
  }

8) App entry
- App.tsx
  import 'react-native-gesture-handler'
  import 'react-native-url-polyfill/auto'
  import 'react-native-get-random-values'
  import RootNavigator from './app/navigation/RootNavigator'
  import Toast from 'react-native-toast-message'
  import { StatusBar } from 'expo-status-bar'

  export default function App() {
    return (
      <>
        <StatusBar style="light" />
        <RootNavigator />
        <Toast />
      </>
    )
  }

9) Screens mapping (examples)
- HomeScreen.tsx (replaces MainFeed)
  import { View, FlatList, Text, Image, Pressable } from 'react-native'
  import Toast from 'react-native-toast-message'
  import TrendingCarousel from '../components/TrendingCarousel'

  const reels = [
    { id: '1', user: 'John Doe', avatar: '', media: 'https://placehold.co/600x800', likes: 120 },
    // ...map your sampleReels shape here
  ]

  export default function HomeScreen() {
    const handleLike = (id: string) => {
      Toast.show({ type: 'success', text1: 'Liked!' })
    }
    return (
      <View className="flex-1 bg-black">
        <FlatList
          ListHeaderComponent={<TrendingCarousel />}
          data={reels}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="mb-4">
              <Image source={{ uri: item.media }} style={{ width: '100%', height: 420 }} />
              <View className="px-4 py-3">
                <Text className="text-white text-base">{item.user}</Text>
                <View className="flex-row gap-4 mt-2">
                  <Pressable onPress={() => handleLike(item.id)}><Text className="text-white">♥</Text></Pressable>
                  <Pressable><Text className="text-white">⤴</Text></Pressable>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    )
  }

- AdminPanelScreen.tsx (chart horizontal scroll)
  import { View, ScrollView } from 'react-native'
  import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native'
  export default function AdminPanelScreen() {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator>
        <View style={{ width: 900, padding: 16, backgroundColor: 'black' }}>
          <VictoryChart width={880} theme={VictoryTheme.material}>
            <VictoryBar data={[{ x: 'Mon', y: 2 }, { x: 'Tue', y: 3 }, { x: 'Wed', y: 5 }]} />
          </VictoryChart>
        </View>
      </ScrollView>
    )
  }

10) Component replacements (web -> RN)
- Radix/shadcn dialogs, sheets, popovers -> React Native Paper, React Native Modal, or custom Views with react-native-reanimated. Start with Modal from react-native and upgrade as needed.
- Embla carousel -> react-native-reanimated-carousel (install later if required) or a FlatList with pagingEnabled and horizontal.
- Lucide React -> lucide-react-native (already added) or @expo/vector-icons for common icons.
- Recharts -> victory-native (+ react-native-svg, already added).
- Toast (sonner/shadcn) -> react-native-toast-message.
- Router (react-router-dom) -> @react-navigation (stack + tabs).
- Tailwind (web) -> nativewind (RN-tailwind).

11) Fonts and theme (consistency with your brand)
- Use Expo Google Fonts to match Instagram-like typography:
  npx expo install expo-font @expo-google-fonts/inter
- Load in App:
  import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter'
  // Load before rendering UI and apply via style or className.

12) Running on Expo Go
- Start the dev server:
  npx expo start --clear
- On iOS: press i to open simulator or scan QR in Expo Go.
- On Android: press a for emulator or scan QR in Expo Go.
- If you see reanimated errors, rebuild the Metro cache: npx expo start -c

13) Production and EAS (optional)
- Add app.json metadata (name, slug, icons, splash). Use EAS for builds:
  npm i -g eas-cli
  eas build:configure
  eas build -p ios|android

14) Mapping your current pages
- /app (MainFeed) -> Home tab (HomeScreen)
- /app/search -> SearchScreen
- /app/create -> CreateScreen
- /app/activity -> ActivityScreen (use FlatList + rows)
- /app/profile -> ProfileScreen
- /vendor, /influencer, /admin, /chat, /role-selection -> Dedicated stack screens

15) Known web-only items to drop or re-implement
- Radix UI and shadcn components are web-only. Use RN-native equivalents noted above.
- CSS files and Tailwind config from web do not apply; NativeWind replaces them.

16) Migration checklist (tick as you go)
- [ ] Expo app created (TypeScript)
- [ ] Navigation set (stack + tabs)
- [ ] NativeWind configured
- [ ] Icons + Toast working
- [ ] Supabase client connected
- [ ] Home feed list rendering
- [ ] Admin chart scrolls horizontally
- [ ] Remaining screens scaffolded

Support
- If you want, I can generate a starter Expo project structure (files) you can copy into a new repo. Then you can run it in Expo Go immediately.

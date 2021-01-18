import "./wdyr"
import React from 'react'
import { render } from 'react-dom'
import {RecoilRoot} from 'recoil'
import {FirebaseAppProvider} from 'reactfire'
import firebaseConfig from './App/firebaseConfig'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import App from './App'

const AppRoot = () =>
	<RecoilRoot>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<App/>
		</FirebaseAppProvider>
	</RecoilRoot>

render(<AppRoot />, document.getElementById('root'))
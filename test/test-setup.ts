import browserEnv from 'browser-env'
import raf from 'raf'

browserEnv()
raf.polyfill(window)

process.env.node_env = 'test'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

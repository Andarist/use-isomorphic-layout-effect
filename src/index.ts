import { useEffect, useLayoutEffect } from 'react'
import isClient from '#is-client'

const noop = () => {}

export default isClient ? useLayoutEffect : noop

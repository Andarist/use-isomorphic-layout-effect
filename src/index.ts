import { useEffect, useLayoutEffect } from 'react'
import isClient from '#is-client'

export default isClient ? useLayoutEffect : useEffect

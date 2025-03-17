// @deno-types="npm:@types/react@^18.2.0"
import { useEffect, useLayoutEffect } from 'react'
import isClient from '#is-client'

export default isClient ? useLayoutEffect : useEffect

// @deno-types="npm:@types/react@^18.2"
import { useEffect, useLayoutEffect } from 'react'

export default typeof document !== 'undefined' ? useLayoutEffect : useEffect

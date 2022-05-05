import { ChakraBadge } from './components/Badge/badgeJS'
import { ChakraButton } from './components/Button/buttonJS'
import { ChakraCircularProgress } from './components/CircularProgress/circularProgressJS'
import { ChakraProgress } from './components/Progress/progressJS'
import { ChakraSkeleton } from './components/Skeleton/skeletonJS'

export const chakraPSTheme = {
  components: {
    Badge: ChakraBadge,
    Button: ChakraButton,
    CircularProgress: ChakraCircularProgress,
    Progress: ChakraProgress,
    Skeleton: ChakraSkeleton,
  },
}

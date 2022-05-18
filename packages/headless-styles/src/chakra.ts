import { ChakraBadge } from './components/Badge/badgeJS'
import { ChakraButton } from './components/Button/buttonJS'
import { ChakraFormControl } from './components/FormControl/formControlJS'
import { ChakraIcon } from './components/Icon/iconJS'
import { ChakraProgress } from './components/Progress/progressJS'
import { ChakraSkeleton } from './components/Skeleton/skeletonJS'

export const chakraPSTheme = {
  components: {
    Badge: ChakraBadge,
    Button: ChakraButton,
    FormControl: ChakraFormControl,
    Icon: ChakraIcon,
    Progress: ChakraProgress,
    Skeleton: ChakraSkeleton,
  },
}

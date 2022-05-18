import { ChakraBadge } from './components/Badge/badgeJS'
import { ChakraButton } from './components/Button/buttonJS'
import { ChakraFormControl } from './components/FormControl/formControlJS'
import { ChakraFormLabel } from './components/FormLabel/formLabelJS'
import { ChakraIcon } from './components/Icon/iconJS'
import { ChakraProgress } from './components/Progress/progressJS'
import { ChakraSkeleton } from './components/Skeleton/skeletonJS'

export const chakraPSTheme = {
  components: {
    Badge: ChakraBadge,
    Button: ChakraButton,
    FormControl: ChakraFormControl,
    FormLabel: ChakraFormLabel,
    Icon: ChakraIcon,
    Progress: ChakraProgress,
    Skeleton: ChakraSkeleton,
  },
}

import { ChakraBadge } from './components/Badge/badgeJS'
import { ChakraButton } from './components/Button/chakraButton'
import { ChakraErrorMessage } from './components/ErrorMessage/errorMessageJS'
import { ChakraFormControl } from './components/FormControl/formControlJS'
import { ChakraFormLabel } from './components/FormLabel/formLabelJS'
import { ChakraIcon } from './components/Icon/iconJS'
import { ChakraProgress } from './components/Progress/progressJS'
import { ChakraRadio } from './components/Radio/radioJS'
import { ChakraSkeleton } from './components/Skeleton/skeletonJS'
import { ChakraSwitch } from './components/Switch/switchJS'

export const chakraPSTheme = {
  components: {
    Badge: ChakraBadge,
    Button: ChakraButton,
    FormControl: ChakraFormControl,
    FormErrorMessage: ChakraErrorMessage,
    FormLabel: ChakraFormLabel,
    Icon: ChakraIcon,
    Progress: ChakraProgress,
    Radio: ChakraRadio,
    Skeleton: ChakraSkeleton,
    Switch: ChakraSwitch,
  },
}

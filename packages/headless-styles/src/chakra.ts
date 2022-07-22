import { ChakraAlert } from './components/Alert/chakraAlert'
import { ChakraAlertDialog } from './components/AlertDialog/chakraAlertDialog'
import { ChakraAvatar } from './components/Avatar/chakraAvatar'
import { ChakraBadge } from './components/Badge/badgeJS'
import { ChakraButton } from './components/Button/chakraButton'
import { ChakraCheckbox } from './components/Checkbox/chakraCheckbox'
import { ChakraErrorMessage } from './components/ErrorMessage/errorMessageJS'
import { ChakraFieldMessage } from './components/FieldMessage/fieldMessageJS'
import { ChakraFormControl } from './components/FormControl/formControlJS'
import { ChakraFormLabel } from './components/FormLabel/formLabelJS'
import { ChakraIcon } from './components/Icon/iconJS'
import { ChakraInput } from './components/Input/chakraInput'
import { ChakraProgress } from './components/Progress/progressJS'
import { ChakraRadio } from './components/Radio/chakraRadio'
import { ChakraSkeleton } from './components/Skeleton/skeletonJS'
import { ChakraSwitch } from './components/Switch/switchJS'
import { ChakraTag } from './components/Tag/chakraTag'
import { ChakraTextarea } from './components/Textarea/chakraTextarea'

const Form = {
  parts: ['container', 'requiredIndicator', 'helperText'],
  baseStyle: {
    helperText: ChakraFieldMessage.baseStyle,
  },
}

export const chakraPSTheme = {
  components: {
    Alert: ChakraAlert,
    Avatar: ChakraAvatar,
    Badge: ChakraBadge,
    Button: ChakraButton,
    Checkbox: ChakraCheckbox,
    Form,
    FormControl: ChakraFormControl,
    FormErrorMessage: ChakraErrorMessage,
    FormLabel: ChakraFormLabel,
    Icon: ChakraIcon,
    Input: ChakraInput,
    Modal: ChakraAlertDialog,
    Progress: ChakraProgress,
    Radio: ChakraRadio,
    Skeleton: ChakraSkeleton,
    Switch: ChakraSwitch,
    Tag: ChakraTag,
    Textarea: ChakraTextarea,
  },
}

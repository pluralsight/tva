import {
  psBackground,
  psBackgroundActive,
  psBackgroundHover,
  psBackgroundWeak,
  psBackgroundWeakActive,
  psBackgroundWeakHover,
  psBorder,
  psDangerBackground,
  psDangerBackgroundActive,
  psDangerBackgroundHover,
  psDangerBackgroundWeak,
  psDangerBorder,
  psDangerText,
  psDangerTextWeak,
  psDangerTextMedium,
  psInfoBackground,
  psInfoBackgroundActive,
  psInfoBackgroundHover,
  psInfoBackgroundWeak,
  psInfoBorder,
  psInfoText,
  psInfoTextWeak,
  psInfoTextMedium,
  psNeutralBackground,
  psNeutralBackgroundActive,
  psNeutralBackgroundHover,
  psNeutralBorder,
  psNeutralBorderWeak,
  psNeutralBorderStrong,
  psNeutralSurface,
  psNeutralSurfaceWeak,
  psNeutralSurfaceStrong,
  psNeutralSurfaceMedium,
  psNeutralText,
  psNeutralTextMedium,
  psNeutralTextWeak,
  psSuccessBackground,
  psSuccessBackgroundActive,
  psSuccessBackgroundHover,
  psSuccessBackgroundWeak,
  psSuccessBorder,
  psSuccessText,
  psSuccessTextWeak,
  psSuccessTextMedium,
  psText,
  psTextWeak,
  psTextMedium,
  psWarningBackground,
  psWarningBackgroundActive,
  psWarningBackgroundHover,
  psWarningBackgroundWeak,
  psWarningBorder,
  psWarningText,
  psWarningTextWeak,
  psWarningTextMedium,
} from '@pluralsight/design-tokens'

const tokenMap = {
  '--ps-background': psBackground,
  '--ps-background-active': psBackgroundActive,
  '--ps-background-hover': psBackgroundHover,
  '--ps-background-weak': psBackgroundWeak,
  '--ps-background-weak-active': psBackgroundWeakActive,
  '--ps-background-weak-hover': psBackgroundWeakHover,
  '--ps-border': psBorder,
  '--ps-danger-background': psDangerBackground,
  '--ps-danger-background-active': psDangerBackgroundActive,
  '--ps-danger-background-hover': psDangerBackgroundHover,
  '--ps-danger-background-weak': psDangerBackgroundWeak,
  '--ps-danger-border': psDangerBorder,
  '--ps-danger-text': psDangerText,
  '--ps-danger-text-weak': psDangerTextWeak,
  '--ps-danger-text-medium': psDangerTextMedium,
  '--ps-info-background': psInfoBackground,
  '--ps-info-background-active': psInfoBackgroundActive,
  '--ps-info-background-hover': psInfoBackgroundHover,
  '--ps-info-background-weak': psInfoBackgroundWeak,
  '--ps-info-border': psInfoBorder,
  '--ps-info-text': psInfoText,
  '--ps-info-text-weak': psInfoTextWeak,
  '--ps-info-text-medium': psInfoTextMedium,
  '--ps-neutral-background': psNeutralBackground,
  '--ps-neutral-background-active': psNeutralBackgroundActive,
  '--ps-neutral-background-hover': psNeutralBackgroundHover,
  '--ps-neutral-border': psNeutralBorder,
  '--ps-neutral-border-weak': psNeutralBorderWeak,
  '--ps-neutral-border-strong': psNeutralBorderStrong,
  '--ps-neutral-surface': psNeutralSurface,
  '--ps-neutral-surface-weak': psNeutralSurfaceWeak,
  '--ps-neutral-surface-medium': psNeutralSurfaceMedium,
  '--ps-neutral-surface-strong': psNeutralSurfaceStrong,
  '--ps-neutral-text': psNeutralText,
  '--ps-neutral-text-weak': psNeutralTextWeak,
  '--ps-neutral-text-medium': psNeutralTextMedium,
  '--ps-success-background': psSuccessBackground,
  '--ps-success-background-active': psSuccessBackgroundActive,
  '--ps-success-background-hover': psSuccessBackgroundHover,
  '--ps-success-background-weak': psSuccessBackgroundWeak,
  '--ps-success-border': psSuccessBorder,
  '--ps-success-text': psSuccessText,
  '--ps-success-text-weak': psSuccessTextWeak,
  '--ps-success-text-medium': psSuccessTextMedium,
  '--ps-text': psText,
  '--ps-text-weak': psTextWeak,
  '--ps-text-medium': psTextMedium,
  '--ps-warning-background': psWarningBackground,
  '--ps-warning-background-active': psWarningBackgroundActive,
  '--ps-warning-background-hover': psWarningBackgroundHover,
  '--ps-warning-background-weak': psWarningBackgroundWeak,
  '--ps-warning-border': psWarningBorder,
  '--ps-warning-text': psWarningText,
  '--ps-warning-text-weak': psWarningTextWeak,
  '--ps-warning-text-medium': psWarningTextMedium,
}

const TokenMap = new Set(tokenMap)

export default TokenMap
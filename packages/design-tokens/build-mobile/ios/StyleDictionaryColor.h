
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 28 Jun 2022 21:29:44 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
PsBackground,
PsBackgroundActive,
PsBackgroundHover,
PsBackgroundWeak,
PsBackgroundWeakActive,
PsBackgroundWeakHover,
PsBorder,
PsDangerBackground,
PsDangerBackgroundActive,
PsDangerBackgroundHover,
PsDangerBackgroundWeak,
PsDangerBorder,
PsDangerText,
PsDangerTextWeak,
PsDangerTextMedium,
PsInfoBackground,
PsInfoBackgroundActive,
PsInfoBackgroundHover,
PsInfoBackgroundWeak,
PsInfoBorder,
PsInfoText,
PsInfoTextWeak,
PsInfoTextMedium,
PsNeutralBackground,
PsNeutralBackgroundActive,
PsNeutralBackgroundHover,
PsNeutralBorder,
PsNeutralBorderWeak,
PsNeutralBorderStrong,
PsNeutralSurface,
PsNeutralSurfaceWeak,
PsNeutralSurfaceMedium,
PsNeutralSurfaceStrong,
PsNeutralText,
PsNeutralTextWeak,
PsNeutralTextMedium,
PsSuccessBackground,
PsSuccessBackgroundActive,
PsSuccessBackgroundHover,
PsSuccessBackgroundWeak,
PsSuccessBorder,
PsSuccessText,
PsSuccessTextWeak,
PsSuccessTextMedium,
PsText,
PsTextWeak,
PsTextMedium,
PsWarningBackground,
PsWarningBackgroundActive,
PsWarningBackgroundHover,
PsWarningBackgroundWeak,
PsWarningBorder,
PsWarningText,
PsWarningTextWeak,
PsWarningTextMedium
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end

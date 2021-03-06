
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Tue, 28 Jun 2022 21:29:44 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.294f green:0.200f blue:0.820f alpha:1.000f],
[UIColor colorWithRed:0.188f green:0.125f blue:0.553f alpha:1.000f],
[UIColor colorWithRed:0.239f green:0.161f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.094f blue:0.408f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.094f blue:0.408f alpha:1.000f],
[UIColor colorWithRed:0.184f green:0.125f blue:0.553f alpha:1.000f],
[UIColor colorWithRed:0.408f green:0.333f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.722f green:0.000f blue:0.286f alpha:1.000f],
[UIColor colorWithRed:0.361f green:0.000f blue:0.149f alpha:1.000f],
[UIColor colorWithRed:0.541f green:0.000f blue:0.216f alpha:1.000f],
[UIColor colorWithRed:0.361f green:0.000f blue:0.149f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.078f blue:0.447f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.941f blue:0.965f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.639f blue:0.788f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.459f blue:0.675f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.420f blue:0.659f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.216f blue:0.341f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.318f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.216f blue:0.341f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.631f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.839f green:0.945f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.816f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.161f green:0.690f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.224f green:0.231f blue:0.416f alpha:1.000f],
[UIColor colorWithRed:0.173f green:0.173f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:0.251f green:0.263f blue:0.467f alpha:1.000f],
[UIColor colorWithRed:0.251f green:0.263f blue:0.467f alpha:1.000f],
[UIColor colorWithRed:0.173f green:0.173f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:0.341f green:0.373f blue:0.635f alpha:1.000f],
[UIColor colorWithRed:0.075f green:0.059f blue:0.141f alpha:1.000f],
[UIColor colorWithRed:0.106f green:0.094f blue:0.204f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.129f blue:0.271f alpha:1.000f],
[UIColor colorWithRed:0.165f green:0.153f blue:0.325f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.714f green:0.725f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.557f green:0.576f blue:0.761f alpha:1.000f],
[UIColor colorWithRed:0.004f green:0.576f blue:0.349f alpha:1.000f],
[UIColor colorWithRed:0.004f green:0.294f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:0.004f green:0.435f blue:0.263f alpha:1.000f],
[UIColor colorWithRed:0.004f green:0.294f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:0.008f green:0.871f blue:0.525f alpha:1.000f],
[UIColor colorWithRed:0.820f green:1.000f blue:0.929f alpha:1.000f],
[UIColor colorWithRed:0.267f green:0.992f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.008f green:0.733f blue:0.443f alpha:1.000f],
[UIColor colorWithRed:0.886f green:0.871f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.635f green:0.592f blue:0.906f alpha:1.000f],
[UIColor colorWithRed:0.525f green:0.463f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:0.839f green:0.604f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.420f green:0.302f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.639f green:0.459f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.420f green:0.302f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.733f blue:0.059f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.965f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.898f blue:0.639f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.824f blue:0.380f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end

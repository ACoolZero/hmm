import { common } from "@screens";

const COLORS = {
  primary: '#1E90FF', // Dodger Blue
  // primary: '#FF6347', // Coral
  success: '#00CED1', // Dark Turquoise
  error: '#FF4500', // Orange Red
  placeholder: '#BFBFBF', // Light Gray
  white: '#FFFFFF',
  black: '#000000',
  // common_background: "#A0A0A0",
  // common_light_background: '#F0FFFF', // Azure
  // common_dark_background: '#483D8B', // Dark Slate Blue
  // common_text: '#696969', // Dim Gray
  // // common_light_text: '#808080', // Gray
  // // common_dark_text: '#778899', // Light Slate Gray
  // common_sub_text: '#A0A0A0',
  // common_border: '#D3D3D3', // Light Gray

  /**
   * @gray
   */
  gray_50: '#F5F5F5',
  gray_100: '#E0E0E0', // Light Gray
  gray_200: '#C0C0C0', // Silver
  gray_300: '#A9A9A9', // Dark Gray
  gray_400: '#808080', // Gray
  gray_500: '#696969', // Dim Gray
  gray_600: '#4F4F4F', // Dark Slate Gray
  gray_700: '#2F4F4F', // Dark Slate Gray
  gray_800: '#708090', // Slate Gray
  gray_900: '#778899', // Light Slate Gray

  /**
   * @red
   */
  red_50: '#FFC0CB', // Pink
  red_100: '#FF69B4', // Hot Pink
  red_200: '#FF1493', // Deep Pink
  red_300: '#FF6347', // Tomato
  red_400: '#DC143C', // Crimson
  red_500: '#B22222', // Fire Brick
  red_600: '#8B0000', // Dark Red
  red_700: '#800000', // Maroon
  red_800: '#FF0000', // Red
  red_900: '#CD5C5C', // Indian Red

  /**
   * @yellow
   */
  yellow_50: '#FFFF00', // Yellow
  yellow_100: '#FFD700', // Gold
  yellow_200: '#FFA500', // Orange
  yellow_300: '#FF8C00', // Dark Orange
  yellow_400: '#FF4500', // Orange Red
  yellow_500: '#FF6347', // Tomato
  yellow_600: '#FF0000', // Red
  yellow_700: '#FF1493', // Deep Pink
  yellow_800: '#FF69B4', // Hot Pink
  yellow_900: '#FFC0CB', // Pink

  /**
   * @green
   */
  green_50: '#98FB98', // Pale Green
  green_100: '#00FF00', // Lime
  green_200: '#32CD32', // Lime Green
  green_300: '#008000', // Green
  green_400: '#008080', // Teal
  green_500: '#00CED1', // Dark Turquoise
  green_600: '#20B2AA', // Light Sea Green
  green_700: '#3CB371', // Medium Sea Green
  green_800: '#2E8B57', // Sea Green
  green_900: '#228B22', // Forest Green

  /**
   * @blue
   */
  blue_50: '#00BFFF', // Deep Sky Blue
  blue_100: '#1E90FF', // Dodger Blue
  blue_200: '#4169E1', // Royal Blue
  blue_300: '#0000FF', // Blue
  blue_400: '#0000CD', // Medium Blue
  blue_500: '#00008B', // Dark Blue
  blue_600: '#000080', // Navy
  blue_700: '#6A5ACD', // Slate Blue
  blue_800: '#483D8B', // Dark Slate Blue
  blue_900: '#191970', // Midnight Blue

  /**
   * @indigo
   */
  indigo_50: '#4B0082', // Indigo
  indigo_100: '#800080', // Purple
  indigo_200: '#9932CC', // Dark Orchid
  indigo_300: '#8A2BE2', // Blue Violet
  indigo_400: '#6A5ACD', // Slate Blue
  indigo_500: '#483D8B', // Dark Slate Blue
  indigo_600: '#8B008B', // Dark Magenta
  indigo_700: '#9370DB', // Medium Purple
  indigo_800: '#7B68EE', // Medium Slate Blue
  indigo_900: '#483D8B', // Dark Slate Blue

  /**
   * @purple
   */
  purple_50: '#800080', // Purple
  purple_100: '#9370DB', // Medium Purple
  purple_200: '#BA55D3', // Medium Orchid
  purple_300: '#8A2BE2', // Blue Violet
  purple_400: '#6A5ACD', // Slate Blue
  purple_500: '#483D8B', // Dark Slate Blue
  purple_600: '#4B0082', // Indigo
  purple_700: '#9932CC', // Dark Orchid
  purple_800: '#8A2BE2', // Blue Violet
  purple_900: '#800080', // Purple

  /**
   * @pink
   */
  pink_50: '#FFC0CB', // Pink
  pink_100: '#FF69B4', // Hot Pink
  pink_200: '#FF1493', // Deep Pink
  pink_300: '#FF6347', // Tomato
  pink_400: '#DC143C', // Crimson
  pink_500: '#B22222', // Fire Brick
  pink_600: '#8B0000', // Dark Red
  pink_700: '#800000', // Maroon
  pink_800: '#FF0000', // Red
  pink_900: '#CD5C5C', // Indian Red

  /**
   * @orange
   */
  orange_50: '#FFA500', // Orange
  orange_100: '#FF8C00', // Dark Orange
  orange_200: '#FF6347', // Tomato
  orange_300: '#FF4500', // Orange Red
  orange_400: '#FF0000', // Red
  orange_500: '#DC143C', // Crimson
  orange_600: '#B22222', // Fire Brick
  orange_700: '#8B0000', // Dark Red
  orange_800: '#FF69B4', // Hot Pink
  orange_900: '#FFC0CB', // Pink
  };
  
  const dark = {
  text: '#FFFFFF',
  sub_text: '#778899', // Light Slate Gray
  article_text: '#FFFFFF',
  background: '#213138',
  secondary_background: '#2A3D45',
  feeling_background: '#2A3D4560',
  modal_feeling_background: '#21313850',
  card_background_one: '#475E69',
  card_background_two: '#2A3D45',
  border: '#A0A0A0',
  milestone_header: '#475E69',
  moment_full_screen: '#213138CC',
  ...COLORS,
  };
  
  const light = {
  text: '#213138',
  sub_text: '#A0A0A0', // Gray
  article_text: '#213138',
  background: '#F5F5F5',
  secondary_background: '#EAEAEA',
  feeling_background: '#EAEAEA60',
  modal_feeling_background: '#F5F5F550',
  card_background_one: '#DDDDDD',
  card_background_two: '#EAEAEA',
  border: '#A0A0A0',
  milestone_header: '#DDDDDD',
  moment_full_screen: '#F5F5F5CC',
  ...COLORS,
  };
  
  export default { light, dark };
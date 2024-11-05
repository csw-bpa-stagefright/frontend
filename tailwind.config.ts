import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors"

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
        ...colors,
        'mainbg': "#edebe7"
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'ms': '320px',
      'sm': '640px',
      'md': '768px',
      'dm': '960px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      extraWidest: '.25em',
    },
    extend: {
      listStyleImage: {
        checkmark: 'url("/public/Images/Logo/WhyChooseUs/CheckMarkIcon.svg") w-5 h-[5px]',
      },
    }
  }
};
export default config;
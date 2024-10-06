const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '991px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        neutral: {
          950: '#202529',
          900: '#2F353C',
          800: '#353E46',
          700: '#3C4954',
          600: '#4A5C6A',
          500: '#5E7383',
          400: '#7D909E',
          300: '#A9B6C0',
          200: '#D0D7DD',
          100: '#E9EDF0',
          50: '#F8F9FA',
          white: '#FFFFFF',
        },
        primary: {
          950: '#242A47',
          900: '#344174',
          800: '#344174',
          700: '#485EB8',
          600: '#4F6CC1',
          500: '#6285CE',
          400: '#80A3DA',
          300: '#A9C2E7',
          200: '#CCDAF1',
          100: '#E0EFFF',
          50: '#EFF8FF',
        },
        danger: {
          200: '#D74F4F',
          100: '#FCE8DB',
        },
        success: {
          200: '#36A375',
          100: '#D9FADE',
        },
        warning: {
          200: '#F38B12',
          100: '#FEF1CF',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '120%', letterSpacing: '8em' }],
        'h2': ['30px', { lineHeight: '120%', letterSpacing: '8em' }],
        'h3': ['24px', { lineHeight: '120%', letterSpacing: '8em' }],
        'h4': ['20px', { lineHeight: '120%', letterSpacing: '8em' }],
        'h5': ['18px', { lineHeight: '120%', letterSpacing: '8em' }],
        'h6': ['16px', { lineHeight: '120%', letterSpacing: '8em' }],
        'text-1': ['16px', { lineHeight: '150%', letterSpacing: '5em' }],
        'text-2': ['14px', { lineHeight: '150%', letterSpacing: '5em' }],
        'text-3': ['12px', { lineHeight: '150%', letterSpacing: '5em' }],
      },
      fontWeight: {
        'regular': '400',
        'bold': '700',
      },
      backgroundImage: {
        'wave-top-sm': "url('/banner/wave-top-sm.svg')",
        'wave-top': "url('/banner/wave-top.svg')",
        'wave-bottom-sm': "url('/banner/wave-bottom-sm.svg')",
        'wave-bottom': "url('/intro/wave-bottom.svg')",
        "net-bg": "url('/about/net-bg.png')",
        "net-bg-sm": "url('/about/net-bg-sm.svg')",
        "net-bg-sm-gray": "url('/about-us/net-bg-sm.svg')",
        "net-blue": "url('/shopping-mall/bg-net-blue.svg')",
      },
    },
  },
  plugins: [animate],
}
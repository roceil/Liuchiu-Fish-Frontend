import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'cs-border-1_5 text-primary-800 transition-all duration-200 ease-in-out disabled:text-neutral-300 disabled:hover:text-neutral-300 md:hover:text-primary-600 md:hover:shadow-primary-600 font-bold tracking-wider',
      },
      size: {
        default: 'px-6 py-3 md:text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

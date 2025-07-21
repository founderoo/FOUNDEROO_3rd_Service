/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  		  // Brand Colors
  		  'brand-purple': {
  		    50: 'hsl(var(--brand-purple-50))',
  		    100: 'hsl(var(--brand-purple-100))',
  		    200: 'hsl(var(--brand-purple-200))',
  		    300: 'hsl(var(--brand-purple-300))',
  		    400: 'hsl(var(--brand-purple-400))',
  		    500: 'hsl(var(--brand-purple-500))',
  		    600: 'hsl(var(--brand-purple-600))',
  		    700: 'hsl(var(--brand-purple-700))',
  		    800: 'hsl(var(--brand-purple-800))',
  		    900: 'hsl(var(--brand-purple-900))',
  		    DEFAULT: 'hsl(var(--brand-purple-600))'
  		  },
  		  'brand-yellow': {
  		    50: 'hsl(var(--brand-yellow-50))',
  		    100: 'hsl(var(--brand-yellow-100))',
  		    200: 'hsl(var(--brand-yellow-200))',
  		    300: 'hsl(var(--brand-yellow-300))',
  		    400: 'hsl(var(--brand-yellow-400))',
  		    500: 'hsl(var(--brand-yellow-500))',
  		    600: 'hsl(var(--brand-yellow-600))',
  		    700: 'hsl(var(--brand-yellow-700))',
  		    800: 'hsl(var(--brand-yellow-800))',
  		    900: 'hsl(var(--brand-yellow-900))',
  		    DEFAULT: 'hsl(var(--brand-yellow-500))'
  		  },
  		  'neutral': {
  		    50: 'hsl(var(--neutral-50))',
  		    100: 'hsl(var(--neutral-100))',
  		    200: 'hsl(var(--neutral-200))',
  		    300: 'hsl(var(--neutral-300))',
  		    400: 'hsl(var(--neutral-400))',
  		    500: 'hsl(var(--neutral-500))',
  		    600: 'hsl(var(--neutral-600))',
  		    700: 'hsl(var(--neutral-700))',
  		    800: 'hsl(var(--neutral-800))',
  		    900: 'hsl(var(--neutral-900))',
  		    DEFAULT: 'hsl(var(--neutral-500))'
  		  },
  		  // Design System Colors
  		  primary: {
  		    DEFAULT: 'hsl(var(--primary))',
  		    foreground: 'hsl(var(--primary-foreground))',
  		    hover: 'hsl(var(--secondary))'
  		  },
  		  secondary: {
  		    DEFAULT: 'hsl(var(--secondary))',
  		    foreground: 'hsl(var(--secondary-foreground))',
  		    hover: 'hsl(var(--primary))'
  		  },
  		  // Legacy colors for compatibility
  		  light: '#EE4E44',
  		  border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			// Primary font family - Inter with system fallbacks
  			'primary': [
  				'Inter',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'"Segoe UI"',
  				'Roboto',
  				'"Helvetica Neue"',
  				'Arial',
  				'sans-serif'
  			],
  			// Secondary font family - system fonts
  			'secondary': [
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'"Segoe UI"',
  				'Roboto',
  				'"Helvetica Neue"',
  				'Arial',
  				'sans-serif'
  			],
  			// Legacy font family for compatibility
  			satoshi: [
  				'Satoshi',
  				'sans-serif'
  			],
  			// Default sans font using primary
  			sans: [
  				'Inter',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'"Segoe UI"',
  				'Roboto',
  				'"Helvetica Neue"',
  				'Arial',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  		  // Design system font sizes
  		  'xs-token': 'var(--font-size-xs)',
  		  'sm-token': 'var(--font-size-sm)',
  		  'base-token': 'var(--font-size-base)',
  		  'lg-token': 'var(--font-size-lg)',
  		  'xl-token': 'var(--font-size-xl)',
  		  '2xl-token': 'var(--font-size-2xl)',
  		  '3xl-token': 'var(--font-size-3xl)',
  		  '4xl-token': 'var(--font-size-4xl)',
  		  '5xl-token': 'var(--font-size-5xl)',
  		  '6xl-token': 'var(--font-size-6xl)'
  		},
  		fontWeight: {
  		  // Design system font weights
  		  'light-token': 'var(--font-weight-light)',
  		  'normal-token': 'var(--font-weight-normal)',
  		  'medium-token': 'var(--font-weight-medium)',
  		  'semibold-token': 'var(--font-weight-semibold)',
  		  'bold-token': 'var(--font-weight-bold)',
  		  'extrabold-token': 'var(--font-weight-extrabold)',
  		  'black-token': 'var(--font-weight-black)'
  		},
  		lineHeight: {
  		  // Design system line heights
  		  'tight-token': 'var(--line-height-tight)',
  		  'snug-token': 'var(--line-height-snug)',
  		  'normal-token': 'var(--line-height-normal)',
  		  'relaxed-token': 'var(--line-height-relaxed)',
  		  'loose-token': 'var(--line-height-loose)'
  		},
  		spacing: {
  		  // Design system spacing scale
  		  'xs-token': 'var(--spacing-xs)',
  		  'sm-token': 'var(--spacing-sm)',
  		  'base-token': 'var(--spacing-base)',
  		  'md-token': 'var(--spacing-md)',
  		  'lg-token': 'var(--spacing-lg)',
  		  'xl-token': 'var(--spacing-xl)',
  		  '2xl-token': 'var(--spacing-2xl)',
  		  '3xl-token': 'var(--spacing-3xl)'
  		},
  		borderRadius: {
  			'sm-token': 'var(--radius-sm)',
  			'token': 'var(--radius)',
  			'md-token': 'var(--radius-md)',
  			'lg-token': 'var(--radius-lg)',
  			'xl-token': 'var(--radius-xl)',
  			// Legacy compatibility
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  		  // Design system shadows
  		  'sm-token': 'var(--shadow-sm)',
  		  'token': 'var(--shadow)',
  		  'md-token': 'var(--shadow-md)',
  		  'lg-token': 'var(--shadow-lg)',
  		  'xl-token': 'var(--shadow-xl)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
  
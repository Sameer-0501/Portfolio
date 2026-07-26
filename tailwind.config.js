/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--color-bg)',
                sectionBg: 'var(--color-section-bg)',
                surface: 'var(--color-surface)',
                card: 'var(--color-card)',
                elevatedSurface: 'var(--color-elevated-surface)',
                textPrimary: 'var(--color-text-primary)',
                textSecondary: 'var(--color-text-secondary)',
                mutedText: 'var(--color-muted-text)',
                borderGlass: 'var(--color-border-glass)',
                divider: 'var(--color-divider)',
                
                // Brand Colors
                primaryAccent: '#A45A3D',
                highlight: '#D9BF77',
                darkAccent: '#6B4226',
                softAccent: '#C4B6A6',
                lightAccent: '#E8DAB2',
                success: '#10B981',
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(135deg, #D9BF77, #A45A3D)',
                'earth-gradient': 'linear-gradient(135deg, #C4B6A6, #6B4226)',
            },
            borderRadius: {
                'sm': '12px',
                'md': '18px',
                'lg': '24px',
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(0, 0, 0, 0.2)',
                'medium': '0 8px 30px rgba(0, 0, 0, 0.35)',
                'large': '0 12px 40px rgba(0, 0, 0, 0.5)',
                'glow': '0 4px 20px rgba(217, 191, 119, 0.18)',
            },
            transitionDuration: {
                '200': '200ms',
                '300': '300ms',
                '500': '500ms',
            },
            transitionTimingFunction: {
                'standard': 'ease-out',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        },
    },
    plugins: [],
}

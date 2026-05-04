/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "outline-variant": "#ebbbb4",
        "surface-container-high": "#eaead1",
        "on-tertiary-fixed": "#3b0900",
        "error": "#ba1a1a",
        "tertiary-fixed": "#ffdbd1",
        "on-secondary-fixed-variant": "#544600",
        "on-background": "#1b1d0e",
        "on-primary-container": "#fffbff",
        "on-tertiary-container": "#fffbff",
        "surface": "#fbfbe2",
        "secondary-fixed-dim": "#e9c400",
        "on-primary-fixed-variant": "#930100",
        "surface-tint": "#c00100",
        "on-secondary": "#ffffff",
        "inverse-primary": "#ffb4a8",
        "inverse-on-surface": "#f2f2d9",
        "secondary": "#705d00",
        "surface-bright": "#fbfbe2",
        "on-error": "#ffffff",
        "tertiary-fixed-dim": "#ffb5a0",
        "tertiary-container": "#d83900",
        "primary-container": "#eb0000",
        "secondary-fixed": "#ffe16d",
        "on-primary-fixed": "#410000",
        "secondary-container": "#fcd400",
        "primary-fixed-dim": "#ffb4a8",
        "surface-dim": "#dbdcc3",
        "on-primary": "#ffffff",
        "tertiary": "#ad2c00",
        "on-secondary-fixed": "#221b00",
        "surface-container-low": "#f5f5dc",
        "surface-container-highest": "#e4e4cc",
        "background": "#fbfbe2",
        "primary-fixed": "#ffdad4",
        "outline": "#956d67",
        "inverse-surface": "#303221",
        "on-tertiary": "#ffffff",
        "on-surface": "#1b1d0e",
        "error-container": "#ffdad6",
        "primary": "#bc0100",
        "surface-container-lowest": "#ffffff",
        "on-error-container": "#93000a",
        "on-surface-variant": "#603e39",
        "surface-container": "#efefd7",
        "on-secondary-container": "#6e5c00",
        "on-tertiary-fixed-variant": "#872000",
        "surface-variant": "#e4e4cc"
      },
      "borderRadius": {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      "spacing": {
        "gutter": "24px",
        "xl": "64px",
        "unit": "4px",
        "xs": "4px",
        "margin": "24px",
        "md": "16px",
        "sm": "8px",
        "lg": "32px"
      },
      "fontFamily": {
        "body-lg": ["Inter", "sans-serif"],
        "h2": ["Inter", "sans-serif"],
        "label-caps": ["Space Grotesk", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "h1": ["Inter", "sans-serif"],
        "h3": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"]
      },
      "fontSize": {
        "body-lg": ["20px", {"lineHeight": "1.5", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "h2": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.03em", "fontWeight": "900"}],
        "label-caps": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "700"}],
        "body-md": ["16px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "500"}],
        "h1": ["80px", {"lineHeight": "1.0", "letterSpacing": "-0.04em", "fontWeight": "900"}],
        "h3": ["32px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}

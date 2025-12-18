export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        severity: {
          low: '#22c55e',
          medium: '#facc15',
          high: '#fb7185',
          critical: '#ef4444',
        },
      },
    },
  },
  plugins: [],
};
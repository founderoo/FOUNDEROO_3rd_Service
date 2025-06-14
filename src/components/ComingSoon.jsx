@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 271 77% 27%;
    --card: 0 0% 100%;
    --card-foreground: 271 77% 27%;
    --popover: 0 0% 100%;
    --popover-foreground: 271 77% 27%;
    --primary: 280 67% 33%;
    --primary-foreground: 0 0% 100%;
    --secondary: 45 100% 64%;
    --secondary-foreground: 271 77% 27%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 271 77% 50%;
    --accent: 45 100% 64%;
    --accent-foreground: 0 0% 0%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 271 77% 90%;
    --input: 271 77% 90%;
    --ring: 271 77% 27%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --overlay-bg: 0 0% 0% / 0.8; /* Black with 80% opacity */
  }

  .dark {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --card: 0 0% 0%;
    --card-foreground: 0 0% 100%;
    --popover: 0 0% 0%;
    --popover-foreground: 0 0% 100%;
    --primary: 280 67% 33%;
    --primary-foreground: 0 0% 100%;
    --secondary: 45 100% 64%;
    --secondary-foreground: 0 0% 0%;
    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 90%;
    --accent: 45 100% 64%;
    --accent-foreground: 0 0% 0%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 15%;
    --input: 0 0% 15%;
    --ring: 271 77% 40%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --overlay-bg: 0 0% 0% / 0.85; /* Slightly darker for dark mode */
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground pt-[4.5rem];
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}

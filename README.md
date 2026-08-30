# TMRP Launch | Thamizhagam Reborn

An immersive cinematic countdown experience for Thamizhagam Reborn, launching September 11, 2026 at 6:30 PM.

> *"Remembering our greatness, let us build our future ~ Thamizhagam Reborn"*

## Features

- Cinematic countdown with animated visual effects and golden aesthetics
- Mouse-reactive lighting (specular highlights, golden god rays, dynamic bloom)
- 1,000 floating golden embers particle system with density controls
- Exclusive soundtrack (*Hangova South Melody*) with loop playback
- Direct Discord integration to [https://discord.gg/thamizhagam](https://discord.gg/thamizhagam)
- Fully responsive across desktop, tablet, and mobile displays

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
app/
├── components/
│   ├── Countdown.tsx      # Countdown timer with shuffle animation
│   ├── DoomsdayClock.tsx  # Main scene with visual layers
│   ├── ParticleCanvas.tsx # Floating dust particles (adjustable count)
│   ├── UtilityBar.tsx     # Audio controls and particle settings
│   └── WillReturn.tsx     # "X Will Return" text animation
├── globals.css            # Keyframes & complex gradients
├── layout.tsx             # Metadata & fonts
└── page.tsx               # Entry point
```

## Disclaimer

This project is an independent creation for artistic and technical demonstration purposes. It is not associated, affiliated, authorized, or endorsed by Marvel Entertainment, LLC or The Walt Disney Company.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.txt](LICENSE.txt) file for details.

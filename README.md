# Event Website

A modern, responsive event website built with Next.js, React, and Tailwind CSS.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- **About Section** - Information about the event
- **Sponsorship Page** - Sponsorship opportunities and packages
- **Program Section** - Event schedule and details
- **Prizes Section** - Prize information and rewards
- **Organizer Section** - Meet the team
- **Why Participate** - Benefits of attending
- **Sponsors Scroll** - Featured sponsors showcase

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   └── sponsorship/       # Sponsorship page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
└── package.json          # Dependencies and scripts
```

## Technologies Used

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **PostCSS** - CSS processing

## Deployment

The project is configured to deploy on Vercel. Push your changes to the `main` branch to automatically trigger a deployment.

### Deploy on Vercel

1. Push to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect it as a Next.js project and deploy it

## Environment Variables

If you need environment variables, create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## License

This project is private.

## Contact

For more information, contact the event organizers.

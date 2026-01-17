
# ✈️ Flight Search Engine (React + Vite)

>This is a modern, responsive Flight Search Engine built with React and Vite. It uses the Amadeus Self-Service API to fetch real-time flight offers, supports complex filtering, and provides a clean, intuitive user experience inspired by Google Flights.

## Features

- **Search Flights:** Enter origin, destination, and dates to find available flights.
- **Live Results:** See real-time flight offers with airline, price, and route details.
- **Filters:** Filter by stops, airline, and price.
- **Price Graph:** (Optional/Planned) Visualize price trends for your search.
- **Responsive Design:** Works beautifully on both desktop and mobile.
- **Flight Details Modal:** Click "View Details" for a full breakdown of each flight's segments and info.

## Tech Stack
- React (with hooks)
- Vite (for fast dev/build)
- Tailwind CSS (utility-first styling)
- Amadeus Self-Service API (test environment)

## Getting Started (Local)

1. **Clone the repo:**
	```bash
	git clone https://github.com/your-username/flight-search.git
	cd flight-search
	```
2. **Install dependencies:**
	```bash
	npm install
	```
3. **Set up environment variables:**
	Create a `.env` file in the root with:
	```env
	VITE_AMADEUS_API_KEY=your_amadeus_key
	VITE_AMADEUS_API_SECRET=your_amadeus_secret
	VITE_API_BASE=https://test.api.amadeus.com
	```
4. **Run the app:**
	```bash
	npm run dev
	```
	Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment (Vercel/Netlify)

1. **Set the same environment variables** in your deployment dashboard (Vercel/Netlify):
	- `VITE_AMADEUS_API_KEY`
	- `VITE_AMADEUS_API_SECRET`
	- `VITE_API_BASE` (value: `https://test.api.amadeus.com`)
2. **Redeploy** after saving the variables.

## Screenshots
Add screenshots/gifs here to showcase the UI and features.

## Credits
- [Amadeus for Developers](https://developers.amadeus.com/self-service-apis)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

_Built with ❤️ by Asma Ismail_

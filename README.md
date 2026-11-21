# UniPortal

UniPortal is a fictional university portal made for the CrossPointX Reverse UX Challenge. It is a static demo: it does not connect to a university system, authenticate users, or register real courses. Use fictional IDs and passwords; passwords are never stored or sent anywhere.

## Run or host

Serve the repository with any static HTTP server, for example `python -m http.server 8000` from the repository root, then open `http://localhost:8000/Uniportal/`. A static host should serve the `Uniportal/` directory with `index.html` as its entry point. No build or dependencies are needed.

## Demo

1. Sign in with any non-empty fictional ID and password.
2. Open Shopping Cart from the dashboard or the enrollment icon and sign in again.
3. Select an open course and choose Enroll. Complete all three confirmations; the final submit control is deliberately easy to miss.
4. The result page displays a fictional registration receipt. On the shopping cart, a 30-second timeout asks for credentials again while retaining the course selection. After recovery the timer stops so the journey remains completable.

The **Demo connection** selector offers Fast (0.2 seconds), Normal (1.2 seconds, default), and Slow (3 seconds) simulated delays. This preference is stored in the browser; the demo session and course selection are held in session storage. Logging out clears the demo session. No network throttling or real registration occurs.

The deliberately frustrating mechanisms are repeated sign-in, repeated confirmations, a subdued final submission control, session expiry, and artificial loading. These choices are intentional satire, not recommendations for real administrative systems.

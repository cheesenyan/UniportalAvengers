# UniPortal

UniPortal is a fictional university portal made for the CrossPointX Reverse UX Challenge. It is a static demo: it does not connect to a university system, authenticate users, or register real courses. Use fictional IDs and passwords; passwords are never stored or sent anywhere.

## Run or host

Serve the repository with any static HTTP server, for example `python -m http.server 8000` from the repository root, then open `http://localhost:8000/Uniportal/`. A static host should serve the `Uniportal/` directory with `index.html` as its entry point. No build or dependencies are needed.

## Demo

1. Wait for the initial loading screen, then sign in with any non-empty fictional ID and password.
2. Accept the dashboard terms and dismiss the notices. Open Shopping Cart and sign in again.
3. Select an open course and choose Enroll. The session expires at the first attempt: verify again, then reselect the course. Complete three confirmations by scrolling, waiting 5 seconds, and checking the agreement. After the request is received, find the subtle Finalize Enrollment link to actually submit.
4. COMP 201 does not conflict with the fictional schedule and can be successfully registered. MATH 206 conflicts with HUM 101 on Monday and Wednesday, 10:00–11:15 am: the opaque UP-409 error appears only after finalization and sends the student back to the dashboard. The Schedule button displays the fictional existing class, allowing the conflict to be inferred.
5. On the shopping cart, a 30-second timeout or the first enrollment attempt asks for credentials again. The cart remains, but the selected radio button is cleared; after recovery the timer stops so the journey remains completable.

By default, entering the site takes 60 seconds. The **Demo connection** selector offers Fast (1 second on entry, 0.2 seconds for actions), Normal (60 seconds on entry, 2.5 seconds for actions), and Slow (90 seconds on entry, 6 seconds for actions). Choose Fast after the initial load for quicker subsequent testing; the 5-second terms timer always applies. This preference is stored in the browser; the demo session and course selection are held in session storage. Logging out clears the demo session. No network throttling or real registration occurs.

The deliberately frustrating mechanisms are long loading screens, repeated sign-in, repeated dashboard notices and terms, misleading save and validation messages, timed scroll-to-agree confirmations, a false success screen, session expiry, contradictory refresh advice, and a late opaque schedule-conflict rejection. These choices are intentional satire, not recommendations for real administrative systems.

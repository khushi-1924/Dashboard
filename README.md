Gen AI I Analytics Dashboard 

// project description :-
This is a single-page application using ReactJS where users can input queries, see suggestions matching their queries, and view results for those queries using mock data.

// features :- 
- mock data suggestions based on input
- query history management
- loading and error states
- data visualization using recharts

// tech stack :-
- Frontend: React.js
- State Management: Redux Toolkit
- Styling: Tailwind CSS
- Results Visualization: Recharts or Chart.js

// usage :-
- enter a query using the input field
- view AI-powered suggestions as you type (using mock data)
- see the displayed query results
- access query history and re-submit previous queries

// components :-
- queryInput: Created an input field showing suggestions from the mockData array as the user types, and results get displayed when a user clicks on the submit query button. 
- queryHistory: Inside the queryInput component is the queryHistory component, which displays the queries searched by the user.
- resultDisplay: In this component, the result is displayed using recharts
- react-redux: Redux is used to set a query, give variable data to components, and change some values.

// UI :- A simple UI is used, which is user-friendly.

// deployemnt -
hosted on Vercel: https://dashboard-inky-seven.vercel.app/

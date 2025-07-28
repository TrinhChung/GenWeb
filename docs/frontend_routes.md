# Frontend Routes

The React frontend defines its routing in `src/App.tsx` using `createBrowserRouter`. The main layout component is `HomeLayout`. Below is a list of available paths and the components rendered.

| Path | Component | Notes |
| --- | --- | --- |
| `/` | `Landing` | default (index) route |
| `/shop` | `Shop` | displays all products |
| `/shop/:category` | `Shop` | loads products filtered by category |
| `/product/:id` | `SingleProduct` | product detail page |
| `/cart` | `Cart` | user cart |
| `/checkout` | `Checkout` | uses `checkoutAction` |
| `/search` | `Search` | uses `searchAction` |
| `/login` | `Login` | login form |
| `/register` | `Register` | registration form |
| `/order-confirmation` | `OrderConfirmation` | shown after checkout |
| `/user-profile` | `UserProfile` | profile page |
| `/order-history` | `OrderHistory` | loader `orderHistoryLoader` |
| `/order-history/:id` | `SingleOrderHistory` | loader `singleOrderLoader` |

All routes are nested under `HomeLayout`, so shared UI elements (header, footer, etc.) are provided by that layout.

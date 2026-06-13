# Modernized E-Commerce Web Application

A premium, modern React + Vite application featuring a redesigned, responsive product listing catalog and a detailed product view. The UI/UX matches high-fidelity designs, including customized star ratings, full reviews mapping, custom checkbox inputs, and a collapsible filter sidebar.

---

## 🚀 Setup Instructions

Follow these steps to get the application running locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Install Dependencies
Navigate to the project directory and install the package dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local Vite development server:
```bash
npm run dev
```
By default, the application will run at [http://localhost:5173](http://localhost:5173) (or the next available port, e.g., `5174`).

### 4. Build for Production
To build the static assets for production deployment:
```bash
npm run build
```
The compiled, optimized output will be written to the `dist/` directory.

---

## 📝 Assumptions Made

1. **Review Data Source**: DummyJSON v0.3+ provides an inline `reviews` array (consisting of `rating`, `comment`, `reviewerName`, and `date` properties) inside the product details payload. The detail view maps this array directly.
2. **Review Ratings**: Review scores are integers or decimals between `1.0` and `5.0`.
3. **Star Visualization Logic**:
   - Decimal scores round to the nearest half-star.
   - Ratings with decimals between `0.25` and `0.75` render a custom half-filled star (using an SVG linear gradient).
   - Decimals above `0.75` round up to a full star, and decimals below `0.25` round down.
4. **API-side Listing Limitations**: Since the dummyjson.com API has limited complex multi-parameter filter capabilities (e.g. combined category, brand, and query parameters), client-side filtering is executed on the retrieved products array to maintain full correctness of the user's custom queries.

---

## 🏛️ Architectural Decisions

1. **Centralized Global State (`ProductContext.jsx`)**:
   - Handles products catalog state, active categories, brand selection, query searches, and active pagination page coordinates.
   - Exposes states like `showSidebar` to allow the Header navbar to toggle sidebar layout shifts anywhere in the app.

2. **Price Filter local UI Isolation**:
   - The price filter uses a local `tempPrice` state in `PriceFilter.jsx` instead of binding directly to global context values. 
   - This ensures typing in the min/max fields does not trigger continuous rendering/filtering cycles. The values commit to the global filter set only when the user clicks the **Apply** button.

3. **Flexbox & Grid Layout Transition**:
   - Grid templates in `product.css` adjust dynamically based on the parent class: `.layout.with-sidebar` uses `280px 1fr` grid columns while `.layout.without-sidebar` uses a single `1fr` column. The product grid updates columns smoothly.

4. **Custom CSS Checkboxes**:
   - To achieve a premium layout without relying on bulky third-party UI libraries, native checkboxes are hidden (`opacity: 0`), and custom UI elements (`span.checkbox-custom`) are styled using pure CSS states (`:checked`, `:hover`).

5. **Direct Fetch Detail Page Resilience**:
   - If a user refreshes the page directly on `/product/:id`, the React context state gets cleared. Rather than failing or showing a "Product not found" error, `ProductDetail.jsx` detects this and runs a fallback API query to `https://dummyjson.com/products/:id` to retrieve details on the fly.

---

## 🔮 Improvements If Given More Time

1. **Debounced Search Inputs**:
   - Implement debouncing (e.g., `lodash.debounce` or a custom React hook) on the main search input to throttle query evaluation cycles.
2. **Image Gallery Carousel**:
   - Currently, the detail page renders the primary image. If given more time, we can implement an interactive gallery showing thumbnails of all available images in `product.images`.
3. **Skeleton Loaders (Shimmer Animations)**:
   - Add card skeleton UI components to display during data-loading overlay states to improve perceived performance.


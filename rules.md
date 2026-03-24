# Project Specific Rules

You MUST strictly follow these rules:

1.  **NEVER CHANGE THE EXISTING DESIGN**: Unless explicitly asked to "fix the design" or "update the design," you must preserve the structure, styling, and assets of all components. When asked to add a feature (like "Add to Cart"), only add the necessary logic and minimal UI updates to support that feature.
2.  **PRESERVE COMPONENT ARCHITECTURE**: Do not rewrite entire files if a simple patch is sufficient. 
3.  **STRICT FEATURE IMPLEMENTATION**: If the task is to "add functionality," focus 100% on the functionality and 0% on "improving" the aesthetics.
4.  **RESPECT EXISTING ASSETS**: Use the images and icons already present in the components. Do not swap them out for generic ones.
5.  **CART SYNCHRONIZATION**: All "Add to Cart" buttons must update the global `cartCount` in the `Header` via the `CartContext`.
6.  **CAROUSEL MAINTENANCE**: Do not remove carousels or layout structures from sections like "Products Under ₹500" or "Recently Viewed" unless explicitly told to change the layout.

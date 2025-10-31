// export const getImageUrl = (path) => {
//   return new URL(`/assets/${path}`, import.meta.url).href;
// };

// ⭐️ Step 1: Pre-map ALL assets in the /assets/ folder using Vite's glob import.
// This is done once when the module loads.
const assets = import.meta.glob('/assets/**', { eager: true });

export const getImageUrl = (path) => {
    // Step 2: Construct the full key Vite uses (e.g., /assets/nav/menuIcon.png)
    const fullPathKey = `/assets/${path}`;
    
    // Step 3: Directly return the resolved URL from the assets map.
    // If the asset exists, this returns the URL string.
    // If it doesn't exist, this returns 'undefined', which is what you must handle.
    return assets[fullPathKey]?.default;
};
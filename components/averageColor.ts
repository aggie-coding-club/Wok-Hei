// colorAnalyzer.ts

type RGB = { r: number; g: number; b: number };

const tailwindColors: Record<string, string> = {
  "bg-red-400": "#f87171", "bg-red-500": "#ef4444", "bg-red-600": "#dc2626", "bg-red-700": "#b91c1c", "bg-red-800": "#991b1b", "bg-red-900": "#7f1d1d",
  "bg-orange-400": "#fb923c", "bg-orange-500": "#f97316", "bg-orange-600": "#ea580c", "bg-orange-700": "#c2410c", "bg-orange-800": "#9a3412", "bg-orange-900": "#7c2d12",
  "bg-amber-400": "#fbbf24", "bg-amber-500": "#f59e0b", "bg-amber-600": "#d97706", "bg-amber-700": "#b45309", "bg-amber-800": "#92400e", "bg-amber-900": "#78350f",
  "bg-yellow-400": "#facc15", "bg-yellow-500": "#eab308", "bg-yellow-600": "#ca8a04", "bg-yellow-700": "#a16207", "bg-yellow-800": "#854d0e", "bg-yellow-900": "#713f12",
  "bg-lime-400": "#a3e635", "bg-lime-500": "#84cc16", "bg-lime-600": "#65a30d", "bg-lime-700": "#4d7c0f", "bg-lime-800": "#3f6212", "bg-lime-900": "#365314",
  "bg-green-400": "#4ade80", "bg-green-500": "#22c55e", "bg-green-600": "#16a34a", "bg-green-700": "#15803d", "bg-green-800": "#166534", "bg-green-900": "#14532d",
  "bg-emerald-400": "#34d399", "bg-emerald-500": "#10b981", "bg-emerald-600": "#059669", "bg-emerald-700": "#047857", "bg-emerald-800": "#065f46", "bg-emerald-900": "#064e3b",
  "bg-teal-400": "#2dd4bf", "bg-teal-500": "#14b8a6", "bg-teal-600": "#0d9488", "bg-teal-700": "#0f766e", "bg-teal-800": "#115e59", "bg-teal-900": "#134e4a",
  "bg-cyan-400": "#22d3ee", "bg-cyan-500": "#06b6d4", "bg-cyan-600": "#0891b2", "bg-cyan-700": "#0e7490", "bg-cyan-800": "#155e75", "bg-cyan-900": "#164e63",
  "bg-sky-400": "#38bdf8", "bg-sky-500": "#0ea5e9", "bg-sky-600": "#0284c7", "bg-sky-700": "#0369a1", "bg-sky-800": "#075985", "bg-sky-900": "#0c4a6e",
  "bg-blue-400": "#60a5fa", "bg-blue-500": "#3b82f6", "bg-blue-600": "#2563eb", "bg-blue-700": "#1d4ed8", "bg-blue-800": "#1e40af", "bg-blue-900": "#1e3a8a",
  "bg-indigo-400": "#818cf8", "bg-indigo-500": "#6366f1", "bg-indigo-600": "#4f46e5", "bg-indigo-700": "#4338ca", "bg-indigo-800": "#3730a3", "bg-indigo-900": "#312e81",
  "bg-violet-400": "#a78bfa", "bg-violet-500": "#8b5cf6", "bg-violet-600": "#7c3aed", "bg-violet-700": "#6d28d9", "bg-violet-800": "#5b21b6", "bg-violet-900": "#4c1d95",
  "bg-purple-400": "#c084fc", "bg-purple-500": "#a855f7", "bg-purple-600": "#9333ea", "bg-purple-700": "#7e22ce", "bg-purple-800": "#6b21a8", "bg-purple-900": "#581c87",
  "bg-fuchsia-400": "#e879f9", "bg-fuchsia-500": "#d946ef", "bg-fuchsia-600": "#c026d3", "bg-fuchsia-700": "#a21caf", "bg-fuchsia-800": "#86198f", "bg-fuchsia-900": "#701a75",
  "bg-pink-400": "#f472b6", "bg-pink-500": "#ec4899", "bg-pink-600": "#db2777", "bg-pink-700": "#be185d", "bg-pink-800": "#9d174d", "bg-pink-900": "#831843",
  "bg-rose-400": "#fb7185", "bg-rose-500": "#f43f5e", "bg-rose-600": "#e11d48", "bg-rose-700": "#be123c", "bg-rose-800": "#9f1239", "bg-rose-900": "#881337"
};

function hexToRgb(hex: string): RGB {
  const bigint = parseInt(hex.slice(1), 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}



function colorDistance(color1: RGB, color2: RGB): number {
  return Math.sqrt(
    Math.pow(color1.r - color2.r, 2) +
    Math.pow(color1.g - color2.g, 2) +
    Math.pow(color1.b - color2.b, 2)
  );
}

function findClosestTailwindColor(averageColor: RGB): string {
  let closestColor = '';
  let minDistance = Infinity;

  for (const [colorName, hexValue] of Object.entries(tailwindColors)) {
    const tailwindRgb = hexToRgb(hexValue);
    const distance = colorDistance(averageColor, tailwindRgb);

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = colorName;
    }
  }

  return closestColor;
}

function isBackgroundColor(pixel: RGB): boolean {
  // Skip white, light gray, black, and very dark colors
  const lightnessThreshold = 240; // Skip very light colors (near white)
  const darknessThreshold = 50;  // Skip very dark colors (near black)
  
  // Check if the pixel is too light or too dark to be considered part of the object
  return (
    (pixel.r > lightnessThreshold && pixel.g > lightnessThreshold && pixel.b > lightnessThreshold) || // Too light
    (pixel.r < darknessThreshold && pixel.g < darknessThreshold && pixel.b < darknessThreshold) // Too dark
  );
}

export async function getClosestTailwindColor(imageUrl: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) {
        reject(new Error('Failed to get canvas context.'));
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = imageData;

      let r = 0, g = 0, b = 0;
      let count = 0;

      for (let i = 0; i < data.length; i += 4) {
        const pixel = { r: data[i], g: data[i + 1], b: data[i + 2] };

        // Skip pixels that are likely background colors
        if (isBackgroundColor(pixel)) continue;

        r += pixel.r;
        g += pixel.g;
        b += pixel.b;
        count++;
      }

      if (count === 0) {
        reject(new Error('No non-background pixels found.'));
        return;
      }

      const averageColor: RGB = {
        r: Math.round(r / count),
        g: Math.round(g / count),
        b: Math.round(b / count),
      };

      const closestColor = findClosestTailwindColor(averageColor);
      resolve([closestColor, tailwindColors[closestColor]]);
    };

    img.onerror = () => reject(new Error('Failed to load the image.'));
  });
}
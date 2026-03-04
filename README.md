# shscalc

This project is a simple **Vite + React** application that calculates the final exam grade you need based on your Q3 and Q4 grades. It was bootstrapped with `npx create-vite --template react`, then the grade calculator logic and styles were added on top.

If you experimented with a secondary folder (e.g. `scr2`), delete that folder and use the `src` directory which already contains the latest code. (It is already listed in `.gitignore` so it won't be tracked.)

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   Open the URL shown in your browser to interact with the calculator.

3. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

## How It Works

- Grade composition:
  - 45% Q3
  - 45% Q4
  - 10% final exam
- Enter your numeric Q3/Q4 grades and the table displays the required
  final exam score for each letter grade.
- Letters and thresholds:
  - A+ 97+
  - A 93–96
  - A- 90–92
  - B+ 87–89
  - B 83–86
  - B- 80–82
  - C+ 77–79
  - C 73–76
  - C- 70–72
  - D+ 67–69
  - D 63–66
  - D- 60–62
  - F below 60

Needed final grades are computed using rounded course averages – the calculator subtracts 0.5 from the letter threshold before solving, so you benefit from the usual "round up" when your final average hits .5. Values over 100 display 😭.


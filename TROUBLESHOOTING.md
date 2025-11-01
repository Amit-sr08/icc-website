# Troubleshooting Guide - Blank Page Issue

If you see a blank white page, follow these steps:

## Step 1: Check Browser Console

1. Open your browser (Chrome/Firefox/Safari)
2. Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)
3. Go to the **Console** tab
4. Look for any **red error messages**
5. Copy the error message and share it

## Step 2: Check if Dev Server is Running

Open a terminal and run:
```bash
npm run dev
```

You should see:
```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

If you see errors, share them.

## Step 3: Clear Browser Cache

1. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Or clear cache and reload

## Step 4: Check Terminal for Errors

When running `npm run dev`, check if there are any error messages in the terminal.

## Common Issues:

### Issue: Module not found
**Solution:** Run `npm install` again

### Issue: Port 5173 already in use
**Solution:** 
```bash
# Kill the process
pkill -f vite
# Or use a different port
npm run dev -- --port 3000
```

### Issue: Logo image not loading
**Solution:** The logo file should be at `src/assets/pics/icc-logo.png`
- Check if file exists
- Try using a different image

### Issue: Blank page with no errors
**Solution:** 
1. Check browser console (F12)
2. Look for JavaScript errors
3. Try a different browser
4. Disable browser extensions

## Quick Test:

Create a test file `test.html` in the project root:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
</head>
<body>
    <h1>If you see this, the server is working</h1>
</body>
</html>
```

If this works, the issue is with React/JavaScript code.

## Still Not Working?

Please share:
1. Browser console errors (F12 → Console tab)
2. Terminal output when running `npm run dev`
3. Screenshot of the page
4. Your operating system and browser version


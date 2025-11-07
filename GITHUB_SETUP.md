# How to Deploy Your Website to GitHub

Since you know how to create a GitHub repository, here's how to put your website online for free using GitHub Pages!

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `montenegrin-learning` (or any name you like)
5. Make it **Public** (required for free GitHub Pages)
6. **Don't** check "Initialize with README" (we already have files)
7. Click "Create repository"

## Step 2: Upload Your Files

### Option A: Using GitHub Web Interface (Easiest)

1. After creating the repository, you'll see a page with instructions
2. Click "uploading an existing file"
3. Drag and drop all these files from your computer:
   - `index.html`
   - `lesson.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `GITHUB_SETUP.md`
4. Scroll down and click "Commit changes"
5. Wait for the files to upload

### Option B: Using GitHub Desktop (If you have it)

1. Download [GitHub Desktop](https://desktop.github.com/) if you don't have it
2. Install and sign in
3. Click "File" → "Add Local Repository"
4. Click "Create a Repository"
5. Choose your `language-learning-platform` folder
6. Click "Publish repository"
7. Make sure it's set to "Public"
8. Click "Publish Repository"

### Option C: Using Command Line (If you're comfortable with it)

Open Terminal (Mac) or Command Prompt (Windows) in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

(Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repository name)

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (top menu)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait a minute or two, then refresh the page
8. You'll see a message: "Your site is live at https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"

## Step 4: Visit Your Website!

Your website will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example, if your username is `johndoe` and repo is `montenegrin-learning`:
```
https://johndoe.github.io/montenegrin-learning/
```

## Updating Your Website

Whenever you make changes to your files:

1. **If using GitHub Desktop**: 
   - Make changes to your files
   - Open GitHub Desktop
   - Write a commit message (like "Added new lesson")
   - Click "Commit to main"
   - Click "Push origin"

2. **If using GitHub Web**:
   - Go to your repository
   - Click on the file you want to edit
   - Click the pencil icon to edit
   - Make your changes
   - Scroll down and click "Commit changes"

Your changes will appear on your website within 1-2 minutes!

## Troubleshooting

**Problem**: Website shows 404 error
- **Solution**: Make sure you selected "main" branch and "/ (root)" in Pages settings

**Problem**: Changes don't appear
- **Solution**: Wait 2-3 minutes and do a hard refresh (Ctrl+F5 or Cmd+Shift+R)

**Problem**: Styling looks broken
- **Solution**: Make sure all files (HTML, CSS, JS) are in the same folder and uploaded

## What You Have Now

✅ A beautiful homepage for your language learning platform
✅ A working demo lesson with interactive exercises
✅ Script toggle (Latin/Cyrillic)
✅ Progress tracking
✅ Responsive design (works on phones and tablets)

## Next Steps

Once your website is live, you can:
- Add more lessons (copy `lesson.html` and modify it)
- Add more vocabulary
- Customize colors and styles in `styles.css`
- Add more features as you learn!

## Need Help?

If you get stuck, you can:
- Check GitHub's documentation: https://docs.github.com/en/pages
- Search YouTube for "GitHub Pages tutorial"
- Ask for help in GitHub's community forum

Good luck! 🚀


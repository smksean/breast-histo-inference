# Railway Deployment Guide

## Prerequisites
1. Install Railway CLI: `npm install -g @railway/cli`
2. Create Railway account at https://railway.app
3. Login: `railway login`

## Deploy Backend

1. **Initialize Railway project:**
   ```bash
   railway init
   ```

2. **Set environment variables:**
   ```bash
   railway variables set MODEL_PATH=models/resnet50_bh_e1_ts_probs.pt
   railway variables set CORS_ALLOW_ORIGINS=*
   ```

3. **Deploy:**
   ```bash
   railway up
   ```

4. **Get your backend URL:**
   ```bash
   railway domain
   ```

## Deploy Frontend to Vercel

1. **Build frontend:**
   ```bash
   cd histo-ui
   npm run build
   ```

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

4. **Set environment variable in Vercel dashboard:**
   - Go to your project settings
   - Add environment variable: `VITE_API_BASE_URL` = your Railway backend URL

## Alternative: Deploy Frontend to Netlify

1. **Build frontend:**
   ```bash
   cd histo-ui
   npm run build
   ```

2. **Drag and drop the `dist` folder to https://netlify.com**

3. **Set environment variable:**
   - Go to Site settings > Environment variables
   - Add: `VITE_API_BASE_URL` = your Railway backend URL
   - Redeploy

## Testing Your Deployment

1. **Test backend:** Visit `https://your-railway-app.railway.app/health`
2. **Test frontend:** Visit your Vercel/Netlify URL
3. **Upload an image and test prediction!**

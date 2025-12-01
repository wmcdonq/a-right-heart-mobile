# A Right Heart - WebView App

A simple WebView wrapper to turn your web app into a mobile app.

## What You Need

### 1. Deploy Your Web App First

Before building the mobile app, you need to deploy your Replit web app to get a permanent URL.

**Your deployed URL will look like:**
```
https://a-right-heart.YOUR-USERNAME.replit.app
```

### 2. Update the App URL

Open `App.tsx` and replace this line:
```typescript
const APP_URL = 'https://YOUR-APP-NAME.replit.app';
```

With your actual deployed URL:
```typescript
const APP_URL = 'https://a-right-heart.your-username.replit.app';
```

### 3. Add Your App Icons

Create these image files in the `assets/` folder:
- `icon.png` - 1024x1024px app icon
- `splash.png` - 1284x2778px splash screen
- `adaptive-icon.png` - 1024x1024px (Android)

### 4. Build Commands

```bash
# Install dependencies
npm install

# Start development
npx expo start

# Build for iOS (requires Apple Developer account)
npx eas build --platform ios

# Submit to App Store
npx eas submit --platform ios
```

## App Store Submission Checklist

- [ ] App deployed and accessible at HTTPS URL
- [ ] App icons created (1024x1024)
- [ ] Splash screen designed
- [ ] Privacy policy URL (required by Apple)
- [ ] App description and screenshots
- [ ] Apple Developer account ($99/year)

## Configuration Summary

| Setting | Value |
|---------|-------|
| Bundle ID | `com.arightheart.app` |
| App Name | A Right Heart |
| Primary Color | #D9A87C (Soft Peach) |

## No Credentials Needed

The WebView wrapper only needs your **public deployed URL**. 
No database credentials, API keys, or secrets should ever be in the mobile app code.
All sensitive data stays safely on your Replit server.

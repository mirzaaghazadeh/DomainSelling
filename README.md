# Domain For Sale Landing Page 

![Domain Sale Preview](https://i.ibb.co/QCfB7Xz/Screenshot-2025-01-03-at-12-15-26-PM.png)

A modern, responsive landing page for domains that are for sale. Built with React, TypeScript, and Tailwind CSS.
## Preview
For a live preview, visit [Here](https://domainselling.navid.tr/)


## Features

- ✅ Get Domain Name From URL 
- 🌐 Clean, professional design
- 🎨 Smooth animations and transitions
- 📱 Fully responsive layout (mobile-friendly)
- 🔄 Animated browser title (for attention)
- 🌍 Bilingual support (English/Persian) 
- 📧 One-click email reveal and copy (no email obfuscation)
- 💰 Dynamic price display (configurable via `price.txt` for easy updates without code changes)
- 🎯 Automatic language detection for Iranian visitors (Detection With Cloudflare Header : `CF-IPCountry`)
- ✨ Gentle animations for better user experience


# Setup Guide
## Option 1: Quick Deploy

For users who just want to use the pre-built files.

1. Download the latest release from the Releases page
2. Extract the `dist` folder
3. Configure your domain:
    - Open `price.txt` and update the price
    - Open `main-[hash].js` and search for `me@navid.tr` to replace with your email

4. Upload the contents of the `dist` folder to your web hosting:
   ```
   dist/
   ├── index.html
   ├── price.txt
   └── assets/
       ├── main-[hash].js
       └── main-[hash].css
   ```


## Option 2: Development Setup

For developers who want to customize and build the project.

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd DomainSelling
```

2. Install dependencies:
```bash
npm install
```

3. Configure your domain price:
```bash
echo "$YOUR_PRICE" > public/price.txt
```
Or Create this manually (`public/price.txt`) and write your price in it.

4. Update the contact email:
    - Open `src/App.tsx`
    - Change the `email` constant to your email address

5. Start development server:
```bash
npm run dev
```

6. Build for production:
```bash
npm run build
```

The production files will be in the `dist` directory.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Customization

1. Update the domain price in `public/price.txt`
2. Modify contact email in `src/App.tsx`
3. Adjust translations in `src/translations.ts`
4. Customize animations in `tailwind.config.js`
5. Update title animation settings in `src/utils/titleAnimation.ts`



## Project Structure

```
├── public/
│   └── price.txt           # Domain price configuration
├── src/
│   ├── components/        # React components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main application component
│   ├── translations.ts    # Language translations
│   └── types.ts           # TypeScript type definitions
└── package.json           # Project dependencies and scripts
```

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons
- ESLint

### Hosting Recommendations

1. **Static Hosting Services**
    - Netlify
    - Vercel
    - GitHub Pages

2. **Traditional Web Hosting**
    - Upload dist folder contents via FTP/SFTP
    - Set index.html as default document


### Important Notes

- The site is completely static and requires no server-side processing
- All files must be served from the same domain
- Ensure your web server is configured to serve `.txt` files correctly

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Figma i18n (String) Extractor

**Extract text strings from Figma designs for internationalization (i18n) in seconds.** A powerful, free Figma plugin that automatically extracts all text content from frames and exports it as JSON—perfect for developers, designers, and localization teams.

---

## 🌍 Overview

The **Figma i18n String Extractor** simplifies the internationalization workflow by automatically extracting all text strings from your Figma designs into a clean, developer-ready JSON format. No more manual copying—just select a frame, extract strings, and export to your codebase.

Perfect for **web developers**, **mobile app developers**, **UX/UI designers**, and **localization teams** working on multi-language products.

---

## ✨ Key Features

### 🚀 **One-Click String Extraction**
Instantly extract all text content from any frame, component, or group in your Figma design. The plugin recursively traverses all nested layers to find every text element.

### 📋 **Export to JSON Format**
Get perfectly formatted JSON output with customizable key naming conventions. Choose between `snake_case` or `camelCase` to match your project's coding standards.

### 🔄 **Real-Time Updates**
Switch between frames and the plugin automatically updates the extracted strings. No need to manually refresh—just select a new frame and see instant results.

### 🎯 **Smart Key Naming**
Text layer names become JSON keys automatically. The plugin intelligently converts layer names into developer-friendly identifiers, removing special characters and applying your chosen case style.

### 📊 **Detailed Statistics**
View comprehensive metrics including:
- Total number of text strings extracted
- Unique key count
- JSON file size
- Frame information

### 🎨 **Clean, Modern Interface**
Minimal, professional UI inspired by shadcn design system. Easy to use with clear visual hierarchy and intuitive controls.

### ⚡ **Lightning Fast**
Processes hundreds of text elements in milliseconds. Works efficiently even with complex, deeply nested designs.

---

## 🎯 Who Can Use This Plugin?

### ✅ **Developers**
- Extract UI strings for React, Vue, Angular, or any web framework
- Generate i18n translation files for your codebase
- Quickly audit text content in designs
- Create translation keys for localization libraries (react-intl, i18next, vue-i18n, etc.)

### ✅ **Designers**
- Document all text content in designs
- Share copywriting with content teams
- Create text inventories for design systems
- Export strings for localization review

### ✅ **Product Managers**
- Audit product copy across multiple screens
- Generate content inventories for documentation
- Share text with marketing teams
- Track UI copy changes

### ✅ **Localization Teams**
- Extract source strings for translation
- Generate translation key templates
- Audit text content across designs
- Prepare files for translation management systems

### ✅ **Content Writers**
- Review all UI copy in one place
- Export text for spell-checking and editing
- Create style guide documentation

---

## 📖 How to Use

### Step 1: Install the Plugin
1. Open any Figma file
2. Go to **Resources** → **Plugins** → Search for "**Figma i18n String Extractor**"
3. Click **Run** to launch the plugin

### Step 2: Select a Frame
- Click on any **frame**, **component**, **group**, or **section** in your Figma canvas
- The plugin works with any layer that contains text elements
- You can select design screens, component sets, or entire pages

### Step 3: Choose Your Key Format
Toggle between two naming conventions:
- **`snake_case`**: `welcome_message`, `sign_up_button`, `user_profile_title`
- **`camelCase`**: `welcomeMessage`, `signUpButton`, `userProfileTitle`

### Step 4: Copy JSON Output
- Click **"Copy to clipboard"** to copy the entire JSON object
- The button will show **"✓ Copied to clipboard"** for confirmation
- Paste directly into your code editor or translation file

### Step 5: Switch Frames (Optional)
- Select a different frame in Figma
- The plugin automatically updates with new strings
- No need to close and reopen—it's always in sync

---

## 🔧 Key Format Conversion

The plugin automatically converts text layer names into clean, code-ready keys:

| Layer Name | snake_case | camelCase |
|------------|------------|-----------|
| Welcome Message | `welcome_message` | `welcomeMessage` |
| Sign Up Button! | `sign_up_button` | `signUpButton` |
| User-Profile/Title | `user_profile_title` | `userProfileTitle` |
| Footer © 2024 | `footer_2024` | `footer2024` |

---

## 🔒 Privacy & Permissions

- ✅ **No data collection**: Your design data never leaves Figma
- ✅ **No network access**: Plugin runs entirely locally
- ✅ **Read-only access**: Plugin only reads text, never modifies your designs
- ✅ **Works offline**: No internet connection required
- ✅ **View access compatible**: Works even if you only have view permissions on the file

---

## 🛠️ For Developers

### Tech Stack
- **Language**: TypeScript
- **API**: Figma Plugin API
- **UI**: HTML/CSS/JavaScript (no frameworks)
- **Build**: TypeScript Compiler

### Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/figma-i18n-extractor.git
cd figma-i18n-extractor
```

2. **Install dependencies**
```bash
npm install
```

3. **Build the plugin**
```bash
npm run build
# or watch for changes
npm run watch
```

4. **Load in Figma**
- Open Figma Desktop App
- Go to **Plugins** → **Development** → **Import plugin from manifest**
- Select `manifest.json` from the project directory

### Project Structure
```
figma-i18n-extractor/
├── code.ts              # Main plugin logic
├── code.js              # Compiled JavaScript
├── ui.html              # Plugin UI (includes CSS & JS)
├── manifest.json        # Figma plugin manifest
├── tsconfig.json        # TypeScript configuration
├── package.json         # NPM dependencies
└── README.md           # Documentation
```

---

## 📝 License

MIT License - Feel free to use, modify, and distribute.

# Financial Dashboard - Wealth Elite

A modern, responsive financial dashboard built with Next.js 14, showcasing comprehensive wealth management analytics and data visualizations.

## 🚀 Features

- **Real-time Dashboard**: Live financial metrics with AUM and SIP tracking
- **Interactive Charts**: Bubble charts, bar+line combos, and multi-line area charts
- **Time Range Filtering**: Dynamic data filtering (3 Days, 7 Days, 10 Days, 30 Days)
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Mode**: Complete dark theme with persistent settings
- **Mock API**: Full API structure with realistic financial data
- **Loading Animations**: Smooth loading states for better UX

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Charts**: Recharts library for all visualizations
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Dark Mode**: Next-themes integration

## 📊 Dashboard Components

### Core Metrics
- **AUM (Assets Under Management)**: ₹12.19 Cr with MoM tracking
- **SIP (Systematic Investment Plan)**: ₹1.39 Lakh with trend analysis

### Analytics Sections
- **Transaction Stats**: Purchases, Redemptions, Rejections tracking
- **Client Segmentation**: Interactive bubble chart with 4 client categories
- **SIP Business**: Combined bar and line chart for monthly performance
- **Monthly MIS**: Multi-line area chart for portfolio analysis

### Features
- Dynamic time range filtering
- Comprehensive navigation menu
- Responsive stat cards with icons
- Professional color scheme matching brand guidelines

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd financial-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
financial-dashboard/
├── app/
│   ├── api/dashboard/route.ts    # Mock API endpoints
│   ├── globals.css               # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main dashboard
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── clients-chart.tsx        # Client segmentation bubble chart
│   ├── dashboard-stats.tsx      # Statistics overview cards
│   ├── monthly-mis-chart.tsx    # Multi-line area chart
│   └── sip-business-chart.tsx   # Combined bar+line chart
└── lib/
    └── utils.ts                 # Utility functions
```

## 🎨 Design System

### Colors
- **Primary**: Red (#dc2626) - Navigation and primary buttons
- **Success**: Green (#16a34a) - Positive trends and new items
- **Info**: Blue (#3b82f6) - Charts and informational elements
- **Warning**: Orange (#f59e0b) - Neutral states
- **Error**: Red variants for critical states

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Clear headings with proper spacing
- **Readability**: Optimized line heights and contrast ratios

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 API Structure

### Dashboard Data Endpoint
```typescript
GET /api/dashboard?timeRange=3Days

Response:
{
  "success": true,
  "data": {
    "aum": { "current": 12.19, "unit": "Cr", "momChange": 0.77 },
    "sip": { "current": 1.39, "unit": "Lakh", "momChange": 0 },
    "stats": { /* transaction statistics */ },
    "clients": { /* client segmentation data */ },
    "sipBusiness": [ /* monthly SIP performance */ ],
    "monthlyMis": [ /* portfolio analysis data */ ]
  },
  "timeRange": "3Days",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🎯 Key Features Implemented

- ✅ Complete navigation matching original design
- ✅ AUM and SIP cards with trend indicators  
- ✅ Interactive time range filtering
- ✅ Statistical overview with icons and actions
- ✅ Three chart types: bubble, bar+line, multi-line area
- ✅ Dark mode toggle with persistence
- ✅ Mobile-first responsive design
- ✅ Loading states and animations
- ✅ Mock API with realistic data structure
- ✅ TypeScript throughout for type safety

## 🚀 Performance

- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Responsive images with proper optimization
- **Loading**: Skeleton states and progressive enhancement
- **SEO**: Meta tags and semantic HTML structure

## 📱 Mobile Experience

- Touch-friendly interface with proper spacing
- Horizontal scrolling for navigation on mobile
- Responsive charts that adapt to screen size
- Optimized performance for mobile devices

## 🔮 Future Enhancements

- Real-time data updates with WebSocket integration
- Advanced filtering and search capabilities
- Export functionality for reports and charts
- User authentication and personalization
- Advanced analytics with drill-down capabilities

## 📄 License

This project is created for demonstration purposes as part of a technical assignment.
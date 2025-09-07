import { NextResponse } from 'next/server';

// Mock API data
const dashboardData = {
  aum: {
    current: 12.19,
    unit: 'Cr',
    momChange: 0.77,
    isPositive: true,
    trend: [
      { month: 'Jan', value: 10.5 },
      { month: 'Feb', value: 11.2 },
      { month: 'Mar', value: 11.8 },
      { month: 'Apr', value: 12.19 }
    ]
  },
  sip: {
    current: 1.39,
    unit: 'Lakh',
    momChange: 0,
    isPositive: true,
    trend: [
      { month: 'Jan', value: 1.35 },
      { month: 'Feb', value: 1.37 },
      { month: 'Mar', value: 1.39 },
      { month: 'Apr', value: 1.39 }
    ]
  },
  stats: {
    purchases: { value: 0, amount: '0.00 INR', trend: 'stable' },
    redemptions: { value: 0, amount: '0.00 INR', trend: 'stable' },
    rejTransactions: { value: 0, amount: '0.00 INR', trend: 'stable' },
    sipRejections: { value: 0, amount: '0.00 INR', trend: 'stable' },
    newSip: { value: 0, amount: '0.00 INR', trend: 'stable' }
  },
  clients: {
    total: 4427,
    segments: [
      { name: 'Active', value: 3824, percentage: 86.4 },
      { name: 'InActive', value: 541, percentage: 12.2 },
      { name: 'Online', value: 60, percentage: 1.4 },
      { name: 'New', value: 2, percentage: 0.05 }
    ]
  },
  sipBusiness: [
    { month: 'Mar', investment: 0.4, returns: 2.2 },
    { month: 'Apr', investment: 1.6, returns: 1.8 },
    { month: 'May', investment: 1.4, returns: 0.2 },
    { month: 'Jun', investment: 1.6, returns: 0.0 }
  ],
  monthlyMis: [
    { month: 'Jan', portfolio: -0.10, benchmark: 0.25, index: 0.15 },
    { month: 'Feb', portfolio: -0.05, benchmark: 0.30, index: 0.20 },
    { month: 'Mar', portfolio: 0.00, benchmark: 0.35, index: 0.25 },
    { month: 'Apr', portfolio: 0.10, benchmark: 0.40, index: 0.30 },
    { month: 'May', portfolio: 0.05, benchmark: 0.45, index: 0.35 },
    { month: 'Jun', portfolio: -0.15, benchmark: 0.50, index: 0.40 },
    { month: 'Jul', portfolio: -0.20, benchmark: 0.35, index: 0.25 }
  ]
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const timeRange = searchParams.get('timeRange') || '30 Days';
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Filter data based on time range (simplified)
  let filteredData = { ...dashboardData };
  
  if (timeRange === '3 Days') {
    filteredData.sipBusiness = dashboardData.sipBusiness.slice(-3);
    filteredData.monthlyMis = dashboardData.monthlyMis.slice(-3);
  } else if (timeRange === '7 Days') {
    filteredData.sipBusiness = dashboardData.sipBusiness;
    filteredData.monthlyMis = dashboardData.monthlyMis.slice(-7);
  } else if (timeRange === '10 Days') {
    filteredData.monthlyMis = dashboardData.monthlyMis.slice(-7);
  }
  
  return NextResponse.json({
    success: true,
    data: filteredData,
    timestamp: new Date().toISOString(),
    timeRange
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  // Handle dynamic filtering or updates
  return NextResponse.json({
    success: true,
    message: 'Data updated successfully',
    data: body
  });
}
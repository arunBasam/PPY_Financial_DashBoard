'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';

interface PDFGeneratorProps {
  data: {
    aum: { current: number; unit: string; momChange: number; isPositive: boolean };
    sip: { current: number; unit: string; momChange: number; isPositive: boolean };
    stats: {
      purchases: { value: number; amount: string };
      redemptions: { value: number; amount: string };
      rejTransactions: { value: number; amount: string };
      sipRejections: { value: number; amount: string };
      newSip: { value: number; amount: string };
    };
  };
}

export default function PDFGenerator({ data }: PDFGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // ----- Build hidden container -----
      const content = document.createElement('div');
      content.style.width = '900px';
      content.style.padding = '30px';
      content.style.backgroundColor = 'white';
      content.style.position = 'absolute';
      content.style.left = '-9999px';
      document.body.appendChild(content);

      // --- AUM & SIP arrows ---
      const aumChange = data.aum.isPositive
        ? `<div style="color:#10b981;font-weight:600;">▲ +${data.aum.momChange}% MoM</div>`
        : `<div style="color:#ef4444;font-weight:600;">▼ ${data.aum.momChange}% MoM</div>`;

      const sipChange = data.sip.isPositive
        ? `<div style="color:#10b981;font-weight:600;">▲ +${data.sip.momChange}% MoM</div>`
        : `<div style="color:#ef4444;font-weight:600;">▼ ${data.sip.momChange}% MoM</div>`;

      // --- Template ---
      content.innerHTML = `
        <!-- HEADER -->
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
            <div style="width: 28px; height: 28px; background: linear-gradient(45deg, #3b82f6, #10b981); border-radius: 4px; margin-right: 10px;"></div>
            <h1 style="font-size: 24px; font-weight: bold; color: #1f2937; margin: 0;">Wealth Elite</h1>
          </div>
          <h2 style="font-size: 18px; color: #6b7280; margin: 0;">Financial Dashboard Report</h2>
          <p style="color: #9ca3af; margin: 6px 0 0 0;">${new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}</p>
        </div>

        <!-- AUM + SIP -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
          <div style="background: #f9fafb; padding: 20px; border-radius: 10px; border: 1px solid #e5e7eb;">
            <h3 style="font-size: 14px; color: #6b7280; margin: 0 0 8px 0;">Assets Under Management</h3>
            <div style="display: flex; align-items: baseline; margin-bottom: 10px;">
              <span style="font-size: 28px; font-weight: bold; color: #1f2937;">AUM ${data.aum.current}</span>
              <span style="font-size: 14px; color: #6b7280; margin-left: 6px;">${data.aum.unit}</span>
            </div>
            ${aumChange}
          </div>

          <div style="background: #f9fafb; padding: 20px; border-radius: 10px; border: 1px solid #e5e7eb;">
            <h3 style="font-size: 14px; color: #6b7280; margin: 0 0 8px 0;">Systematic Investment Plan</h3>
            <div style="display: flex; align-items: baseline; margin-bottom: 10px;">
              <span style="font-size: 28px; font-weight: bold; color: #1f2937;">SIP ${data.sip.current}</span>
              <span style="font-size: 14px; color: #6b7280; margin-left: 6px;">${data.sip.unit}</span>
            </div>
            ${sipChange}
          </div>
        </div>

        <!-- TRANSACTION STATS -->
        <div style="margin-bottom: 25px;">
          <h3 style="font-size: 16px; font-weight: bold; color: #1f2937; margin-bottom: 15px;">Transaction Statistics</h3>
          <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px;">
            <div style="background: #fef2f2; padding: 12px; border-radius: 8px; text-align: center;">
              <div style="font-size: 18px; font-weight: bold; color: #1f2937;">${data.stats.purchases.value}</div>
              <div style="font-size: 12px; font-weight: 600; color: #374151;">Purchases</div>
              <div style="font-size: 11px; color: #6b7280;">${data.stats.purchases.amount}</div>
            </div>
            <div style="background: #eff6ff; padding: 12px; border-radius: 8px; text-align: center;">
              <div style="font-size: 18px; font-weight: bold; color: #1f2937;">${data.stats.redemptions.value}</div>
              <div style="font-size: 12px; font-weight: 600; color: #374151;">Redemptions</div>
              <div style="font-size: 11px; color: #6b7280;">${data.stats.redemptions.amount}</div>
            </div>
            <div style="background: #f9fafb; padding: 12px; border-radius: 8px; text-align: center;">
              <div style="font-size: 18px; font-weight: bold; color: #1f2937;">${data.stats.rejTransactions.value}</div>
              <div style="font-size: 12px; font-weight: 600; color: #374151;">Rej Transactions</div>
              <div style="font-size: 11px; color: #6b7280;">${data.stats.rejTransactions.amount}</div>
            </div>
            <div style="background: #fef2f2; padding: 12px; border-radius: 8px; text-align: center;">
              <div style="font-size: 18px; font-weight: bold; color: #1f2937;">${data.stats.sipRejections.value}</div>
              <div style="font-size: 12px; font-weight: 600; color: #374151;">SIP Rejections</div>
              <div style="font-size: 11px; color: #6b7280;">${data.stats.sipRejections.amount}</div>
            </div>
            <div style="background: #f0fdf4; padding: 12px; border-radius: 8px; text-align: center;">
              <div style="font-size: 18px; font-weight: bold; color: #1f2937;">${data.stats.newSip.value}</div>
              <div style="font-size: 12px; font-weight: 600; color: #374151;">New SIP</div>
              <div style="font-size: 11px; color: #6b7280;">${data.stats.newSip.amount}</div>
            </div>
          </div>
        </div>
      `;

      // Capture content
      const headerCanvas = await html2canvas(content, { scale: 2, useCORS: true, backgroundColor: '#fff' });
      document.body.removeChild(content);

      const headerImgData = headerCanvas.toDataURL('image/png');
      const margin = 10;
      const maxW = pdfWidth - margin * 2;
      const maxH = pdfHeight - margin * 2;
      const scale = Math.min(maxW / headerCanvas.width, maxH / headerCanvas.height);
      const targetW = headerCanvas.width * scale;
      const targetH = headerCanvas.height * scale;

      let yPos = margin;
      pdf.addImage(headerImgData, 'PNG', margin, yPos, targetW, targetH);

      // --- Charts section ---
      yPos += targetH + 10;
      const chartSelectors = ['#clients-chart', '[data-chart="sip-business"]', '[data-chart="monthly-mis"]'];
      const chartWidth = (pdfWidth - margin * 2 - 20) / 3;
      const chartHeight = 80;

      let xPos = margin;
      for (const selector of chartSelectors) {
        const el = document.querySelector(selector) as HTMLElement | null;
        if (el) {
          const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: '#fff' });
          const imgData = canvas.toDataURL('image/png');
          pdf.addImage(imgData, 'PNG', xPos, yPos, chartWidth, chartHeight);
          xPos += chartWidth + 10;
        }
      }

      // Footer
      pdf.setFontSize(10);
      pdf.setTextColor(120);
      pdf.text('Generated from Wealth Elite Financial Dashboard', pdfWidth / 2, pdfHeight - 10, { align: 'center' });

      // ---- Save ----
      const fileName = `wealth-elite-${Date.now()}.pdf`;

      if (Capacitor.isNativePlatform()) {
        const base64 = pdf.output('datauristring').split(',')[1];

        try {
          await Filesystem.writeFile({
            path: fileName,
            data: base64,
            directory: Directory.Documents, // ✅ saved to Documents folder
            recursive: true,
          });
          alert(`✅ PDF saved to Documents as: ${fileName}`);
        } catch (err) {
          console.error('❌ File write error:', err);
          alert('Storage error: ' + JSON.stringify(err));
        }
      } else {
        pdf.save(fileName);
      }
    } catch (err) {
      console.error('PDF generation error:', err);
      alert('❌ Could not generate PDF.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button onClick={generatePDF} disabled={isGenerating} className="bg-red-600 hover:bg-red-700 text-white">
      {isGenerating ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Generating...
        </>
      ) : (
        <>
          <Download className="h-4 w-4 mr-2" />
          Download PDF Report
        </>
      )}
    </Button>
  );
}

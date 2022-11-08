import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const saveToPDF = (nativeElement: HTMLElement, pdfName: string) => {
    html2canvas(nativeElement).then((canvas: any) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
        });
  
        const imageProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imageProps.height * pdfWidth) / imageProps.width;
  
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(pdfName);
      });
}
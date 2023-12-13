import { usePDF } from "react-to-pdf";
import Resume from "./Resume.jsx";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
function FormTopLevel({ getBGColor, getFontColor }) {
  const handlePDF = () => {
    const input = document.querySelector(".resume-comp");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();

      let doc = new jsPDF("p", "mm", "a4");

      let width = doc.internal.pageSize.getWidth();
      let height = doc.internal.pageSize.getHeight();

      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("download.pdf");
    });
  };

  return (
    <div className="form-top">
      <div className="colors">
        <p>BG color</p>
        <input type="color" onChange={getBGColor}></input>
        <p>Font color</p>
        <input type="color" onChange={getFontColor}></input>
      </div>
      <div className="download">
        <button onClick={handlePDF}>Download PDF</button>
      </div>
    </div>
  );
}

export default FormTopLevel;

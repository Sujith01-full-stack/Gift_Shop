import React from "react";
import {
  FaFileAlt,
  FaDownload,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign,
  FaBoxOpen,
} from "react-icons/fa";
import "./Reports.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Reports = () => {

  const reports = [
    {
      title: "Today's Sales",
      value: "₹12,500",
      icon: <FaRupeeSign />,
    },
    {
      title: "Total Orders",
      value: "458",
      icon: <FaShoppingCart />,
    },
    {
      title: "Customers",
      value: "186",
      icon: <FaUsers />,
    },
    {
      title: "Products",
      value: "120",
      icon: <FaBoxOpen />,
    },
  ];

 const handleDownload = () => {

  const doc = new jsPDF("p", "mm", "a4");

  // ===== Title =====
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, 210, 35, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Spider Gift Store", 14, 18);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Monthly Sales Report", 14, 27);

  // ===== Date =====
  doc.setTextColor(80);
  doc.setFontSize(10);
  doc.text(
    `Generated: ${new Date().toLocaleDateString()}`,
    14,
    42
  );

  // ===== Summary =====
  autoTable(doc, {
    startY: 50,
    head: [["Report", "Value"]],
    body: [
      ["Today's Sales", "₹12,500"],
      ["Total Orders", "458"],
      ["Customers", "186"],
      ["Products", "120"],
    ],
    theme: "grid",
    headStyles: {
      fillColor: [37, 99, 235],
      textColor: [255, 255, 255],
      halign: "center",
    },
    styles: {
      halign: "center",
      fontSize: 11,
    },
  });

  // ===== Monthly Report =====
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 12,
    head: [["Month", "Orders", "Revenue", "Customers"]],
    body: [
      ["January", "120", "₹45,000", "65"],
      ["February", "145", "₹58,000", "78"],
      ["March", "180", "₹72,000", "90"],
      ["April", "210", "₹91,000", "108"],
      ["May", "240", "₹1,15,000", "125"],
      ["June", "275", "₹1,42,000", "148"],
    ],
    theme: "striped",
    headStyles: {
      fillColor: [0, 153, 255],
      textColor: [255, 255, 255],
      halign: "center",
    },
    styles: {
      fontSize: 10,
      halign: "center",
    },
  });

  // ===== Footer =====
  doc.setFontSize(10);
  doc.setTextColor(120);
  doc.text(
    "© Spider Gift Store | Thank you for your business",
    14,
    285
  );

  doc.save("Spider_Gift_Store_Report.pdf");
};

  return (
    <div className="reports-page">

      <div className="reports-header">

        <h2>
          <FaFileAlt />
          Reports
        </h2>

        <button
  className="download-btn"
  onClick={handleDownload}
>
          <FaDownload />
          Download Report
        </button>

      </div>

      <div className="report-grid">

        {reports.map((item, index) => (

          <div
            className="report-card"
            key={index}
          >

            <div className="report-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <h1>{item.value}</h1>

          </div>

        ))}

      </div>

      <div className="report-table">

        <h3>Monthly Report</h3>

        <table>

          <thead>

            <tr>

              <th>Month</th>
              <th>Orders</th>
              <th>Revenue</th>
              <th>Customers</th>

            </tr>

          </thead>

          <tbody>

            <tr>
              <td>January</td>
              <td>120</td>
              <td>₹45,000</td>
              <td>65</td>
            </tr>

            <tr>
              <td>February</td>
              <td>145</td>
              <td>₹58,000</td>
              <td>78</td>
            </tr>

            <tr>
              <td>March</td>
              <td>180</td>
              <td>₹72,000</td>
              <td>90</td>
            </tr>

            <tr>
              <td>April</td>
              <td>210</td>
              <td>₹91,000</td>
              <td>108</td>
            </tr>

            <tr>
              <td>May</td>
              <td>240</td>
              <td>₹1,15,000</td>
              <td>125</td>
            </tr>

            <tr>
              <td>June</td>
              <td>275</td>
              <td>₹1,42,000</td>
              <td>148</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Reports;
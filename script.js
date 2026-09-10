const elementos = [
  { num: 1, color: "#dcfce7", textColor: "#166534", titulo: "Efectivo y Equivalentes de Efectivo", desc: "Registra el efectivo disponible y sus equivalentes.", cuentas: "10 cuentas" },
  { num: 2, color: "#dbeafe", textColor: "#1e40af", titulo: "Activos Financieros", desc: "Incluye cuentas por cobrar y otros activos financieros.", cuentas: "23 cuentas" },
  { num: 3, color: "#f3e8ff", textColor: "#6b21a8", titulo: "Inventarios", desc: "Registra los bienes destinados a la venta o producción.", cuentas: "13 cuentas" },
  { num: 4, color: "#ffedd5", textColor: "#9a3412", titulo: "Activos No Corrientes Mantenidos para la Venta", desc: "Activos no corrientes que se mantienen para la venta.", cuentas: "5 cuentas" },
  { num: 5, color: "#ffe4e6", textColor: "#9f1239", titulo: "Inversiones Mobiliarias e Inmobiliarias", desc: "Registra las inversiones en títulos y bienes inmuebles.", cuentas: "8 cuentas" },
  { num: 6, color: "#ccfbf1", textColor: "#115e59", titulo: "Propiedades, Planta y Equipo", desc: "Registra los activos tangibles de uso en la empresa.", cuentas: "23 cuentas" },
  { num: 7, color: "#f3e8ff", textColor: "#581c87", titulo: "Activos Intangibles", desc: "Incluye activos identificables de carácter no monetario.", cuentas: "8 cuentas" },
  { num: 8, color: "#fef3c7", textColor: "#92400e", titulo: "Pasivos", desc: "Registra las obligaciones presentes de la empresa.", cuentas: "29 cuentas" }
];

const container = document.getElementById("gridElements");

elementos.forEach(el => {
  const card = document.createElement("div");
  card.className = "card-element";
  card.innerHTML = `
    <div class="card-header">
      <span class="num-badge" style="background:${el.color}; color:${el.textColor};">${el.num}</span>
    </div>
    <h3>${el.titulo}</h3>
    <p>${el.desc}</p>
    <span class="count-tag" style="background:${el.color}; color:${el.textColor};">${el.cuentas}</span>
  `;
  container.appendChild(card);
});

// BASE DE DATOS DE ELEMENTOS DEL PCGE (0 AL 9)
const elementos = [
  { num: 1, color: "#dcfce7", textColor: "#166534", titulo: "Activo Realizable / Disponible", desc: "Efectivo, inversiones y cuentas por cobrar.", cuentasCount: "3 cuentas principales" },
  { num: 2, color: "#dbeafe", textColor: "#1e40af", titulo: "Inventarios", desc: "Mercaderías, materias primas y productos.", cuentasCount: "3 cuentas principales" },
  { num: 3, color: "#f3e8ff", textColor: "#6b21a8", titulo: "Activo Inmovilizado", desc: "Inmuebles, maquinaria, equipos e intangibles.", cuentasCount: "2 cuentas principales" },
  { num: 4, color: "#ffedd5", textColor: "#9a3412", titulo: "Pasivo", desc: "Tributos, remuneraciones y cuentas por pagar.", cuentasCount: "3 cuentas principales" },
  { num: 5, color: "#ffe4e6", textColor: "#9f1239", titulo: "Patrimonio Neto", desc: "Capital, reservas y resultados acumulados.", cuentasCount: "2 cuentas principales" },
  { num: 6, color: "#ccfbf1", textColor: "#115e59", titulo: "Gastos por Naturaleza", desc: "Compras, servicios, tributos y personal.", cuentasCount: "3 cuentas principales" },
  { num: 7, color: "#f3e8ff", textColor: "#581c87", titulo: "Ingresos", desc: "Ventas, producción imputada y ganancias.", cuentasCount: "1 cuenta principal" },
  { num: 8, color: "#fef3c7", textColor: "#92400e", titulo: "Saldos Intermediarios", desc: "Cierre del ejercicio y determinación del resultado.", cuentasCount: "0 cuentas cargadas" },
  { num: 9, color: "#fed7aa", textColor: "#c2410c", titulo: "Contabilidad Analítica", desc: "Costos de producción y gastos por función.", cuentasCount: "4 cuentas principales" },
  { num: 0, color: "#e2e8f0", textColor: "#334155", titulo: "Cuentas del Orden", desc: "Bienes fuera de balance, contingencias y compromisos.", cuentasCount: "3 cuentas principales" }
];

// BASE DE DATOS DE CUENTAS CONTABLES (PCGE PERÚ)
const cuentasDB = [
  // Elemento 1
  { codigo: "10", nombre: "Efectivo y Equivalentes de Efectivo", elemento: 1, debe: "Los ingresos de dinero en efectivo y depósitos en bancos.", haber: "Los pagos o salidas de dinero en efectivo y cheques emitidos." },
  { codigo: "11", nombre: "Inversiones Financieras", elemento: 1, debe: "El costo de adquisición de los instrumentos financieros.", haber: "La venta o redención de los instrumentos financieros." },
  { codigo: "12", nombre: "Cuentas por Cobrar Comerciales – Terceros", elemento: 1, debe: "El importe de las facturas o boletas emitidas por ventas de bienes o servicios.", haber: "El cobro parcial o total de las facturas a los clientes." },

  // Elemento 2
  { codigo: "20", nombre: "Mercaderías", elemento: 2, debe: "El costo de las mercaderías adquiridas para la venta.", haber: "El costo de las mercaderías vendidas (salida de almacén)." },
  { codigo: "21", nombre: "Productos Terminados", elemento: 2, debe: "El costo de los productos manufacturados o procesados.", haber: "El despacho o venta de los productos terminados." },
  { codigo: "24", nombre: "Materias Primas", elemento: 2, debe: "El costo de insumos o materias primas compradas.", haber: "El consumo de materias primas enviadas a producción." },

  // Elemento 3
  { codigo: "33", nombre: "Propiedades, Planta y Equipo", elemento: 3, debe: "Las compras de inmuebles, vehículos, maquinarias y computadoras de uso propio.", haber: "La venta, retiro o baja de activos por obsolescencia." },
  { codigo: "39", nombre: "Depreciación y Amortización Acumulada", elemento: 3, debe: "La baja de la depreciación acumulada por retiro del activo.", haber: "El registro del gasto por depreciación mensual de los activos." },

  // Elemento 4
  { codigo: "40", nombre: "Tributos, Contraprestaciones y Aportes por Pagar", elemento: 4, debe: "El pago efectuado a SUNAT, Essalud, ONP o municipalidades.", haber: "El IGV por pagar cobrado en ventas, la Renta mensual retenida y los aportes pendientes." },
  { codigo: "41", nombre: "Remuneraciones y Participaciones por Pagar", elemento: 4, debe: "El pago de planillas, sueldos, gratificaciones o CTS a los trabajadores.", haber: "El valor de las remuneraciones devengadas pendientes de pago." },
  { codigo: "42", nombre: "Cuentas por Pagar Comerciales – Terceros", elemento: 4, debe: "El pago parcial o total de las facturas de proveedores.", haber: "El registro de las facturas recibidas de proveedores por compras a crédito." },

  // Elemento 5
  { codigo: "50", nombre: "Capital", elemento: 5, debe: "Las reducciones de capital social formalizadas.", haber: "Los aportes iniciales de los socios o aumentos de capital." },
  { codigo: "59", nombre: "Resultados Acumulados", elemento: 5, debe: "La aplicación de las pérdidas del ejercicio.", haber: "La acumulación de las utilidades de ejercicios anteriores." },

  // Elemento 6
  { codigo: "60", nombre: "Compras", elemento: 6, debe: "El importe de las compras de mercaderías o materias primas según factura.", haber: "El saldo de compras al cierre del ejercicio con abono a la cuenta 80." },
  { codigo: "62", nombre: "Gastos de Personal y Directores", elemento: 6, debe: "El gasto total por sueldos, Essalud, gratificaciones y beneficios sociales.", haber: "El cierre de la cuenta al final del año." },
  { codigo: "63", nombre: "Gastos por Servicios Prestados por Terceros", elemento: 6, debe: "Los pagos por alquileres, luz, agua, internet, honorarios de contadores o publicidad.", haber: "El cierre del saldo al final del ejercicio." },

  // Elemento 7
  { codigo: "70", nombre: "Ventas", elemento: 7, debe: "La cancelación de las ventas devueltas o descuentos otorgados.", haber: "El importe de las ventas de mercaderías o servicios facturados en el periodo." },

  // Elemento 9 (Contabilidad Analítica de Explotación)
  { codigo: "91", nombre: "Costos por Distribuir", elemento: 9, debe: "Los costos indirectos incurridos pendientes de distribución.", haber: "La asignación de los costos a los centros de producción o administración." },
  { codigo: "92", nombre: "Costos de Producción", elemento: 9, debe: "Los costos directos e indirectos imputados al proceso productivo.", haber: "La transferencia de los productos terminados o en proceso al cierre del periodo." },
  { codigo: "94", nombre: "Gastos de Administración", elemento: 9, debe: "Los gastos administrativos imputados por destino desde las cuentas del Elemento 6.", haber: "El cierre de la cuenta al final del periodo contable." },
  { codigo: "95", nombre: "Gastos de Ventas", elemento: 9, debe: "Los gastos de distribución y ventas imputados por destino desde el Elemento 6.", haber: "El cierre de la cuenta al final del periodo contable." },

  // Elemento 0 (Cuentas del Orden)
  { codigo: "01", nombre: "Bienes y Valores Entregados", elemento: 0, debe: "El valor de los bienes o valores entregados en custodia, garantía o consignación.", haber: "La devolución o cancelación de los bienes o valores entregados." },
  { codigo: "02", nombre: "Garantías Recibidas", elemento: 0, debe: "El valor bruto de las garantías e hipotecas recibidas de terceros.", haber: "La devolución o extinción de la garantía al finalizar el compromiso." },
  { codigo: "04", nombre: "Deudoras por Contra", elemento: 0, debe: "El registro compensatorio de las cuentas de orden acreedoras.", haber: "La disminución o cancelación de los compromisos de orden registrados." }
];

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
  renderizarElementos();
});

function renderizarElementos() {
  const container = document.getElementById("gridElements");
  container.innerHTML = "";
  
  elementos.forEach(el => {
    const card = document.createElement("div");
    card.className = "card-element";
    card.onclick = () => verCuentasPorElemento(el.num, el.titulo);
    card.innerHTML = `
      <div class="card-header">
        <span class="num-badge" style="background:${el.color}; color:${el.textColor};">${el.num}</span>
      </div>
      <h3>${el.titulo}</h3>
      <p>${el.desc}</p>
      <span class="count-tag" style="background:${el.color}; color:${el.textColor};">${el.cuentasCount}</span>
    `;
    container.appendChild(card);
  });
}

// BÚSQUEDA DINÁMICA
function buscarCuenta() {
  const texto = document.getElementById("searchInput").value.toLowerCase().trim();
  
  if(texto === "") {
    mostrarInicio();
    return;
  }

  const filtradas = cuentasDB.filter(c => 
    c.codigo.toLowerCase().includes(texto) || c.nombre.toLowerCase().includes(texto)
  );

  mostrarResultados(`Resultados para "${texto}"`, filtradas);
}

// FILTRAR POR ELEMENTO
function verCuentasPorElemento(numElemento, tituloElemento) {
  const filtradas = cuentasDB.filter(c => c.elemento === numElemento);
  mostrarResultados(`Cuentas del Elemento ${numElemento}: ${tituloElemento}`, filtradas);
}

// VISTAS Y NAVEGACIÓN
function mostrarResultados(titulo, lista) {
  document.getElementById("vistaPrincipal").style.display = "none";
  document.getElementById("vistaResultados").style.display = "block";
  document.getElementById("tituloResultados").innerText = titulo;

  const cont = document.getElementById("listaCuentas");
  if(lista.length === 0) {
    cont.innerHTML = "<p style='color:#64748b;'>No se encontraron cuentas contables registradas para esta búsqueda.</p>";
    return;
  }

  cont.innerHTML = lista.map(c => `
    <div class="cuenta-card" onclick="abrirModal('${c.codigo}', '${c.nombre}', '${c.elemento}', '${c.debe.replace(/'/g, "\\'")}', '${c.haber.replace(/'/g, "\\'")}')">
      <div>
        <span class="cuenta-codigo">${c.codigo}</span>
        <span class="cuenta-nombre">${c.nombre}</span>
      </div>
      <span style="font-size:12px; color:#64748b;"><i class="fa-solid fa-eye"></i> Ver dinámica</span>
    </div>
  `).join("");
}

function mostrarInicio() {
  document.getElementById("searchInput").value = "";
  document.getElementById("vistaPrincipal").style.display = "block";
  document.getElementById("vistaResultados").style.display = "none";
}

function focarBuscador() {
  document.getElementById("searchInput").focus();
}

// MODAL DE DETALLES
function abrirModal(codigo, nombre, elemento, debe, haber) {
  document.getElementById("modalCodigoNombre").innerText = `${codigo} - ${nombre}`;
  document.getElementById("modalElemento").innerText = `ELEMENTO ${elemento}`;
  document.getElementById("modalDebe").innerText = debe;
  document.getElementById("modalHaber").innerText = haber;
  document.getElementById("modalCuenta").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modalCuenta").style.display = "none";
}

function cerrarModalAfuera(event) {
  if (event.target.id === "modalCuenta") {
    cerrarModal();
  }
}

function tampilkanWaktuLengkap() {
  const now = new Date();

  const hari = now.toLocaleDateString('id-ID', { weekday: 'long' });
  const tanggal = now.getDate();
  const bulan = now.toLocaleDateString('id-ID', { month: 'long' });
  const tahun = now.getFullYear();

  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  const detik = now.getSeconds().toString().padStart(2, '0');

  const el = document.getElementById("jam");
  if (el) {
    el.innerHTML =
      `${hari}, ${tanggal} ${bulan} ${tahun} | ${jam}:${menit}:${detik}`;
  }
}

setInterval(tampilkanWaktuLengkap, 1000);

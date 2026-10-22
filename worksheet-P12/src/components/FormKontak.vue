<template>
  <section id="catatan">
    <h2>Catatan Penggunaan</h2>
    <p>Bagian ini digunakan untuk mencatat perawatan yang sudah dilakukan pada motor.</p>

    <form id="form-catatan">
      <div class="form-kolom">
        <label for="nama-perawatan">Nama Perawatan</label>
        <input
          type="text"
          id="nama-perawatan"
          name="nama-perawatan"
          placeholder="Contoh: Ganti oli"
          required
        >
      </div>

      <div class="form-kolom">
        <label for="tanggal">Tanggal</label>
        <input type="date" id="tanggal" name="tanggal" required>
      </div>

      <div class="form-kolom">
        <label for="keterangan">Keterangan</label>
        <textarea
          id="keterangan"
          name="keterangan"
          rows="4"
          placeholder="Contoh: Dilakukan secara berkala"
          required
        ></textarea>
      </div>

      <button type="submit" id="btn-simpan">Simpan Catatan</button>
    </form>
  </section>
</template>

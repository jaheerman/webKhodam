$(document).ready(function () {
  $('#form-khodam').submit(function (event) {
    event.preventDefault(); // Cegah reload form

    const nama = $('#search').val().trim();

    if (nama === '') {
      alert("Nama tidak boleh kosong!");
      return;
    }

    const status = ['isi', 'kosong'];
    const randomStatus = Math.floor(Math.random() * status.length);

    let hasil;
    if (randomStatus === 0) {
      const khodamList = [
  'Kuntilanak Joging di Tol Cipularang',
  'Tuyul Jambu Ngutang di Indomaret',
  'Genderuwo Ganteng Berjaket Denim',
  'Sundel Bolong Pake Skincare',
  'Pocong Slebew naik Vespa',
  'Suster Ngesot Pakai Heels',
  'Jin Rambut Pink Fans K-pop',
  'Kuyang Ikut Fashion Week',
  'Siluman Kodok Bertato',
  'Nyi Roro Kidul Lagi Healing di Bali',
  'Tuyul Freelance IT Support',
  'Sundel Bolong Streaming Netflix',
  'Jin Botak Pake Hoodie Supreme',
  'Kuntilanak Suka Kopi Susu',
  'Pocong Main Tiktok di Kuburan',
  'Tuyul Alumni Coding Bootcamp',
  'Sungokong Naik RX-King Ngebut',
  'Mio Mirza Terbang di Angkasa',
  'Wibu Bau Bawang Level Khodam',
  'Wibu Sangean Rank SSR',
  'Jin Bu Cin Ditikung Tuyul',
  'Siluman Lintah Bucin Sama Kuntilanak',
  'Pocong Investasi Crypto',
  'Tuyul Trading Saham Syariah',
  'Jin di Dalam Lemari IKEA',
  'Suster Ngesot Buka Jastip Korea',
  'Khodam Gagal Move On Sama Manusia',
  'Kuntilanak Jadi MUA (Make Up Artist)',
  'Jin Sholat Dulu Sebelum Gangguin',
  'Tuyul Ikutan Open BO 😂',
];
      const random = Math.floor(Math.random() * khodamList.length);
      hasil = `${nama.toUpperCase()}, khodammu adalah: <br><strong>${khodamList[random]}</strong>`;
    } else {
      hasil = `${nama.toUpperCase()}, kamu tidak punya khodam 😭`;
    }

    $('#result').html(hasil);
    $('#result-container').addClass('show');
    $('#search').val('');
  });
});

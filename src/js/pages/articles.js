// Sample Articles Data (dapat diganti dengan API call)
const articlesDatabase = [
  {
    id: 1,
    title: "10 Tips Memulai MPASI yang Benar untuk Bayi 6 Bulan",
    excerpt:
      "Panduan lengkap memulai makanan pendamping ASI untuk si kecil dengan aman dan bergizi.",
    content: `
      <p>Memulai MPASI adalah momen penting dalam perjalanan tumbuh kembang bayi. Pada usia 6 bulan, sistem pencernaan bayi sudah mulai siap menerima makanan padat sebagai pendamping ASI.</p>
      
      <h4>1. Waktu yang Tepat</h4>
      <p>WHO merekomendasikan pemberian MPASI dimulai saat bayi berusia 6 bulan. Pada usia ini, ASI saja sudah tidak cukup memenuhi kebutuhan nutrisi bayi yang terus berkembang.</p>
      
      <h4>2. Tanda Bayi Siap MPASI</h4>
      <ul>
        <li>Kepala sudah tegak dan bisa duduk dengan bantuan</li>
        <li>Menunjukkan ketertarikan pada makanan</li>
        <li>Refleks menjulurkan lidah sudah berkurang</li>
        <li>Membuka mulut saat disodori sendok</li>
      </ul>
      
      <h4>3. Menu MPASI Pertama</h4>
      <p>Mulailah dengan pure atau bubur halus dari single ingredient seperti pisang, alpukat, atau ubi. Ini membantu mendeteksi alergi dengan lebih mudah.</p>
      
      <h4>4. Tekstur Makanan</h4>
      <p>Di awal, berikan makanan dengan tekstur yang sangat halus. Secara bertahap, tingkatkan teksturnya seiring bertambahnya usia bayi.</p>
      
      <h4>5. Porsi dan Frekuensi</h4>
      <p>Mulai dengan 2-3 sendok makan, 2-3 kali sehari. Tingkatkan porsi secara bertahap sesuai dengan nafsu makan bayi.</p>
      
      <h4>6. Variasi Menu</h4>
      <p>Setelah bayi terbiasa dengan satu jenis makanan, kenalkan makanan baru secara bertahap. Berikan jeda 3-5 hari sebelum mengenalkan makanan baru.</p>
      
      <h4>7. Hindari Makanan Tertentu</h4>
      <ul>
        <li>Madu (risiko botulisme untuk bayi di bawah 1 tahun)</li>
        <li>Garam dan gula tambahan</li>
        <li>Makanan yang berisiko tersedak (kacang utuh, anggur utuh)</li>
        <li>Makanan mentah atau setengah matang</li>
      </ul>
      
      <h4>8. Perhatikan Tanda Alergi</h4>
      <p>Waspadai gejala alergi seperti ruam, diare, atau muntah setelah memberikan makanan baru. Konsultasikan dengan dokter jika muncul gejala.</p>
      
      <h4>9. Tetap Berikan ASI</h4>
      <p>MPASI adalah pendamping, bukan pengganti ASI. Terus berikan ASI sesuai permintaan bayi hingga usia 2 tahun atau lebih.</p>
      
      <h4>10. Ciptakan Suasana Menyenangkan</h4>
      <p>Buat waktu makan menjadi momen yang menyenangkan. Jangan memaksa bayi makan jika ia menolak. Bersabar adalah kunci keberhasilan MPASI.</p>
    `,
    category: "nutrition",
    author: "Dr. Sarah Wijaya",
    date: "2025-12-10",
    readTime: 8,
    views: 2453,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800",
    featured: true,
    tags: ["MPASI", "Nutrisi", "Bayi 6 Bulan"],
  },
  {
    id: 2,
    title: "Cara Mencegah dan Mengatasi Stunting pada Anak",
    excerpt:
      "Stunting adalah kondisi gagal tumbuh pada anak. Kenali penyebab dan cara pencegahannya.",
    content: `
      <p>Stunting merupakan kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis. Kondisi ini dapat berdampak jangka panjang pada perkembangan fisik dan kognitif anak.</p>
      
      <h4>Apa itu Stunting?</h4>
      <p>Stunting adalah gangguan pertumbuhan dan perkembangan anak akibat kekurangan gizi kronis dan infeksi berulang, yang ditandai dengan panjang atau tinggi badan yang lebih rendah dari standar usianya.</p>
      
      <h4>Penyebab Stunting</h4>
      <ul>
        <li>Kurangnya asupan gizi sejak masa kehamilan</li>
        <li>Pemberian ASI dan MPASI yang tidak optimal</li>
        <li>Sanitasi dan akses air bersih yang buruk</li>
        <li>Infeksi berulang pada anak</li>
        <li>Kurangnya pengetahuan ibu tentang gizi</li>
      </ul>
      
      <h4>Dampak Stunting</h4>
      <p>Stunting tidak hanya berdampak pada tinggi badan anak, tetapi juga dapat menyebabkan:</p>
      <ul>
        <li>Perkembangan kognitif yang terhambat</li>
        <li>Prestasi belajar yang rendah</li>
        <li>Sistem kekebalan tubuh yang lemah</li>
        <li>Risiko penyakit kronis di masa dewasa</li>
      </ul>
      
      <h4>Cara Mencegah Stunting</h4>
      <p><strong>1. Pemenuhan Gizi Ibu Hamil</strong><br>
      Pastikan ibu hamil mendapat asupan gizi yang cukup, termasuk protein, zat besi, asam folat, dan kalsium.</p>
      
      <p><strong>2. ASI Eksklusif 6 Bulan</strong><br>
      Berikan ASI eksklusif selama 6 bulan pertama, dilanjutkan dengan MPASI yang tepat dan ASI hingga 2 tahun.</p>
      
      <p><strong>3. MPASI Bergizi</strong><br>
      Berikan MPASI yang kaya protein, vitamin, dan mineral. Pastikan variasi makanan untuk nutrisi yang lengkap.</p>
      
      <p><strong>4. Pemantauan Tumbuh Kembang</strong><br>
      Rutin ke Posyandu atau Puskesmas untuk memantau pertumbuhan anak melalui pengukuran tinggi dan berat badan.</p>
      
      <p><strong>5. Sanitasi dan Kebersihan</strong><br>
      Jaga kebersihan lingkungan, cuci tangan dengan sabun, dan pastikan akses air bersih.</p>
      
      <h4>Kapan Harus ke Dokter?</h4>
      <p>Segera konsultasi ke dokter jika:</p>
      <ul>
        <li>Anak tidak bertambah tinggi sesuai usianya</li>
        <li>Berat badan tidak naik atau malah turun</li>
        <li>Anak sering sakit atau terlihat lemas</li>
        <li>Perkembangan motorik terlambat</li>
      </ul>
    `,
    category: "health",
    author: "Dr. Ahmad Hidayat",
    date: "2025-12-08",
    readTime: 10,
    views: 3567,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
    featured: false,
    tags: ["Stunting", "Kesehatan", "Gizi Anak"],
  },
  {
    id: 3,
    title: "Milestone Perkembangan Bayi 0-12 Bulan yang Harus Diketahui",
    excerpt:
      "Pelajari tahapan perkembangan bayi dari bulan ke bulan dan tanda-tanda keterlambatan yang perlu diwaspadai.",
    content: `
      <p>Setiap bayi berkembang dengan kecepatannya sendiri, namun ada milestone atau tonggak perkembangan yang umumnya dicapai pada usia tertentu.</p>
      
      <h4>0-3 Bulan</h4>
      <ul>
        <li>Mengangkat kepala saat tengkurap</li>
        <li>Tersenyum ketika melihat orang tua</li>
        <li>Mengikuti objek dengan mata</li>
        <li>Mengeluarkan suara "ooh" dan "aah"</li>
      </ul>
      
      <h4>4-6 Bulan</h4>
      <ul>
        <li>Berguling dari posisi tengkurap ke telentang</li>
        <li>Duduk dengan bantuan</li>
        <li>Meraih dan memegang mainan</li>
        <li>Tertawa dan mengeluarkan suara gembira</li>
        <li>Mengenali wajah orang tua</li>
      </ul>
      
      <h4>7-9 Bulan</h4>
      <ul>
        <li>Duduk tanpa bantuan</li>
        <li>Merangkak atau bergerak dengan cara lain</li>
        <li>Memindahkan benda dari satu tangan ke tangan lain</li>
        <li>Mengatakan suku kata sederhana seperti "ma-ma" atau "ba-ba"</li>
        <li>Bermain cilukba</li>
      </ul>
      
      <h4>10-12 Bulan</h4>
      <ul>
        <li>Berdiri dengan berpegangan</li>
        <li>Melangkah beberapa langkah atau berjalan</li>
        <li>Menunjuk objek yang diinginkan</li>
        <li>Mengatakan 1-2 kata sederhana</li>
        <li>Mengikuti instruksi sederhana</li>
      </ul>
      
      <h4>Tanda Keterlambatan yang Perlu Diwaspadai</h4>
      <p>Konsultasikan ke dokter jika:</p>
      <ul>
        <li>Bayi tidak tersenyum atau berinteraksi di usia 3 bulan</li>
        <li>Tidak bisa duduk di usia 9 bulan</li>
        <li>Tidak merangkak atau bergerak di usia 12 bulan</li>
        <li>Tidak mengeluarkan suara atau kata di usia 12 bulan</li>
        <li>Kehilangan kemampuan yang sudah dikuasai sebelumnya</li>
      </ul>
    `,
    category: "development",
    author: "Dr. Lisa Kartika",
    date: "2025-12-07",
    readTime: 7,
    views: 1890,
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800",
    featured: false,
    tags: ["Milestone", "Perkembangan", "Bayi"],
  },
  {
    id: 4,
    title: "5 Kesalahan Umum Orang Tua Baru yang Harus Dihindari",
    excerpt:
      "Menjadi orang tua baru penuh tantangan. Hindari 5 kesalahan umum ini untuk pengasuhan yang lebih baik.",
    content: `
      <p>Menjadi orang tua untuk pertama kalinya adalah pengalaman yang menggembirakan sekaligus menantang. Berikut adalah kesalahan umum yang sering dilakukan dan cara menghindarinya.</p>
      
      <h4>1. Terlalu Panik dengan Setiap Hal Kecil</h4>
      <p>Orang tua baru sering kali terlalu khawatir dengan setiap tangisan atau perubahan kecil pada bayi. Padahal, menangis adalah cara bayi berkomunikasi.</p>
      <p><strong>Solusi:</strong> Pelajari pola tangisan bayi dan percaya pada insting Anda. Tidak semua tangisan adalah tanda masalah serius.</p>
      
      <h4>2. Membandingkan Anak dengan Anak Lain</h4>
      <p>Setiap anak unik dan berkembang dengan kecepatannya sendiri. Membandingkan hanya akan menimbulkan kecemasan yang tidak perlu.</p>
      <p><strong>Solusi:</strong> Fokus pada perkembangan anak Anda sendiri. Konsultasikan ke dokter jika ada kekhawatiran, bukan membandingkan dengan anak tetangga.</p>
      
      <h4>3. Mengabaikan Kesehatan Mental Diri Sendiri</h4>
      <p>Banyak orang tua yang terlalu fokus pada bayi hingga melupakan kesehatan mental mereka sendiri. Ini dapat menyebabkan kelelahan dan bahkan depresi postpartum.</p>
      <p><strong>Solusi:</strong> Luangkan waktu untuk diri sendiri, minta bantuan keluarga, dan jangan ragu berkonsultasi dengan profesional jika merasa overwhelmed.</p>
      
      <h4>4. Terlalu Banyak Mendengarkan Nasihat yang Berbeda</h4>
      <p>Setiap orang punya pendapat tentang cara mengasuh anak. Terlalu banyak mendengarkan dapat membuat bingung dan stres.</p>
      <p><strong>Solusi:</strong> Dengarkan nasihat dari sumber terpercaya seperti dokter anak. Percaya pada diri sendiri dan lakukan apa yang terbaik untuk keluarga Anda.</p>
      
      <h4>5. Tidak Membangun Support System</h4>
      <p>Mengasuh anak sendiri tanpa dukungan akan sangat melelahkan. Jangan merasa harus melakukan semuanya sendiri.</p>
      <p><strong>Solusi:</strong> Bangun jaringan dukungan dengan keluarga, teman, atau komunitas orang tua. Jangan ragu meminta bantuan saat membutuhkan.</p>
      
      <h4>Kesimpulan</h4>
      <p>Menjadi orang tua adalah proses belajar yang terus berlanjut. Yang terpenting adalah memberikan cinta, perhatian, dan perawatan terbaik untuk anak Anda dengan cara yang sehat dan sustainable.</p>
    `,
    category: "parenting",
    author: "Indah Permatasari, M.Psi",
    date: "2025-12-05",
    readTime: 6,
    views: 2987,
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800",
    featured: false,
    tags: ["Parenting", "Orang Tua Baru", "Tips"],
  },
  {
    id: 5,
    title: "Resep MPASI 6 Bulan: Menu Sehat dan Mudah Dibuat",
    excerpt:
      "Kumpulan resep MPASI untuk bayi 6 bulan yang bergizi, mudah dibuat, dan disukai si kecil.",
    content: `
      <p>Memulai MPASI tidak harus rumit. Berikut adalah beberapa resep sederhana yang bergizi dan mudah dibuat untuk bayi 6 bulan.</p>
      
      <h4>1. Pure Pisang</h4>
      <p><strong>Bahan:</strong></p>
      <ul>
        <li>1 buah pisang ambon matang</li>
        <li>ASI atau susu formula secukupnya</li>
      </ul>
      <p><strong>Cara membuat:</strong><br>
      Haluskan pisang dengan garpu, tambahkan sedikit ASI atau susu formula hingga mencapai tekstur yang diinginkan. Sajikan segera.</p>
      
      <h4>2. Bubur Beras Merah</h4>
      <p><strong>Bahan:</strong></p>
      <ul>
        <li>2 sdm beras merah</li>
        <li>200 ml air</li>
        <li>ASI atau kaldu ayam</li>
      </ul>
      <p><strong>Cara membuat:</strong><br>
      Cuci bersih beras merah, masak dengan air hingga sangat lembut. Blender hingga halus, tambahkan ASI atau kaldu untuk menyesuaikan kekentalan.</p>
      
      <h4>3. Pure Alpukat</h4>
      <p><strong>Bahan:</strong></p>
      <ul>
        <li>1/4 buah alpukat matang</li>
        <li>ASI secukupnya</li>
      </ul>
      <p><strong>Cara membuat:</strong><br>
      Keruk daging alpukat, haluskan dengan garpu. Tambahkan ASI sedikit demi sedikit sambil diaduk hingga tekstur yang diinginkan.</p>
      
      <h4>4. Pure Labu Kuning</h4>
      <p><strong>Bahan:</strong></p>
      <ul>
        <li>100 gram labu kuning</li>
        <li>Air secukupnya</li>
      </ul>
      <p><strong>Cara membuat:</strong><br>
      Kukus labu kuning hingga empuk, blender dengan sedikit air kukusan hingga halus. Sajikan hangat.</p>
      
      <h4>5. Bubur Ubi Ungu</h4>
      <p><strong>Bahan:</strong></p>
      <ul>
        <li>100 gram ubi ungu</li>
        <li>ASI atau air secukupnya</li>
      </ul>
      <p><strong>Cara membuat:</strong><br>
      Kukus ubi hingga empuk, haluskan dengan blender. Tambahkan ASI atau air hangat untuk menyesuaikan tekstur.</p>
      
      <h4>Tips Penting</h4>
      <ul>
        <li>Selalu gunakan bahan segar dan berkualitas</li>
        <li>Masak hingga benar-benar matang dan empuk</li>
        <li>Jangan tambahkan gula atau garam</li>
        <li>Sajikan dalam keadaan hangat, tidak panas</li>
        <li>Perkenalkan satu bahan baru dalam 3-5 hari</li>
        <li>Simpan MPASI di kulkas maksimal 24 jam</li>
      </ul>
    `,
    category: "nutrition",
    author: "Chef Rina Susanti",
    date: "2025-12-03",
    readTime: 5,
    views: 4521,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800",
    featured: false,
    tags: ["Resep MPASI", "Menu Bayi", "Nutrisi"],
  },
  {
    id: 6,
    title: "Cara Mengatasi Kolik pada Bayi Baru Lahir",
    excerpt:
      "Kolik membuat bayi menangis berjam-jam tanpa henti. Kenali penyebab dan cara mengatasinya.",
    content: `
      <p>Kolik adalah kondisi di mana bayi menangis intensif dan berkepanjangan tanpa penyebab yang jelas. Biasanya terjadi pada bayi berusia di bawah 4 bulan.</p>
      
      <h4>Apa itu Kolik?</h4>
      <p>Kolik ditandai dengan aturan "3-3-3": bayi menangis lebih dari 3 jam per hari, terjadi lebih dari 3 hari per minggu, dan berlangsung lebih dari 3 minggu.</p>
      
      <h4>Penyebab Kolik</h4>
      <p>Penyebab pasti kolik belum diketahui, tetapi beberapa faktor yang diduga berperan:</p>
      <ul>
        <li>Sistem pencernaan yang belum matang</li>
        <li>Ketidakseimbangan bakteri baik dalam usus</li>
        <li>Alergi atau intoleransi makanan</li>
        <li>Menelan terlalu banyak udara saat menyusu</li>
        <li>Overstimulasi dari lingkungan</li>
      </ul>
      
      <h4>Tanda-tanda Kolik</h4>
      <ul>
        <li>Menangis intensif tanpa sebab jelas</li>
        <li>Wajah memerah</li>
        <li>Kaki ditarik ke perut</li>
        <li>Tangan mengepal</li>
        <li>Perut kembung atau keras</li>
        <li>Biasanya terjadi di sore atau malam hari</li>
      </ul>
      
      <h4>Cara Mengatasi Kolik</h4>
      <p><strong>1. Teknik White Noise</strong><br>
      Bunyi putih seperti suara pengering rambut atau vacuum cleaner dapat menenangkan bayi.</p>
      
      <p><strong>2. Pijat Bayi</strong><br>
      Pijat lembut searah jarum jam di area perut dapat membantu mengeluarkan gas.</p>
      
      <p><strong>3. Metode 5S (Dr. Karp)</strong></p>
      <ul>
        <li>Swaddling (bedong bayi)</li>
        <li>Side/Stomach position (posisi miring/tengkurap saat digendong)</li>
        <li>Shushing (suara "ssshhh")</li>
        <li>Swinging (ayunan lembut)</li>
        <li>Sucking (memberi dot atau jari untuk dihisap)</li>
      </ul>
      
      <p><strong>4. Warm Compress</strong><br>
      Kompres hangat di perut dapat meredakan ketidaknyamanan.</p>
      
      <p><strong>5. Perhatikan Pola Makan Ibu</strong><br>
      Jika menyusui, hindari makanan yang dapat memicu gas seperti kol, brokoli, atau produk susu.</p>
      
      <h4>Kapan Harus ke Dokter?</h4>
      <p>Segera konsultasi jika:</p>
      <ul>
        <li>Bayi demam</li>
        <li>Muntah-muntah</li>
        <li>Diare atau konstipasi parah</li>
        <li>Tidak mau minum</li>
        <li>Tangisan berbeda dari biasanya</li>
      </ul>
    `,
    category: "health",
    author: "Dr. Budi Santoso, Sp.A",
    date: "2025-12-01",
    readTime: 7,
    views: 3214,
    image: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800",
    featured: false,
    tags: ["Kolik", "Bayi Baru Lahir", "Kesehatan"],
  },
  {
    id: 7,
    title: "Pentingnya Imunisasi Lengkap untuk Anak",
    excerpt:
      "Imunisasi melindungi anak dari penyakit berbahaya. Kenali jadwal dan jenis imunisasi yang wajib diberikan.",
    content: `
      <p>Imunisasi adalah salah satu cara paling efektif untuk melindungi anak dari berbagai penyakit berbahaya yang dapat dicegah dengan vaksinasi.</p>
      
      <h4>Mengapa Imunisasi Penting?</h4>
      <ul>
        <li>Melindungi anak dari penyakit serius</li>
        <li>Mencegah penyebaran penyakit di masyarakat</li>
        <li>Mengurangi risiko komplikasi dan kematian</li>
        <li>Lebih murah daripada biaya pengobatan</li>
        <li>Menciptakan kekebalan komunitas (herd immunity)</li>
      </ul>
      
      <h4>Jadwal Imunisasi Dasar (Usia 0-12 Bulan)</h4>
      <p><strong>Saat lahir:</strong></p>
      <ul>
        <li>Hepatitis B (HB-0)</li>
        <li>BCG (mencegah TBC)</li>
        <li>Polio 0</li>
      </ul>
      
      <p><strong>Usia 2 bulan:</strong></p>
      <ul>
        <li>DPT-HB-Hib 1</li>
        <li>Polio 1</li>
        <li>PCV 1 (opsional)</li>
        <li>Rotavirus 1 (opsional)</li>
      </ul>
      
      <p><strong>Usia 3 bulan:</strong></p>
      <ul>
        <li>DPT-HB-Hib 2</li>
        <li>Polio 2</li>
      </ul>
      
      <p><strong>Usia 4 bulan:</strong></p>
      <ul>
        <li>DPT-HB-Hib 3</li>
        <li>Polio 3</li>
        <li>IPV (Polio suntik)</li>
        <li>PCV 2 (opsional)</li>
        <li>Rotavirus 2 (opsional)</li>
      </ul>
      
      <p><strong>Usia 9 bulan:</strong></p>
      <ul>
        <li>Campak/MR (Measles Rubella)</li>
      </ul>
      
      <h4>Imunisasi Lanjutan (Usia 18 Bulan - 5 Tahun)</h4>
      <ul>
        <li>DPT-HB-Hib booster (18 bulan)</li>
        <li>Campak/MR booster (18 bulan)</li>
        <li>MMR (opsional, usia 15 bulan)</li>
        <li>Varicella/Cacar air (opsional)</li>
        <li>Japanese Encephalitis (opsional)</li>
        <li>DT booster (5 tahun)</li>
      </ul>
      
      <h4>Efek Samping Imunisasi</h4>
      <p>Efek samping ringan yang normal:</p>
      <ul>
        <li>Demam ringan</li>
        <li>Kemerahan atau bengkak di bekas suntikan</li>
        <li>Rewel</li>
        <li>Kehilangan nafsu makan sementara</li>
      </ul>
      
      <h4>Cara Mengatasi Efek Samping</h4>
      <ul>
        <li>Kompres hangat di area suntikan</li>
        <li>Berikan paracetamol jika demam (konsultasi dosis dengan dokter)</li>
        <li>Banyak minum ASI atau air</li>
        <li>Istirahat cukup</li>
      </ul>
      
      <h4>Kapan Harus ke Dokter?</h4>
      <p>Hubungi dokter jika:</p>
      <ul>
        <li>Demam tinggi (>38.5°C)</li>
        <li>Kejang</li>
        <li>Alergi berat (sesak napas, bengkak wajah)</li>
        <li>Rewel terus menerus >3 hari</li>
      </ul>
    `,
    category: "health",
    author: "Dr. Ratna Dewi, Sp.A",
    date: "2025-11-28",
    readTime: 8,
    views: 2756,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800",
    featured: false,
    tags: ["Imunisasi", "Vaksin", "Kesehatan Anak"],
  },
  {
    id: 8,
    title: "Tips Mengajari Anak Toilet Training dengan Efektif",
    excerpt:
      "Toilet training adalah proses penting dalam perkembangan anak. Pelajari metode yang tepat dan efektif.",
    content: `
      <p>Toilet training adalah proses mengajarkan anak untuk menggunakan toilet atau potty chair. Waktu yang tepat dan metode yang konsisten adalah kunci keberhasilan.</p>
      
      <h4>Kapan Waktu yang Tepat?</h4>
      <p>Kebanyakan anak siap toilet training antara usia 18-24 bulan, namun setiap anak berbeda.</p>
      
      <h4>Tanda Anak Siap Toilet Training</h4>
      <ul>
        <li>Popok kering selama 2 jam atau lebih</li>
        <li>Bisa mengikuti instruksi sederhana</li>
        <li>Menunjukkan ketidaknyamanan saat popok basah</li>
        <li>Bisa menyampaikan keinginan buang air</li>
        <li>Tertarik meniru orang dewasa ke toilet</li>
        <li>Bisa menaik-turunkan celana sendiri</li>
      </ul>
      
      <h4>Persiapan Toilet Training</h4>
      <p><strong>1. Alat yang Dibutuhkan:</strong></p>
      <ul>
        <li>Potty chair atau toilet seat khusus anak</li>
        <li>Step stool (pijakan kaki)</li>
        <li>Celana dalam yang mudah dipakai/dilepas</li>
        <li>Buku atau mainan tentang toilet training</li>
      </ul>
      
      <p><strong>2. Persiapan Mental:</strong></p>
      <ul>
        <li>Konsisten dan sabar</li>
        <li>Jangan memaksa atau memarahi</li>
        <li>Berikan pujian untuk setiap keberhasilan</li>
        <li>Siap menghadapi accident</li>
      </ul>
      
      <h4>Metode Toilet Training</h4>
      <p><strong>Metode 1: Bertahap</strong></p>
      <ul>
        <li>Kenalkan anak dengan potty chair</li>
        <li>Biarkan anak duduk dengan pakaian lengkap</li>
        <li>Ajak ke toilet setelah makan atau minum</li>
        <li>Buat rutinitas ke toilet setiap 2 jam</li>
        <li>Ganti popok dengan training pants</li>
        <li>Akhirnya pakai celana dalam biasa</li>
      </ul>
      
      <p><strong>Metode 2: Three-Day Method</strong></p>
      <ul>
        <li>Pilih 3 hari di rumah tanpa gangguan</li>
        <li>Lepas popok sepenuhnya</li>
        <li>Biarkan anak tanpa celana atau pakai training pants</li>
        <li>Ajak ke toilet setiap 15-30 menit</li>
        <li>Berikan banyak cairan</li>
        <li>Tetap positif saat terjadi accident</li>
      </ul>
      
      <h4>Tips Sukses Toilet Training</h4>
      <ul>
        <li>Mulai di musim hangat jika memungkinkan</li>
        <li>Gunakan reward system (stiker chart)</li>
        <li>Baca buku tentang toilet training bersama</li>
        <li>Biarkan anak memilih celana dalam sendiri</li>
        <li>Jangan membandingkan dengan anak lain</li>
        <li>Tunggu hingga anak benar-benar siap</li>
      </ul>
      
      <h4>Mengatasi Tantangan</h4>
      <p><strong>Anak Takut Toilet:</strong><br>
      Gunakan potty chair dulu, biarkan anak duduk dengan pakaian, buat suasana menyenangkan.</p>
      
      <p><strong>Sering Accident:</strong><br>
      Normal di awal, tetap tenang, jangan memarahi, bersihkan bersama anak.</p>
      
      <p><strong>Regresi:</strong><br>
      Bisa terjadi saat stress (adik baru, pindah rumah). Bersabar dan kembali ke rutinitas.</p>
      
      <h4>Kapan Harus Konsultasi?</h4>
      <ul>
        <li>Anak berusia >4 tahun belum bisa toilet training</li>
        <li>Sering mengompol setelah berhasil 6 bulan</li>
        <li>Anak kesakitan saat BAB</li>
        <li>Ada darah dalam urin atau feses</li>
      </ul>
    `,
    category: "tips",
    author: "Ibu Siti Nurhaliza",
    date: "2025-11-25",
    readTime: 9,
    views: 3891,
    image:
      "https://akcdn.detik.net.id/visual/2019/08/23/fbe119dc-67a4-43c4-a09a-49aea8af9cb2_43.jpeg?w=720&q=90",
    featured: false,
    tags: ["Toilet Training", "Tips Parenting", "Balita"],
  },
];

// State
let currentCategory = "all";
let currentSort = "newest";
let currentPage = 1;
const articlesPerPage = 6;
let filteredArticles = [...articlesDatabase];

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedArticle();
  renderArticles();
  setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
  // Category tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      currentPage = 1;
      filterAndRenderArticles();
    });
  });

  // Search
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
  });

  // Sort
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    currentSort = e.target.value;
    filterAndRenderArticles();
  });

  // Load more
  document.getElementById("loadMoreBtn").addEventListener("click", () => {
    currentPage++;
    renderArticles(true);
  });

  // Modal
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document
    .getElementById("modalBackdrop")
    .addEventListener("click", closeModal);

  // Newsletter
  document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector("input").value;
    showToast(`✅ Terima kasih! Kami akan mengirim artikel ke ${email}`);
    e.target.reset();
  });
}

// Perform Search
function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  currentPage = 1;

  if (query) {
    filteredArticles = articlesDatabase.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  } else {
    filteredArticles = [...articlesDatabase];
  }

  filterAndRenderArticles();
}

// Filter and Render
function filterAndRenderArticles() {
  // Filter by category
  if (currentCategory !== "all") {
    filteredArticles = articlesDatabase.filter(
      (article) => article.category === currentCategory
    );
  } else {
    filteredArticles = [...articlesDatabase];
  }

  // Sort
  sortArticles();

  // Render
  renderArticles();
}

// Sort Articles
function sortArticles() {
  switch (currentSort) {
    case "newest":
      filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "oldest":
      filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "popular":
      filteredArticles.sort((a, b) => b.views - a.views);
      break;
    case "trending":
      filteredArticles.sort(
        (a, b) =>
          b.views * 0.7 +
          new Date(b.date) * 0.3 -
          (a.views * 0.7 + new Date(a.date) * 0.3)
      );
      break;
  }
}

// Render Featured Article
function renderFeaturedArticle() {
  const featured = articlesDatabase.find((article) => article.featured);
  if (!featured) return;

  const container = document.getElementById("featuredArticle");
  container.innerHTML = `
    <div class="featured-image">
      <img src="${featured.image}" alt="${featured.title}">
      <span class="featured-badge">⭐ Pilihan Editor</span>
    </div>
    <div class="featured-content">
      <span class="featured-category">${getCategoryName(
        featured.category
      )}</span>
      <h3>${featured.title}</h3>
      <p class="featured-excerpt">${featured.excerpt}</p>
      <div class="featured-meta">
        <span class="meta-item">
          <i class="fas fa-user"></i>
          ${featured.author}
        </span>
        <span class="meta-item">
          <i class="fas fa-calendar"></i>
          ${formatDate(featured.date)}
        </span>
        <span class="meta-item">
          <i class="fas fa-clock"></i>
          ${featured.readTime} menit
        </span>
      </div>
    </div>
  `;

  container.onclick = () => openArticleModal(featured);
}

// Render Articles
function renderArticles(append = false) {
  const container = document.getElementById("articlesGrid");
  const loading = document.getElementById("loading");
  const emptyState = document.getElementById("emptyState");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  loading.style.display = "none";

  if (filteredArticles.length === 0) {
    container.style.display = "none";
    emptyState.style.display = "block";
    loadMoreBtn.style.display = "none";
    return;
  }

  container.style.display = "grid";
  emptyState.style.display = "none";

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const articlesToShow = filteredArticles.slice(startIndex, endIndex);

  if (!append) {
    container.innerHTML = "";
  }

  articlesToShow.forEach((article, index) => {
    const card = createArticleCard(article, startIndex + index);
    container.appendChild(card);
  });

  // Show/hide load more button
  if (endIndex < filteredArticles.length) {
    loadMoreBtn.style.display = "inline-flex";
  } else {
    loadMoreBtn.style.display = "none";
  }
}

// Create Article Card
function createArticleCard(article, index) {
  const card = document.createElement("div");
  card.className = "article-card";
  card.style.animationDelay = `${(index % articlesPerPage) * 0.1}s`;

  card.innerHTML = `
    <div class="article-image">
      <img src="${article.image}" alt="${article.title}">
      <span class="article-category-badge ${article.category}">
        ${getCategoryName(article.category)}
      </span>
    </div>
    <div class="article-body">
      <h3>${article.title}</h3>
      <p class="article-excerpt">${article.excerpt}</p>
      <div class="article-footer">
        <div class="article-author">
          <div class="author-avatar">${getInitials(article.author)}</div>
          <div class="author-info">
            <div class="author-name">${article.author}</div>
            <div class="article-date">${formatDate(article.date)}</div>
          </div>
        </div>
        <div class="article-stats">
          <span class="stat-item">
            <i class="fas fa-eye"></i>
            ${formatNumber(article.views)}
          </span>
          <span class="stat-item">
            <i class="fas fa-clock"></i>
            ${article.readTime}m
          </span>
        </div>
      </div>
    </div>
  `;

  card.onclick = () => openArticleModal(article);
  return card;
}

// Open Article Modal
function openArticleModal(article) {
  const modal = document.getElementById("articleModal");
  const detailDiv = document.getElementById("articleDetail");

  detailDiv.innerHTML = `
    <img src="${article.image}" alt="${
    article.title
  }" class="article-detail-image">
    <div class="article-detail-header">
      <span class="article-detail-category">${getCategoryName(
        article.category
      )}</span>
      <h1 class="article-detail-title">${article.title}</h1>
      <div class="article-detail-meta">
        <span class="meta-item">
          <i class="fas fa-user"></i>
          ${article.author}
        </span>
        <span class="meta-item">
          <i class="fas fa-calendar"></i>
          ${formatDate(article.date)}
        </span>
        <span class="meta-item">
          <i class="fas fa-clock"></i>
          ${article.readTime} menit baca
        </span>
        <span class="meta-item">
          <i class="fas fa-eye"></i>
          ${formatNumber(article.views)} views
        </span>
      </div>
    </div>
    <div class="article-detail-content">
      ${article.content}
    </div>
  `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  // Update views (simulated)
  article.views++;
}

// Close Modal
function closeModal() {
  const modal = document.getElementById("articleModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Helper Functions
function getCategoryName(category) {
  const categories = {
    parenting: "Parenting",
    nutrition: "Nutrisi",
    health: "Kesehatan",
    development: "Tumbuh Kembang",
    tips: "Tips & Trick",
  };
  return categories[category] || category;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("id-ID", options);
}

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
}

function showToast(message) {
  const existingToast = document.querySelector(".toast");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px 25px;
    border-radius: 50px;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    z-index: 10001;
    animation: slideInRight 0.3s ease;
    font-weight: 600;
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// CSS Animations
const style = document.createElement("style");
style.textContent = `
  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

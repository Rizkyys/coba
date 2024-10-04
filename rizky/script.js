const roasts = [
    "Cinta itu buta, tapi pacaran sama %name% bikin kita semua melek!",
    "Pacaran sama %name% itu kayak nonton film horor, baper terus!",
    "Kamu sama %name% itu kayak wifi, kadang konek, kadang ngambek!",
    "Cinta itu indah, tapi %name% kadang bikin kita semua pengen nyari kacamata!",
    "Pacar %name% itu kayak aplikasi, selalu nge-update, tapi bug-nya nggak pernah ilang!",
    "Kalau cinta itu baper, %name% sama pasangannya udah bikin kita patah hati massal!",
    "Pacaran sama %name% itu kayak Instagram, penuh filter, tapi asli-nya nggak selalu cakep!",
    "Sama %name% itu kayak nonton sinetron, drama terus, kadang bikin pengen ganti channel!",
    "Cinta sama %name% itu kayak unta, perlu kesabaran, tapi kadang bikin stress!",
    "Pacar %name% itu kayak sinar bulan, bersinar indah, tapi kadang bikin gelap gulita!",
    "Kamu sama %name% itu kayak 2G, lambat dan suka buffering, kadang bikin kesel!",
    "Hubungan kalian itu kayak mie instan, cepet tapi nggak selalu berkualitas!",
    "Pacaran sama %name% itu kayak belanja online, kadang dapet barang rusak!",
    "Cinta itu kayak drama Korea, seru di awal, tapi ending-nya bikin baper!",
    "Pacaran sama %name% itu kayak naik roller coaster, kadang bikin teriak, kadang bikin pusing!",
    "Name itu kayak alarm, bikin kesel setiap pagi tapi tetap dibutuhkan!",
    "Kamu sama %name% itu kayak es krim, manis, tapi sering bikin sakit gigi!",
    "Pacaran sama %name% itu kayak buka puasa, enak di awal, tapi setelahnya bikin ngantuk!",
    "Hubungan kalian itu kayak film, kadang romantis, kadang baper di tengah malam!",
    "Name itu kayak snack, enak dimakan tapi bikin perut kembung!",
    "Cinta sama %name% itu kayak tantangan, seru di awal tapi kadang bikin capek!",
    "Kamu sama %name% itu kayak bumbu masakan, kadang pas, kadang bikin tenggorokan panas!",
    "Pacaran sama %name% itu kayak selfie, kadang nggak sesuai ekspektasi!",
    "Kamu itu kayak baterai, awalnya penuh, tapi cepat habis!",
    "Cinta sama %name% itu kayak pizza, enak tapi kadang bikin kembung!",
    "Kamu sama %name% itu kayak kopi, pahit tapi bikin nagih!",
    "Pacaran sama %name% itu kayak nonton pertandingan bola, kadang seru, kadang bosen!",
    "Name itu kayak pelangi, indah dilihat tapi sulit ditangkap!",
    "Kamu sama %name% itu kayak duet penyanyi, kadang harmonis, kadang fals!",
    "Cinta sama %name% itu kayak ngasih makan kucing, kadang seneng, kadang bikin kesel!",
    "Pacaran sama kamu itu kayak nonton tayangan ulang, seru tapi udah tahu ending-nya!",
    "Name itu kayak pengharapan, bikin semangat tapi seringkali nggak terwujud!",
    "Kamu sama %name% itu kayak robot, kelihatan sempurna, tapi sering error!",
    "Cinta kalian itu kayak sushi, kadang enak, kadang bikin mual!",
    "Pacaran sama %name% itu kayak bungee jumping, bikin jantung berdebar, tapi berisiko!",
    "Cinta sama %name% itu kayak bersepeda, kadang jalan mulus, kadang terjatuh!",
    "Kamu sama %name% itu kayak angin, ada tapi nggak bisa dilihat!",
    "Pacaran sama %name% itu kayak nyari sinyal, kadang gampang, kadang susah!",
    "Hubungan kalian itu kayak lukisan, indah tapi bisa saja salah warna!",
];

document.getElementById('roastButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value.trim();

    // Cek apakah input nama kosong
    if (nameInput === "") {
        alert("Nama teman harus diisi!");
        return;
    }

    // Ambil roast secara acak dan ganti %name% dengan input nama
    const randomIndex = Math.floor(Math.random() * roasts.length);
    const roastMessage = roasts[randomIndex].replace(/%name%/g, nameInput);
    
    // Tampilkan hasil roast
    document.getElementById('roastText').innerText = roastMessage;
});

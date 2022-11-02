const dateEl = document.getElementById("tanggal")
const monthEl = document.getElementById("bulan")
const yearEl = document.getElementById("tahun")

const provEl = document.getElementById("prov")
const cityEl = document.getElementById("kab")
const kecEl = document.getElementById("kec")

const generateSampleOption = () => {
    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober","November", "Desember"
    ]
    
    const provinsi = [
        "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Timur", "Sulawesi Barat", "Sulawesi Tengah", "Sulawesi Timur", "Sumatera Barat", "Sumatera Tengah", "Sumatera Utara"
    ]
    const kab = [
        "Bandung", "Bekasi", "Bogor", "Ciamis", "Cianjur", "Cirebon", "Garut", "Indramayu", "Karawang", "Kuningan", "Majalengka", "Pangandaran", "Purwakarta", "Subang", "Sukabumi", "Sumedang", "Tasikmalaya"
    ]
    const kec = [
        "Cikarang Barat", "Cikarang Pusat", "Cikarang Selatan", "Cikarang Timur", "Cikarang Utara", "Karangbahagia", "Kedung Waringin", "Pebayuran", "Serang Baru", "Setu", "Sukakarya", "Sukatani", "Tambelang", "Tambun Selatan", "Tambun Utara", "Tarumajaya", "Tengah Tani", "Tegal Buleud", "Teluk Jambe Barat", "Teluk Jambe Timur", "Tigaraksa"
    ]

    for(let i = 1; i <= 31; i++){
        const option = document.createElement("option")
        option.text = i
        option.value = i   
        dateEl.appendChild(option)
    }

    for(m of months) {
        const option = document.createElement("option")
        option.text = m
        option.value = m
        monthEl.appendChild(option)
    }

    for(let i = 1990; i <= 2010; i++) {
        const option = document.createElement("option")
        option.text = i
        option.value = i
        yearEl.appendChild(option)
    }

    for(p of provinsi) {
        const option = document.createElement("option")
        option.text = p
        option.value = p
        provEl.appendChild(option)
    }

    for(k of kab) {
        const option = document.createElement("option")
        option.text = k
        option.value = k
        cityEl.appendChild(option)
    }

    for(k of kec) {
        const option = document.createElement("option")
        option.text = k
        option.value = k
        kecEl.appendChild(option)
    }
}

generateSampleOption()
// Fetch data from the JSON file
fetch('../data/data.json')
  .then(response => response.json())
  .then(data => {
    data.kelas.forEach(kelas => {
        const container = document.querySelector('.other-class');
        container.classList.add('card');
        container.classList.add('bg-base-100');
        container.classList.add('w-96');
        container.classList.add('shadow-xl');
        const otherClass=document.createElement('div')
        otherClass.innerHTML = `
                <div class="card-body">
                    <p>Saat Ini</p>
                    <h2 class="card-title">${kelas.nama_mata_kuliah}</h2>
                    <p>${kelas.waktu.mulai}~${kelas.waktu.selesai}</p>
                    <p>${kelas.tempat}</p>
                    <p>${kelas.nama_dosen}</p>
                </div>
        `



        container.appendChild(otherClass)
    });
  })
  .catch(error => console.error('Error fetching data:', error));

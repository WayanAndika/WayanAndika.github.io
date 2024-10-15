fetch('../data/kelas.json')
  .then(response => response.json())
  .then(data => {
    const listMateri = document.querySelector('.list-materi'); 
    data.kelas.forEach((kelas, index) => {
      // Notifikasi
      const containerMateri = document.createElement('div');
      const accordionId = `accordion-flush-heading-${index + 1}`;
      const bodyId = `accordion-flush-body-${index + 1}`;

      containerMateri.innerHTML = `
        <h2 id="${accordionId}">
          <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#${bodyId}" aria-expanded="true" aria-controls="${bodyId}">
            <span>${kelas.nama_mata_kuliah} ~ Pertemuan ${kelas.materi.pertemuan}</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="${bodyId}" class="hidden" aria-labelledby="${accordionId}">
          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">${kelas.materi.ringkasan_materi}</p>
            <p class="text-sm text-gray-400">Waktu: ${kelas.waktu.mulai} - ${kelas.waktu.selesai} di ${kelas.tempat}</p>
          </div>
        </div>
      `;

      listMateri.appendChild(containerMateri);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
